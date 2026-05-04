// PATCH MARKER START - importPharmacyStock clean rewrite
window.importPharmacyStock = async function(event, pharmId) {
    const file = event.target.files[0];
    if(!file) return;
    
    window.showToast("Importation en cours...", "info");
    const reader = new FileReader();
    reader.onload = async function(evt) {
        try {
            const data = evt.target.result;
            const workbook = XLSX.read(data, {type: 'binary'});
            const firstSheet = workbook.SheetNames[0];
            const rawRows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet], { header: 1, defval: '' });
            const processedRows = [];
            
            if (rawRows.length === 0) { window.showToast("Fichier vide.", "error"); return; }
            
            let nameIdx = 0, batchIdx = 1, qtyIdx = 2, expIdx = 3, startIndex = 0, headerFound = false;
            const firstRow = rawRows[0];
            for (let i = 0; i < firstRow.length; i++) {
                let v = String(firstRow[i] || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (v.includes('med') || v.includes('nom') || v.includes('name') || v.includes('article') || v.includes('design')) { nameIdx = i; headerFound = true; }
                else if (v.includes('lot') || v.includes('batch')) { batchIdx = i; headerFound = true; }
                else if (v.includes('qty') || v.includes('qte') || v.includes('quant')) { qtyIdx = i; headerFound = true; }
                else if (v.includes('exp') || v.includes('perem')) { expIdx = i; headerFound = true; }
            }
            if (headerFound) startIndex = 1;

            for (let i = startIndex; i < rawRows.length; i++) {
                const r = rawRows[i];
                if (!r || r.length === 0) continue;
                let name = String(r[nameIdx] || '').trim();
                let batch = String(r[batchIdx] || '').trim() || 'N/A';
                let qty = parseInt(r[qtyIdx]) || 0;
                let expiry = window.cleanDateForImport(r[expIdx]);
                if (name && name !== '' && name !== 'undefined') processedRows.push({ name, batch, expiry, qty });
            }

            if (processedRows.length === 0) { window.showToast("Aucun medicament valide. Verifiez le fichier.", "error"); return; }

            let successCount = 0, errorCount = 0;
            for (const row of processedRows) {
                try {
                    let medicineId = null;
                    let med = state.medicines.find(m =>
                        m.name.toLowerCase().trim() === row.name.toLowerCase().trim() &&
                        (m.batch || 'N/A').toLowerCase().trim() === row.batch.toLowerCase().trim()
                    );
                    if (med) {
                        medicineId = med.id;
                    } else {
                        const { data: newMed, error: medErr } = await _supabase.from('medicines').insert([{
                            name: row.name, batch: row.batch, expiry: row.expiry, qty: 0,
                            entry_date: new Date().toISOString().split('T')[0]
                        }]).select('id').single();
                        if (medErr) {
                            const { data: existing } = await _supabase.from('medicines').select('id').ilike('name', row.name).ilike('batch', row.batch).maybeSingle();
                            if (existing) medicineId = existing.id;
                            else { errorCount++; console.error("Cannot create:", row.name, medErr.message); continue; }
                        } else {
                            medicineId = newMed.id;
                            state.medicines.push({ id: medicineId, name: row.name, batch: row.batch, expiry: row.expiry, qty: 0 });
                        }
                    }
                    const { error: psErr } = await _supabase.from('pharmacy_stock').upsert({ pharmacy_id: pharmId, medicine_id: medicineId, qty: row.qty }, { onConflict: 'pharmacy_id,medicine_id' });
                    if (psErr) { errorCount++; console.error("Stock err:", row.name, psErr.message); }
                    else successCount++;
                } catch(e) { errorCount++; console.error("Row err:", row.name, e); }
            }

            await loadDataFromSupabase();
            if (successCount > 0) {
                window.showToast('OK: ' + successCount + '/' + processedRows.length + ' articles importes' + (errorCount > 0 ? ' (' + errorCount + ' erreurs)' : '!'));
                window.renderPharmacy(pharmId, 'all');
            } else {
                window.showToast('Echec: 0/' + processedRows.length + '. Voir console F12.', "error");
            }
        } catch (err) { console.error("Import error:", err); window.showToast("Erreur: " + (err.message || ''), "error"); }
    };
    reader.readAsBinaryString(file);
};
