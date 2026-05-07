'use client';

import { useState } from 'react';
import type { FormConfig, FormData } from '@/lib/types';
import ProgressBar from './ProgressBar';
import FormStep from './FormStep';
import ReviewStep from './ReviewStep';
import SuccessPage from './SuccessPage';

interface Props {
  config: FormConfig;
}

export default function SurveyForm({ config }: Props) {
  const { sections } = config;
  const REVIEW_STEP = sections.length;
  const TOTAL_STEPS = sections.length + 1; // sections + review

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [returnToReview, setReturnToReview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateField(id: string, value: string | string[]) {
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleNext() {
    if (returnToReview) {
      setReturnToReview(false);
      setStep(REVIEW_STEP);
    } else if (step === sections.length - 1) {
      setStep(REVIEW_STEP);
    } else {
      setStep((s) => s + 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleBack() {
    if (step === REVIEW_STEP) {
      setStep(sections.length - 1);
    } else if (step > 0) {
      setStep((s) => s - 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleEditSection(sectionIndex: number) {
    setReturnToReview(true);
    setStep(sectionIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: config.formType,
          data: formData,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? 'Submission failed. Please try again.');
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e: unknown) {
      setSubmitError(e instanceof Error ? e.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) return <SuccessPage />;

  const isReview = step === REVIEW_STEP;
  const progressLabel = isReview ? 'Review & Submit' : sections[step].title;

  return (
    <>
      <ProgressBar current={step} total={TOTAL_STEPS} label={progressLabel} />

      {isReview ? (
        <ReviewStep
          config={config}
          formData={formData}
          onEdit={handleEditSection}
          onBack={handleBack}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submitError={submitError}
        />
      ) : (
        <>
          <h2 className="text-lg font-bold text-gray-900 mb-5">{sections[step].title}</h2>
          <FormStep
            section={sections[step]}
            formData={formData}
            onChange={updateField}
            onNext={handleNext}
            onBack={step > 0 ? handleBack : undefined}
            nextLabel={
              returnToReview
                ? 'Back to Review'
                : step === sections.length - 1
                ? 'Review Answers'
                : 'Continue'
            }
          />
        </>
      )}
    </>
  );
}
