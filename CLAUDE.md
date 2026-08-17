# CCCTV Partner Surveys — Claude Context

## What this is

A public Next.js 14 survey app for the **Canadian CTV Ecosystem Technology Survey**. Collects structured responses from three partner types (Broadcasters, Agencies, Technology Suppliers) and writes them to Google Sheets. No auth, no database.

## Stack

- Next.js 14 App Router · React 18 · TypeScript · Tailwind CSS
- Google Sheets API (`googleapis`) for data storage
- Deployed on Vercel (auto-deploys on push to main)

## Key files

| Path | Purpose |
|------|---------|
| `app/page.tsx` | Home — 3 partner-type selection cards |
| `app/{broadcasters,agencies,technology-suppliers}/page.tsx` | Survey routes — load config, render `<SurveyPage>` |
| `app/api/submit/route.ts` | POST endpoint — receives `{formType, data, submittedAt}`, writes to Sheets |
| `app/thank-you/` | Redirect target after submission |
| `config/` | Survey question configs per partner type + shared questions |
| `lib/sheets.ts` | Google Sheets integration — ensureTab, appendSubmission |
| `lib/types.ts` | TypeScript types: FormConfig, FormData, Question |
| `components/SurveyPage.tsx` | Main survey orchestrator |
| `components/SurveyForm.tsx` | Multi-step form state |

## Data flow

Home → select partner type → multi-step survey form → POST `/api/submit` → append row to Google Sheets tab → redirect `/thank-you`

Each partner type writes to its own tab in a single spreadsheet. Tab is auto-created; header row is auto-written on first submission.

## Env vars

```
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
GOOGLE_SPREADSHEET_ID
GOOGLE_CREDENTIALS   # preferred on Vercel — base64-encoded service account JSON
```

Service account key file: `ccctv-surveys-d0f45d1db0a5.json` (do not commit)

## Dev

```bash
npm run dev    # http://localhost:3000
npm run build
```
