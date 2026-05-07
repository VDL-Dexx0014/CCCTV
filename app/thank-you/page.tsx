import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Thank You — CTV Survey' };

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="w-36 h-10 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-[9px] uppercase tracking-widest text-gray-300">Your Logo</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mb-3 text-2xl font-bold text-gray-900">Thank you</h1>
        <p className="mx-auto max-w-md text-sm text-gray-500 leading-relaxed">
          Your responses have been submitted. We will be in touch as we develop our findings across the
          Canadian CTV ecosystem. You are welcome to close this window.
        </p>
        <Link href="/" className="mt-8 inline-block text-xs text-gray-400 hover:text-gray-600 transition-colors">
          ← Back to survey home
        </Link>
      </div>
    </main>
  );
}
