// ─── BROADCASTER SURVEY QUESTIONS ────────────────────────────────────────────
// To make a question mandatory, set required: true.
// To make it optional, set required: false.
// ─────────────────────────────────────────────────────────────────────────────

import type { FormConfig } from '@/lib/types';
import { contactSection } from './shared';

const broadcastersConfig: FormConfig = {
  formType: 'broadcasters',
  title: 'Broadcaster Technology Survey',
  subtitle:
    'We are mapping how broadcasters manage CTV inventory, data, identity, and measurement today — and what the ideal future state looks like. Your responses are confidential and will inform our ecosystem research. This survey takes approximately 10–15 minutes.',
  sheetTab: 'Broadcasters',
  sections: [
    contactSection,

    // ─── SECTION 1 ───────────────────────────────────────────────────────────
    {
      id: 'stack',
      title: 'Current Ad Tech Stack',
      description:
        'Tell us about the platforms and partners that make up your current CTV technology ecosystem.',
      questions: [
        {
          id: 'b_ad_servers',
          label: 'What CTV ad serving platform(s) are you currently using?',
          type: 'checkbox-group',
          options: [
            'FreeWheel',
            'Google Ad Manager (GAM)',
            'Operative',
            'SpringServe',
            'Innovid',
            'Extreme Reach',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'b_ssps',
          label: 'Which SSPs are you currently working with for programmatic CTV inventory?',
          type: 'checkbox-group',
          options: [
            'Magnite',
            'PubMatic',
            'Index Exchange',
            'OpenX',
            'Amazon Publisher Services (APS)',
            'Xandr Monetize',
            'SpotX / Magnite CTV',
            'Freestar',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'b_dsps',
          label: 'Which DSPs do you have direct integrations or preferred deal structures with?',
          type: 'checkbox-group',
          options: [
            'The Trade Desk',
            'DV360 (Google)',
            'Amazon DSP',
            'Xandr / Microsoft Invest',
            'Yahoo DSP',
            'Samsung DSP',
            'Basis Technologies',
            'MediaMath',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'b_stack_gaps',
          label:
            'Are there platforms or integrations that are missing from your current stack that you would like to add?',
          type: 'textarea',
          required: false,
          placeholder: 'Describe any gaps in your current technology setup…',
        },
      ],
    },

    // ─── SECTION 2 ───────────────────────────────────────────────────────────
    {
      id: 'data_identity',
      title: 'Data, Identity & Collaboration',
      description:
        'Understanding how you manage and activate data — and how you handle identity in a post-cookie environment — is central to building a unified CTV picture.',
      questions: [
        {
          id: 'b_cleanroom_status',
          label: 'Do you have a cleanroom or data collaboration solution in place?',
          type: 'radio',
          options: [
            'Yes — in production',
            'Yes — currently piloting',
            'Exploring options',
            'No',
          ],
          required: true,
        },
        {
          id: 'b_cleanroom_detail',
          label: 'If yes or exploring, which cleanroom solution(s) are you using or evaluating?',
          type: 'checkbox-group',
          options: [
            'LiveRamp Clean Room',
            'AWS Clean Rooms',
            'Google PAIR / ADH',
            'InfoSum',
            'Snowflake Data Clean Room',
            'Habu',
          ],
          allowOther: true,
          required: false,
          helpText: 'Select all that apply. Leave blank if not applicable.',
        },
        {
          id: 'b_identity',
          label: 'What identity solutions are you currently using or actively exploring?',
          type: 'checkbox-group',
          options: [
            'LiveRamp RampID',
            'UID2 / EUID',
            'ID5',
            'Proprietary broadcaster ID',
            'ACR (Automatic Content Recognition) data',
            'None currently',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'b_first_party',
          label:
            'How do you currently activate your first-party or subscriber data for audience targeting? What platforms or partnerships enable this?',
          type: 'textarea',
          required: true,
          placeholder: 'Describe your first-party data activation approach, platforms, and partnerships…',
        },
        {
          id: 'b_data_partnerships',
          label:
            'Are you currently participating in any data partnerships, consortiums, or cross-broadcaster collaborations?',
          type: 'textarea',
          required: false,
          placeholder:
            'e.g. joint audience products, shared identity frameworks, consortium memberships…',
        },
      ],
    },

    // ─── SECTION 3 ───────────────────────────────────────────────────────────
    {
      id: 'measurement',
      title: 'Measurement, Addressability & Verification',
      description:
        'We want to understand how success is defined, measured, and verified across your CTV inventory — and where you see gaps.',
      questions: [
        {
          id: 'b_measurement_kpis',
          label:
            'How do you measure campaign success on CTV? Which KPIs are most important to your advertisers and to you internally?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. reach, frequency capping, brand lift, attention, outcomes, viewability…',
        },
        {
          id: 'b_measurement_partners',
          label: 'Which measurement, attribution, or verification partners do you currently work with?',
          type: 'checkbox-group',
          options: [
            'Nielsen ONE',
            'iSpot.tv',
            'Kantar',
            'TVision',
            'VideoAmp',
            'Samba TV',
            'BARB',
            'Comscore',
            'DoubleVerify',
            'IAS',
          ],
          allowOther: true,
          required: false,
          helpText: 'Select all that apply.',
        },
        {
          id: 'b_addressable',
          label: 'Do you currently support addressable advertising on your CTV inventory?',
          type: 'radio',
          options: [
            'Yes — at scale',
            'Yes — in pilot',
            'In development',
            'No',
          ],
          required: true,
        },
        {
          id: 'b_measurement_gaps',
          label: 'Where do you see the biggest gaps in your current measurement or verification setup?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. cross-screen attribution, outcome measurement, currency fragmentation…',
        },
      ],
    },

    // ─── SECTION 4 ───────────────────────────────────────────────────────────
    {
      id: 'vision',
      title: 'Challenges & Future Vision',
      description:
        'Share your honest perspective on where the friction lies today and what an ideal future state looks like for your CTV technology strategy.',
      questions: [
        {
          id: 'b_challenges',
          label:
            'What are the biggest technology challenges you face with your current CTV setup?',
          type: 'textarea',
          required: true,
          placeholder:
            'e.g. fragmentation across SSPs, identity resolution, measurement currency gaps, workflow complexity, demand-side access…',
        },
        {
          id: 'b_ideal_stack',
          label:
            'What would your ideal CTV ad tech stack look like in 12–24 months? Describe your target state across ad serving, data, identity, programmatic, and measurement.',
          type: 'textarea',
          required: true,
          placeholder: 'Describe the platforms, integrations, and capabilities you would want in place…',
        },
        {
          id: 'b_freetext',
          label:
            'Is there anything else you would like to share about your technology strategy, priorities, or challenges?',
          type: 'textarea',
          required: false,
          placeholder: 'Any additional context, priorities, or things we should know…',
        },
      ],
    },
  ],
};

export default broadcastersConfig;
