'use client';

import type { Question } from '@/lib/types';

interface Props {
  question: Question;
  value: string | string[] | undefined;
  error?: string;
  onChange: (value: string | string[]) => void;
}

export default function QuestionField({ question, value, error, onChange }: Props) {
  const { id, label, type, options, required, placeholder, helpText, allowOther } = question;

  const strValue = typeof value === 'string' ? value : '';
  const arrValue = Array.isArray(value) ? value : [];

  const isOtherChecked = arrValue.some((v) => v.startsWith('Other:') || v === 'Other');
  const otherText = arrValue.find((v) => v.startsWith('Other:'))?.replace(/^Other:\s*/, '') ?? '';

  function toggleCheckbox(opt: string) {
    if (arrValue.includes(opt)) {
      onChange(arrValue.filter((v) => v !== opt));
    } else {
      onChange([...arrValue, opt]);
    }
  }

  function toggleOther(checked: boolean) {
    const withoutOther = arrValue.filter((v) => !v.startsWith('Other:') && v !== 'Other');
    onChange(checked ? [...withoutOther, 'Other: '] : withoutOther);
  }

  function updateOtherText(text: string) {
    const withoutOther = arrValue.filter((v) => !v.startsWith('Other:') && v !== 'Other');
    onChange([...withoutOther, `Other: ${text}`]);
  }

  const inputClass = `form-input${error ? ' has-error' : ''}`;

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1 leading-snug">
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>

      {helpText && <p className="text-xs text-gray-400 mb-2">{helpText}</p>}

      {type === 'text' && (
        <input
          type="text"
          value={strValue}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}

      {type === 'email' && (
        <input
          type="email"
          value={strValue}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}

      {type === 'textarea' && (
        <textarea
          value={strValue}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={`${inputClass} resize-y min-h-[96px]`}
        />
      )}

      {type === 'radio' && options && (
        <div className="space-y-2 mt-1">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name={id}
                value={opt}
                checked={strValue === opt}
                onChange={() => onChange(opt)}
                className="form-radio"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
            </label>
          ))}
        </div>
      )}

      {type === 'checkbox-group' && options && (
        <div className="space-y-2 mt-1">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={arrValue.includes(opt)}
                onChange={() => toggleCheckbox(opt)}
                className="form-checkbox"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">{opt}</span>
            </label>
          ))}

          {allowOther && (
            <div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isOtherChecked}
                  onChange={(e) => toggleOther(e.target.checked)}
                  className="form-checkbox"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  Other (please specify)
                </span>
              </label>
              {isOtherChecked && (
                <input
                  type="text"
                  value={otherText}
                  onChange={(e) => updateOtherText(e.target.value)}
                  placeholder="Please specify…"
                  className="form-input mt-2 ml-7 w-[calc(100%-1.75rem)]"
                />
              )}
            </div>
          )}
        </div>
      )}

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
