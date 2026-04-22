function test() { 
// Translations
const i18n = {
    ar: {
        page_dashboard: '???????? ????????????', page_central: '?????????????? ??????????????', page_distribution: '?????????? ?????????????? ??????????????????', page_pharmacy: '????????????',
        alert_low_stock: '??????????: ?????????????? ?????????? ???', stat_total_meds: '???????????? ??????????????', stat_pharmacies: '??????????????????', stat_distributions: '??????????????????', stat_patients: '????????????',
        block_latest_dist: '?????? ??????????????????', block_pharmacies: '??????????????????', patients_suffix: '????????', no_recent_dist: '???? ???????? ?????????????? ??????????',
        search_placeholder: '???????? ???? ????????...', add_med: '?????????? ????????', th_med: '????????????', th_batch: '????????????', th_qty: '????????????', th_entry: '?????????? ????????????', th_expiry: '????????????????', th_status: '????????????',
        status_good: '??????????', status_low: '??????????', status_empty: '??????', btn_transfer_new: '?????????? ?????????? ??????????', trans_select_med: '-- ???????? ???????????? --', trans_select_pharm: '-- ?????? ???????????????? --', trans_qty: '????????????', btn_transfer: '??????????',
        history_dist: '?????? ??????????????', th_date: '??????????????', th_id: '??????????', th_to: '??????', alert_success: '?????????? ??????????!', alert_error: '??????: ???????????? ???????????????? ?????? ????????????',
        dispense_title: '?????? ???????? ??????????', patient_name: '?????? ????????????', btn_dispense: '??????', stock_available: '?????????????? ??????????????', history_dispense: '?????? ??????????', th_patient: '????????????',
        page_patients: '???????????? ????????????????????', page_records: '?????? ?????????????? ??????????', page_reports: '???????????????? ??????????????????????',
        btn_print: '?????????? PDF', btn_excel: '?????????? Excel', th_action: '?????? ??????????????', action_add: '?????????? ??????????????', action_transfer: '??????????', action_dispense: '??????',
        th_pharmacy: '???????????????? / ??????????', th_total_qty: '???????????? ???? ????????????', th_worker: '??????????????',
        btn_import: '?????????????? ???? Excel', th_actions: '??????????????', confirm_delete: '???? ?????? ?????????? ???? ?????? ?????? ???????????? ????????????????', transfer_from: '????:', transfer_to: '??????:', btn_return: '?????????? ??????????????',
        pending_returns_title: '?????????? ?????????? ?????????????? (?????????????? ????????????????)', btn_approve: '????????????', btn_reject: '??????', alert_request_sent: '???? ?????????? ?????? ?????????????? ???????????? ???????????????? ???????????????? ????????????????.', btn_delete_selected: '?????? ????????????',
        btn_import_patients: '?????????????? ????????', th_patient_nid: '?????????? ????????????', th_patient_phone: '?????? ????????????', th_patient_hospital: '???????????? ????????????????', error_unregistered_patient: '?????? ???????????? ???????? ?????????? ???? ?????????????? ??????.',
        nav_weekly_reports: '???????????????? ??????????????????', th_beneficiaries: '?????? ????????????????????', th_consumed_qty: '???????????? ????????????????', th_week_ending: '?????????? ?????????????? (????????????????)', nav_my_register: '???????? (????????????????)',
        nav_analyses: '?????????????????? ?????????????????? ??????????????', th_period: '???????????? ??????????????', th_day: '????????', th_week: '????????????', th_month: '????????', th_year: '????????',
        th_global_report: '?????????????? ???????????????? ??????????????', th_total_consumed: '???????????? ????????????????'
    },
    fr: {
        page_dashboard: 'Tableau de bord', page_central: 'Stock Central', page_distribution: 'Distribution', page_pharmacy: 'Pharmacie',
        alert_low_stock: 'Alerte: Stock Faible ???', stat_total_meds: 'Total M??d.', stat_pharmacies: 'Pharmacies', stat_distributions: 'Distributions', stat_patients: 'Patients',
        block_latest_dist: 'Derni??res dist.', block_pharmacies: 'Pharmacies', patients_suffix: 'pat.', no_recent_dist: 'Aucune dist.',
        search_placeholder: 'Rechercher...', add_med: 'Ajouter', th_med: 'M??dicament', th_batch: 'Lot', th_qty: 'Quant.', th_entry: 'Date d\'entr??e', th_expiry: 'Expiration', th_status: 'Statut',
        status_good: 'Disponible', status_low: 'Faible', status_empty: 'Rupture', btn_transfer_new: 'Nouveau transfert', trans_select_med: '-- M??dicament --', trans_select_pharm: '-- Pharmacie --', trans_qty: 'Quantit??', btn_transfer: 'Transf??rer',
        history_dist: 'Historique Dist.', th_date: 'Date', th_id: 'ID', th_to: 'Vers', alert_success: 'Op??ration r??ussie !', alert_error: 'Erreur: Stock insuffisant',
        dispense_title: 'D??livrer', patient_name: 'Patient', btn_dispense: 'D??livrer', stock_available: 'Stock Actuel', history_dispense: 'Historique', th_patient: 'Patient',
        page_patients: 'Patients B??n??ficiaires', page_records: 'Registre des Op??rations', page_reports: 'Rapports et Statistiques',
        btn_print: 'Imprimer PDF', btn_excel: 'Exporter Excel', th_action: 'Type d\'op??ration', action_add: 'Ajout Central', action_transfer: 'Transfert', action_dispense: 'D??livrance',
        th_pharmacy: 'Pharmacie / Dest.', th_total_qty: 'Total Re??u', th_worker: 'Responsable',
        btn_import: 'Importer d\'Excel', th_actions: 'Actions', confirm_delete: '??tes-vous s??r de supprimer ce m??dicament ?', transfer_from: 'De:', transfer_to: 'Vers:', btn_return: 'Retour Central',
        pending_returns_title: 'Demandes de retour (En attente)', btn_approve: 'Approuver', btn_reject: 'Refuser', alert_request_sent: 'Demande envoy??e, en attente d\'approbation.', btn_delete_selected: 'Supprimer S??lection',
        btn_import_patients: 'Importer Patients', th_patient_nid: 'ID National', th_patient_phone: 'T??l??phone', th_patient_hospital: 'H??pital', error_unregistered_patient: 'Veuillez s??lectionner un patient valide de la liste.',
        btn_add_med_row: 'Ajouter un m??dicament', btn_confirm_dist: 'Confirmer la distribution', select_pharm: '-- S??lectionner la pharmacie --',
        nav_weekly_reports: 'Rapports Hebdo', th_beneficiaries: 'B??n??ficiaires', th_consumed_qty: 'Quantit?? Sortie', th_week_ending: 'Fin de semaine (Mercredi)', nav_my_register: 'Mon Registre',
        nav_analyses: 'Analyses & Rapports', th_period: 'P??riode', th_day: 'Quotidien', th_week: 'Hebdomadaire', th_month: 'Mensuel', th_year: 'Annuel',
        th_global_report: 'Rapport Global des M??dicaments', th_total_consumed: 'Total Consomm??'
    }
};

const staticDict = {
    ar: {
        login_title: '?????????? ????????????', login_subtitle: '???????? ?????????? ??????????????', login_user: '?????? ????????????????', login_pass: '???????? ????????????', login_error: '?????? ???? ?????????? ????????????!', login_btn: '????????',
        brand_title: '?????????? ??????????', brand_subtitle: '?????????? ????????????',
        nav_dashboard: '???????? ????????????', nav_central: '?????????????? ??????????????', nav_distribution: '??????????????', nav_admin_orders: '????????????????', nav_patients: '????????????', nav_reports: '??????????????', nav_history: '????????????????',
        user_name: '???????? ????????', user_role: '?????????? ??????????????',
        add_med_title: '?????????? ???????? (??????????????)', add_med_name: '?????? ????????????', add_med_batch: '?????? ????????????????', add_med_qty: '???????????? ????????????????', add_med_entry: '?????????? ????????????', add_med_expiry: '?????????? ????????????????', add_med_btn: '??????????',
        forgot_password: '???????? ???????? ??????????',
        secure_account: '?????????? ????????????'
    },
    fr: {
        login_title: 'Connexion', login_subtitle: 'Gestion des Stocks', login_user: 'Identifiant', login_pass: 'Mot de passe', login_error: 'Identifiants incorrects!', login_btn: 'Se connecter',
        brand_title: 'Gestion', brand_subtitle: 'H??modialyse',
        nav_dashboard: 'Tableau de bord', nav_central: 'Stock Central', nav_distribution: 'Distribution', nav_admin_orders: 'Commandes', nav_patients: 'Patients', nav_reports: 'Registres', nav_history: 'Rapports',
        user_name: 'Mohamed Amine', user_role: 'Admin Stock',
        add_med_title: 'Ajout M??dicament', add_med_name: 'M??dicament', add_med_batch: 'Lot', add_med_qty: 'Quant. re??ue', add_med_entry: 'Date d\'entr??e', add_med_expiry: 'Expiration', add_med_btn: 'Ajouter',
        page_expired: 'Stock Expir?? (P??rim??s)', th_days_left: 'Jours restants', expired_tag: 'EXPIR??',
        forgot_password: 'Mot de passe oubli?? ?',
        secure_account: 'S??curiser'
    }
};

function isExpired(dateStr) {
    if(!dateStr || dateStr === '-') return false;
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const parts = dateStr.split(/[-/]/);
    let exp;
    if (parts.length === 3) {
        // Check if first part or last part is the year
        if (parts[0].length === 4) {
            exp = new Date(parts[0], parts[1] - 1, parts[2]);
        } else if (parts[2].length === 4) {
            exp = new Date(parts[2], parts[1] - 1, parts[0]);
        } else {
            exp = new Date(dateStr);
        }
    } else {
        exp = new Date(dateStr);
    }
    
    if (isNaN(exp.getTime())) return false;
    exp.setHours(0, 0, 0, 0);
    return exp < now;
}

// Logic for finding the Wednesday that ends the week of a given date
function getWeekEndWednesday(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '-';
    // If it is Wednesday (day 3), keep it. 
    // If it's Thursday (4) to Tuesday (2), find the NEXT Wednesday.
    const day = d.getDay();
    const diff = (day <= 3) ? (3 - day) : (10 - day);
    d.setDate(d.getDate() + diff);
    return d.toISOString().split('T')[0];
}

// Generalized grouping logic
function getGroupedKey(dateStr, unit) {
    if (!dateStr || dateStr === '-') return '-';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '-';

    if (unit === 'day') return dateStr;
    if (unit === 'week') return getWeekEndWednesday(dateStr);
    if (unit === 'month') return dateStr.substring(0, 7); // YYYY-MM
    if (unit === 'year') return dateStr.substring(0, 4); // YYYY
    return dateStr;
}

let activeReportTab = 'week';

const hardcodedUsers = {
    'admin@masef.com': { pass: '123456', role: 'admin', name: { ar: 'المدير المركزي', fr: 'Directeur Central' } }
};

window.userDatabase = { ...hardcodedUsers }; 
let currentUser = null;

async function syncUsers() {
    try {
        console.log("Syncing users from Supabase...");
        const { data, error } = await _supabase.from('users').select('*');
        
        if (error) throw error;

        // Start with hardcoded defaults
        const db = { ...hardcodedUsers }; 
        
        // Merge cloud users (they will override hardcoded if email matches)
        if (data) {
            data.forEach(u => {
                db[u.email.toLowerCase().trim()] = { 
                    pass: u.password, 
                    role: u.role, 
                    pharmacyId: u.pharmacy_id,
                    name: { ar: u.name_ar, fr: u.name_fr },
                    recovery_email: u.recovery_email,
                    recovery_phone: u.recovery_phone,
                    id: u.id // Keep track of DB id if exists
                };
            });
        }
        
        window.userDatabase = db;
        console.log("Users sync complete. Count:", Object.keys(db).length);
    } catch (e) {
        console.error("Sync error:", e);
        // We don't alert here to avoid spamming on initial load, but we log.
    }
}

// Ensure users are loaded before login is possible
// Initial sync moved after Supabase initialization

function t(key) {
    return i18n[currentLang][key] || key;
}

function saveSettings() {
    localStorage.setItem('pharmacy_lang', 'fr');
}

function updateStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = (staticDict[currentLang] && staticDict[currentLang][key]) || (i18n[currentLang] && i18n[currentLang][key]);
        if (val) {
            el.innerText = val;
        }
    });
}

// Toast Notification System
window.showToast = function(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark';
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Auto remove
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
};

window.setLang = function(lang) {
    currentLang = lang;
    saveSettings();
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    updateStaticTranslations();
};

const SUPABASE_URL = 'https://spargooprxgbxqmiopjz.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_uEvawosIK3GP1u8U1eugyQ_AKWWo1Ma';

// Custom Dialog System (Replaces alert, prompt, confirm)
window.showCustomDialog = function({ title, msg, type = 'alert', defaultValue = '', icon = 'fa-circle-info' }) {
    return new Promise((resolve) => {
        const modal = document.getElementById('custom-dialog-modal');
        const titleEl = document.getElementById('dialog-title');
        const msgEl = document.getElementById('dialog-msg');
        const inputContainer = document.getElementById('dialog-input-container');
        const input = document.getElementById('dialog-input');
        const confirmBtn = document.getElementById('dialog-confirm-btn');
        const cancelBtn = document.getElementById('dialog-cancel-btn');
        const iconContainer = document.getElementById('dialog-icon');

        titleEl.innerText = title;
        msgEl.innerText = msg;
        iconContainer.innerHTML = `<i class="fa-solid ${icon}"></i>`;
        
        if (type === 'prompt') {
            inputContainer.style.display = 'block';
            input.value = defaultValue;
            cancelBtn.style.display = 'block';
        } else if (type === 'confirm') {
            inputContainer.style.display = 'none';
            cancelBtn.style.display = 'block';
        } else {
            inputContainer.style.display = 'none';
            cancelBtn.style.display = 'none';
        }

        modal.classList.add('active');

        const cleanup = () => {
            modal.classList.remove('active');
            confirmBtn.onclick = null;
            cancelBtn.onclick = null;
        };

        confirmBtn.onclick = () => {
            const val = type === 'prompt' ? input.value : true;
            cleanup();
            resolve(val);
        };

        cancelBtn.onclick = () => {
            cleanup();
            resolve(null);
        };
    });
};

// Robust initialization for CDN version
let _supabase;
try {
    const lib = window.supabase || window.Supabase;
    if (!lib) {
        console.error("Supabase library not found! Check your script tags in index.html.");
    } else {
        _supabase = lib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("Supabase Client initialized.");
    }
} catch (e) {
    console.error("Critical initialization error:", e);
}
const _db = _supabase;

// syncUsers() is called later after all functions are defined (see bottom of file)

const defaultState = {
    medicines: [],
    pharmacies: {
        1: { name: {ar: '???????????? ??????????', fr: 'Pharmacie Nasr'}, patients: 0, percent: 0, color: '#047857', stock: [] },
        2: { name: {ar: '???????????? ??????????', fr: 'Pharmacie Amal'}, patients: 0, percent: 0, color: '#d97706', stock: [] },
        3: { name: {ar: '???????????? ????????????', fr: 'Pharmacie Chifa'}, patients: 0, percent: 0, color: '#ef4444', stock: [] },
        4: { name: {ar: '???????????? ????????????', fr: 'Pharmacie Rahma'}, patients: 0, percent: 0, color: '#047857', stock: [] }
    },
    transfers: [],
    dispensations: [],
    patientsStats: 0,
    pendingReturns: [],
    patients: [],
    receipts: [],
    orders: []
};

let state = defaultState;
let activeView = 'dashboard';
let pagination = {
    central: { currentPage: 1, pageSize: 100 },
    patients: { currentPage: 1, pageSize: 100 },
    history: { currentPage: 1, pageSize: 100 }
};


async function fetchAllRecords(table, selectQuery = '*') {
    let allData = [];
    let from = 0;
    const step = 1000;
    let fetchMore = true;

    while (fetchMore) {
        const { data, error } = await _supabase.from(table).select(selectQuery).range(from, from + step - 1);
        if (error) throw error;
        allData = allData.concat(data);
        if (data.length < step) fetchMore = false;
        else from += step;
    }
    return { data: allData };
}

async function loadDataFromSupabase() {
    try {
        console.log("Fetching data from Supabase...");
        
        // Parallel queries using pagination to bypass the 1000 items API hard cap
        const [meds, pharms, stocks, trans, disps, pats, ords] = await Promise.all([
            fetchAllRecords('medicines'),
            _supabase.from('pharmacies').select('*'), // Small enough, no pagination needed
            fetchAllRecords('pharmacy_stock', '*, medicines(*)'),
            fetchAllRecords('transfers'),
            fetchAllRecords('dispensations'),
            fetchAllRecords('patients'),
            fetchAllRecords('orders')
        ]);

        if (meds.error) throw meds.error;

        // Map Medicines
        state.medicines = meds.data.map(m => ({
            id: m.id, name: m.name, batch: m.batch, qty: m.qty, 
            entryDate: m.entry_date || '-', expiry: m.expiry_date || '-' 
        }));

        // Map Pharmacies & Stock - Always rebuild from Supabase data
        // First reset stock for existing pharmacies
        Object.keys(state.pharmacies).forEach(k => { state.pharmacies[k].stock = []; state.pharmacies[k].patients = 0; });
        
        if (pharms.data && pharms.data.length > 0) {
            pharms.data.forEach(p => {
                // Always update name and color from DB (whether pharmacy exists or not)
                state.pharmacies[p.id] = {
                    ...( state.pharmacies[p.id] || {} ),
                    name: { ar: p.name_ar || '', fr: p.name_fr || '' },
                    color: p.color || '#047857',
                    patients: 0,
                    stock: []
                };
            });
        }

        stocks.data.forEach(s => {
            const pharm = state.pharmacies[s.pharmacy_id];
            if(pharm) {
                pharm.stock.push({ 
                    id: s.medicine_id, 
                    name: s.medicines.name, 
                    qty: s.qty 
                });
            }
        });

        // Map Transfers
        state.transfers = trans.data.map(t => ({
            id: t.id, date: t.date.split('T')[0], medName: t.medicine_name, 
            qty: t.qty, toPharmacy: t.to_pharmacy_id, isReturn: t.is_return, 
            dispensedBy: t.dispensed_by 
        }));

        // Map Dispensations
        state.dispensations = disps.data.map(d => ({
            id: d.id, date: d.date.split('T')[0], patientName: d.patient_name, 
            medName: d.medicine_name, qty: d.qty, pharmacyId: d.pharmacy_id, 
            dispensedBy: d.dispensed_by
        }));

        // Map Patients
        state.patients = pats.data.map(p => ({
            id: p.id, name: p.name, nationalId: p.national_id, 
            phone: p.phone, hospital: p.hospital 
        }));
        state.patients.forEach(p => {
            // Placeholder: increment patient count for their pharmacy (need schema update for patient->pharmacy if desired, for now we keep app logic)
        });

        // Map Orders
        state.orders = ords.data.map(o => ({
            id: o.id, date: o.date, pharmacyId: o.pharmacy_id, 
            workerName: o.worker_name, status: o.status, items: o.items 
        }));

        console.log("Data loaded successfully!");
        if (currentUser) {
            if (currentUser.role === 'admin') {
                window.renderView(activeView || 'dashboard');
            } else {
                window.renderPharmacy(currentUser.pharmacyId);
            }
        }


    } catch (err) {
        console.error("Detailed error loading data:", err);
        const errMsg = err.message || JSON.stringify(err);
        window.showToast("Erreur DB: " + errMsg, "error");
    }
}

window.migrateLocalData = async function() {
    const localData = localStorage.getItem('pharmacy_inventory_state');
    if (!localData) {
        window.showToast("Aucune donn??e locale ?? migrer.", "info");
        return;
    }
    const localState = JSON.parse(localData);
    window.showToast("Migration en cours... Patientez.", "info");

    try {
        // 0. Migrate Medicines (This was missing!)
        if (localState.medicines && localState.medicines.length > 0) {
            const meds = localState.medicines.map(m => {
                let eDate = m.entryDate || m.entry_date;
                let expDate = m.expiry || m.expiry_date;
                if (!eDate || eDate === '-' || eDate === '') eDate = null;
                if (!expDate || expDate === '-' || expDate === '') expDate = null;
                return {
                    id: m.id, name: m.name || 'Inconnu', batch: m.batch || '-', qty: parseInt(m.qty) || 0,
                    entry_date: eDate, expiry_date: expDate
                };
            });
            // Chunking to be safe if there are too many meds
            for(let i = 0; i < meds.length; i += 1000) {
                const res = await _supabase.from('medicines').upsert(meds.slice(i, i + 1000));
                if(res.error) {
                    console.error("Migration error meds:", res.error);
                }
            }
        }

        // 1. Migrate Patients
        if (localState.patients && localState.patients.length > 0) {
            const pats = localState.patients.map(p => ({
                id: p.id, name: p.name, national_id: p.nationalId, phone: p.phone, hospital: p.hospital
            }));
            for(let i = 0; i < pats.length; i += 1000) {
                await _supabase.from('patients').upsert(pats.slice(i, i + 1000));
            }
        }

        // 2. Migrate Transfers
        if (localState.transfers && localState.transfers.length > 0) {
            const trans = localState.transfers.map(t => ({
                id: t.id, date: t.date, medicine_id: t.medId, medicine_name: t.medName,
                qty: t.qty, to_pharmacy_id: t.toPharmacy, is_return: !!t.isReturn, dispensed_by: t.dispensedBy || 'System'
            }));
            for(let i = 0; i < trans.length; i += 1000) {
                await _supabase.from('transfers').upsert(trans.slice(i, i + 1000));
            }
        }

        // 3. Migrate Dispensations
        if (localState.dispensations && localState.dispensations.length > 0) {
            const disps = localState.dispensations.map(d => ({
                id: d.id, date: d.date, patient_name: d.patientName, 
                medicine_name: d.medName, qty: d.qty, pharmacy_id: d.pharmacyId, dispensed_by: d.dispensedBy
            }));
            for(let i = 0; i < disps.length; i += 1000) {
                await _supabase.from('dispensations').upsert(disps.slice(i, i + 1000));
            }
        }

        // 4. Migrate Orders
        if (localState.orders && localState.orders.length > 0) {
            const ords = localState.orders.map(o => ({
                id: o.id, date: o.date, pharmacy_id: o.pharmacyId, 
                worker_name: o.workerName, status: o.status, items: o.items
            }));
            for(let i = 0; i < ords.length; i += 1000) {
                await _supabase.from('orders').upsert(ords.slice(i, i + 1000));
            }
        }

        // 5. Migrate Pharmacy Stocks
        for (let pid in localState.pharmacies) {
            const p = localState.pharmacies[pid];
            if (p.stock && p.stock.length > 0) {
                const stocks = p.stock.map(s => ({
                    pharmacy_id: parseInt(pid), medicine_id: s.id, qty: s.qty
                }));
                for(let i = 0; i < stocks.length; i += 1000) {
                    await _supabase.from('pharmacy_stock').upsert(stocks.slice(i, i + 1000), { onConflict: 'pharmacy_id,medicine_id' });
                }
            }
        }

        window.showToast("Migration termin??e avec succ??s !");
        await loadDataFromSupabase();
    } catch (err) {
        console.error("Migration error:", err);
        window.showToast("Erreur pendant la migration.", "error");
    }
}

window.downloadLocalBackup = function() {
    const localData = localStorage.getItem('pharmacy_inventory_state');
    if (!localData) {
        alert("Aucune donn??e locale trouv??e.");
        return;
    }
    const blob = new Blob([localData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_stock_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

async function saveState() {
    // Note: Local storage is kept as temporary backup
    localStorage.setItem('pharmacy_inventory_state', JSON.stringify(state));
    // For specific mutations, we should use atomic Supabase calls. 
    // I will refactor mutation functions to call _supabase directly.
}

const viewContainer = document.getElementById('view-container');
const pageTitle = document.getElementById('page-title');
const navButtons = document.querySelectorAll('.nav-btn');
const addMedModal = document.getElementById('add-medicine-modal');
const addMedForm = document.getElementById('add-medicine-form');

document.addEventListener('DOMContentLoaded', () => {
    const d = new Date();
    document.getElementById('date-display').innerText = d.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Login Logic - Load saved email if available
    const loginForm = document.getElementById('login-form');
    if(loginForm) {
        const savedEmail = localStorage.getItem('pharmacy_saved_email');
        if(savedEmail) {
            document.getElementById('login-user').value = savedEmail;
        }
    }

}); // END of DOMContentLoaded

// =============================================
// attemptLogin - GLOBAL scope (outside DOMContentLoaded)
// =============================================
window.attemptLogin = async function() {
    let email = document.getElementById('login-user').value.toLowerCase().trim();
    const pass = document.getElementById('login-pass').value;

    if (!email.includes('@')) {
        email = email + '@masef.com'; // Auto completion fallback
    }

    if (!email.endsWith('@masef.com')) {
        document.getElementById('login-error').innerText = 'L\'adresse email doit se terminer par @masef.com';
        document.getElementById('login-error').style.display = 'block';
        return;
    }

    if (window.userDatabase[email] && window.userDatabase[email].pass === pass) {
        // Save the email
        localStorage.setItem('pharmacy_saved_email', email);

        currentUser = window.userDatabase[email];
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'flex';
        
        // Load data from Supabase immediately after login
        loadDataFromSupabase();

        document.querySelectorAll('.nav-btn, .nav-group-title, .nav-divider').forEach(el => {
            if(el.hasAttribute('data-pharmacy-only')) {
                if(currentUser.role === 'pharmacy') {
                    el.style.display = el.classList.contains('nav-btn') ? 'flex' : 'block';
                } else {
                    el.style.display = 'none';
                }
            } else if (el.classList.contains('nav-btn')) {
                const view = el.dataset.view;
                if(currentUser.role === 'pharmacy') {
                    // Dashboard, specific pharmacy, and original my_register
                    if(view === 'dashboard' || view === 'my_register' || (el.dataset.pharmacyId && parseInt(el.dataset.pharmacyId) === currentUser.pharmacyId)) {
                        el.style.display = 'flex';
                    } else {
                        el.style.display = 'none';
                    }
                } else {
                    // Admin shows all standard, but hide my_register for admin
                    if(view === 'my_register') {
                        el.style.display = 'none';
                    } else {
                        el.style.display = 'flex';
                    }
                }
            } else if (el.classList.contains('nav-divider') && !el.hasAttribute('data-pharmacy-only')) {
                // Keep dividers visible for admin
                if(currentUser.role === 'pharmacy' && el.previousElementSibling && el.previousElementSibling.dataset.view === 'reports') {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'block';
                }
            }
        });

        if(currentUser.role === 'admin') {
            window.renderView('dashboard');
        } else {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            const pBtn = document.querySelector(`.nav-btn[data-pharmacy-id="${currentUser.pharmacyId}"]`);
            if(pBtn) pBtn.classList.add('active');
            window.renderPharmacy(currentUser.pharmacyId);
        }
        window.setLang('fr');
    } else {
        document.getElementById('login-error').innerText = t('login_error');
        document.getElementById('login-error').style.display = 'block';
    }
};

    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            navButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            const view = e.currentTarget.dataset.view;
            if (view && view.startsWith('pharmacy-')) {
                window.renderPharmacy(e.currentTarget.dataset.pharmacyId, 'all');
            } else if (view === 'pharm-inbox' || view === 'pharm-order' || view === 'pharm-dispense') {
                window.renderPharmacy(currentUser.pharmacyId, view);
            } else if (view === 'dashboard' && currentUser && currentUser.role === 'pharmacy') {
                window.renderPharmacy(currentUser.pharmacyId, 'all');
            } else if (view) {
                window.renderView(view);
            }
        });
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        });
    });

    addMedForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('med-name').value;
        const batch = document.getElementById('med-batch').value;
        const qty = parseInt(document.getElementById('med-qty').value);
        const entryDate = document.getElementById('med-entry').value;
        const expiry = document.getElementById('med-expiry').value;

        const isEditId = document.getElementById('add-medicine-form').dataset.editId;
        const medData = { 
            name, batch, qty, 
            entry_date: (entryDate && entryDate !== '-') ? entryDate : null, 
            expiry_date: (expiry && expiry !== '-') ? expiry : null 
        };

        try {
            if(isEditId) {
                const { error } = await _supabase.from('medicines').update(medData).eq('id', isEditId);
                if (error) throw error;
            } else {
                // Fetch max ID to bypass Postgres sequence trap
                const { data: maxRows } = await _supabase.from('medicines').select('id').order('id', { ascending: false }).limit(1);
                let currentId = (maxRows && maxRows.length > 0) ? parseInt(maxRows[0].id) : 0;
                medData.id = currentId + 1;

                const { error } = await _supabase.from('medicines').insert([medData]);
                if (error) throw error;
            }
            
            await loadDataFromSupabase(); // Reload global state
            showToast("M??dicament enregistr?? avec succ??s");
            
            addMedModal.classList.remove('active');
            addMedForm.reset();
            document.getElementById('add-medicine-form').removeAttribute('data-edit-id');
            window.renderView('central'); 
        } catch (err) {
            console.error("Error saving medicine:", err);
        }
    });

    // 2. Recovery Form Listener
    const recoveryForm = document.getElementById('recovery-form');
    if(recoveryForm) {
        recoveryForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const recovEmail = document.getElementById('recov-email').value.trim();
            const recovPhone = document.getElementById('recov-phone').value.trim();
            
            if(!currentUser) return;
            const loginEmail = Object.keys(userDatabase).find(k => userDatabase[k] === currentUser);

            try {
                // Table user_security should have columns: login_email (primary), recovery_email, recovery_phone
                const { error } = await _supabase.from('user_security').upsert({
                    login_email: loginEmail,
                    recovery_email: recovEmail,
                    recovery_phone: recovPhone
                }, { onConflict: 'login_email' });

                if (error) {
                    console.error("Erreur de sauvegarde de s??curit??:", error);
                    let errDetails = error.message;
                    if(error.code === '42P01') errDetails = "La table 'user_security' n'existe pas.";
                    if(error.code === '42501') errDetails = "Acc??s refus??. Veuillez d??sactiver le 'Row Level Security' (RLS) pour cette table dans Supabase.";
                    alert("Erreur Supabase: " + errDetails);
                    showToast("Action requise: Assurez-vous que la table 'user_security' est bien cr????e et RLS d??sactiv??.", "error");
                } else {
                    showToast(currentLang === 'ar' ? '???? ?????? ?????????????? ????????????' : "Infos de s??curit?? enregistr??es");
                    document.getElementById('recovery-modal').classList.remove('active');
                }
            } catch (err) {
                console.error(err);
                showToast("Erreur serveur", "error");
            }
        });
    }

    window.forgotPassword = async function() {
        const email = await window.showCustomDialog({ 
            title: currentLang === 'ar' ? '?????????????? ????????????' : 'R??cup??ration',
            msg: currentLang === 'ar' ? '???????? ?????????? ???????????? ?????????? ????:' : 'Entrez votre email de connexion :',
            type: 'prompt',
            icon: 'fa-user-lock'
        });
        if(!email) return;
        
        try {
            const { data, error } = await _supabase.from('user_security').select('*').eq('login_email', email.toLowerCase().trim()).single();
            if (error || !data) {
                window.showCustomDialog({ 
                    title: "Oups",
                    msg: currentLang === 'ar' ? '???? ?????? ???????????? ?????? ?????????????? ?????????????? ???????? ????????????.' : 'Aucune information de r??cup??ration trouv??e.',
                    icon: 'fa-circle-exclamation'
                });
            } else {
                const mask = (str) => {
                    if(!str) return '---';
                    const parts = str.split('@');
                    if(parts.length === 2) return parts[0].substring(0,2) + '***@' + parts[1];
                    return str.substring(0,4) + '****';
                };
                window.showCustomDialog({ 
                    title: currentLang === 'ar' ? '?????????????? ??????????????????' : 'Infos R??cup??ration',
                    msg: (currentLang === 'ar' ? '??????????????:' : 'Email:') + ' ' + mask(data.recovery_email) + '\n' + (currentLang === 'ar' ? '????????????:' : 'T??l:') + ' ' + mask(data.recovery_phone),
                    icon: 'fa-user-shield'
                });
            }
        } catch (err) { console.error(err); }
    };

    window.openRecoveryModal = async function() {
        if(!currentUser) return;
        document.getElementById('recovery-modal').classList.add('active');
        
        // Try to pre-load existing data
        const loginEmail = Object.keys(userDatabase).find(k => userDatabase[k] === currentUser);
        const { data } = await _supabase.from('user_security').select('*').eq('login_email', loginEmail).single();
        if(data) {
            document.getElementById('recov-email').value = data.recovery_email || '';
            document.getElementById('recov-phone').value = data.recovery_phone || '';
        }
    };

    window.setLang('fr');

window.changePage = function(view, page) {
    if (!pagination[view]) return;
    pagination[view].currentPage = page;
    window.renderView(view);
};

function renderPaginationControls(view, totalItems) {
    const p = pagination[view];
    if (!p) return '';
    const totalPages = Math.ceil(totalItems / p.pageSize);
    if (totalPages <= 1) return '';

    let buttons = '';
    const start = Math.max(1, p.currentPage - 2);
    const end = Math.min(totalPages, p.currentPage + 2);

    if (p.currentPage > 1) {
        buttons += `<button class="pagination-btn" onclick="window.changePage('${view}', ${p.currentPage - 1})"><i class="fa-solid fa-chevron-left"></i> Pr??c??dent</button>`;
    }

    for (let i = start; i <= end; i++) {
        buttons += `<button class="pagination-btn ${i === p.currentPage ? 'active' : ''}" onclick="window.changePage('${view}', ${i})">${i}</button>`;
    }

    if (p.currentPage < totalPages) {
        buttons += `<button class="pagination-btn" onclick="window.changePage('${view}', ${p.currentPage + 1})">Suivant <i class="fa-solid fa-chevron-right"></i></button>`;
    }

    return `
        <div class="pagination-container">
            <div class="pagination-info">Affichage de ${(p.currentPage - 1) * p.pageSize + 1} ?? ${Math.min(p.currentPage * p.pageSize, totalItems)} sur ${totalItems}</div>
            <div class="pagination-buttons">${buttons}</div>
        </div>
    `;
}

window.renderView = function(viewName) {
    activeView = viewName;
    let content = '';
    
    if (viewName === 'dashboard') {
        pageTitle.innerText = t('page_dashboard');
        
        const totalCentralCount = state.medicines.length; // Nombre total de r??f??rences
        const totalItemsSum = state.medicines.reduce((acc, curr) => acc + (parseInt(curr.qty) || 0), 0); // Somme totale des bo??tes
        let totalPStock = 0;
        for(let p in state.pharmacies) {
            totalPStock += state.pharmacies[p].stock.reduce((a,c) => a + c.qty, 0);
        }

        const lowStock = state.medicines.find(m => m.qty < 50);
        const alertHtml = lowStock ? `
            <div class="alert-bar">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>${t('alert_low_stock')} <strong>${lowStock.name}</strong></span>
            </div>
        ` : '';

        const migrationBtn = `
        <div style="display:flex; gap:10px; margin-bottom:20px;">
            <button class="primary-btn" style="background:var(--highlight-gold); color:var(--primary-dark);" onclick="window.migrateLocalData()"><i class="fa-solid fa-upload"></i> ${currentLang === 'ar' ? '?????????? ???????????????? ?????????????? ????????????' : 'Migrer les donn??es vers Supabase'}</button>
            <button class="primary-btn" style="background:var(--info-blue);" onclick="window.downloadLocalBackup()"><i class="fa-solid fa-download"></i> Sauvegarder Localement (Backup)</button>
        </div>
        `;


window.parseWorkerName = function(val, lang = 'fr') {
    if (!val) return '-';
    if (typeof val === 'object') return val[lang] || '-';
    if (typeof val === 'string' && val.startsWith('{')) {
        try { const obj = JSON.parse(val); return obj[lang] || '-'; } catch(e){}
    }
    return val;
};

        const distItems = state.transfers.slice(-6).reverse().map(t => {
            const pName = state.pharmacies[t.toPharmacy] ? state.pharmacies[t.toPharmacy].name.fr : 'Inconnu';
            return `
            <div class="dist-item">
                <div class="dist-info">
                    <div class="dist-med">${t.medName}</div>
                    <div class="dist-pharm">${pName}</div>
                </div>
                <div class="dist-meta">
                    <div class="dist-qty">+${t.qty}</div>
                    <div class="dist-date">${t.date}</div>
                </div>
            </div>`;
        }).join('');

        const pharmItems = Object.keys(state.pharmacies).map(k => {
            const p = state.pharmacies[k];
            return `
            <div class="pharm-prog-item">
                <div class="pharm-prog-top">
                    <span>${p.name.fr}</span>
                    <span>${p.percent}%</span>
                </div>
                <div class="pharm-prog-bar-bg">
                    <div class="pharm-prog-bar-fill" style="width: ${p.percent}%; background-color: ${p.color};"></div>
                </div>
                <div class="pharm-prog-meta">
                    <span>${p.patients} Patients</span>
                </div>
            </div>`;
        }).join('');

        let approvalsHtml = '';
        if (currentUser && currentUser.role === 'admin' && state.pendingReturns.length > 0) {
            approvalsHtml = `
            <div class="dash-row" style="margin-bottom:20px;">
                <div class="dash-col" style="flex:1; border:2px solid var(--warning-orange);">
                    <div class="block-title" style="color:var(--warning-orange);"><i class="fa-solid fa-bell"></i> ${t('pending_returns_title')}</div>
                    <table>
                        <thead><tr><th>${t('th_pharmacy')}</th><th>${t('th_med')}</th><th>${t('th_qty')}</th><th>${t('th_worker')}</th><th>${t('th_actions')}</th></tr></thead>
                        <tbody>
                            ${state.pendingReturns.map(req => `
                            <tr>
                                <td>${state.pharmacies[req.pharmacyId].name.fr}</td>
                                <td><strong>${req.medName}</strong></td>
                                <td><span class="status-badge warning">${req.qty}</span></td>
                                <td>${window.parseWorkerName(req.workerName, 'fr')}</td>
                                <td style="display:flex; gap:5px;">
                                    <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:#059669;" onclick="window.approveReturn(${req.id})">${t('btn_approve')}</button>
                                    <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:#ef4444;" onclick="window.rejectReturn(${req.id})">${t('btn_reject')}</button>
                                </td>
                            </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
        }

        const pendingOrders = (state.orders || []).filter(o => o.status === 'PENDING');
        let ordersHtml = '';
        if(pendingOrders.length > 0) {
            ordersHtml = `
            <div class="dash-row" style="margin-bottom:20px;">
                <div class="dash-col" style="flex:1; border:2px solid var(--highlight-gold);">
                    <div class="block-title" style="color:var(--highlight-gold);"><i class="fa-solid fa-cart-shopping"></i> Commandes en attente (Pharmacies)</div>
                    <table>
                        <thead><tr><th>R??f. Commande</th><th>Pharmacie</th><th>??metteur</th><th>Date</th><th>Action</th></tr></thead>
                        <tbody>
                            ${pendingOrders.map(o => `
                            <tr>
                                <td><strong>#${o.id}</strong></td>
                                <td>${state.pharmacies[o.pharmacyId].name.fr}</td>
                                <td>${o.workerName}</td>
                                <td>${new Date(o.date).toLocaleDateString('fr-FR')}</td>
                                <td>
                                    <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:var(--info-blue); margin-right:5px;" onclick="window.downloadSavedReceipt('${o.id}')"><i class="fa-solid fa-file-pdf"></i> PDF</button>
                                    <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:var(--primary-brand);" onclick="window.markOrderTreated('${o.id}')"><i class="fa-solid fa-check"></i> Trait??</button>
                                </td>
                            </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>`;
        }

        content = `
            ${alertHtml}
            ${currentUser.role === 'admin' ? migrationBtn : ''}
            ${ordersHtml}
            ${approvalsHtml}
            
            <div class="stat-grid-5">
                <div class="stat-card sc-green" onclick="window.renderView('central')">
                    <div class="stat-val">${totalCentralCount.toLocaleString()}</div>
                    <div class="stat-label">${t('stat_total_meds')}</div>
                </div>
                <div class="stat-card sc-purple" onclick="window.renderView('expired')">
                    <div class="stat-val">${state.medicines.filter(m => isExpired(m.expiry)).length}</div>
                    <div class="stat-label">P??rim??s</div>
                </div>
                <div class="stat-card sc-blue" onclick="window.renderView('reports')">
                    <div class="stat-val">${Object.keys(state.pharmacies).length}</div>
                    <div class="stat-label">${t('stat_pharmacies')}</div>
                </div>
                <div class="stat-card sc-orange" onclick="window.renderView('distribution')">
                    <div class="stat-val">${state.transfers.length}</div>
                    <div class="stat-label">${t('stat_distributions')}</div>
                </div>
                <div class="stat-card sc-red" onclick="window.renderView('patients')">
                    <div class="stat-val">${state.patients.length}</div>
                    <div class="stat-label">${t('stat_patients')}</div>
                </div>
            </div>

            <div class="dash-row">
                <div class="dash-col shadow-sm">
                    <div class="block-title"><i class="fa-solid fa-truck-ramp-box"></i> Distributions R??centes</div>
                    <div class="dist-list">
                        ${distItems || '<div style="text-align:center; padding:40px; color:#9ca3af;">Aucune donn??e</div>'}
                    </div>
                </div>
                <div class="dash-col shadow-sm">
                    <div class="block-title"><i class="fa-solid fa-chart-line"></i> ??tat des Pharmacies</div>
                    <div class="pharm-list">
                        ${pharmItems}
                    </div>
                </div>
            </div>
        `;
    } 
    else if (viewName === 'central') {
        const activeMeds = state.medicines.filter(m => !isExpired(m.expiry));
        const p = pagination.central;
        const start = (p.currentPage - 1) * p.pageSize;
        const currentMeds = activeMeds.slice(start, start + p.pageSize);
        
        pageTitle.innerText = t('page_central');
        content = `
            <div class="page-header" style="justify-content: space-between;">
                <div style="display:flex; gap:10px;">
                    <button class="primary-btn" onclick="document.getElementById('add-medicine-form').removeAttribute('data-edit-id'); document.getElementById('add-medicine-form').reset(); document.getElementById('add-medicine-modal').classList.add('active')">
                        <i class="fa-solid fa-plus"></i> ${t('add_med')}
                    </button>
                    ${currentUser && currentUser.role === 'admin' ? `
                    <label class="primary-btn" style="background:#059669; cursor:pointer;">
                        <i class="fa-solid fa-file-import"></i> ${t('btn_import')}
                        <input type="file" id="import-excel" accept=".xlsx, .xls, .csv" style="display:none;">
                    </label>
                    <button class="primary-btn" style="background:#ef4444;" onclick="window.deleteSelectedMeds()">
                        <i class="fa-solid fa-trash-can"></i> ${t('btn_delete_selected')}
                    </button>
                    ` : ''}
                </div>
                <div class="search-box">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" id="search-med" placeholder="${t('search_placeholder')}">
                </div>
            </div>
            
            <div class="table-container shadow-sm">
                <table id="central-table">
                    <thead>
                        <tr>
                            ${currentUser && currentUser.role === 'admin' ? `<th><input type="checkbox" id="select-all-meds" onchange="window.toggleAllMeds(this)"></th>` : ''}
                            <th>${t('th_med')}</th>
                            
                            <th>${t('th_batch')}</th>
                            <th>${t('th_qty')}</th>
                            <th>${t('th_entry')}</th>
                            <th>${t('th_expiry')}</th>
                            <th>${t('th_status')}</th>
                            ${currentUser && currentUser.role === 'admin' ? `<th>${t('th_actions')}</th>` : ''}
                        </tr>
                    </thead>
                    <tbody>${generateCentralTableRows(currentMeds)}</tbody>
                </table>
            </div>
            ${renderPaginationControls('central', activeMeds.length)}
        `;
    }
    else if (viewName === 'distribution') {
        pageTitle.innerText = t('page_distribution');
        const activeMeds = state.medicines.filter(m => !isExpired(m.expiry) && m.qty > 0);
        
        content = `
            <div class="transfer-card">
                <div class="block-title"><i class="fa-solid fa-truck-ramp-box" style="margin: 0 8px;"></i> Distribution par lots</div>
                <form id="bulk-transfer-form">
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label style="display:block; margin-bottom:8px; font-weight:800;">1. Choisir la Pharmacie Destination</label>
                        <select id="bulk-trans-pharmacy" required style="max-width: 400px; border: 2px solid var(--primary-brand);">
                            <option value="">${t('select_pharm')}</option>
                            ${Object.keys(state.pharmacies).map(k => `<option value="${k}" ${window.preSelectedPharm == k ? 'selected' : ''}>${state.pharmacies[k].name.fr}</option>`).join('')}
                        </select>
                    </div>
                    ${(window.preSelectedPharm = null, '')} <!-- Clear after use -->

                    <label style="display:block; margin-bottom:12px; font-weight:800;">2. Liste des M??dicaments ?? Distribuer</label>
                    <div class="table-container" style="margin-bottom: 20px; border: 1px solid #e5e7eb;">
                        <table style="width:100%;">
                            <thead>
                                <tr style="background:#f9fafb;">
                                    <th style="width:60%;">${t('th_med')}</th>
                                    <th style="width:25%;">${t('th_qty')}</th>
                                    <th style="width:15%;"></th>
                                </tr>
                            </thead>
                            <tbody id="bulk-trans-tbody">
                                <!-- Dynamic rows here -->
                            </tbody>
                        </table>
                    </div>
                    <datalist id="distribution-meds-list">
                        ${activeMeds.map(m => `<option value="${m.name} (Lot: ${m.batch} | Stock: ${m.qty})" data-id="${m.id}"></option>`).join('')}
                    </datalist>
                    
                    <div style="display:flex; justify-content: space-between; align-items: center;">
                        <button type="button" class="primary-btn" style="background:var(--primary-brand);" onclick="window.addDistRow()">
                            <i class="fa-solid fa-plus-circle"></i> ${t('btn_add_med_row')}
                        </button>
                        <button type="submit" class="primary-btn" style="background:var(--accent-green); padding: 12px 32px; font-size: 1rem;">
                            <i class="fa-solid fa-check-double"></i> ${t('btn_confirm_dist')}
                        </button>
                    </div>
                </form>
            </div>

            <div class="table-container">
                <div class="table-header">${t('history_dist')}</div>
                <table>
                    <thead>
                        <tr>
                            <th>${t('th_date')}</th>
                            <th>${t('th_id')}</th>
                            <th>${t('th_med')}</th>
                            <th>${t('th_qty')}</th>
                            <th>${t('th_to')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${state.transfers.slice().reverse().map((tItem) => `
                            <tr>
                                <td>${tItem.date}</td>
                                <td>#TRN-${tItem.id}</td>
                                <td><strong>${tItem.medName}</strong></td>
                                <td><span class="status-badge ${tItem.isReturn ? 'warning' : 'good'}">${tItem.isReturn ? '-'+tItem.qty : '+'+tItem.qty}</span></td>
                                <td>${state.pharmacies[tItem.toPharmacy]?.name.fr || ''} <small>${tItem.isReturn ? '(Retour)' : ''}</small></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        viewContainer.innerHTML = content;
        
        // Add first row automatically
        window.addDistRow = function() {
            const tbody = document.getElementById('bulk-trans-tbody');
            const row = document.createElement('tr');
            row.className = 'bulk-row';
            row.innerHTML = `
                <td>
                    <input type="text" class="row-med-search" list="distribution-meds-list" required style="width:100%; border:1px solid #d1d5db; border-radius:6px; padding:10px;" placeholder="Rechercher m??dicament...">
                </td>
                <td>
                    <input type="number" class="row-qty" min="1" required placeholder="Qt??" style="width:100%;">
                </td>
                <td style="text-align:center;">
                    <button type="button" class="icon-btn delete-btn" onclick="window.removeDistRow(this)"><i class="fa-solid fa-xmark"></i></button>
                </td>
            `;
            tbody.appendChild(row);
        };
        
        window.removeDistRow = function(btn) {
            const row = btn.closest('tr');
            if (document.querySelectorAll('.bulk-row').length > 1) {
                row.remove();
            } else {
                window.showToast("Vous devez avoir au moins un m??dicament dans la liste.", 'error');
            }
        };

        window.addDistRow(); // Initial row

        const form = document.getElementById('bulk-transfer-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const pharmId = parseInt(document.getElementById('bulk-trans-pharmacy').value);
            const rows = document.querySelectorAll('.bulk-row');
            
            const batch = [];
            let valid = true;
            
            rows.forEach(row => {
                const searchValue = row.querySelector('.row-med-search').value;
                const qty = parseInt(row.querySelector('.row-qty').value);
                
                const med = state.medicines.find(m => {
                    const matchStr = `${m.name} (Lot: ${m.batch} | Stock: ${m.qty})`;
                    return matchStr === searchValue || m.name === searchValue;
                });
                
                if (!med || med.qty < qty) {
                    window.showToast(`Erreur: M??dicament introuvable ou stock insuffisant (${searchValue})`, 'error');
                    valid = false;
                    return;
                }
                batch.push({ medId: med.id, qty, medName: med.name, batch: med.batch, expiry: med.expiry });
            });
            
            if (!valid || batch.length === 0) return;

            try {
                // Process each item in the batch
                for (const item of batch) {
                    // 1. Update Central Stock
                    const { error: medErr } = await _supabase.rpc('decrement_medicine_stock', { 
                        med_id: item.medId, 
                        decrement_by: item.qty 
                    });
                    // Note: If RPC not available, we use standard update.
                    // But for safety against race conditions, RPC is better.
                    // For now, let's use standard update as I haven't defined RPC in migration.
                    
                    const med = state.medicines.find(m => m.id === item.medId);
                    await _supabase.from('medicines').update({ qty: med.qty - item.qty }).eq('id', item.medId);

                    // 2. Update/Insert Pharmacy Stock
                    const p = state.pharmacies[pharmId];
                    const pMed = p.stock.find(m => m.id === item.medId);
                    const newPQty = (pMed ? pMed.qty : 0) + item.qty;
                    
                    await _supabase.from('pharmacy_stock').upsert({
                        pharmacy_id: pharmId,
                        medicine_id: item.medId,
                        qty: newPQty
                    }, { onConflict: 'pharmacy_id,medicine_id' });

                    // 3. Track transfer
                    await _supabase.from('transfers').insert([{
                        date: new Date().toISOString(),
                        medicine_id: item.medId,
                        medicine_name: item.medName,
                        qty: item.qty,
                        to_pharmacy_id: pharmId,
                        is_return: false,
                        dispensed_by: (typeof currentUser.name === 'object' ? currentUser.name.fr : currentUser.name)
                    }]);
                }

                const barcode = "TRN-" + new Date().getTime().toString().slice(-6);
                // Save receipt (we can add a receipts table later if needed, for now we keep local history)
                if (!state.receipts) state.receipts = [];
                state.receipts.push({
                    id: barcode, date: new Date().toISOString(), type: 'DISTRIBUTION',
                    pharmacy_id: pharmId, items: batch,
                    workerName: currentUser ? (typeof currentUser.name === 'object' ? currentUser.name.fr : currentUser.name) : 'Syst??me',
                    targetName: state.pharmacies[pharmId].name.fr
                });

                await loadDataFromSupabase(); // Sync back
                window.showToast(t('alert_success'));
                window.autoDownloadReceipt('DISTRIBUTION', state.pharmacies[pharmId].name.fr, batch, barcode);
                window.renderView('distribution');
            } catch (err) {
                console.error("Distribution error:", err);
                window.showToast("Erreur lors de la distribution", "error");
            }
        });

        return; // Already rendered manually
    }
    else if (viewName === 'admin_orders' && currentUser && currentUser.role === 'admin') {
        pageTitle.innerText = "Gestion des Commandes";
        
        const pendingOrders = (state.orders || []).filter(o => o.status === 'PENDING').slice().reverse();
        const treatedOrders = (state.orders || []).filter(o => o.status === 'TREATED').slice().reverse();

        content = `
            <div class="dash-row" style="margin-bottom:20px;">
                <div class="dash-col" style="flex:1; border-top: 4px solid var(--highlight-gold);">
                    <div class="block-title" style="color:var(--highlight-gold);"><i class="fa-solid fa-clock"></i> Commandes en attente (${pendingOrders.length})</div>
                    <div class="table-container">
                        <table>
                            <thead><tr><th>R??f. Commande</th><th>Pharmacie</th><th>??metteur</th><th>Date</th><th>Action</th></tr></thead>
                            <tbody>
                                ${pendingOrders.length > 0 ? pendingOrders.map(o => `
                                <tr>
                                    <td><strong>#${o.id}</strong></td>
                                    <td>${state.pharmacies[o.pharmacyId].name.fr}</td>
                                    <td>${o.workerName}</td>
                                    <td>${new Date(o.date).toLocaleDateString('fr-FR')}</td>
                                    <td>
                                        <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:var(--info-blue); margin-right:5px;" onclick="window.downloadSavedReceipt('${o.id}')"><i class="fa-solid fa-file-pdf"></i> PDF</button>
                                        <button class="primary-btn" style="padding:4px 8px; font-size:12px; background:var(--primary-brand);" onclick="window.markOrderTreated('${o.id}')"><i class="fa-solid fa-check"></i> Traiter</button>
                                    </td>
                                </tr>
                                `).join('') : `<tr><td colspan="5" style="text-align:center; color:#94a3b8; padding:20px;">Aucune commande en attente.</td></tr>`}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="dash-row">
                <div class="dash-col" style="flex:1; border-top: 4px solid var(--accent-green);">
                    <div class="block-title" style="color:var(--accent-green);"><i class="fa-solid fa-check-double"></i> Historique des Commandes Trait??es</div>
                    <div class="table-container shadow-sm">
                        <table id="admin-orders-history">
                            <thead><tr><th>Date</th><th>R??f. Commande</th><th>Pharmacie</th><th>??metteur</th><th>Action</th></tr></thead>
                            <tbody>
                                ${treatedOrders.length > 0 ? treatedOrders.map(o => `
                                <tr>
                                    <td>${new Date(o.date).toLocaleDateString('fr-FR')}</td>
                                    <td><strong>#${o.id}</strong></td>
                                    <td>${state.pharmacies[o.pharmacyId].name.fr}</td>
                                    <td>${o.workerName}</td>
                                    <td>
                                        <button class="icon-btn" style="color:var(--danger-red);" onclick="window.downloadSavedReceipt('${o.id}')" title="T??l??charger PDF"><i class="fa-solid fa-file-pdf"></i></button>
                                    </td>
                                </tr>
                                `).join('') : `<tr><td colspan="5" style="text-align:center; color:#94a3b8; padding:20px;">Aucun historique disponible.</td></tr>`}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }
    else if (viewName === 'patients') {
        pageTitle.innerText = t('page_patients');
        
        const consumption = {};
        state.dispensations.forEach(d => {
            if(!consumption[d.patientName]) consumption[d.patientName] = { total: 0, meds: {} };
            consumption[d.patientName].total += d.qty;
            if(!consumption[d.patientName].meds[d.medName]) consumption[d.patientName].meds[d.medName] = 0;
            consumption[d.patientName].meds[d.medName] += d.qty;
        });

        const pState = pagination.patients;
        const startP = (pState.currentPage - 1) * pState.pageSize;
        const currentPats = state.patients.slice(startP, startP + pState.pageSize);

        const pRows = currentPats.map(p => {
            const cons = consumption[p.name];
            let medsDetails = '---';
            let totalDrawn = 0;
            if(cons) {
                totalDrawn = cons.total;
                medsDetails = Object.keys(cons.meds).map(m => `${m} (${cons.meds[m]})`).join('<br>');
            }
            let checkbox = '';
            if(currentUser && currentUser.role === 'admin') {
                checkbox = `<td><input type="checkbox" class="patient-checkbox" value="${p.id}"></td>`;
            }
            return `<tr>
                ${checkbox}
                <td><strong>${p.name}</strong></td>
                <td>${p.nationalId}</td>
                <td dir="ltr">${p.phone}</td>
                <td>${p.hospital}</td>
                <td>${medsDetails}</td>
                <td><span class="status-badge ${totalDrawn > 0 ? 'warning' : 'good'}">${totalDrawn}</span></td>
            </tr>`;
        }).join('');

        content = `
            <div class="page-header" style="justify-content: flex-end;">
                <div style="display:flex; gap: 10px;">
                    ${currentUser && currentUser.role === 'admin' ? `
                    <label class="primary-btn" style="background:#059669; cursor:pointer;">
                        <i class="fa-solid fa-file-import"></i> ${t('btn_import_patients')}
                        <input type="file" id="import-patients-excel" accept=".xlsx, .xls, .csv" style="display:none;">
                    </label>
                    <button class="primary-btn" style="background:#ef4444;" onclick="window.deleteSelectedPatients()">
                        <i class="fa-solid fa-trash-can"></i> ${t('btn_delete_selected')}
                    </button>
                    ` : ''}
                    <button class="primary-btn btn-print" onclick="window.printPage()" style="background:var(--text-muted);"><i class="fa-solid fa-print"></i> ${t('btn_print')}</button>
                    <button class="primary-btn btn-excel" onclick="window.exportToExcel('patients-table', 'Patients')" style="background:#059669;"><i class="fa-solid fa-file-excel"></i> ${t('btn_excel')}</button>
                </div>
            </div>
            <div class="table-container">
                <table id="patients-table">
                    <thead><tr>
                        ${currentUser && currentUser.role === 'admin' ? `<th><input type="checkbox" id="select-all-patients" onchange="window.toggleAllPatients(this)"></th>` : ''}
                        <th>${t('th_patient')}</th><th>${t('th_patient_nid')}</th><th>${t('th_patient_phone')}</th>
                        <th>${t('th_patient_hospital')}</th>
                        <th>${t('th_med')}</th><th>${t('th_total_qty')}</th>
                    </tr></thead>
                    <tbody>${pRows || `<tr><td colspan="${currentUser && currentUser.role === 'admin' ? 7 : 6}" style="text-align:center;">---</td></tr>`}</tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'expired') {
        pageTitle.innerText = t('page_expired');
        const expiredMeds = state.medicines.filter(m => isExpired(m.expiry));
        
        content = `
            <div class="page-header" style="justify-content: flex-end;">
                <div style="display:flex; gap:10px;">
                    <button class="primary-btn btn-print" onclick="window.printPage()" style="background:var(--text-muted);"><i class="fa-solid fa-print"></i> ${t('btn_print')}</button>
                    <button class="primary-btn btn-excel" onclick="window.exportToExcel('expired-table', 'Expired_Stock')" style="background:#059669;"><i class="fa-solid fa-file-excel"></i> ${t('btn_excel')}</button>
                </div>
            </div>
            <div class="table-container">
                <table id="expired-table">
                    <thead><tr>
                        <th>${t('th_med')}</th><th>${t('th_batch')}</th><th>${t('th_qty')}</th><th>${t('th_expiry')}</th><th>${t('th_status')}</th>
                    </tr></thead>
                    <tbody>
                        ${expiredMeds.length > 0 ? expiredMeds.map(m => `
                            <tr style="background:#fef2f2;">
                                <td><strong>${m.name}</strong></td>
                                <td>${m.batch}</td>
                                <td><span class="status-badge danger">${m.qty}</span></td>
                                <td style="color:var(--danger-red); font-weight:bold;">${m.expiry}</td>
                                <td><span class="status-badge danger">${t('expired_tag')}</span></td>
                            </tr>
                        `).join('') : `<tr><td colspan="5" style="text-align:center; padding:30px;">Aucun m??dicament p??rim??.</td></tr>`}
                    </tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'users') {
        if(currentUser.role !== 'admin') { window.renderView('dashboard'); return; }
        pageTitle.innerText = "Gestion des Utilisateurs";
        const users = Object.keys(window.userDatabase).map(email => ({ email, ...window.userDatabase[email] }));

        content = `
            <div class="page-header" style="justify-content: flex-end; gap: 10px;">
                <button class="primary-btn" style="background:var(--highlight-gold); color:var(--primary-dark);" onclick="window.migrateUsersToCloud()">
                    <i class="fa-solid fa-cloud-arrow-up"></i> Migrer Comptes Locaux
                </button>
                <button class="primary-btn" onclick="window.addUser()">
                    <i class="fa-solid fa-user-plus"></i> Nouvel Utilisateur
                </button>
            </div>
            
            <div class="table-container shadow-sm">
                <table>
                    <thead>
                        <tr>
                            <th>Nom (AR / FR)</th>
                            <th>Email (Login)</th>
                            <th>R??le</th>
                            <th>Pharmacie</th>
                            <th>Infos R??cup??ration</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(u => {
                            const nameAr = (u.name && u.name.ar) ? u.name.ar : (u.name_ar || '---');
                            const nameFr = (u.name && u.name.fr) ? u.name.fr : (u.name_fr || '---');
                            const pharmName = u.pharmacyId && state.pharmacies[u.pharmacyId] 
                                ? (state.pharmacies[u.pharmacyId].name?.fr || '-') 
                                : '-';
                            return `
                            <tr>
                                <td>${nameAr} / ${nameFr}</td>
                                <td><strong>${u.email}</strong></td>
                                <td><span class="status-badge ${u.role === 'admin' ? 'info' : 'good'}">${u.role}</span></td>
                                <td>${pharmName}</td>
                                <td>
                                    <span style="font-size:11px; color:var(--text-muted);">
                                        ???? ${u.recovery_email || '---'}<br>
                                        ???? ${u.recovery_phone || '---'}
                                    </span>
                                </td>
                                <td class="action-cell">
                                    <button class="icon-btn edit-btn" onclick="window.editUser('${u.email}')" title="Modifier"><i class="fa-solid fa-user-pen"></i></button>
                                    <button class="icon-btn delete-btn" onclick="window.deleteUser('${u.email}')" title="Supprimer"><i class="fa-solid fa-user-minus"></i></button>
                                </td>
                            </tr>\`;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'records') {
        pageTitle.innerText = t('page_records');
        const allLogs = [];
        state.transfers.forEach(tItem => {
            const actionTrans = tItem.isReturn ? (currentLang==='ar'?'?????????? ??????????????':'Retour Central') : t('action_transfer');
            const qtyStr = tItem.isReturn ? `-${tItem.qty} (????????)` : `+${tItem.qty}`;
            allLogs.push({ date: tItem.date, action: actionTrans, med: tItem.medName, qty: qtyStr, dest: state.pharmacies[tItem.toPharmacy].name[currentLang], worker: window.parseWorkerName(tItem.dispensedBy, currentLang) });
        });
        state.dispensations.forEach(d => {
            allLogs.push({ date: d.date, action: t('action_dispense'), med: d.medName, qty: `-${d.qty}`, dest: d.patientName, worker: window.parseWorkerName(d.dispensedBy, currentLang) });
        });
        allLogs.sort((a,b) => new Date(b.date) - new Date(a.date));

        const rRows = allLogs.map(log => `<tr><td>${log.date}</td><td><span class="status-badge ${log.qty.startsWith('+') ? 'good' : 'warning'}">${log.action}</span></td><td><strong>${log.med}</strong></td><td><span dir="ltr">${log.qty}</span></td><td>${log.dest}</td><td>${log.worker}</td></tr>`).join('');

        content = `
            <div class="page-header" style="justify-content: flex-end;">
                <div style="display:flex; gap: 10px;">
                    <button class="primary-btn btn-print" onclick="window.printPage()" style="background:var(--text-muted);"><i class="fa-solid fa-print"></i> ${t('btn_print')}</button>
                    <button class="primary-btn btn-excel" onclick="window.exportToExcel('records-table', 'Records')" style="background:#059669;"><i class="fa-solid fa-file-excel"></i> ${t('btn_excel')}</button>
                </div>
            </div>
            <div class="table-container">
                <table id="records-table">
                    <thead><tr><th>${t('th_date')}</th><th>${t('th_action')}</th><th>${t('th_med')}</th><th>${t('th_qty')}</th><th>${t('th_pharmacy')}</th><th>${t('th_worker')}</th></tr></thead>
                    <tbody>${rRows || `<tr><td colspan="6" style="text-align:center;">---</td></tr>`}</tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'reports') {
        pageTitle.innerText = t('page_reports');
        const pRows = Object.keys(state.pharmacies).map(k => {
            const p = state.pharmacies[k];
            const stockDetails = p.stock.map(m => `${m.name} (${m.qty})`).join(' | ');
            return `<tr><td><strong>${p.name.fr}</strong></td><td>${p.patients}</td><td>${stockDetails || '---'}</td></tr>`;
        }).join('');

        content = `
            <div class="page-header" style="justify-content: flex-end;">
                <div style="display:flex; gap: 10px;">
                    <button class="primary-btn btn-print" onclick="window.printPage()" style="background:var(--text-muted);"><i class="fa-solid fa-print"></i> ${t('btn_print')}</button>
                    <button class="primary-btn btn-excel" onclick="window.exportToExcel('reports-table', 'Reports')" style="background:#059669;"><i class="fa-solid fa-file-excel"></i> ${t('btn_excel')}</button>
                </div>
            </div>
            <div class="table-container">
                <div class="table-header">${t('stat_pharmacies')}</div>
                <table id="reports-table">
                    <thead><tr><th>${t('th_pharmacy')}</th><th>${t('stat_patients')}</th><th>${t('stock_available')}</th></tr></thead>
                    <tbody>${pRows}</tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'analytical_reports' && currentUser && currentUser.role === 'admin') {
        pageTitle.innerText = t('nav_analyses');
        
        const timeframe = activeReportTab; // 'day', 'week', 'month', 'year'

        // Grouping 1 (By Pharmacy): { periodKey: { pharmId: { patients: Set, meds: { medName: qty } } } }
        const groups = {};
        // Grouping 2 (Global by Medicine): { periodKey: { medName: totalQty } }
        const globalMedGroups = {};

        state.dispensations.forEach(d => {
            const key = getGroupedKey(d.date, timeframe);
            
            // For Pharmacy Details
            if(!groups[key]) groups[key] = {};
            if(!groups[key][d.pharmacyId]) groups[key][d.pharmacyId] = { patients: new Set(), meds: {} };
            groups[key][d.pharmacyId].patients.add(d.patientName);
            if(!groups[key][d.pharmacyId].meds[d.medName]) groups[key][d.pharmacyId].meds[d.medName] = 0;
            groups[key][d.pharmacyId].meds[d.medName] += d.qty;

            // For Global Medicine Report
            if(!globalMedGroups[key]) globalMedGroups[key] = {};
            if(!globalMedGroups[key][d.medName]) globalMedGroups[key][d.medName] = { qty: 0, patients: new Set() };
            globalMedGroups[key][d.medName].qty += d.qty;
            globalMedGroups[key][d.medName].patients.add(d.patientName);
        });

        const sortedPeriods = Object.keys(groups).sort((a,b) => new Date(b) - new Date(a));
        
        // Build Pharmacy Details Rows
        let pharmRows = '';
        sortedPeriods.forEach(pKey => {
            Object.keys(groups[pKey]).forEach(pId => {
                const data = groups[pKey][pId];
                const medSummary = Object.keys(data.meds).map(m => `<span>${m}: <strong>${data.meds[m]}</strong></span>`).join(' | ');
                pharmRows += `
                    <tr>
                        <td style="white-space:nowrap;"><strong>${pKey}</strong></td>
                        <td>${state.pharmacies[pId].name.fr}</td>
                        <td style="text-align:center;"><span class="status-badge info">${data.patients.size}</span></td>
                        <td>${medSummary}</td>
                    </tr>
                `;
            });
        });

        // Build Global Medicine Report Rows
        let globalRows = '';
        sortedPeriods.forEach(pKey => {
            const meds = globalMedGroups[pKey];
            Object.keys(meds).forEach(mName => {
                globalRows += `
                    <tr>
                        <td style="white-space:nowrap;"><strong>${pKey}</strong></td>
                        <td><strong>${mName}</strong></td>
                        <td style="text-align:center;"><span class="status-badge info">${meds[mName].patients.size}</span></td>
                        <td style="text-align:center;"><span class="status-badge good">${meds[mName].qty}</span></td>
                    </tr>
                `;
            });
        });

        content = `
            <div class="page-header" style="flex-direction: column; align-items: flex-start; gap: 15px;">
                <div class="report-tabs">
                    <button class="report-tab ${timeframe === 'day' ? 'active' : ''}" onclick="window.setReportTab('day')">${t('th_day')}</button>
                    <button class="report-tab ${timeframe === 'week' ? 'active' : ''}" onclick="window.setReportTab('week')">${t('th_week')}</button>
                    <button class="report-tab ${timeframe === 'month' ? 'active' : ''}" onclick="window.setReportTab('month')">${t('th_month')}</button>
                    <button class="report-tab ${timeframe === 'year' ? 'active' : ''}" onclick="window.setReportTab('year')">${t('th_year')}</button>
                </div>
            </div>

            <!-- Global Medication Report Section (NEW) -->
            <div class="table-header" style="margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
                <span><i class="fa-solid fa-earth-africa"></i> ${t('th_global_report')} - ${t('th_' + timeframe)}</span>
                <button class="primary-btn btn-excel" onclick="window.exportToExcel('global-report-table', 'Rapport_Global_${timeframe}')" style="background:#059669; font-size:12px; padding:4px 10px;">
                    <i class="fa-solid fa-file-excel"></i> Excel
                </button>
            </div>
            <div class="table-container shadow-sm animated fadeIn" style="margin-bottom: 40px; border-left: 5px solid var(--primary-brand);">
                <table id="global-report-table">
                    <thead>
                        <tr>
                            <th style="width:150px;">${t('th_period')}</th>
                            <th>${t('th_med')}</th>
                            <th style="text-align:center;">${t('th_beneficiaries')}</th>
                            <th style="text-align:center;">${t('th_total_consumed')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${globalRows || `<tr><td colspan="4" style="text-align:center; padding:30px; color:var(--text-muted);">${t('status_empty')}</td></tr>`}
                    </tbody>
                </table>
            </div>

            <!-- Pharmacy Detail Section -->
            <div class="table-header" style="margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
                <span><i class="fa-solid fa-hospital"></i> ${t('nav_analyses')} (${t('th_pharmacy')})</span>
                <button class="primary-btn btn-excel" onclick="window.exportToExcel('pharmacy-report-table', 'Report_Pharmacies_${timeframe}')" style="background:#059669; font-size:12px; padding:4px 10px;">
                    <i class="fa-solid fa-file-excel"></i> Excel
                </button>
            </div>
            <div class="table-container shadow-sm animated fadeIn">
                <table id="pharmacy-report-table">
                    <thead>
                        <tr>
                            <th style="width:150px;">${t('th_period')}</th>
                            <th>${t('th_pharmacy')}</th>
                            <th style="text-align:center;">${t('th_beneficiaries')}</th>
                            <th>${t('th_consumed_qty')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${pharmRows || `<tr><td colspan="4" style="text-align:center; padding:30px; color:var(--text-muted);">${t('status_empty')}</td></tr>`}
                    </tbody>
                </table>
            </div>
        `;

        // Export active tab setter to window
        window.setReportTab = function(tab) {
            activeReportTab = tab;
            window.renderView('analytical_reports');
        };
    }
    else if (viewName === 'my_register' && currentUser && currentUser.role === 'pharmacy') {
        const pharmId = currentUser.pharmacyId;
        pageTitle.innerText = t('nav_my_register');
        
        const myLogs = [];
        state.transfers.filter(tItem => tItem.toPharmacy == pharmId).forEach(tItem => {
            myLogs.push({ 
                date: tItem.date, 
                action: tItem.isReturn ? 'Retour' : 'R??ception', 
                med: tItem.medName, 
                qty: tItem.isReturn ? `-${tItem.qty}` : `+${tItem.qty}`, 
                target: 'Stock Central',
                worker: window.parseWorkerName(tItem.dispensedBy, currentLang)
            });
        });
        state.dispensations.filter(d => d.pharmacyId == pharmId).forEach(d => {
            myLogs.push({ 
                date: d.date, 
                action: 'D??livrance', 
                med: d.medName, 
                qty: `-${d.qty}`, 
                target: d.patientName,
                worker: window.parseWorkerName(d.dispensedBy, currentLang)
            });
        });
        myLogs.sort((a,b) => new Date(b.date) - new Date(a.date));

        const rows = myLogs.map(l => `
            <tr>
                <td>${l.date}</td>
                <td><span class="status-badge ${l.qty.startsWith('+') ? 'good' : 'warning'}">${l.action}</span></td>
                <td><strong>${l.med}</strong></td>
                <td><span dir="ltr">${l.qty}</span></td>
                <td>${l.target}</td>
                <td>${l.worker}</td>
            </tr>
        `).join('');

        content = `
            <div class="page-header" style="justify-content: flex-end;">
               <button class="primary-btn btn-excel" onclick="window.exportToExcel('my-register-table', 'My_Register')" style="background:#059669;"><i class="fa-solid fa-file-excel"></i> ${t('btn_excel')}</button>
            </div>
            <div class="table-container shadow-sm">
                <table id="my-register-table">
                    <thead>
                        <tr>
                            <th>${t('th_date')}</th>
                            <th>${t('th_action')}</th>
                            <th>${t('th_med')}</th>
                            <th>${t('th_qty')}</th>
                            <th>${t('th_pharmacy')} / Patient</th>
                            <th>${t('th_worker')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows || '<tr><td colspan="6" style="text-align:center;">Aucune activit??</td></tr>'}
                    </tbody>
                </table>
            </div>
        `;
    }
    else if (viewName === 'manage_pharmacies' && currentUser && currentUser.role === 'admin') {
        pageTitle.innerText = "Gestion des Pharmacies";
        const plist = Object.entries(state.pharmacies); // [key, value] pairs

        content = `
            <div class="page-header" style="justify-content: flex-end; gap: 10px;">
                <button class="primary-btn" onclick="window.addPharmacy()">
                    <i class="fa-solid fa-plus"></i> Nouvelle Pharmacie
                </button>
            </div>
            
            <div class="table-container shadow-sm">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom (AR)</th>
                            <th>Nom (FR)</th>
                            <th>Couleur</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${plist.map(([pharmKey, p]) => `
                            <tr>
                                <td>${pharmKey}</td>
                                <td>${p.name ? p.name.ar : ''}</td>
                                <td><strong>${p.name ? p.name.fr : ''}</strong></td>
                                <td><div style="width:20px; height:20px; border-radius:4px; background:${p.color || '#047857'};"></div></td>
                                <td class="action-cell">
                                    <button class="icon-btn edit-btn" onclick="window.editPharmacy(${pharmKey})" title="Modifier"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button class="icon-btn delete-btn" onclick="window.deletePharmacy(${pharmKey})" title="Supprimer"><i class="fa-solid fa-trash-can"></i></button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
    
    viewContainer.innerHTML = content;

    // View specific listeners
    if (viewName === 'central') {
        const searchInput = document.getElementById('search-med');
        if(searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                const filtered = state.medicines.filter(m => 
                    m.name.toLowerCase().includes(term) || m.batch.toLowerCase().includes(term)
                );
                document.querySelector('#central-table tbody').innerHTML = generateCentralTableRows(filtered);
            });
        }
        const importInput = document.getElementById('import-excel');
        if(importInput) {
            importInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if(!file) return;
                window.showToast("Importation en cours...", "info");
                const reader = new FileReader();
                reader.onload = async function(evt) {
                    try {
                        const data = evt.target.result;
                        const workbook = XLSX.read(data, {type: 'binary'});
                        const firstSheet = workbook.SheetNames[0];
                        const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);
                        const medsToInsert = [];
                        
                        function cleanDate(val) {
                            if (!val || String(val).trim() === '' || String(val).trim() === '-') return null;
                            if (typeof val === 'number') {
                                const d = new Date((val - (25567 + 2)) * 86400 * 1000);
                                if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
                            }
                            const d = new Date(val);
                            return isNaN(d.getTime()) ? null : d.toISOString().split('T')[0];
                        }

                        rows.forEach(r => {
                            let name = 'Unknown', batch = 'N/A', qty = 0, entryDate = null, expiry = null;
                            for (let ObjectKey in r) {
                                if (!r.hasOwnProperty(ObjectKey)) continue;
                                let k = ObjectKey.trim().toLowerCase();
                                let val = r[ObjectKey];
                                if (k.includes('name') || k.includes('????????') || k.includes('med') || k.includes('nom') || k.includes('design') || k.includes('article') || k.includes('??????????')) name = val;
                                else if (k.includes('batch') || k.includes('????????') || k.includes('lot') || k.includes('??????????')) batch = val;
                                else if (k.includes('qty') || k.includes('??????') || k.includes('quant') || k.includes('qte')) qty = parseInt(val) || 0;
                                else if ((k.includes('entry') || k.includes('????????') || k.includes('??????????') || k.includes('date')) && !k.includes('exp') && !k.includes('????????')) entryDate = cleanDate(val);
                                else if (k.includes('exp') || k.includes('????????') || k.includes('????????????') || k.includes('perem')) expiry = cleanDate(val);
                            }
                            if (name === 'Unknown' && Object.keys(r).length > 0) {
                                name = r[Object.keys(r)[0]]; // Fallback to first column as name
                            }
                            if (name && name !== '') {
                                medsToInsert.push({ name: String(name).trim(), batch: String(batch).trim(), qty, entry_date: entryDate, expiry_date: expiry });
                            }
                        });
                        
                        const { data: maxRows } = await _supabase.from('medicines').select('id').order('id', { ascending: false }).limit(1);
                        let currentId = (maxRows && maxRows.length > 0) ? parseInt(maxRows[0].id) : 0;
                        
                        medsToInsert.forEach(m => {
                            currentId++;
                            m.id = currentId;
                        });

                        // Chunking to avoid large payload errors
                        for(let i = 0; i < medsToInsert.length; i += 1000) {
                            const res = await _supabase.from('medicines').insert(medsToInsert.slice(i, i + 1000));
                            if (res.error) throw res.error;
                        }
                        
                        await loadDataFromSupabase();
                        window.showToast("Importation r??ussie! " + medsToInsert.length + " ajout??s.");
                        window.renderView('central');
                    } catch (err) {
                        console.error("Import error:", err);
                        window.showToast("Erreur API lors de l'enregistrement", "error");
                    }
                };
                reader.readAsBinaryString(file);
            });
        }
    }
    // Listeners for Patients View
    else if (viewName === 'patients' && currentUser && currentUser.role === 'admin') {
        const importPatientsInput = document.getElementById('import-patients-excel');
        if(importPatientsInput) {
            importPatientsInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if(!file) return;
                window.showToast("Importation en cours...", "info");
                const reader = new FileReader();
                reader.onload = async function(evt) {
                    try {
                        const data = evt.target.result;
                        const workbook = XLSX.read(data, {type: 'binary'});
                        const firstSheet = workbook.SheetNames[0];
                        const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);
                        const patsToInsert = [];
                        rows.forEach(r => {
                            let name = 'Unknown', nid = '-', phone = '-', hospital = '-';
                            let keys = Object.keys(r);
                            for (let ObjectKey of keys) {
                                let k = ObjectKey.trim().toLowerCase();
                                let val = r[ObjectKey];
                                if (k.includes('??????????') || k.includes('name') || k.includes('????????')) name = val;
                                else if (k.includes('????????') || k.includes('national') || (k.includes('??????') && k.includes('??????????'))) nid = val;
                                else if (k.includes('????????') || k.includes('????????') || k.includes('phone') || k.includes('tel')) phone = val;
                                else if (k.includes('????????????') || k.includes('hospital') || k.includes('??????????')) hospital = val;
                            }
                            if (name === 'Unknown' && keys.length > 0) name = r[keys[0]];
                            if(name && name !== 'Unknown') {
                                patsToInsert.push({ name, national_id: nid, phone, hospital });
                            }
                        });
                        
                        const { data: maxRowsPats } = await _supabase.from('patients').select('id').order('id', { ascending: false }).limit(1);
                        let currentPatId = (maxRowsPats && maxRowsPats.length > 0) ? parseInt(maxRowsPats[0].id) : 0;
                        
                        patsToInsert.forEach(p => {
                            currentPatId++;
                            p.id = currentPatId;
                        });

                        for(let i = 0; i < patsToInsert.length; i += 1000) {
                            const res = await _supabase.from('patients').insert(patsToInsert.slice(i, i + 1000));
                            if (res.error) throw res.error;
                        }
                        
                        await loadDataFromSupabase();
                        window.showToast(t('alert_success'));
                        window.renderView('patients');
                    } catch (err) {
                        console.error("Import patients error:", err);
                        window.showToast("Erreur d'importation des patients", "error");
                    }
                };
                reader.readAsBinaryString(file);
            });
        }
    }
}
function generateCentralTableRows(meds) {
    if (meds.length === 0) return `<tr><td colspan="${currentUser && currentUser.role === 'admin' ? 8 : 6}" style="text-align:center;">---</td></tr>`;
    return meds.map(m => {
        let status = `<span class="status-badge good">${t('status_good')}</span>`;
        if (m.qty === 0) status = `<span class="status-badge danger">${t('status_empty')}</span>`;
        else if (m.qty < 50) status = `<span class="status-badge warning">${t('status_low')}</span>`;
        
        let actions = '';
        let checkbox = '';
        if(currentUser && currentUser.role === 'admin') {
            checkbox = `<td><input type="checkbox" class="med-checkbox" value="${m.id}"></td>`;
            actions = `
                <td>
                    <button class="icon-btn edit-btn" onclick="window.editMedicine(${m.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="icon-btn delete-btn" onclick="window.deleteMedicine(${m.id})"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
        }

        return `
            <tr>
                ${checkbox}
                <td><strong>${m.name}</strong></td>
                <td>${m.batch}</td>
                <td>${m.qty}</td>
                <td>${m.entryDate || '-'}</td>
                <td>${m.expiry}</td>
                <td>${status}</td>
                ${actions}
            </tr>
        `;
    }).join('');
}

window.renderPharmacy = function(pharmId, subView = 'all') {
    const p = state.pharmacies[pharmId];
    pageTitle.innerText = p.name.fr;
    
    const isAdmin = currentUser && currentUser.role === 'admin';
    
    let notificationsHtml = '';
    const myReceipts = (state.receipts || []).filter(r => r.pharmacyId == pharmId).slice().reverse();
    if(myReceipts.length > 0) {
        notificationsHtml = `
            <div class="transfer-card" style="border-left: 5px solid var(--highlight-gold);">
                <div class="block-title" style="color: var(--primary-brand);"><i class="fa-solid fa-bell" style="color:var(--highlight-gold);"></i> Bo??te de r??ception (D??charges)</div>
                <div class="table-container">
                    <table>
                        <thead><tr><th>R??f??rence</th><th>Date</th><th>??metteur</th><th>Action</th></tr></thead>
                        <tbody>
                            ${myReceipts.map(r => `
                                <tr>
                                    <td><strong>#${r.id}</strong></td>
                                    <td>${new Date(r.date).toLocaleDateString('fr-FR')} ?? ${new Date(r.date).toLocaleTimeString('fr-FR')}</td>
                                    <td>${r.workerName}</td>
                                    <td>
                                        <button class="primary-btn" style="background:var(--danger-red); font-size:12px; padding:6px 12px;" onclick="window.downloadSavedReceipt('${r.id}')">
                                            <i class="fa-solid fa-file-pdf"></i> Saisir le re??u
                                        </button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    const dashboardHeaderHtml = `
        <div class="page-header" style="justify-content: flex-end;">
            ${isAdmin ? `
            <button class="primary-btn" style="background:var(--accent-green);" onclick="window.openDistForPharmacy(${pharmId})">
                <i class="fa-solid fa-truck-ramp-box"></i> ${currentLang==='ar'?'?????????? ?????????? ???????? ????????????????':'Restocker cette pharmacie'}
            </button>
            ` : ''}
        </div>
        <!-- Pharmacy Stat Cards -->
        <div class="stat-grid-5" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 24px;">
            <div class="stat-card sc-green">
                <div class="stat-val">${p.stock.reduce((acc, curr) => acc + curr.qty, 0)}</div>
                <div class="stat-label">${t('stock_available') || 'Stock Total'}</div>
            </div>
            <div class="stat-card sc-purple">
                <div class="stat-val">${state.dispensations.filter(d => d.pharmacyId == pharmId).length}</div>
                <div class="stat-label">D??livrances</div>
            </div>
            <div class="stat-card sc-red">
                <div class="stat-val">${p.stock.filter(m => m.qty <= 10 && m.qty > 0).length}</div>
                <div class="stat-label">Stock Faible</div>
            </div>
        </div>
    `;

    const orderHtml = `
        <div class="transfer-card" style="margin-top: 30px; border-left: 5px solid var(--info-blue);">
            <div class="block-title" style="color: var(--info-blue);"><i class="fa-solid fa-cart-shopping" style="margin: 0 8px;"></i> Demande d'Approvisionnement (Bon de Commande)</div>
            <p style="font-size: 13px; color: #7f8c8d; margin-bottom: 15px;">S??lectionnez les m??dicaments dont vous avez besoin du Stock Central.</p>
            <form id="order-form-${pharmId}">
                <div class="table-container" style="margin-bottom: 20px; border: 1px solid #e5e7eb;">
                    <table style="width:100%;">
                        <thead>
                            <tr style="background:#f9fafb;">
                                <th style="width:60%;">${t('th_med')}</th>
                                <th style="width:25%;">${t('th_qty')}</th>
                                <th style="width:15%;"></th>
                            </tr>
                        </thead>
                        <tbody id="order-tbody-${pharmId}">
                            <!-- Dynamic rows -->
                        </tbody>
                    </table>
                </div>
                <datalist id="central-meds-list-${pharmId}">
                    ${state.medicines.filter(m => !isExpired(m.expiry)).map(m => `<option value="${m.name}"></option>`).join('')}
                </datalist>

                <div style="display:flex; justify-content: space-between; align-items: center;">
                    <button type="button" class="primary-btn" style="background:var(--primary-brand);" onclick="window.addOrderRow(${pharmId})">
                        <i class="fa-solid fa-plus-circle"></i> Ajouter un m??dicament
                    </button>
                    <button type="submit" class="primary-btn" style="background:var(--info-blue); padding: 12px 32px; font-size: 1rem;">
                        <i class="fa-solid fa-paper-plane"></i> Envoyer la demande
                    </button>
                </div>
            </form>
        </div>
    `;

    const dispenseHtml = `
        <div class="transfer-card">
            <div class="block-title"><i class="fa-solid fa-hand-holding-medical" style="margin: 0 8px;"></i> D??livrance de m??dicaments (Multiples)</div>
            <form id="bulk-dispense-form-${pharmId}">
                <div class="form-group" style="margin-bottom: 20px;">
                    <label style="display:block; margin-bottom:8px; font-weight:800;">1. Choisir le Patient</label>
                    <input type="text" id="disp-patient-${pharmId}" list="patients-list" required placeholder="${t('patient_name')}" autocomplete="off" style="max-width: 400px; border: 2px solid var(--primary-brand);">
                    <datalist id="patients-list">
                        ${state.patients.map(pat => `<option value="${pat.name} (${pat.nationalId})"></option>`).join('')}
                    </datalist>
                </div>

                <label style="display:block; margin-bottom:12px; font-weight:800;">2. Liste des M??dicaments ?? D??livrer</label>
                <div class="table-container" style="margin-bottom: 20px; border: 1px solid #e5e7eb;">
                    <table style="width:100%;">
                        <thead>
                            <tr style="background:#f9fafb;">
                                <th style="width:60%;">${t('th_med')}</th>
                                <th style="width:25%;">${t('th_qty')}</th>
                                <th style="width:15%;"></th>
                            </tr>
                        </thead>
                        <tbody id="bulk-disp-tbody-${pharmId}">
                            <!-- Dynamic rows here -->
                        </tbody>
                    </table>
                </div>
                <datalist id="disp-meds-list-${pharmId}">
                    ${p.stock.filter(m => m.qty > 0).map(m => `<option value="${m.name} [${m.batch}] (Stock: ${m.qty})" data-id="${m.id}"></option>`).join('')}
                </datalist>

                <div style="display:flex; justify-content: space-between; align-items: center;">
                    <button type="button" class="primary-btn" style="background:var(--primary-brand);" onclick="window.addDispRow(${pharmId})">
                        <i class="fa-solid fa-plus-circle"></i> Ajouter un autre m??dicament
                    </button>
                    <button type="submit" class="primary-btn" style="background:var(--accent-green); padding: 12px 32px; font-size: 1rem;">
                        <i class="fa-solid fa-check-double"></i> Confirmer la D??livrance
                    </button>
                </div>
            </form>
        </div>
    `;

    const stockHistoryHtml = `
        <div class="dash-row" style="margin-top:20px;">
            <div class="dash-col shadow-sm">
                <div class="block-title">${t('stock_available')}</div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>${t('th_med')}</th>
                                <th>${t('th_batch')}</th>
                                <th>${t('th_expiry')}</th>
                                <th style="text-align:center;">${t('th_qty')}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${p.stock.filter(m => m.qty > 0).map(m => `
                                <tr>
                                    <td><strong>${m.name}</strong></td>
                                    <td><small>${m.batch || '-'}</small></td>
                                    <td><small>${m.expiry || '-'}</small></td>
                                    <td style="text-align:center;"><span class="status-badge good">${m.qty}</span></td>
                                    <td style="text-align:left;">
                                        <button class="icon-btn edit-btn" title="${t('btn_return')}" onclick="window.returnToCentral(${pharmId}, ${m.id})">
                                            <i class="fa-solid fa-rotate-left"></i>
                                        </button>
                                    </td>
                                </tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="dash-col shadow-sm" style="flex: 2;">
                <div class="block-title">${t('history_dispense')}</div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr><th>${t('th_date')}</th><th>${t('th_patient')}</th><th>${t('th_med')}</th><th>${t('th_qty')}</th><th>${t('th_worker')}</th></tr>
                        </thead>
                        <tbody>
                            ${state.dispensations.filter(d => d.pharmacyId == pharmId).slice().reverse().map(d => `
                                <tr><td>${d.date}</td><td>${d.patientName}</td><td><strong>${d.medName}</strong></td><td><span class="status-badge warning">-${d.qty}</span></td><td>${typeof d.dispensedBy === 'object' ? d.dispensedBy[currentLang] : (d.dispensedBy || '-')}</td></tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    const tabsHtml = `
        <div class="report-tabs no-print" style="margin-bottom: 25px; background: white; padding: 10px; border: 1px solid var(--border-color);">
            <button class="report-tab ${subView === 'all' ? 'active' : ''}" onclick="window.renderPharmacy(${pharmId}, 'all')">
                <i class="fa-solid fa-chart-pie"></i> ${currentLang === 'ar' ? '???????? ????????' : 'Vue d\'ensemble'}
            </button>
            <button class="report-tab ${subView === 'pharm-dispense' ? 'active' : ''}" onclick="window.renderPharmacy(${pharmId}, 'pharm-dispense')">
                <i class="fa-solid fa-hand-holding-medical"></i> ${currentLang === 'ar' ? '?????????? ?????????? ????????????' : 'D??livrance'}
            </button>
            <button class="report-tab ${subView === 'pharm-inbox' ? 'active' : ''}" onclick="window.renderPharmacy(${pharmId}, 'pharm-inbox')">
                <i class="fa-solid fa-inbox"></i> ${currentLang === 'ar' ? '?????????????? (????????????????)' : 'R??ception'}
            </button>
            <button class="report-tab ${subView === 'pharm-order' ? 'active' : ''}" onclick="window.renderPharmacy(${pharmId}, 'pharm-order')">
                <i class="fa-solid fa-cart-shopping"></i> ${currentLang === 'ar' ? '?????? ??????????' : 'Commande'}
            </button>
        </div>
    `;

    let finalBody = '';
    if(subView === 'pharm-inbox') {
        finalBody = notificationsHtml || `<div style="padding:40px; text-align:center; color:#7f8c8d; background:#fff; border-radius:10px; margin-top:20px;">Aucune d??charge re??ue pour le moment.</div>`;
    } else if (subView === 'pharm-order') {
        finalBody = orderHtml;
    } else if (subView === 'pharm-dispense') {
        finalBody = dispenseHtml + stockHistoryHtml;
    } else {
        finalBody = dashboardHeaderHtml + stockHistoryHtml;
    }

    viewContainer.innerHTML = tabsHtml + finalBody;

    // Helper: Add Row
    window.addDispRow = function(id) {
        const tbody = document.getElementById(`bulk-disp-tbody-${id}`);
        const row = document.createElement('tr');
        row.className = 'bulk-disp-row';
        row.innerHTML = `
            <td>
                <input type="text" class="row-med-disp-search" list="disp-meds-list-${pharmId}" required style="width:100%; border:1px solid #d1d5db; border-radius:6px; padding:10px;" placeholder="Rechercher m??dicament...">
                <input type="hidden" class="row-med">
            </td>
            <td>
                <input type="number" class="row-qty" min="1" required placeholder="Qt??" style="width:100%;">
            </td>
            <td style="text-align:center;">
                <button type="button" class="icon-btn delete-btn" onclick="window.removeDispRow(this)"><i class="fa-solid fa-xmark"></i></button>
            </td>
        `;
        tbody.appendChild(row);
        
        row.querySelector('.row-med-disp-search').addEventListener('input', (e) => {
            const list = document.getElementById(`disp-meds-list-${pharmId}`);
            const option = Array.from(list.options).find(o => o.value === e.target.value);
            row.querySelector('.row-med').value = option ? option.dataset.id : '';
        });
    };

    window.removeDispRow = function(btn) {
        const row = btn.closest('tr');
        if (document.querySelectorAll('.bulk-disp-row').length > 1) {
            row.remove();
        }
    };

    const dispBody = document.getElementById(`bulk-disp-tbody-${pharmId}`);
    if (dispBody) window.addDispRow(pharmId); // Initial row

    const dispForm = document.getElementById(`bulk-dispense-form-${pharmId}`);
    if(dispForm) {
        dispForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const patientInput = document.getElementById(`disp-patient-${pharmId}`).value.trim();
            const matchedPatient = state.patients.length > 0 ? state.patients.find(pt => 
                patientInput === `${pt.name} (${pt.nationalId})` || 
                patientInput === pt.name ||
                patientInput === pt.nationalId
            ) : null;

            if (state.patients.length > 0 && !matchedPatient) {
                window.showToast(t('error_unregistered_patient') || "Patient introuvable dans le syst??me", 'error');
                return;
            }
            
            const patientName = matchedPatient ? matchedPatient.name : patientInput;
            const rows = document.querySelectorAll('.bulk-disp-row');
            const items = [];
            let valid = true;

            rows.forEach(row => {
                const searchVal = row.querySelector('.row-med-disp-search').value;
                let medId = parseInt(row.querySelector('.row-med').value);
                const qty = parseInt(row.querySelector('.row-qty').value);
                
                let med = p.stock.find(m => m.id === medId);
                if (!med) {
                    // Fallback search by name/string if ID not matched
                    med = p.stock.find(m => {
                        const matchStr = `${m.name} [${m.batch}] (Stock: ${m.qty})`;
                        return matchStr === searchVal || m.name === searchVal;
                    });
                }

                if(!med || med.qty < qty) {
                    alert(`Stock insuffisant pour ${med ? med.name : searchVal}`);
                    valid = false;
                    return;
                }
                items.push({ medId: med.id, qty, medName: med.name, batch: med.batch, expiry: med.expiry });
            });

            if(!valid || items.length === 0) return;

            try {
                for (const item of items) {
                    const med = p.stock.find(m => m.id === item.medId);
                    const newQty = med.qty - item.qty;
                    await _supabase.from('pharmacy_stock').update({ qty: newQty }).eq('pharmacy_id', pharmId).eq('medicine_id', item.medId);

                    await _supabase.from('dispensations').insert([{
                        date: new Date().toISOString(),
                        patient_name: patientName,
                        medicine_id: item.medId,
                        medicine_name: item.medName,
                        qty: item.qty,
                        pharmacy_id: pharmId,
                        dispensed_by: currentUser ? (typeof currentUser.name === 'object' ? currentUser.name.fr : currentUser.name) : 'Staff'
                    }]);
                }
                
                await loadDataFromSupabase();
                alert(t('alert_success'));
                window.autoDownloadReceipt('DELIVRANCE', patientName, items);
                window.renderPharmacy(pharmId, 'pharm-dispense');
            } catch (err) {
                console.error(err);
                window.showToast("Erreur lors de la d??livrance", "error");
            }
        });
    }
    
    // Order Form Submittal (Bon de Commande)
    window.addOrderRow = function(id) {
        const tbody = document.getElementById(`order-tbody-${id}`);
        if(!tbody) return;
        const row = document.createElement('tr');
        row.className = 'order-row';
        row.innerHTML = `
            <td>
                <input type="text" class="row-med" list="central-meds-list-${id}" required style="width:100%; border:1px solid #d1d5db; border-radius:6px; padding:10px;" placeholder="Nom du m??dicament...">
            </td>
            <td>
                <input type="number" class="row-qty" min="1" required placeholder="Qt??" style="width:100%;">
            </td>
            <td style="text-align:center;">
                <button type="button" class="icon-btn delete-btn" onclick="this.closest('tr').remove()"><i class="fa-solid fa-xmark"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    };

    const orderBody = document.getElementById(`order-tbody-${pharmId}`);
    if (orderBody) window.addOrderRow(pharmId); // Initial logic added here
    
    const orderForm = document.getElementById(`order-form-${pharmId}`);
    if(orderForm) {
        orderForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const rows = document.querySelectorAll('.order-row');
            const items = [];
            let valid = true;

            rows.forEach(row => {
                const inputMed = row.querySelector('.row-med').value.trim();
                const qty = parseInt(row.querySelector('.row-qty').value);

                if(!inputMed || isNaN(qty) || qty < 1) {
                    valid = false;
                    return;
                }
                items.push({ medName: inputMed, qty });
            });

            if(!valid || items.length === 0) {
                alert("Veuillez remplir correctement au moins un m??dicament avec une quantit?? valide.");
                return;
            }

            const barcode = "CMD-" + new Date().getTime().toString().slice(-6);
            const workerName = currentUser ? (typeof currentUser.name === 'object' ? currentUser.name.fr : currentUser.name) : 'Pharmacien';
            
            try {
                await _supabase.from('orders').insert([{
                    date: new Date().toISOString(),
                    pharmacy_id: pharmId,
                    worker_name: workerName,
                    status: 'PENDING',
                    items: items
                }]);
                
                await loadDataFromSupabase();
                alert("Votre Bon de Commande a ??t?? envoy?? avec succ??s au Stock Central.");
                window.autoDownloadReceipt('COMMANDE', 'Pharmacie Centrale (Stock)', items, barcode);
                window.renderPharmacy(pharmId, 'pharm-order');
            } catch (err) {
                console.error(err);
                alert("Erreur lors de l'enregistrement de la commande.");
            }
        });
    }
};



// Helper to bridge to distribution view
window.openDistForPharmacy = function(pharmId) {
    window.preSelectedPharm = pharmId;
    window.renderView('distribution');
};

window.deleteMedicine = async function(id) {
    const confirm = await window.showCustomDialog({ title: "Suppression", msg: t('confirm_delete'), type: 'confirm', icon: 'fa-trash-can' });
    if(confirm) {
        try {
            await _supabase.from('medicines').delete().eq('id', id);
            await loadDataFromSupabase();
            window.renderView('central');
        } catch (err) { console.error(err); }
    }
};

window.editMedicine = function(id) {
    const med = state.medicines.find(m => m.id === id);
    if(!med) return;
    document.getElementById('med-name').value = med.name;
    document.getElementById('med-batch').value = med.batch;
    document.getElementById('med-qty').value = med.qty;
    document.getElementById('med-entry').value = med.entryDate;
    document.getElementById('med-expiry').value = med.expiry;
    
    document.getElementById('add-medicine-form').dataset.editId = id;
    document.getElementById('add-medicine-modal').classList.add('active');
};

window.returnToCentral = async function(pharmId, medId) {
    const p = state.pharmacies[pharmId];
    const med = p.stock.find(m => m.id === medId);
    if(!med) return;
    
    const qtyStr = await window.showCustomDialog({ 
        title: "Retour Stock", 
        msg: (currentLang === 'ar' ? '???????????? ???????????? ?????????????? ???? ' : 'Quantit?? ?? retourner de ') + med.name, 
        type: 'prompt', 
        defaultValue: '1', 
        icon: 'fa-rotate-left' 
    });
    if(qtyStr === null) return;
    const qty = parseInt(qtyStr);
    if(isNaN(qty) || qty <= 0 || qty > med.qty) {
        window.showCustomDialog({ title: "Erreur", msg: t('alert_error'), icon: 'fa-circle-xclamation' });
        return;
    }
    
    const newReqId = state.pendingReturns.length > 0 ? Math.max(...state.pendingReturns.map(r => r.id)) + 1 : 1;
    state.pendingReturns.push({
        id: newReqId,
        pharmacyId: pharmId,
        medId: medId,
        medName: med.name,
        qty: qty,
        workerName: currentUser ? currentUser.name : {ar:'????????????', fr:'Syst??me'}
    });
    
    saveState();
    window.showCustomDialog({ title: "Succ??s", msg: t('alert_request_sent'), icon: 'fa-circle-check' });
};

window.approveReturn = function(reqId) {
    const reqIndex = state.pendingReturns.findIndex(r => r.id === reqId);
    if(reqIndex === -1) return;
    const req = state.pendingReturns[reqIndex];
    
    const p = state.pharmacies[req.pharmacyId];
    const med = p.stock.find(m => m.id === req.medId);
    if(med && med.qty >= req.qty) {
        med.qty -= req.qty;
    } else {
        alert(t('alert_error'));
        return;
    }
    
    const cMed = state.medicines.find(m => m.id === req.medId);
    if(cMed) {
        cMed.qty += req.qty;
    } else {
        const newId = state.medicines.length > 0 ? Math.max(...state.medicines.map(m => m.id)) + 1 : 1;
        state.medicines.push({ id: newId, name: req.medName, batch: 'RET', qty: req.qty, entryDate: new Date().toISOString().split('T')[0], expiry: '-' });
    }
    
    state.transfers.push({
        id: state.transfers.length + 1000,
        date: new Date().toISOString().split('T')[0],
        medId: req.medId, medName: req.medName, qty: req.qty,
        toPharmacy: req.pharmacyId,
        isReturn: true,
        dispensedBy: req.workerName
    });
    
    state.pendingReturns.splice(reqIndex, 1);
    saveState();
    window.renderView('dashboard');
};

window.rejectReturn = function(reqId) {
    state.pendingReturns = state.pendingReturns.filter(r => r.id !== reqId);
    saveState();
    window.renderView('dashboard');
};

window.markOrderTreated = async function(orderId) {
    const confirm = await window.showCustomDialog({ 
        title: "Traitement Commande", 
        msg: "Confirmez-vous que cette commande a ??t?? trait??e ?", 
        type: 'confirm', 
        icon: 'fa-clipboard-check' 
    });
    if(confirm) {
        try {
            await _supabase.from('orders').update({ status: 'TREATED' }).eq('id', orderId);
            await loadDataFromSupabase();
            window.showToast("Commande marqu??e comme Trait??e.");
            if (activeView === 'admin_orders') {
                window.renderView('admin_orders');
            } else {
                window.renderView('dashboard');
            }
        } catch(err) { console.error(err); }
    }
};

window.toggleAllMeds = function(source) {
    document.querySelectorAll('.med-checkbox').forEach(cb => cb.checked = source.checked);
};

window.deleteSelectedMeds = async function() {
    const selected = Array.from(document.querySelectorAll('.med-checkbox:checked')).map(cb => parseInt(cb.value));
    if(selected.length === 0) return;
    const confirm = await window.showCustomDialog({ title: "Suppression Group??e", msg: `Supprimer ${selected.length} m??dicaments s??lectionn??s ?`, type: 'confirm', icon: 'fa-trash-can' });
    if(confirm) {
        try {
            await _supabase.from('medicines').delete().in('id', selected);
            await loadDataFromSupabase();
            window.renderView('central');
        } catch (err) { console.error(err); }
    }
};

window.toggleAllPatients = function(source) {
    document.querySelectorAll('.patient-checkbox').forEach(cb => cb.checked = source.checked);
};

window.deleteSelectedPatients = async function() {
    const selected = Array.from(document.querySelectorAll('.patient-checkbox:checked')).map(cb => parseInt(cb.value));
    if(selected.length === 0) return;
    const confirm = await window.showCustomDialog({ title: "Suppression Group??e", msg: `Supprimer ${selected.length} patients s??lectionn??s ?`, type: 'confirm', icon: 'fa-user-minus' });
    if(confirm) {
        try {
            await _supabase.from('patients').delete().in('id', selected);
            await loadDataFromSupabase();
            window.renderView('patients');
        } catch (err) { console.error(err); }
    }
};

// Export Utilities
window.downloadSavedReceipt = function(receiptId) {
    const rcpt = state.receipts.find(r => r.id === receiptId);
    if(rcpt) {
        window.autoDownloadReceipt(rcpt.type, rcpt.targetName, rcpt.items, rcpt.id, rcpt.date, rcpt.workerName);
    }
};



window.autoDownloadReceipt = function(type, targetName, items, existingBarcode, overrideDateStr, overrideWorkerName) {
    if(typeof html2pdf === 'undefined') {
        alert("La biblioth??que PDF n'est pas encore charg??e.");
        return;
    }
    
    const d = overrideDateStr ? new Date(overrideDateStr) : new Date();
    const dateStr = d.toLocaleDateString('fr-FR') + ' ?? ' + d.toLocaleTimeString('fr-FR');
    const isDist = type === 'DISTRIBUTION';
    const isCmd = type === 'COMMANDE';
    
    let title = "Bon de D??livrance / D??charge";
    if (isDist) title = "Bon de Distribution / D??charge";
    if (isCmd) title = "Bon de Commande";

    let targetLabel = "Patient B??n??ficiaire :";
    if (isDist) targetLabel = "Pharmacie Destinataire :";
    if (isCmd) targetLabel = "Destinataire :";

    const workerName = overrideWorkerName || (currentUser ? (typeof currentUser.name === 'object' ? currentUser.name.fr : currentUser.name) : 'Syst??me');
    const barcode = existingBarcode || ((isCmd ? "CMD-" : "TRN-") + new Date().getTime().toString().slice(-6));

    const container = document.createElement('div');
    container.innerHTML = `
        <div style="padding: 40px; font-family: 'Inter', sans-serif; color: #2c3e50; max-width: 800px; margin: 0 auto; background: #fff;">
            <!-- Header Section -->
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 4px solid #722f64; padding-bottom: 20px; margin-bottom: 30px;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="background: #ffd100; color: #722f64; width: 60px; height: 60px; border-radius: 12px; display: flex; justify-content: center; align-items: center; font-size: 28px;">
                        <i class="fa-solid fa-notes-medical"></i>
                    </div>
                    <div>
                        <h2 style="margin: 0; color: #722f64; font-size: 22px; font-weight: 800; text-transform: uppercase;">Centre de Dialyse</h2>
                        <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 14px;">Gestion des Stocks & Pharmacies</p>
                    </div>
                </div>
                <div style="text-align: right;">
                    <p style="margin: 0; font-size: 12px; color: #7f8c8d;">R??f??rence</p>
                    <p style="margin: 0; font-size: 18px; font-weight: bold; color: #d12027;">#${barcode}</p>
                </div>
            </div>

            <!-- Title & Meta -->
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="margin: 0; font-size: 24px; color: #2c3e50; text-transform: uppercase; letter-spacing: 1px;">${title}</h1>
                <p style="margin: 8px 0 0 0; color: #00a95c; font-weight: bold;">??dit?? le : ${dateStr}</p>
            </div>

            <div style="display: flex; justify-content: space-between; background: #f7f9fc; padding: 20px; border-radius: 10px; margin-bottom: 30px; border: 1px solid #e2e8f0;">
                <div>
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #7f8c8d; text-transform: uppercase;">??metteur ${isCmd ? '(Command?? par)' : '(Remis par)'}</p>
                    <p style="margin: 0; font-size: 16px; font-weight: bold; color: #722f64;">${workerName}</p>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #2c3e50;">${isCmd ? "Pharmacie d'unit??" : 'Stock Central - Magasin'}</p>
                </div>
                <div style="text-align: right;">
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #7f8c8d; text-transform: uppercase;">${targetLabel}</p>
                    <p style="margin: 0; font-size: 16px; font-weight: bold; color: #722f64;">${targetName}</p>
                </div>
            </div>

            <!-- Table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;">
                <thead>
                    <tr style="background: #722f64; color: white;">
                        <th style="padding: 12px 15px; text-align: left; font-size: 14px; border-radius: 8px 0 0 8px;">D??signation M??dicament</th>
                        ${!isCmd ? `<th style="padding: 12px 15px; text-align: center; font-size: 14px;">Lot (Batch)</th>
                        <th style="padding: 12px 15px; text-align: center; font-size: 14px;">Date d'Exp.</th>` : ''}
                        <th style="padding: 12px 15px; text-align: center; font-size: 14px; border-radius: 0 8px 8px 0;">${isCmd ? 'Quantit?? Demand??e' : 'Quantit??'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map((item, index) => `
                        <tr style="border-bottom: 1px solid #e2e8f0; background: ${index % 2 === 0 ? '#ffffff' : '#fcfcfc'};">
                            <td style="padding: 15px; font-size: 14px; font-weight: 600; color: #2c3e50;">${item.medName}</td>
                            ${!isCmd ? `<td style="padding: 15px; font-size: 13px; text-align: center; color: #7f8c8d;">${item.batch || '-'}</td>
                            <td style="padding: 15px; font-size: 13px; text-align: center; color: #d12027;">${item.expiry || '-'}</td>` : ''}
                            <td style="padding: 15px; font-size: 15px; text-align: center; font-weight: bold; color: #00a95c;">${item.qty}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <!-- Signatures -->
            <div style="display: flex; justify-content: space-between; margin-top: 50px;">
                <div style="width: 45%; text-align: center; background: #fdfdfd; border: 1px dashed #cbd5e1; padding: 20px; border-radius: 8px;">
                    <p style="margin: 0 0 40px 0; font-weight: bold; color: #2c3e50;">Signature de l'??metteur</p>
                    <p style="margin: 0; color: #94a3b8; font-size: 12px;">(Cachet et Signature)</p>
                </div>
                <div style="width: 45%; text-align: center; background: #fffcf2; border: 1px dashed #ffd100; padding: 20px; border-radius: 8px;">
                    <p style="margin: 0 0 40px 0; font-weight: bold; color: #2c3e50;">Signature / Empreinte du R??cepteur</p>
                    <p style="margin: 0; color: #94a3b8; font-size: 12px;">(Je confirme la bonne r??ception)</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
                <p style="margin: 0; font-size: 11px; color: #94a3b8;">Document g??n??r?? automatiquement par le Syst??me de Gestion - BBTDH &copy; 2026</p>
            </div>
        </div>
    `;

    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     `${isCmd ? 'Commande' : (isDist ? 'Distribution' : 'Delivrance')}_${barcode}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(container).save();
};

window.exportToExcel = async function(tableId, fileName) {
    if(typeof XLSX === 'undefined') {
        window.showCustomDialog({ title: "Oups", msg: "La biblioth??que d'exportation n'est pas encore charg??e.", icon: 'fa-triangle-exclamation' });
        return;
    }
    var wb = XLSX.utils.table_to_book(document.getElementById(tableId), {sheet: "Data"});
    XLSX.writeFile(wb, fileName + ".xlsx");
};

window.printPage = function() {
    window.print();
};

window.deleteUser = async function(email) {
    const confirm = await window.showCustomDialog({
        title: "Confirmation",
        msg: `Voulez-vous vraiment supprimer l'utilisateur ${email} ?`,
        type: 'confirm',
        icon: 'fa-user-minus'
    });
    
    if(confirm) {
        try {
            await _supabase.from('users').delete().eq('email', email);
            await syncUsers();
            window.renderView('users');
            showToast("Utilisateur supprim??");
        } catch(e) { console.error(e); }
    }
};

window.addUser = async function() {
    const emailInput = await window.showCustomDialog({ title: "Nouvel Utilisateur", msg: "Entrez l'email (Login):", type: 'prompt', defaultValue: "@masef.com", icon: 'fa-user-plus' });
    if(!emailInput) return;
    const email = emailInput.toLowerCase().trim();
    
    const nameFr = await window.showCustomDialog({ title: "Nom (FR)", msg: "Entrez le nom en fran??ais:", type: 'prompt', icon: 'fa-signature' });
    if(!nameFr) return;
    const nameAr = await window.showCustomDialog({ title: "?????????? (AR)", msg: "???????? ?????????? ????????????????:", type: 'prompt', defaultValue: nameFr, icon: 'fa-signature' });
    const pass = await window.showCustomDialog({ title: "Mot de passe", msg: "D??finissez un mot de passe:", type: 'prompt', defaultValue: "123456", icon: 'fa-key' });
    const role = await window.showCustomDialog({ title: "R??le", msg: "R??le (admin / pharmacy):", type: 'prompt', defaultValue: "pharmacy", icon: 'fa-user-shield' });
    const pharmId = role === 'pharmacy' ? await window.showCustomDialog({ title: "Pharmacie", msg: "ID Pharmacie (1, 2, 3, 4):", type: 'prompt', defaultValue: "1", icon: 'fa-hospital' }) : null;

    try {
        const { error } = await _supabase.from('users').insert([{
            email, 
            password: pass, 
            role, 
            name_fr: nameFr, 
            name_ar: nameAr,
            pharmacy_id: pharmId ? parseInt(pharmId) : null
        }]);

        if (error) throw error;

        await syncUsers();
        if (activeView === 'users') window.renderView('users');
        showToast("Utilisateur ajout?? avec succ??s");
    } catch(e) { 
        console.error(e); 
        window.showCustomDialog({ title: "Erreur", msg: "L'email est peut-??tre d??j?? utilis??.", icon: 'fa-circle-exclamation' });
    }
};

window.editUser = async function(oldEmail) {
    const user = window.userDatabase[oldEmail];
    if(!user) {
        showToast("Utilisateur introuvable", "error");
        return;
    }
    
    const currentPass = user.pass || user.password || "";
    const newEmail = await window.showCustomDialog({ title: "Modifier Email", msg: "Identifiant de connexion:", type: 'prompt', defaultValue: oldEmail, icon: 'fa-user-tag' });
    if(newEmail === null) return; // User cancelled

    const newNameFr = await window.showCustomDialog({ title: "Modifier Nom (FR)", msg: "Nom fran??ais:", type: 'prompt', defaultValue: (user.name && user.name.fr) || "", icon: 'fa-signature' });
    if(newNameFr === null) return; 
    const newNameAr = await window.showCustomDialog({ title: "?????????? ?????????? (AR)", msg: "?????????? ????????????????:", type: 'prompt', defaultValue: (user.name && user.name.ar) || "", icon: 'fa-signature' });
    const newPass = await window.showCustomDialog({ title: "Mot de passe", msg: "Laisser vide pour ne pas changer:", type: 'prompt', defaultValue: currentPass, icon: 'fa-key' });
    const newRole = await window.showCustomDialog({ title: "Modifier R??le", msg: "admin / pharmacy:", type: 'prompt', defaultValue: user.role, icon: 'fa-user-shield' });
    let newPharmId = null;
    if(newRole === 'pharmacy') {
        newPharmId = await window.showCustomDialog({ title: "Pharmacie", msg: "ID (1, 2, 3...):", type: 'prompt', defaultValue: String(user.pharmacyId || "1"), icon: 'fa-hospital' });
    }

    try {
        const updateData = {
            email: (newEmail || oldEmail).toLowerCase().trim(),
            role: newRole,
            name_fr: newNameFr,
            name_ar: newNameAr,
            pharmacy_id: newPharmId ? parseInt(newPharmId) : null
        };
        // Only update password if changed
        if(newPass && newPass !== currentPass) {
            updateData.password = newPass;
        }
        
        // Use DB id if available (most reliable), fallback to email
        const { error } = user.id 
            ? await _supabase.from('users').update(updateData).eq('id', user.id)
            : await _supabase.from('users').update(updateData).eq('email', oldEmail);
        
        if (error) throw error;
        
        // Full reload to ensure we get latest data from server
        await loadDataFromSupabase();
        await syncUsers();
        window.renderView('users');
        showToast("Utilisateur mis ?? jour avec succ??s");
    } catch(e) { 
        console.error("editUser error:", e); 
        window.showCustomDialog({ title: "Erreur", msg: e.message || "Impossible de mettre ?? jour le compte.", icon: 'fa-circle-exclamation' });
    }
};

window.migrateUsersToCloud = async function() {
    const defaultUsersList = [
        { email: 'admin@masef.com', password: '123456', role: 'admin', name_ar: '???????????? ??????????????', name_fr: 'Directeur Central' },
        { email: 'ahmed@masef.com', password: '123456', role: 'pharmacy', pharmacy_id: 1, name_ar: '????????', name_fr: 'Ahmed' },
        { email: 'samir@masef.com', password: '123456', role: 'pharmacy', pharmacy_id: 2, name_ar: '????????', name_fr: 'Samir' },
        { email: 'yousef@masef.com', password: '123456', role: 'pharmacy', pharmacy_id: 3, name_ar: '????????', name_fr: 'Yousef' },
        { email: 'omar@masef.com', password: '123456', role: 'pharmacy', pharmacy_id: 4, name_ar: '??????', name_fr: 'Omar' },
    ];
    
    try {
        await _supabase.from('users').upsert(defaultUsersList, { onConflict: 'email' });
        await syncUsers();
        window.renderView('users');
        showToast("Comptes migr??s vers le Cloud !");
    } catch(e) { console.error(e); }
};

// Pharmacy Management Functions
window.addPharmacy = async function() {
    const nameFr = await window.showCustomDialog({ title: "Nouvelle Pharmacie", msg: "Nom en fran??ais:", type: 'prompt', icon: 'fa-hospital' });
    if(!nameFr) return;
    const nameAr = await window.showCustomDialog({ title: "???????????? ??????????", msg: "?????????? ????????????????:", type: 'prompt', defaultValue: nameFr, icon: 'fa-hospital' });
    if(!nameAr) return;
    const color = await window.showCustomDialog({ title: "Couleur", msg: "Code couleur (ex: #047857):", type: 'prompt', defaultValue: "#047857", icon: 'fa-palette' });

    try {
        const { error } = await _supabase.from('pharmacies').insert([{
            name_fr: nameFr,
            name_ar: nameAr,
            color: color || "#047857"
        }]);
        if (error) throw error;
        await loadDataFromSupabase();
        renderView('manage_pharmacies');
        showToast("Pharmacie ajout??e");
    } catch(e) { console.error(e); window.showCustomDialog({ title: "Erreur", msg: "Impossible d'ajouter la pharmacie.", icon: 'fa-circle-exclamation' }); }
};

window.editPharmacy = async function(id) {
    // Search with both number and string key to handle HTML attribute type mismatch
    const numId = parseInt(id);
    const p = state.pharmacies[numId] || state.pharmacies[String(numId)] || state.pharmacies[id];
    
    if(!p) {
        console.error("editPharmacy: ID received:", id, "| parseInt:", numId, "| Available keys:", Object.keys(state.pharmacies));
        window.showCustomDialog({ title: "Erreur", msg: "Pharmacie introuvable. Veuillez rafra??chir la page.", icon: 'fa-circle-exclamation' });
        return;
    }

    const nameFr = (p.name && p.name.fr) || "";
    const nameAr = (p.name && p.name.ar) || "";

    const newNameFr = await window.showCustomDialog({ 
        title: "Modifier Nom (FR)", 
        msg: "Nouveau nom fran??ais:", 
        type: 'prompt', 
        defaultValue: nameFr, 
        icon: 'fa-pen-to-square' 
    });
    if(newNameFr === null) return;

    const newNameAr = await window.showCustomDialog({ 
        title: "?????????? ?????? ????????????????", 
        msg: "?????????? ???????????? ????????????:", 
        type: 'prompt', 
        defaultValue: nameAr, 
        icon: 'fa-pen-to-square' 
    });
    if(newNameAr === null) return;

    const newColor = await window.showCustomDialog({ 
        title: "Modifier Couleur", 
        msg: "Code couleur (ex: #047857):", 
        type: 'prompt', 
        defaultValue: p.color || "#047857", 
        icon: 'fa-palette' 
    });

    try {
        const { error } = await _supabase
            .from('pharmacies')
            .update({ name_fr: newNameFr, name_ar: newNameAr, color: newColor || p.color })
            .eq('id', numId);
        
        if (error) throw error;
        
        // Update local state immediately
        state.pharmacies[numId] = { ...p, name: { fr: newNameFr, ar: newNameAr }, color: newColor || p.color };
        
        await loadDataFromSupabase();
        window.renderView('manage_pharmacies');
        showToast("Pharmacie mise ?? jour avec succ??s");
    } catch(e) { 
        console.error("editPharmacy error:", e); 
        window.showCustomDialog({ title: "Erreur", msg: e.message || "Erreur de mise ?? jour.", icon: 'fa-circle-exclamation' }); 
    }
};

window.deletePharmacy = async function(id) {
    const confirm = await window.showCustomDialog({ title: "Suppression", msg: "Voulez-vous vraiment supprimer cette pharmacie ?", type: 'confirm', icon: 'fa-trash-can' });
    if(!confirm) return;
    try {
        const { error } = await _supabase.from('pharmacies').delete().eq('id', id);
        if (error) throw error;
        await loadDataFromSupabase();
        renderView('manage_pharmacies');
        showToast("Pharmacie supprim??e");
    } catch(e) { console.error(e); window.showCustomDialog({ title: "Erreur", msg: "Impossible de supprimer (liens existants).", icon: 'fa-circle-exclamation' }); }
};

// =============================================
// STARTUP: Initialize users after all functions are defined
// =============================================
if (_supabase) {
    syncUsers().then(() => {
        console.log("App ready. Users loaded:", Object.keys(window.userDatabase).length);
    });
}

 }
