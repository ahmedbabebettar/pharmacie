// logic.js — pure functions, no DOM, no Supabase, no globals
// All functions attached to window.Logic for global access.
window.Logic = {};

/** Parse a date string in multiple formats (ISO, DD/MM/YYYY, YYYY-MM-DD) */
function _parseExpiryDate(d) {
    if (!d || d === '-') return new Date(8640000000000000); // treat missing as "never expires"
    const base = d.split('T')[0];
    const parts = base.split(/[-/]/);
    if (parts.length === 3) {
        if (parts[0].length === 4) return new Date(parts[0], parts[1] - 1, parts[2]);
        if (parts[2].length === 4) return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    return new Date(d);
}

/**
 * Sorts medicine batches by expiry date (First Expired First Out).
 * @param {Array} batches - array of objects with an `expiry` or `expiry_date` field
 * @returns {Array} new sorted array, earliest expiry first
 */
Logic.sortFEFO = function (batches) {
    return batches.slice().sort((a, b) => {
        const dateA = _parseExpiryDate(a.expiry || a.expiry_date);
        const dateB = _parseExpiryDate(b.expiry || b.expiry_date);
        return dateA - dateB;
    });
};

/**
 * Calculates how many days until a medicine expires.
 * @param {string} expiryDate - ISO or DD/MM/YYYY date string
 * @returns {number} positive = days remaining, negative = days past expiry
 */
Logic.daysUntilExpiry = function (expiryDate) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const exp = _parseExpiryDate(expiryDate);
    exp.setHours(0, 0, 0, 0);
    return Math.round((exp - now) / 86400000);
};

/**
 * Determines expiry status for UI display.
 * @param {string} expiryDate
 * @returns {'expired'|'critical'|'warning'|'ok'}
 */
Logic.getExpiryStatus = function (expiryDate) {
    const days = Logic.daysUntilExpiry(expiryDate);
    if (days < 0)  return 'expired';
    if (days < 30) return 'critical';
    if (days < 90) return 'warning';
    return 'ok';
};

/**
 * Calculates stock to decrement per batch using FEFO order.
 * Batches must already be sorted by Logic.sortFEFO (or equivalent).
 * @param {Array}  batches     - sorted array, each {id, qty, ...}
 * @param {number} totalNeeded - quantity to dispense
 * @returns {Array|null} [{id, take}] in FEFO order, or null if insufficient stock
 */
Logic.calculateFEFODecrement = function (batches, totalNeeded) {
    let remaining = totalNeeded;
    const result = [];
    for (const b of batches) {
        if (remaining <= 0) break;
        const take = Math.min(b.qty, remaining);
        result.push({ id: b.id, take });
        remaining -= take;
    }
    if (remaining > 0) return null; // insufficient stock
    return result;
};

/**
 * Generates a human-readable order reference ID (client-side fallback).
 * The DB-backed version uses window.getNextCounterValue.
 * @returns {string} format: CMD-XXXXXX
 */
Logic.generateOrderId = function () {
    return 'CMD-' + Date.now().toString().slice(-6);
};

/**
 * Formats a quantity with unit for display.
 * @param {number} qty
 * @param {string} lang - 'fr' or 'ar'
 * @returns {string}
 */
Logic.formatQty = function (qty, lang) {
    if (qty === null || qty === undefined || isNaN(qty)) return '-';
    return lang === 'ar' ? `${qty} وحدة` : `${qty} u.`;
};
