import type { Metadata } from 'next';
import suppliersConfig from '@/config/suppliers';
import SurveyPage from '@/components/SurveyPage';

export const metadata: Metadata = { title: 'Technology Supplier Survey' };

export default function Page() {
  return <SurveyPage config={suppliersConfig} />;
}
