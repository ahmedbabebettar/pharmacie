-- Ajout colonne status sur la table patients
-- actif (défaut) : peut recevoir des médicaments
-- inactif : délivrance bloquée, seul l'admin peut réactiver

ALTER TABLE patients ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'actif';
UPDATE patients SET status = 'actif' WHERE status IS NULL OR status = '';
