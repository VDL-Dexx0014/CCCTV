import type { Section } from '@/lib/types';

// Contact section prepended to every survey form.
// Toggle required: true/false per field as needed.
export const contactSection: Section = {
  id: 'contact',
  title: 'Your Details',
  description: 'Please provide your contact information. Your email is optional and used only for follow-up.',
  questions: [
    {
      id: 'contact_name',
      label: 'Full Name',
      type: 'text',
      required: true,
      placeholder: 'Jane Smith',
    },
    {
      id: 'contact_org',
      label: 'Organisation',
      type: 'text',
      required: true,
      placeholder: 'Company or organisation name',
    },
    {
      id: 'contact_role',
      label: 'Job Title / Role',
      type: 'text',
      required: true,
      placeholder: 'e.g. Head of Programmatic',
    },
    {
      id: 'contact_email',
      label: 'Email Address',
      type: 'email',
      required: false,
      placeholder: 'jane@company.com',
      helpText: 'Optional — used only if we need to follow up on your responses.',
    },
  ],
};
