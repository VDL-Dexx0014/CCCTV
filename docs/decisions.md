# Decisions

Key architectural and product decisions with rationale. Update this when a decision is made — don't wait.

---

## 2026-05-07 — Google Sheets as data store (not a database)

**Decision:** Survey responses write directly to a Google Spreadsheet via a service account. No database.

**Why:** Zero infrastructure overhead for a time-boxed research project. Stakeholders can view and filter responses in Sheets without any tooling. Acceptable given low submission volume and no auth/query requirements.

---

## 2026-05-07 — Single shared spreadsheet, one tab per partner type

**Decision:** All three survey types (Broadcasters, Agencies, Technology Suppliers) write to the same Google Spreadsheet, each to their own tab (`config.sheetTab`).

**Why:** Easier for stakeholders to share a single Sheets link. Tab is auto-created on first submission so no manual setup needed.

---

## 2026-05-07 — Redirect to /thank-you on submit (not inline success state)

**Decision:** After a successful submission the user is redirected to `/thank-you` rather than showing an inline success component.

**Why:** Prevents accidental form resubmission on page refresh. Gives a clean shareable confirmation URL.

---

## 2026-05-07 — GOOGLE_CREDENTIALS (base64 JSON) preferred over individual env vars on Vercel

**Decision:** `GOOGLE_CREDENTIALS` (the full service account JSON, base64-encoded) is the preferred auth method; individual `GOOGLE_SERVICE_ACCOUNT_EMAIL` + `GOOGLE_PRIVATE_KEY` are a fallback.

**Why:** Vercel strips newlines from env var values, which breaks PEM private keys. Base64-encoding the whole JSON file sidesteps the issue entirely.
