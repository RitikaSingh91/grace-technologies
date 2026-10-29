import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage/LegalPage';
import { CONTACT_EMAIL } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Grace Technologies collects and uses the details you send in an enquiry.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        ['What we collect', 'When you send an enquiry we collect your name, email address, phone number and chosen service.'],
        ['How we use it', 'We use these details only to reply to your enquiry. We do not sell your information.'],
        ['Your rights', `You may ask to see, correct or delete your information by emailing ${CONTACT_EMAIL}.`],
      ]}
    />
  );
}
