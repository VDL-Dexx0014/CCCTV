// ─── BROADCASTER SURVEY QUESTIONS — CANADIAN MARKET ─────────────────────────
// To make a question mandatory, set required: true.
// To make it optional, set required: false.
// ─────────────────────────────────────────────────────────────────────────────

import type { FormConfig } from '@/lib/types';
import { contactSection } from './shared';

const broadcastersConfig: FormConfig = {
  formType: 'broadcasters',
  title: 'Canadian Broadcaster Technology Survey',
  subtitle:
    'We are mapping how Canadian broadcasters manage CTV inventory, data, identity, and measurement today — and what the ideal future state looks like for the Canadian market. Your responses are confidential and will inform our ecosystem research. This survey takes approximately 10–15 minutes.',
  sheetTab: 'Broadcasters',
  sections: [
    contactSection,

    // ─── SECTION 1 ───────────────────────────────────────────────────────────
    {
      id: 'stack',
      title: 'Current Ad Tech Stack',
      description:
        'Tell us about the platforms and partners that make up your current Canadian CTV technology ecosystem.',
      questions: [
        {
          id: 'b_ad_servers',
          label: 'What CTV ad serving platform(s) are you currently using in Canada?',
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
          label: 'Which SSPs are you currently working with for programmatic CTV inventory in Canada?',
          type: 'checkbox-group',
          options: [
            'Magnite',
            'Index Exchange (Canadian HQ)',
            'PubMatic',
            'OpenX',
            'Amazon Publisher Services (APS)',
            'Xandr Monetize',
            'Freestar',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'b_dsps',
          label: 'Which DSPs do you have direct integrations or preferred deal structures with in the Canadian market?',
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
          id: 'b_avod_svod',
          label: 'Which streaming or AVOD/SVOD platforms do you operate or have inventory on in Canada?',
          type: 'checkbox-group',
          options: [
            'Crave (Bell Media)',
            'CBC Gem',
            'Global TV App (Corus)',
            'CTV App (Bell Media)',
            'Citytv App (Rogers)',
            'TVA+ / Noovo (Quebecor)',
            'Tubi Canada',
            'Pluto TV Canada',
          ],
          allowOther: true,
          required: false,
          helpText: 'Select all that apply.',
        },
        {
          id: 'b_stack_gaps',
          label: 'Are there platforms, integrations, or Canadian-specific capabilities missing from your current stack?',
          type: 'textarea',
          required: false,
          placeholder: 'Describe any gaps in your current Canadian CTV technology setup…',
        },
      ],
    },

    // ─── SECTION 2 ───────────────────────────────────────────────────────────
    {
      id: 'data_identity',
      title: 'Data, Identity & Collaboration',
      description:
        'Understanding how you manage and activate data — and how you navigate identity and privacy in the Canadian regulatory environment — is central to building a unified CTV picture.',
      questions: [
        {
          id: 'b_pipeda',
          label: 'How are you approaching data collection, consent, and audience activation in compliance with PIPEDA and Canada\'s privacy framework?',
          type: 'textarea',
          required: true,
          placeholder: 'Describe your approach to consent management, data handling, and PIPEDA compliance in CTV…',
        },
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
          id: 'b_data_residency',
          label: 'Are Canadian data residency requirements a factor in your technology decisions? How are you managing this?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. preference for Canadian or domestic data storage, impact on cloud provider choices, contractual requirements…',
        },
        {
          id: 'b_identity',
          label: 'What identity solutions are you currently using or actively exploring for the Canadian market?',
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
          label: 'How do you currently activate your first-party or subscriber data for audience targeting in Canada? What platforms or partnerships enable this?',
          type: 'textarea',
          required: true,
          placeholder: 'Describe your first-party data activation approach, platforms, and partnerships in the Canadian context…',
        },
        {
          id: 'b_data_partnerships',
          label: 'Are you participating in any data partnerships, consortiums, or cross-broadcaster collaborations in Canada?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. joint audience products with other Canadian broadcasters, shared identity frameworks, consortium memberships…',
        },
      ],
    },

    // ─── SECTION 3 ───────────────────────────────────────────────────────────
    {
      id: 'measurement',
      title: 'Measurement, Addressability & Canadian Currency',
      description:
        'We want to understand how success is defined, measured, and verified across your Canadian CTV inventory — including your relationship with Numeris and other measurement currencies.',
      questions: [
        {
          id: 'b_numeris',
          label: 'How are you currently using Numeris data in your CTV ad sales and campaign reporting? Where do you see gaps in Numeris coverage for digital and CTV inventory?',
          type: 'textarea',
          required: true,
          placeholder: 'Describe your use of Numeris, how it integrates with your CTV reporting, and where it falls short…',
        },
        {
          id: 'b_measurement_kpis',
          label: 'Beyond Numeris, how do you measure campaign success on CTV? Which KPIs are most important to your advertisers?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. reach, frequency capping, brand lift, attention, outcomes, viewability, cross-screen deduplication…',
        },
        {
          id: 'b_measurement_partners',
          label: 'Which additional measurement, attribution, or verification partners do you currently work with in Canada?',
          type: 'checkbox-group',
          options: [
            'Numeris',
            'Comscore Canada',
            'iSpot.tv',
            'Kantar Canada',
            'TVision',
            'VideoAmp',
            'Samba TV',
            'DoubleVerify',
            'IAS',
          ],
          allowOther: true,
          required: false,
          helpText: 'Select all that apply.',
        },
        {
          id: 'b_addressable',
          label: 'Do you currently support addressable advertising on your Canadian CTV inventory?',
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
          id: 'b_french_market',
          label: 'How are you approaching CTV advertising in the French-language Canadian market (Quebec)? Are there specific technology or measurement considerations for francophone audiences?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. French-language inventory sold separately, Quebec-specific targeting, TVA/Noovo partnerships, francophone audience data…',
        },
      ],
    },

    // ─── SECTION 4 ───────────────────────────────────────────────────────────
    {
      id: 'regulation_content',
      title: 'Canadian Content & Regulatory Considerations',
      description:
        'The Canadian broadcasting landscape is shaped by CRTC regulation and CanCon obligations. We want to understand how these factors influence your CTV technology and commercial strategy.',
      questions: [
        {
          id: 'b_crtc',
          label: 'How do CRTC regulations and Canadian content (CanCon) obligations affect your CTV technology decisions, inventory strategy, or programmatic approach?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. CanCon requirements influencing what inventory is available programmatically, restrictions on foreign ad tech platforms, regulatory uncertainty around streaming…',
        },
        {
          id: 'b_bill_c11',
          label: 'How are you preparing for or responding to the Online Streaming Act (Bill C-11) and its implications for CTV advertising and technology strategy?',
          type: 'textarea',
          required: false,
          placeholder: 'Describe your current understanding and preparation for Bill C-11 impacts…',
        },
        {
          id: 'b_foreign_competition',
          label: 'How does competition from global AVOD and streaming platforms (e.g. Netflix, Amazon, Disney+) affect your CTV inventory strategy and technology priorities in Canada?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. audience fragmentation, advertiser spend shifting, need for competitive ad tech capabilities…',
        },
      ],
    },

    // ─── SECTION 5 ───────────────────────────────────────────────────────────
    {
      id: 'vision',
      title: 'Challenges & Future Vision',
      description:
        'Share your honest perspective on where the friction lies in the Canadian CTV market and what an ideal future state looks like.',
      questions: [
        {
          id: 'b_challenges',
          label: 'What are the biggest technology challenges you face with your current Canadian CTV setup?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. smaller programmatic market scale vs US, fragmentation across Canadian SSPs, identity resolution, Numeris coverage gaps, workflow complexity…',
        },
        {
          id: 'b_ideal_stack',
          label: 'What would your ideal Canadian CTV ad tech stack look like in 12–24 months? Describe your target state across ad serving, data, identity, programmatic, and measurement.',
          type: 'textarea',
          required: true,
          placeholder: 'Describe the platforms, integrations, and capabilities you would want in place for the Canadian market…',
        },
        {
          id: 'b_freetext',
          label: 'Is there anything else you would like to share about your Canadian CTV technology strategy, priorities, or challenges?',
          type: 'textarea',
          required: false,
          placeholder: 'Any additional context, priorities, or things we should know about the Canadian market…',
        },
      ],
    },
  ],
};

export default broadcastersConfig;
