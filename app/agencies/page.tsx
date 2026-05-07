import type { Metadata } from 'next';
import agenciesConfig from '@/config/agencies';
import SurveyPage from '@/components/SurveyPage';

export const metadata: Metadata = { title: 'Agency & Client-Direct Technology Survey' };

export default function Page() {
  return <SurveyPage config={agenciesConfig} />;
}
