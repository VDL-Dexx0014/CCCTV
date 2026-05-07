interface Props {
  current: number; // 0-indexed (0 = first section, sections.length = review)
  total: number;   // total steps including the review step
  label: string;
}

export default function ProgressBar({ current, total, label }: Props) {
  const pct = Math.round(((current + 1) / total) * 100);

  return (
    <div className="mb-8">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</span>
        <span className="text-xs text-gray-400">
          {current + 1} of {total}
        </span>
      </div>
      <div className="h-1 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${Math.max(pct, 3)}%`, backgroundColor: 'var(--brand-cta)' }}
        />
      </div>
    </div>
  );
}
