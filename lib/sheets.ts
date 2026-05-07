import { google } from 'googleapis';
import type { FormConfig, FormData } from './types';

function getAuth() {
  // Prefer GOOGLE_CREDENTIALS (base64-encoded JSON file) — avoids all newline issues on Vercel.
  // Falls back to individual GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_PRIVATE_KEY if not set.
  let email: string;
  let key: string;

  if (process.env.GOOGLE_CREDENTIALS) {
    const json = JSON.parse(Buffer.from(process.env.GOOGLE_CREDENTIALS, 'base64').toString('utf8'));
    email = json.client_email;
    key = json.private_key;
  } else {
    email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? '';
    const rawKey = process.env.GOOGLE_PRIVATE_KEY ?? '';
    key = rawKey.includes('\\n') ? rawKey.replace(/\\n/g, '\n') : rawKey;
  }

  if (!email || !key) {
    throw new Error('Missing Google credentials. Set GOOGLE_CREDENTIALS (base64 JSON) in your environment.');
  }

  return new google.auth.GoogleAuth({
    credentials: { client_email: email, private_key: key },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

async function ensureTab(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string, tabName: string) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const existing = meta.data.sheets?.map((s) => s.properties?.title) ?? [];

  if (!existing.includes(tabName)) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: tabName } } }],
      },
    });
  }
}

export async function appendSubmission(config: FormConfig, data: FormData, submittedAt: string) {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  if (!spreadsheetId) throw new Error('GOOGLE_SPREADSHEET_ID is not set.');

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  await ensureTab(sheets, spreadsheetId, config.sheetTab);

  const allQuestions = config.sections.flatMap((s) => s.questions);

  // Write header row if the sheet is empty
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `'${config.sheetTab}'!A1:A1`,
  });

  if (!existing.data.values?.length) {
    const headers = ['Submitted At', ...allQuestions.map((q) => q.label)];
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'${config.sheetTab}'!A1`,
      valueInputOption: 'RAW',
      requestBody: { values: [headers] },
    });
  }

  // Build data row
  const row = [
    submittedAt,
    ...allQuestions.map((q) => {
      const val = data[q.id];
      if (Array.isArray(val)) return val.join('; ');
      return val ?? '';
    }),
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${config.sheetTab}'!A1`,
    valueInputOption: 'RAW',
    requestBody: { values: [row] },
  });
}
