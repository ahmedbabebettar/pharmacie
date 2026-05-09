# Documentation Technique - Système de Gestion de Pharmacie (BBTDH)

Ce document constitue la référence technique officielle pour le système BBTDH. Il détaille l'architecture, le schéma de données et les processus opérationnels du système.

## 🏗️ Architecture Technique

Le système est une Application Web Monopage (SPA) construite sans frameworks lourds pour maximiser la performance et la portabilité.

- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+).
- **Backend-as-a-Service**: Supabase (PostgreSQL, Auth, Realtime).
- **Bibliothèques Tierces**:
  - `Supabase JS SDK v2`: Communication avec la base de données et authentification.
  - `SheetJS (XLSX)`: Moteur d'importation/exportation Excel.
  - `html2pdf.js`: Génération de rapports PDF côté client.
  - `FontAwesome 6.4.0`: Système d'icônes.
  - `Google Fonts`: Cairo (Arabe) & Inter (Latin).

## 🗄️ Schéma de la Base de Données (Supabase)

Le système repose sur une base de données PostgreSQL structurée pour la traçabilité complète des stocks.

### 1. `pharmacies`
Définit les points de distribution.
- `id`: Identifiant unique (1: Nasr, 2: Amal, 3: Chifa, 4: Rahma).
- `name_ar / name_fr`: Noms localisés.
- `color`: Code couleur hexadécimal pour l'UI.

### 2. `medicines` (Stock Central)
Référence globale de tous les médicaments.
- `id`: Identifiant unique (BigInt).
- `name`: Nom du médicament.
- `batch`: Numéro de lot (Contrainte d'unicité sur `name` + `batch`).
- `qty`: Quantité disponible au stock central.
- `price`: Prix d'achat unitaire.
- `entry_date / expiry_date`: Dates de péremption et d'entrée.

### 3. `pharmacy_stock`
État des stocks dans chaque pharmacie.
- `pharmacy_id`: Clé étrangère vers `pharmacies`.
- `medicine_id`: Clé étrangère vers `medicines`.
- `qty`: Quantité locale disponible.

### 4. `patients`
Registre des bénéficiaires.
- `name`: Nom complet.
- `national_id`: N° d'identité national.
- `phone`: Contact.
- `hospital`: Structure de suivi.

### 5. `dispensations`
Historique des délivrances aux patients.
- `patient_name`: Copie dénormalisée du nom (pour l'historique).
- `medicine_name`: Copie dénormalisée du nom du médicament.
- `qty`: Quantité délivrée.
- `pharmacy_id`: Origine de la délivrance.
- `dispensed_by`: Nom du responsable.

### 6. `transfers`
Mouvements entre le Stock Central et les pharmacies.
- `is_return`: Booléen (True si Pharmacie -> Central, False si Central -> Pharmacie).

### 7. `orders`
Demandes d'approvisionnement des pharmacies.
- `id`: Format `CMD-XXXXXX`.
- `status`: `PENDING`, `APPROVED`, `REJECTED`.
- `items`: JSONB contenant la liste des médicaments demandés.

### 8. `users`
Gestion des comptes et rôles.
- `role`: `admin` (Tout), `manager` (Stock Central), `pharmacy` (Délivrance locale).

## 🔐 Sécurité & Authentification

- **Authentification**: Gérée via Supabase Auth. Les emails `admin@masef.com` et `stock@masef.com` ont des rôles forcés par le système pour éviter les verrouillages.
- **RLS (Row Level Security)**: Activé sur Supabase pour garantir que les pharmaciens ne peuvent modifier que leurs propres stocks, tandis que l'Admin a une vue globale.
- **Firewall Global**: Une fonction de capture d'erreur (`window.addEventListener('error')`) empêche le plantage de l'interface en cas de rupture de connexion ou d'erreur de script.

## 🔄 Synchronisation en Temps Réel

Le système utilise les `Channels` de Supabase pour :
1.  **Sync Status**: Indicateur visuel dans le header (Connecté / Erreur / Sync).
2.  **Mises à jour Optimistes**: L'UI se met à jour instantanément (`optimisticUpdate()`), puis se synchronise en arrière-plan avec la base de données.
3.  **Realtime Broadcast**: Les nouvelles commandes apparaissent instantanément sur le dashboard de l'Admin.

## 🌍 Système de Traduction (I18n)

Les traductions sont gérées par deux objets dans `app.js` :
- `i18n`: Traductions dynamiques liées à la logique.
- `staticDict`: Traductions des éléments statiques du DOM (via l'attribut `data-i18n`).
- **Langues**: Français (`fr`) et Arabe (`ar`, avec support RTL).

## 🚀 Optimisation de la Performance

- **Pagination**: Implémentée côté serveur pour les tables volumineuses (`medicines`, `patients`, `records`).
- **RPC (Stored Procedures)**: Utilisation de `get_pharmacy_stats` et `get_total_stock` pour réduire le nombre de requêtes réseau lors du chargement du dashboard.
- **Indexation**: Index composites sur `(name, batch)` et `(pharmacy_id, medicine_id)` pour des recherches instantanées.

## 🛠️ Maintenance & Procédures

- **Consolidation**: Script de suppression des doublons basé sur le couple `(Nom, Lot)`.
- **Cache-Busting**: Utilisation de paramètres de version (`?v=XXX`) lors du chargement des fichiers JS/CSS pour garantir que les utilisateurs disposent toujours de la dernière version.

---
*Dernière mise à jour : 9 Mai 2026 - Migration complète Supabase Cloud.*
