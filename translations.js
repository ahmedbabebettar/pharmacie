// translations.js — extracted from app.js
// All translation strings live here. app.js references window.i18n and window.staticDict.
// To add a new language: add a new key (e.g. 'wo' for Wolof) to both objects.

window.i18n = {
    ar: {
        page_dashboard: 'لوحة التحكم', page_central: 'المخزون المركزي', page_distribution: 'توزيع الأدوية للصيدليات', page_pharmacy: 'صيدلية',
        alert_low_stock: 'تنبيه: المخزون منخفض —', stat_total_meds: 'إجمالي الأدوية', stat_pharmacies: 'الصيدليات', stat_distributions: 'التوزيعات', stat_patients: 'المرضى',
        block_latest_dist: 'آخر التوزيعات', block_pharmacies: 'الصيدليات', patients_suffix: 'مريض', no_recent_dist: 'لا توجد توزيعات حديثة',
        search_placeholder: 'ابحث عن دواء...', add_med: 'إضافة دواء', th_med: 'الدواء', th_batch: 'الدفعة', th_qty: 'الكمية', th_entry: 'تاريخ الدخول', th_expiry: 'الصلاحية', th_status: 'الحالة',
        status_good: 'متوفر', status_low: 'منخفض', status_empty: 'نفذ', btn_transfer_new: 'عملية تحويل جديدة', trans_select_med: '-- اختر الدواء --', trans_select_pharm: '-- إلى الصيدلية --', trans_qty: 'الكمية', btn_transfer: 'تحويل',
        history_dist: 'سجل التوزيع', th_date: 'التاريخ', th_id: 'الرقم', th_to: 'إلى', alert_success: 'عملية ناجحة!', alert_error: 'خطأ: الكمية المطلوبة غير متوفرة',
        dispense_title: 'صرف دواء لمريض', patient_name: 'اسم المريض', btn_dispense: 'صرف', stock_available: 'المخزون المتوفر', history_dispense: 'سجل الصرف', th_patient: 'المريض',
        page_patients: 'المرضى المستفيدين', page_records: 'سجل الحركات العام', page_reports: 'التقارير والإحصائيات',
        btn_print: 'طباعة PDF', btn_excel: 'تصدير Excel', th_action: 'نوع العملية', action_add: 'إضافة للمركزي', action_transfer: 'تحويل', action_dispense: 'صرف',
        th_pharmacy: 'الصيدلية / الجهة', th_total_qty: 'إجمالي ما استلمه', th_worker: 'المسؤول',
        btn_import: 'استيراد من Excel', th_actions: 'إجراءات', confirm_delete: 'هل أنت متأكد من حذف هذا الدواء نهائياً؟', transfer_from: 'من:', transfer_to: 'إلى:', btn_return: 'إرجاع للمركزي',
        pending_returns_title: 'طلبات إرجاع الأدوية (بانتظار الموافقة)', btn_approve: 'موافقة', btn_reject: 'رفض', alert_request_sent: 'تم إرسال طلب الإرجاع لإدارة المستودع وبانتظار الموافقة.', btn_delete_selected: 'مسح المحدد',
        btn_import_patients: 'استيراد مرضى', th_patient_nid: 'الرقم الوطني', th_patient_phone: 'رقم الهاتف', th_patient_hospital: 'مستشفى المتابعة', error_unregistered_patient: 'يجب اختيار مريض معتمد من القائمة فقط.',
        nav_weekly_reports: 'التقارير الأسبوعية', th_beneficiaries: 'عدد المستفيدين', th_consumed_qty: 'الكمية المنصرفة', th_week_ending: 'نهاية الأسبوع (الأربعاء)', nav_my_register: 'سجلي (التحركات)',
        nav_analyses: 'التحليلات والتقارير الدورية', th_period: 'الفترة الزمنية', th_day: 'يومي', th_week: 'أسبوعي', th_month: 'شهري', th_year: 'سنوي',
        th_global_report: 'التقرير الإجمالي للأدوية', th_total_consumed: 'إجمالي المستهلك',
        insufficientStock: 'المخزون غير كافٍ لهذه العملية.',
        syncFailed: 'فشلت المزامنة. يرجى إعادة المحاولة.'
    },
    fr: {
        page_dashboard: 'Tableau de bord', page_central: 'Stock Central', page_distribution: 'Distribution', page_pharmacy: 'Pharmacie',
        alert_low_stock: 'Alerte: Stock Faible —', stat_total_meds: 'Total Méd.', stat_pharmacies: 'Pharmacies', stat_distributions: 'Distributions', stat_patients: 'Patients',
        block_latest_dist: 'Dernières dist.', block_pharmacies: 'Pharmacies', patients_suffix: 'pat.', no_recent_dist: 'Aucune dist.',
        search_placeholder: 'Rechercher...', add_med: 'Ajouter', th_med: 'Médicament', th_batch: 'Lot', th_qty: 'Quant.', th_entry: 'Date d\'entrée', th_expiry: 'Expiration', th_status: 'Statut',
        status_good: 'Disponible', status_low: 'Faible', status_empty: 'Rupture', btn_transfer_new: 'Nouveau transfert', trans_select_med: '-- Médicament --', trans_select_pharm: '-- Pharmacie --', trans_qty: 'Quantité', btn_transfer: 'Transférer',
        history_dist: 'Historique Dist.', th_date: 'Date', th_id: 'ID', th_to: 'Vers', alert_success: 'Opération réussie !', alert_error: 'Erreur: Stock insuffisant',
        dispense_title: 'Délivrer', patient_name: 'Patient', btn_dispense: 'Délivrer', stock_available: 'Stock Actuel', history_dispense: 'Historique', th_patient: 'Patient',
        page_patients: 'Patients Bénéficiaires', page_records: 'Registre des Opérations', page_reports: 'Rapports et Statistiques',
        btn_print: 'Imprimer PDF', btn_excel: 'Exporter Excel', th_action: 'Type d\'opération', action_add: 'Ajout Central', action_transfer: 'Transfert', action_dispense: 'Délivrance',
        th_pharmacy: 'Pharmacie / Dest.', th_total_qty: 'Total Reçu', th_worker: 'Responsable',
        btn_import: 'Importer d\'Excel', th_actions: 'Actions', confirm_delete: 'Êtes-vous sûr de supprimer ce médicament ?', transfer_from: 'De:', transfer_to: 'Vers:', btn_return: 'Retour Central',
        pending_returns_title: 'Demandes de retour (En attente)', btn_approve: 'Approuver', btn_reject: 'Refuser', alert_request_sent: 'Demande envoyée, en attente d\'approbation.', btn_delete_selected: 'Supprimer Sélection',
        btn_import_patients: 'Importer Patients', th_patient_nid: 'ID National', th_patient_phone: 'Téléphone', th_patient_hospital: 'Hôpital', error_unregistered_patient: 'Veuillez sélectionner un patient valide de la liste.',
        btn_add_med_row: 'Ajouter un médicament', btn_confirm_dist: 'Confirmer la distribution', select_pharm: '-- Sélectionner la pharmacie --',
        nav_weekly_reports: 'Rapports Hebdo', th_beneficiaries: 'Bénéficiaires', th_consumed_qty: 'Quantité Sortie', th_week_ending: 'Fin de semaine (Mercredi)', nav_my_register: 'Mon Registre',
        nav_analyses: 'Analyses & Rapports', th_period: 'Période', th_day: 'Quotidien', th_week: 'Hebdomadaire', th_month: 'Mensuel', th_year: 'Annuel',
        th_global_report: 'Rapport Global des Médicaments', th_total_consumed: 'Total Consommé',
        insufficientStock: 'Stock insuffisant pour cette opération.',
        syncFailed: 'La synchronisation a échoué. Veuillez réessayer.'
    }
};

window.staticDict = {
    ar: {
        login_title: 'تسجيل الدخول', login_subtitle: 'نظام إدارة المخزون', login_user: 'اسم المستخدم', login_pass: 'كلمة المرور', login_error: 'خطأ في تسجيل الدخول!', login_btn: 'دخول',
        brand_title: 'إدارة الصيدليات', brand_subtitle: 'MASEF',
        nav_dashboard: 'لوحة التحكم', nav_central: 'المخزون المركزي', nav_distribution: 'التوزيع', nav_admin_orders: 'الطلبيات', nav_patients: 'المرضى', nav_reports: 'السجلات', nav_history: 'التقارير',
        user_name: 'محمد أمين', user_role: 'مسؤول المخزون',
        add_med_title: 'إضافة عقار (المركزي)', add_med_name: 'اسم الدواء', add_med_batch: 'رقم التشغيلة', add_med_qty: 'الكمية المستلمة', add_med_entry: 'تاريخ الدخول', add_med_expiry: 'تاريخ الصلاحية', add_med_btn: 'إضافة',
        forgot_password: 'نسيت كلمة السر؟',
        secure_account: 'تأمين الحساب'
    },
    fr: {
        login_title: 'Connexion', login_subtitle: 'Gestion des Stocks', login_user: 'Identifiant', login_pass: 'Mot de passe', login_error: 'Identifiants incorrects!', login_btn: 'Se connecter',
        brand_title: 'Gestion des Pharmacies', brand_subtitle: 'MASEF',
        nav_dashboard: 'Tableau de bord', nav_central: 'Stock Central', nav_distribution: 'Distribution', nav_admin_orders: 'Commandes', nav_patients: 'Patients', nav_reports: 'Registres', nav_history: 'Rapports',
        user_name: 'Mohamed Amine', user_role: 'Admin Stock',
        add_med_title: 'Ajout Médicament', add_med_name: 'Médicament', add_med_batch: 'Lot', add_med_qty: 'Quant. reçue', add_med_entry: 'Date d\'entrée', add_med_expiry: 'Expiration', add_med_btn: 'Ajouter',
        page_expired: 'Stock Expiré (Périmés)', th_days_left: 'Jours restants', expired_tag: 'EXPIRÉ',
        forgot_password: 'Mot de passe oublié ?',
        secure_account: 'Sécuriser'
    }
};
