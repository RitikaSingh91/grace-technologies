import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage/LegalPage';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'The terms that apply to the Grace Technologies website and services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      sections={[
        ['Use of this website', 'Information here is general and is not professional, legal or financial advice.'],
        [
          'Services',
          'Services are provided under a separate written agreement. Grace Technologies is not a bank, payment processor or licensed financial provider, and does not guarantee merchant account approval, search rankings or sales.',
        ],
        ['Demo projects', 'Case studies on this website are illustrative unless stated otherwise.'],
      ]}
    />
  );
}
