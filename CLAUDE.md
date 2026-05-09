# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**BBTDH** is a pharmacy inventory management SPA (Single Page Application) for dialysis centers, branded as "Gestion des Pharmacies MASEF." It supports both French and Arabic (RTL) interfaces.

## Architecture

This is a **no-build, vanilla JS SPA** — there is no npm, no bundler, and no test framework. All logic lives in three files:

- [index.html](index.html) — DOM structure: login screen, sidebar nav, main content area
- [app.js](app.js) — ~5,200 lines of application logic (see breakdown below)
- [text.css](text.css) — Complete styling including RTL support

**Backend**: Supabase (PostgreSQL + Auth + Realtime). No server-side code; the browser talks directly to Supabase via the JS SDK.

### app.js Internal Structure

| Section | What it does |
|---|---|
| Supabase init + config | Client setup, table/channel constants |
| Auth & role system | Login, auto-login, session persistence, role checks (admin/manager/pharmacy) |
| i18n system | Two dictionaries: `i18n` (dynamic, fetched) and `staticDict` (hardcoded). `t(key)` for translation |
| State management | In-memory caches: `medicines`, `pharmacies`, `patients`, `transfers`, `dispensations` |
| Sync functions | `syncMedicines()`, `syncPharmacies()`, etc. — fetch from Supabase, update cache |
| View renderers | `renderDashboard()`, `renderCentralStock()`, `renderDistribution()`, etc. |
| Window exports | 100+ `window.xxx = function` bindings called from HTML `onclick` attributes |
| Real-time | Supabase Channels subscribed for live updates |

### Database Schema (8 tables)

`pharmacies` → `medicines` ↔ `pharmacy_stock` (junction)
`patients` → `dispensations` (medicine given to patient)
`transfers` (stock moved pharmacy↔pharmacy, includes return requests)
`orders` (pharmacy requests to central stock)
`users` (mirrors Supabase auth.users with role column)

All tables have **Row-Level Security (RLS)** enabled. Pharmacy-role users are scoped to their own `pharmacy_id`.

### Data Flow

1. Admin loads medicines into central stock → distributes to pharmacies via transfers
2. Pharmacy managers dispense medicines to patients (recorded in `dispensations`)
3. Return requests: pharmacy creates transfer with `type='return'`, status goes `pending → approved/rejected`
4. Orders: pharmacy submits order → admin approves and fulfills

## Development

**Local emulation** (optional): uses Supabase CLI with ports defined in [supabase/config.toml](supabase/config.toml):
- API: `http://127.0.0.1:54321`
- DB: `postgresql://postgres:postgres@127.0.0.1:54322/postgres`
- Studio: `http://127.0.0.1:54323`

**Database migrations**: SQL files in [supabase/migrations/](supabase/migrations/). The GitHub Actions workflow [.github/workflows/deploy-migrations.yml](.github/workflows/deploy-migrations.yml) auto-deploys migrations to Supabase Cloud on push to `main`.

To apply a new migration locally:
```
supabase db push
```

To add a new migration:
```
supabase migration new <migration_name>
```

**Cache busting**: CSS and JS are loaded with `?v=NNN` URL parameters in `index.html`. Increment the version number when deploying changes that need to bypass browser cache.

## Key Conventions

### Adding a new view/section
1. Add nav item in `index.html` sidebar
2. Add a `render<ViewName>()` function in `app.js`
3. Add translation keys to both `i18n` and `staticDict` (FR + AR)
4. Export any onclick handlers via `window.handlerName = function`

### Role checks
Use the global `currentUser.role` (values: `'admin'`, `'manager'`, `'pharmacy'`) and `currentPharmacyId` for scoping queries. RLS enforces this on the DB side, but UI gating uses these variables.

### Supabase queries
Prefer `.select()` with explicit column lists over `select('*')` to avoid Postgres errors when schema changes. Stored procedures (RPCs) are used for complex aggregations.

### Real-time
Channels are re-subscribed after auth. If adding a new realtime subscription, follow the pattern in the existing channel setup block and unsubscribe in the cleanup/logout flow.

### i18n
- `t('key')` looks up in `i18n` first, falls back to `staticDict`
- Arabic uses RTL layout via `dir="rtl"` on the body — test both directions when adding UI
- Translation keys use snake_case

## Supabase Environment Variables

The Supabase URL and anon key are hardcoded in `app.js` (top of file). For local dev, swap them with the local emulation values from `supabase/config.toml`. GitHub Actions secrets (`SUPABASE_ACCESS_TOKEN`, `SUPABASE_DB_PASSWORD`, `SUPABASE_PROJECT_ID`) are used only for migration deployment.
