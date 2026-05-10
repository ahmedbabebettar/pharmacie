// db.js — raw Supabase query wrappers, no business logic, no DOM
// Every function returns { data, error } matching the Supabase response shape.
// Uses window._supabase (global Supabase client set in app.js).

// ── MEDICINES ──────────────────────────────────────────────────────────────

async function getMedicines(page = 1, pageSize = 25, search = '') {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    let q = window._supabase
        .from('medicines')
        .select('id, name, batch, qty, entry_date, expiry_date, price', { count: 'exact' })
        .order('name', { ascending: true })
        .range(from, to);
    if (search) q = q.ilike('name', `%${search}%`);
    return q;
}

async function getMedicineById(id) {
    return window._supabase.from('medicines').select('*').eq('id', id).single();
}

async function insertMedicine(medicine) {
    return window._supabase.from('medicines').insert([medicine]).select();
}

async function updateMedicine(id, fields) {
    return window._supabase.from('medicines').update(fields).eq('id', id);
}

async function deleteMedicine(id) {
    return window._supabase.from('medicines').delete().eq('id', id);
}

async function getCentralStock() {
    return window._supabase
        .from('medicines')
        .select('id, name, batch, qty, expiry_date')
        .order('name', { ascending: true });
}

// ── PHARMACY STOCK ─────────────────────────────────────────────────────────

async function getPharmacyStock(pharmacyId) {
    return window._supabase
        .from('pharmacy_stock')
        .select('*, medicines(id, name, batch, expiry_date)')
        .eq('pharmacy_id', pharmacyId);
}

async function upsertPharmacyStock(pharmacyId, medicineId, qty) {
    return window._supabase
        .from('pharmacy_stock')
        .upsert({ pharmacy_id: pharmacyId, medicine_id: medicineId, qty },
                 { onConflict: 'pharmacy_id,medicine_id' });
}

// ── PATIENTS ───────────────────────────────────────────────────────────────

async function getPatients(page = 1, pageSize = 25, search = '') {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    let q = window._supabase
        .from('patients')
        .select('id, name, national_id, phone, hospital', { count: 'exact' })
        .is('deleted_at', null)
        .order('name', { ascending: true })
        .range(from, to);
    if (search) q = q.or(`name.ilike.%${search}%,national_id.ilike.%${search}%`);
    return q;
}

async function getPatientById(id) {
    return window._supabase.from('patients').select('*').eq('id', id).single();
}

async function insertPatient(patient) {
    return window._supabase.from('patients').insert([patient]).select();
}

async function updatePatient(id, fields) {
    return window._supabase.from('patients').update(fields).eq('id', id);
}

async function softDeletePatient(id) {
    return window._supabase
        .from('patients')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', id);
}

// ── DISPENSATIONS ──────────────────────────────────────────────────────────

async function getDispensations(pharmacyId, page = 1, pageSize = 25, filters = {}) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    let q = window._supabase
        .from('dispensations')
        .select('date, patient_name, medicine_name, qty, pharmacy_id, dispensed_by, reference',
                { count: 'exact' })
        .order('date', { ascending: false })
        .range(from, to);
    if (pharmacyId) q = q.eq('pharmacy_id', pharmacyId);
    if (filters.patientName) q = q.ilike('patient_name', `%${filters.patientName}%`);
    if (filters.from) q = q.gte('date', filters.from);
    if (filters.to) q = q.lte('date', filters.to);
    return q;
}

async function insertDispensation(data) {
    return window._supabase.from('dispensations').insert(Array.isArray(data) ? data : [data]);
}

// ── TRANSFERS ──────────────────────────────────────────────────────────────

async function getTransfers(filters = {}) {
    let q = window._supabase
        .from('transfers')
        .select('*')
        .order('date', { ascending: false });
    if (filters.limit) q = q.limit(filters.limit);
    if (filters.pharmacyId) q = q.eq('pharmacy_id', filters.pharmacyId);
    if (filters.type) q = q.eq('type', filters.type);
    return q;
}

async function insertTransfer(data) {
    return window._supabase.from('transfers').insert(Array.isArray(data) ? data : [data]);
}

// ── ORDERS ─────────────────────────────────────────────────────────────────

async function getOrders(status = null, pharmacyId = null) {
    let q = window._supabase.from('orders').select('*').order('date', { ascending: false });
    if (status) q = q.eq('status', status);
    if (pharmacyId) q = q.eq('pharmacy_id', pharmacyId);
    return q;
}

async function insertOrder(order) {
    return window._supabase.from('orders').insert([order]);
}

async function updateOrderStatus(id, status) {
    return window._supabase.from('orders').update({ status }).eq('id', id);
}

// ── USERS ──────────────────────────────────────────────────────────────────

async function getUsers() {
    return window._supabase
        .from('users')
        .select('id, email, role, pharmacy_id, name_ar, name_fr')
        .order('email', { ascending: true });
}

async function updateUser(id, fields) {
    return window._supabase.from('users').update(fields).eq('id', id);
}

// ── RPC ────────────────────────────────────────────────────────────────────

async function rpcDispenseMedicine(params) {
    return window._supabase.rpc('check_and_dispense_exceptional', params);
}

async function rpcTransferStock(params) {
    return window._supabase.rpc('transfer_stock', params);
}

async function rpcApproveReturn(returnId, approvedBy) {
    return window._supabase.rpc('approve_return', { p_return_id: returnId, p_approved_by: approvedBy });
}

async function rpcRejectReturn(returnId, rejectedBy) {
    return window._supabase.rpc('reject_return', { p_return_id: returnId, p_rejected_by: rejectedBy });
}

async function rpcGetPharmacyStats(pharmacyId) {
    return window._supabase.rpc('get_pharmacy_stats', pharmacyId ? { p_pharmacy_id: pharmacyId } : {});
}

async function rpcGetTotalStock() {
    return window._supabase.rpc('get_total_stock');
}
