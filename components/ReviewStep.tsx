'use client';

import type { FormConfig, FormData } from '@/lib/types';

interface Props {
  config: FormConfig;
  formData: FormData;
  onEdit: (sectionIndex: number) => void;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  submitError: string | null;
}

function formatValue(val: string | string[] | undefined): React.ReactNode {
  if (!val || (Array.isArray(val) && val.length === 0)) {
    return <span className="italic text-gray-400">Not answered</span>;
  }
  if (Array.isArray(val)) return val.join(', ');
  return val;
}

export default function ReviewStep({
  config,
  formData,
  onEdit,
  onBack,
  onSubmit,
  isSubmitting,
  submitError,
}: Props) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed">
        Please review your answers below. Click <strong>Edit</strong> on any section to go back and make changes,
        then return here to submit.
      </p>

      <div className="space-y-6">
        {config.sections.map((section, idx) => (
          <div key={section.id} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 text-sm">{section.title}</h3>
              <button
                type="button"
                onClick={() => onEdit(idx)}
                className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Edit
              </button>
            </div>
            <div className="space-y-4">
              {section.questions.map((q) => (
                <div key={q.id}>
                  <p className="text-xs text-gray-400 mb-0.5 leading-snug">{q.label}</p>
                  <p className="text-sm text-gray-800 whitespace-pre-wrap">
                    {formatValue(formData[q.id])}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {submitError && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {submitError}
        </div>
      )}

      <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
        <button type="button" onClick={onBack} className="btn-ghost">
          ← Back
        </button>
        <button type="button" onClick={onSubmit} disabled={isSubmitting} className="btn-primary">
          {isSubmitting ? 'Submitting…' : 'Submit Survey'}
        </button>
      </div>
    </div>
  );
}
