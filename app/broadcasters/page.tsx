import type { Metadata } from 'next';
import broadcastersConfig from '@/config/broadcasters';
import SurveyPage from '@/components/SurveyPage';

export const metadata: Metadata = { title: 'Broadcaster Technology Survey' };

export default function Page() {
  return <SurveyPage config={broadcastersConfig} />;
}
