import Link from 'next/link';

const partners = [
  {
    href: '/broadcasters',
    title: 'Broadcasters',
    description:
      'CTV ad serving, SSP and DSP integrations, data and identity strategy, cleanrooms, measurement, and your vision for the ideal stack.',
    time: '10–15 min',
  },
  {
    href: '/agencies',
    title: 'Agency Groups & Client-Direct',
    description:
      'DSP buying workflows, audience data tools, cleanrooms, identity resolution, measurement, pain points, and your ideal unified CTV system.',
    time: '10–15 min',
  },
  {
    href: '/technology-suppliers',
    title: 'Technology Suppliers',
    description:
      'DSP and broadcaster integrations, cleanroom capabilities, identity support, supply path optimisation, ecosystem gaps, and your product roadmap.',
    time: '10–15 min',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ── Header ── */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          {/* Logo placeholder — replace with <Image> or your logo component */}
          <div className="w-36 h-10 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-[9px] uppercase tracking-widest text-gray-300">Your Logo</span>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ color: 'var(--brand-heading)' }}>
            CTV Ecosystem Technology Survey
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            We are conducting a structured mapping of how the CTV ecosystem operates today — spanning ad serving,
            programmatic infrastructure, data collaboration, identity, and measurement — and what an ideal future
            state looks like across broadcasters, agencies, and technology suppliers.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mt-3 max-w-2xl">
            Please select your partner type below to begin. All responses are confidential.
          </p>
        </div>

        {/* ── Partner cards ── */}
        <div className="space-y-3">
          {partners.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="flex items-center justify-between gap-6 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-400 hover:shadow-sm group"
            >
              <div>
                <h2 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700">
                  {p.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
                <p className="text-xs text-gray-400 mt-2">{p.time}</p>
              </div>
              <span className="shrink-0 text-gray-300 group-hover:text-gray-500 transition-colors text-xl">
                →
              </span>
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-12">
          Responses are confidential and used solely to inform CTV ecosystem research.
        </p>
      </div>
    </main>
  );
}
