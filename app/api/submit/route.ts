import { NextRequest, NextResponse } from 'next/server';
import { appendSubmission } from '@/lib/sheets';
import { formConfigs } from '@/config';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, data, submittedAt } = body;

    if (!formType || !data) {
      return NextResponse.json({ error: 'Missing formType or data.' }, { status: 400 });
    }

    const config = formConfigs[formType];
    if (!config) {
      return NextResponse.json({ error: `Unknown form type: ${formType}` }, { status: 400 });
    }

    await appendSubmission(config, data, submittedAt);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    console.error('[submit]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
