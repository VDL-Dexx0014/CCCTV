'use client';

import { useState } from 'react';
import type { Section, FormData } from '@/lib/types';
import QuestionField from './QuestionField';

interface Props {
  section: Section;
  formData: FormData;
  onChange: (id: string, value: string | string[]) => void;
  onNext: () => void;
  onBack?: () => void;
  nextLabel: string;
}

export default function FormStep({ section, formData, onChange, onNext, onBack, nextLabel }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    for (const q of section.questions) {
      if (!q.required) continue;
      const val = formData[q.id];
      const empty = !val || (Array.isArray(val) ? val.length === 0 : String(val).trim() === '');
      if (empty) newErrors[q.id] = 'This question is required.';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      // Scroll to first error
      const firstId = Object.keys(newErrors)[0];
      document.getElementById(firstId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(id: string, value: string | string[]) {
    onChange(id, value);
    if (errors[id]) setErrors((prev) => { const e = { ...prev }; delete e[id]; return e; });
  }

  function handleNext() {
    if (validate()) onNext();
  }

  return (
    <div>
      {section.description && (
        <p className="text-sm text-gray-500 leading-relaxed mb-8">{section.description}</p>
      )}

      <div className="space-y-8">
        {section.questions.map((q) => (
          <div id={q.id} key={q.id}>
            <QuestionField
              question={q}
              value={formData[q.id]}
              error={errors[q.id]}
              onChange={(val) => handleChange(q.id, val)}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
        {onBack ? (
          <button type="button" onClick={onBack} className="btn-ghost">
            ← Back
          </button>
        ) : (
          <div />
        )}
        <button type="button" onClick={handleNext} className="btn-primary">
          {nextLabel} →
        </button>
      </div>
    </div>
  );
}
