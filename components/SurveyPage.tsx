import type { FormConfig } from '@/lib/types';
import SurveyForm from './SurveyForm';

interface Props {
  config: FormConfig;
}

export default function SurveyPage({ config }: Props) {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Header ── */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-6">
          {/* Logo placeholder — swap for <Image src="/logo.png" /> when ready */}
          <div className="w-36 h-10 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-[9px] uppercase tracking-widest text-gray-300">Your Logo</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* ── Form intro ── */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2" style={{ color: 'var(--brand-heading)' }}>
            {config.title}
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{config.subtitle}</p>
        </div>

        {/* ── Form card ── */}
        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <SurveyForm config={config} />
        </div>
      </div>
    </main>
  );
}
