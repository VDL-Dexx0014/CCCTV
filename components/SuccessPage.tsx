export default function SuccessPage() {
  return (
    <div className="py-16 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="mb-3 text-2xl font-bold text-gray-900">Thank you</h2>
      <p className="mx-auto max-w-md text-sm text-gray-500 leading-relaxed">
        Your responses have been submitted. We will be in touch as we develop our findings across the CTV
        ecosystem. You are welcome to close this window.
      </p>
    </div>
  );
}
