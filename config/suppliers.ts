// ─── TECHNOLOGY SUPPLIER (SSP) SURVEY QUESTIONS ──────────────────────────────
// To make a question mandatory, set required: true.
// To make it optional, set required: false.
// ─────────────────────────────────────────────────────────────────────────────

import type { FormConfig } from '@/lib/types';
import { contactSection } from './shared';

const suppliersConfig: FormConfig = {
  formType: 'technology-suppliers',
  title: 'Technology Supplier Survey',
  subtitle:
    'We are mapping how technology suppliers — including SSPs and data platforms — currently support broadcasters and buyers in CTV, and what the ecosystem needs from you next. Your responses are confidential and will inform our ecosystem research. This survey takes approximately 10–15 minutes.',
  sheetTab: 'Technology Suppliers',
  sections: [
    contactSection,

    // ─── SECTION 1 ───────────────────────────────────────────────────────────
    {
      id: 'integrations',
      title: 'Current Integrations & Deal Capabilities',
      description:
        'Tell us about the depth and breadth of your integration landscape — with both buyers and sellers — today.',
      questions: [
        {
          id: 's_dsp_integrations',
          label: 'Which DSPs are you currently integrated with for CTV inventory?',
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
          id: 's_broadcaster_partners',
          label:
            'Which broadcasters or content owners are you currently working with on CTV inventory? What does that relationship look like?',
          type: 'textarea',
          required: true,
          placeholder:
            'List key broadcaster and content owner relationships, and describe the nature of each (e.g. exclusive, preferred, standard)…',
        },
        {
          id: 's_deal_types',
          label: 'What deal types and buying mechanisms do you currently support?',
          type: 'checkbox-group',
          options: [
            'Open auction / RTB',
            'Private Marketplace (PMP)',
            'Preferred Deals',
            'Programmatic Guaranteed (PG)',
            'Direct IO',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 's_integration_depth',
          label:
            'How would you characterise the depth of your key DSP integrations? Are there meaningful gaps in capability — such as signal pass-through, audience data, or deal execution — with any major buyers?',
          type: 'textarea',
          required: false,
          placeholder:
            'e.g. bidstream quality, auction dynamics, audience signal pass-through, deal type support, latency…',
        },
      ],
    },

    // ─── SECTION 2 ───────────────────────────────────────────────────────────
    {
      id: 'data_identity',
      title: 'Data, Identity & Cleanroom Capabilities',
      description:
        'Data collaboration is increasingly central to CTV value creation. We want to understand where you stand today and where you are heading.',
      questions: [
        {
          id: 's_identity_support',
          label: 'What identity solutions do you currently support?',
          type: 'checkbox-group',
          options: [
            'UID2 / EUID',
            'LiveRamp RampID',
            'ID5',
            'ACR / device IDs',
            'Publisher first-party IDs',
            'Contextual targeting only',
            'None currently',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 's_data_collab',
          label:
            'How do you currently handle data collaboration capabilities — enabling broadcasters and buyers to share and activate audience data in a privacy-safe way?',
          type: 'textarea',
          required: true,
          placeholder:
            'Describe your current data collaboration approach, partnerships, tooling, or infrastructure…',
        },
        {
          id: 's_cleanroom_status',
          label: 'Do you offer or support cleanroom capabilities?',
          type: 'radio',
          options: [
            'Yes — proprietary cleanroom solution',
            'Yes — via a technology partner',
            'In development',
            'No',
          ],
          required: true,
        },
        {
          id: 's_cleanroom_detail',
          label:
            'If yes or in development, please describe your cleanroom offering — which technology, which partners, and what use cases does it enable?',
          type: 'textarea',
          required: false,
          placeholder:
            'e.g. audience matching with broadcasters, overlap analysis, campaign attribution in a cleanroom environment…',
        },
      ],
    },

    // ─── SECTION 3 ───────────────────────────────────────────────────────────
    {
      id: 'measurement_targeting',
      title: 'Measurement, Targeting & Supply Path',
      description:
        'How you support buyers and sellers on verification, targeting, and supply path optimisation is a key part of your value proposition.',
      questions: [
        {
          id: 's_measurement_partners',
          label:
            'What measurement and verification partnerships do you currently have in place?',
          type: 'checkbox-group',
          options: [
            'Nielsen ONE',
            'iSpot.tv',
            'Kantar',
            'TVision',
            'VideoAmp',
            'DoubleVerify',
            'IAS',
            'BARB',
            'Comscore',
          ],
          allowOther: true,
          required: false,
          helpText: 'Select all that apply.',
        },
        {
          id: 's_contextual',
          label:
            'How do you currently support contextual targeting capabilities on CTV inventory?',
          type: 'textarea',
          required: false,
          placeholder:
            'e.g. content signals passed in the bid stream, genre/channel targeting, contextual classification partners, IAB content taxonomy support…',
        },
        {
          id: 's_spo',
          label:
            'What is your approach to Supply Path Optimisation (SPO)? How do you position your path to premium CTV inventory with major agencies and buyers?',
          type: 'textarea',
          required: true,
          placeholder:
            'e.g. direct publisher relationships, reduced intermediary hops, fee transparency, preferred partner status with key DSPs, curation tools…',
        },
        {
          id: 's_audience_targeting',
          label:
            'How do you currently support audience-based targeting across CTV inventory — beyond contextual and demographic?',
          type: 'textarea',
          required: false,
          placeholder:
            'e.g. audience segment pass-through, first-party data activation for broadcasters, deterministic vs probabilistic matching…',
        },
      ],
    },

    // ─── SECTION 4 ───────────────────────────────────────────────────────────
    {
      id: 'vision',
      title: 'Ecosystem View, Gaps & Roadmap',
      description:
        'Your view from the supply side is critical to understanding where the CTV ecosystem needs to develop — and what role you can play.',
      questions: [
        {
          id: 's_ecosystem_gaps',
          label:
            'Where do you see the biggest gaps or untapped opportunities in the current CTV ecosystem — from a broadcaster, buyer, or platform perspective?',
          type: 'textarea',
          required: true,
          placeholder:
            'e.g. identity fragmentation, measurement currency conflicts, programmatic guarantee adoption, cleanroom interoperability, signal loss…',
        },
        {
          id: 's_innovations',
          label:
            'What innovations or new capabilities are you planning to bring to market in the next 12–24 months?',
          type: 'textarea',
          required: true,
          placeholder: 'Share your product roadmap priorities — what are you building and why?',
        },
        {
          id: 's_ideal_state',
          label:
            'What would your ideal state look like for fully supporting broadcasters\' inventory needs and buyers\' campaign objectives on CTV?',
          type: 'textarea',
          required: true,
          placeholder:
            'Describe your vision for the optimal SSP role in a mature, interoperable CTV ecosystem…',
        },
        {
          id: 's_partnerships',
          label:
            'Are there specific integration partnerships or technology developments that would most significantly accelerate your roadmap?',
          type: 'textarea',
          required: false,
          placeholder:
            'e.g. new DSP integrations, identity framework adoption, measurement collaborations, broadcaster data access…',
        },
        {
          id: 's_freetext',
          label:
            'Is there anything else you would like to share about your platform roadmap, capabilities, or view of the CTV ecosystem?',
          type: 'textarea',
          required: false,
          placeholder: 'Any additional context, priorities, or things we should know…',
        },
      ],
    },
  ],
};

export default suppliersConfig;
