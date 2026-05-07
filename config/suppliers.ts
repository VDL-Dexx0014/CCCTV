// ─── TECHNOLOGY SUPPLIER (SSP) SURVEY QUESTIONS — CANADIAN MARKET ────────────
// To make a question mandatory, set required: true.
// To make it optional, set required: false.
// ─────────────────────────────────────────────────────────────────────────────

import type { FormConfig } from '@/lib/types';
import { contactSection } from './shared';

const suppliersConfig: FormConfig = {
  formType: 'technology-suppliers',
  title: 'Canadian CTV Technology Supplier Survey',
  subtitle:
    'We are mapping how technology suppliers currently support Canadian broadcasters and buyers in CTV, and what the Canadian ecosystem needs from you next. Your responses are confidential and will inform our ecosystem research. This survey takes approximately 10–15 minutes.',
  sheetTab: 'Technology Suppliers',
  sections: [
    contactSection,

    // ─── SECTION 1 ───────────────────────────────────────────────────────────
    {
      id: 'integrations',
      title: 'Current Canadian Integrations & Deal Capabilities',
      description:
        'Tell us about the depth and breadth of your integration landscape with Canadian broadcasters and buyers.',
      questions: [
        {
          id: 's_canada_presence',
          label: 'How would you describe your current presence and scale in the Canadian CTV market relative to your overall business?',
          type: 'radio',
          options: [
            'Canada is a primary market — significant dedicated resource and investment',
            'Canada is an important market — meaningful but not primary focus',
            'Canada is an emerging priority — growing investment',
            'Canada is currently a small part of our business',
          ],
          required: true,
        },
        {
          id: 's_dsp_integrations',
          label: 'Which DSPs are you currently integrated with for Canadian CTV inventory?',
          type: 'checkbox-group',
          options: [
            'The Trade Desk',
            'DV360 (Google)',
            'Amazon DSP',
            'Xandr / Microsoft Invest',
            'Yahoo DSP',
            'Samsung DSP',
            'Basis Technologies',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 's_broadcaster_partners',
          label: 'Which Canadian broadcasters or content owners are you currently working with on CTV inventory? What does that relationship look like?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. Bell Media, Corus, CBC/Radio-Canada, Rogers, Quebecor — and describe the nature of each relationship (exclusive, preferred, standard)…',
        },
        {
          id: 's_deal_types',
          label: 'What deal types and buying mechanisms do you currently support for Canadian inventory?',
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
          label: 'How would you characterise the depth of your DSP integrations specifically for Canadian CTV? Are there gaps in signal pass-through, audience data, or deal execution with Canadian supply?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. Canadian-specific bid stream quality, auction dynamics, deal type support, latency considerations for Canadian buyers…',
        },
      ],
    },

    // ─── SECTION 2 ───────────────────────────────────────────────────────────
    {
      id: 'data_identity',
      title: 'Data, Identity, Privacy & Cleanroom Capabilities',
      description:
        'Data collaboration in Canada involves specific regulatory requirements under PIPEDA. We want to understand where you stand today and how you support Canadian-compliant data activation.',
      questions: [
        {
          id: 's_pipeda',
          label: 'How does your platform support Canadian broadcasters and buyers in meeting PIPEDA obligations and Canadian privacy requirements around audience data and targeting?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. consent signal handling, data minimisation, Canadian data residency support, PIPEDA-compliant audience activation…',
        },
        {
          id: 's_data_residency',
          label: 'Do you offer Canadian data residency options? Is this a requirement your Canadian broadcaster or agency clients are raising?',
          type: 'radio',
          options: [
            'Yes — we offer Canadian data residency today',
            'In development — on our roadmap',
            'Not currently — but we\'re hearing demand for it',
            'Not currently — not a requirement we\'re seeing',
          ],
          required: true,
        },
        {
          id: 's_identity_support',
          label: 'What identity solutions do you currently support for Canadian CTV inventory?',
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
          label: 'How do you currently support data collaboration between Canadian broadcasters and buyers — enabling privacy-safe audience matching and activation?',
          type: 'textarea',
          required: true,
          placeholder: 'Describe your current data collaboration approach, partnerships, tooling, or infrastructure for the Canadian market…',
        },
        {
          id: 's_cleanroom_status',
          label: 'Do you offer or support cleanroom capabilities for Canadian clients?',
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
          label: 'If yes or in development, describe your cleanroom offering — which technology, which Canadian partners, and what use cases does it enable?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. audience matching with Canadian broadcasters, overlap analysis, campaign attribution in a privacy-safe environment…',
        },
      ],
    },

    // ─── SECTION 3 ───────────────────────────────────────────────────────────
    {
      id: 'measurement_targeting',
      title: 'Measurement, Targeting, Numeris & Supply Path',
      description:
        'How you support Canadian measurement standards, contextual and audience targeting, and supply path transparency is a key part of your value in the Canadian market.',
      questions: [
        {
          id: 's_numeris',
          label: 'How does your platform currently integrate with or support Numeris data for Canadian CTV planning and reporting? Do buyers or broadcasters ask you for Numeris-aligned reporting?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. Numeris data as a planning or targeting input, Numeris-aligned reach reporting, gaps in your Numeris integration…',
        },
        {
          id: 's_measurement_partners',
          label: 'What measurement and verification partnerships do you currently have in place for Canadian inventory?',
          type: 'checkbox-group',
          options: [
            'Numeris',
            'Comscore Canada',
            'iSpot.tv',
            'Kantar Canada',
            'TVision',
            'VideoAmp',
            'DoubleVerify',
            'IAS',
            'Samba TV',
          ],
          allowOther: true,
          required: false,
          helpText: 'Select all that apply.',
        },
        {
          id: 's_contextual',
          label: 'How do you support contextual targeting on Canadian CTV inventory — including French-language content in Quebec?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. content signals in the bid stream, English and French content classification, genre targeting, IAB content taxonomy support for Canadian content…',
        },
        {
          id: 's_spo',
          label: 'What is your approach to Supply Path Optimisation (SPO) in the Canadian market? How do you position your path to Canadian broadcaster inventory with major agencies and buyers?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. direct Canadian broadcaster relationships, preferred partner status with DSPs buying Canadian inventory, fee transparency, reduced hops to Canadian supply…',
        },
      ],
    },

    // ─── SECTION 4 ───────────────────────────────────────────────────────────
    {
      id: 'vision',
      title: 'Canadian Ecosystem View, Gaps & Roadmap',
      description:
        'Your view of what is working — and what is not — in Canadian CTV is critical to understanding how the ecosystem needs to develop.',
      questions: [
        {
          id: 's_canada_gaps',
          label: 'Where do you see the biggest gaps or untapped opportunities specifically in the Canadian CTV ecosystem — for broadcasters, buyers, or both?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. smaller market scale limiting programmatic investment, PIPEDA complexity vs US data strategies, Numeris currency fragmentation, identity infrastructure immaturity, French-language market underserved programmatically…',
        },
        {
          id: 's_canada_vs_us',
          label: 'In what ways does the Canadian CTV market require a meaningfully different approach than the US market from your perspective?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. regulatory differences, scale differences, broadcaster market structure, measurement currency, buyer sophistication, bilingual requirements…',
        },
        {
          id: 's_innovations',
          label: 'What innovations or new capabilities are you planning to bring to the Canadian market in the next 12–24 months?',
          type: 'textarea',
          required: true,
          placeholder: 'Share your Canadian market roadmap priorities — what are you building, launching, or investing in for Canada specifically?',
        },
        {
          id: 's_ideal_state',
          label: 'What would your ideal state look like for fully supporting Canadian broadcasters\' inventory needs and buyers\' campaign objectives on CTV?',
          type: 'textarea',
          required: true,
          placeholder: 'Describe your vision for the optimal technology supplier role in a mature, interoperable Canadian CTV ecosystem…',
        },
        {
          id: 's_partnerships',
          label: 'Are there specific Canadian integration partnerships, broadcaster relationships, or technology developments that would most significantly accelerate your Canadian roadmap?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. deeper integration with specific Canadian broadcasters, Canadian measurement partnerships, identity framework adoption in Canada…',
        },
        {
          id: 's_freetext',
          label: 'Is there anything else you would like to share about your platform\'s Canadian capabilities, roadmap, or view of the Canadian CTV ecosystem?',
          type: 'textarea',
          required: false,
          placeholder: 'Any additional context, priorities, or things we should know about your Canadian strategy…',
        },
      ],
    },
  ],
};

export default suppliersConfig;
