// ─── AGENCY GROUPS & CLIENT-DIRECT SURVEY QUESTIONS ──────────────────────────
// To make a question mandatory, set required: true.
// To make it optional, set required: false.
// ─────────────────────────────────────────────────────────────────────────────

import type { FormConfig } from '@/lib/types';
import { contactSection } from './shared';

const agenciesConfig: FormConfig = {
  formType: 'agencies',
  title: 'Agency & Client-Direct Technology Survey',
  subtitle:
    'We are mapping how agencies and brand-direct buyers plan, activate, and measure CTV campaigns today — and what you need from the ecosystem to achieve your goals. Your responses are confidential and will inform our ecosystem research. This survey takes approximately 10–15 minutes.',
  sheetTab: 'Agencies',
  sections: [
    contactSection,

    // ─── SECTION 1 ───────────────────────────────────────────────────────────
    {
      id: 'buying_stack',
      title: 'Current CTV Buying Stack',
      description:
        'Tell us about the platforms and workflows you use to plan and activate CTV campaigns today.',
      questions: [
        {
          id: 'a_dsps',
          label: 'Which DSPs or buying platforms do you currently use for CTV?',
          type: 'checkbox-group',
          options: [
            'The Trade Desk',
            'DV360 (Google)',
            'Amazon DSP',
            'Xandr / Microsoft Invest',
            'Yahoo DSP',
            'Samsung DSP',
            'Basis Technologies',
            'Amobee / Tremor',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'a_buying_type',
          label: 'How do you primarily buy CTV inventory?',
          type: 'radio',
          options: [
            'Primarily programmatic (open auction / PMP)',
            'Primarily direct (IO-based)',
            'A mix of both — roughly equal',
            'Primarily programmatic guaranteed',
          ],
          required: true,
        },
        {
          id: 'a_workflow',
          label:
            'Walk us through your end-to-end CTV campaign workflow — from planning and brief through to trafficking, brand safety, and reporting.',
          type: 'textarea',
          required: true,
          placeholder:
            'e.g. planning tools, audience targeting approach, activation platforms, brand safety checks, reporting stack…',
        },
        {
          id: 'a_supply_access',
          label:
            'How do you currently access broadcaster and premium CTV inventory? Do you work directly with broadcasters, via SSPs, or both?',
          type: 'textarea',
          required: false,
          placeholder: 'Describe how you access premium CTV supply and any preferred supply path arrangements…',
        },
      ],
    },

    // ─── SECTION 2 ───────────────────────────────────────────────────────────
    {
      id: 'data',
      title: 'Data, Audience Management & Identity',
      description:
        'Understanding your data stack and identity approach helps us identify how to best connect buyer and seller data across the CTV ecosystem.',
      questions: [
        {
          id: 'a_dmp_tools',
          label: 'What data management, audience segmentation, or enrichment tools do you rely on?',
          type: 'checkbox-group',
          options: [
            'LiveRamp',
            'Nielsen',
            'Experian',
            'Acxiom',
            'Epsilon',
            'IRI / Circana',
            'Lotame',
            'Adobe Audience Manager',
            'First-party data only',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'a_cleanroom_status',
          label:
            'Are you using any cleanroom technologies for data collaboration with media owners or other partners?',
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
          id: 'a_cleanroom_detail',
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
          id: 'a_identity',
          label: 'What identity resolution tools or approaches are you currently using for CTV?',
          type: 'checkbox-group',
          options: [
            'UID2 / EUID',
            'LiveRamp RampID',
            'ID5',
            'Hashed email / first-party ID matching',
            'Cookie-based (current)',
            'None currently',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'a_first_party',
          label:
            'How are you activating client first-party data in CTV campaigns today? What platforms enable this?',
          type: 'textarea',
          required: false,
          placeholder:
            'e.g. CRM onboarding, clean room matching with broadcasters, DSP first-party data uploads…',
        },
      ],
    },

    // ─── SECTION 3 ───────────────────────────────────────────────────────────
    {
      id: 'measurement',
      title: 'Measurement, Attribution & Linear Convergence',
      description:
        'How you define, prove, and report CTV campaign value is a key part of understanding the ecosystem.',
      questions: [
        {
          id: 'a_measurement',
          label:
            'How do you currently measure and attribute CTV campaign performance? Which KPIs are most important to your clients?',
          type: 'textarea',
          required: true,
          placeholder:
            'e.g. reach and frequency, brand lift, attention, outcomes/conversions, share of voice…',
        },
        {
          id: 'a_measurement_partners',
          label: 'Which measurement or verification partners do you currently work with?',
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
          id: 'a_linear_convergence',
          label:
            'How are you approaching the convergence of linear TV and CTV in your planning and buying? Where do you see the biggest opportunity or challenge?',
          type: 'textarea',
          required: false,
          placeholder:
            'e.g. unified planning tools, cross-screen reach deduplication, total TV buying, audience-based linear…',
        },
        {
          id: 'a_reporting_gaps',
          label:
            'Where do you see the biggest gaps in your current CTV reporting and attribution capabilities?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. cross-device attribution, incrementality, standardised metrics across publishers…',
        },
      ],
    },

    // ─── SECTION 4 ───────────────────────────────────────────────────────────
    {
      id: 'vision',
      title: 'Pain Points & Future Vision',
      description:
        'Your perspective on current gaps and the ideal future state will help shape how the ecosystem develops to better serve buyers.',
      questions: [
        {
          id: 'a_pain_points',
          label: 'What are the biggest pain points or frustrations in your current CTV workflow?',
          type: 'textarea',
          required: true,
          placeholder:
            'e.g. publisher fragmentation, supply path complexity, inconsistent measurement, limited data access from broadcasters, frequency overdelivery…',
        },
        {
          id: 'a_integration_needs',
          label:
            'Are there specific technology integrations, data partnerships, or workflow improvements that would significantly advance your CTV capability?',
          type: 'textarea',
          required: false,
          placeholder:
            'e.g. better broadcaster first-party data access, unified ID frameworks, simplified programmatic guaranteed pathways…',
        },
        {
          id: 'a_ideal_system',
          label:
            'What would an ideal, unified CTV buying, data, and measurement system look like for your agency or client? Describe your target state.',
          type: 'textarea',
          required: true,
          placeholder:
            'Describe what you would want across planning, activation, data access, identity, measurement, and reporting…',
        },
        {
          id: 'a_freetext',
          label:
            'Is there anything else you would like to share about your technology challenges, priorities, or ambitions?',
          type: 'textarea',
          required: false,
          placeholder: 'Any additional context, priorities, or things we should know…',
        },
      ],
    },
  ],
};

export default agenciesConfig;
