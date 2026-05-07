// ─── AGENCY GROUPS & CLIENT-DIRECT SURVEY QUESTIONS — CANADIAN MARKET ────────
// To make a question mandatory, set required: true.
// To make it optional, set required: false.
// ─────────────────────────────────────────────────────────────────────────────

import type { FormConfig } from '@/lib/types';
import { contactSection } from './shared';

const agenciesConfig: FormConfig = {
  formType: 'agencies',
  title: 'Canadian Agency & Client-Direct Technology Survey',
  subtitle:
    'We are mapping how Canadian agencies and brand-direct buyers plan, activate, and measure CTV campaigns today — and what you need from the Canadian ecosystem to achieve your goals. Your responses are confidential and will inform our ecosystem research. This survey takes approximately 10–15 minutes.',
  sheetTab: 'Agencies',
  sections: [
    contactSection,

    // ─── SECTION 1 ───────────────────────────────────────────────────────────
    {
      id: 'buying_stack',
      title: 'Current CTV Buying Stack',
      description:
        'Tell us about the platforms and workflows you use to plan and activate CTV campaigns in Canada today.',
      questions: [
        {
          id: 'a_dsps',
          label: 'Which DSPs or buying platforms do you currently use for CTV in Canada?',
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
          id: 'a_buying_type',
          label: 'How do you primarily buy Canadian CTV inventory?',
          type: 'radio',
          options: [
            'Primarily programmatic (open auction / PMP)',
            'Primarily direct (IO-based with Canadian broadcasters)',
            'A mix of both — roughly equal',
            'Primarily programmatic guaranteed',
          ],
          required: true,
        },
        {
          id: 'a_canadian_broadcasters',
          label: 'Which Canadian broadcasters do you currently buy CTV inventory from — directly or programmatically?',
          type: 'checkbox-group',
          options: [
            'Bell Media (CTV, TSN, RDS, Crave)',
            'Corus Entertainment (Global, W Network, Specialty)',
            'CBC / Radio-Canada',
            'Rogers Sports & Media (Sportsnet, Citytv)',
            'Quebecor / TVA / Noovo',
            'DHX / WildBrain',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'a_workflow',
          label: 'Walk us through your end-to-end Canadian CTV campaign workflow — from planning and brief through to trafficking, brand safety, and reporting.',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. planning tools used, how you target Canadian audiences, activation platforms, brand safety checks, reporting stack…',
        },
        {
          id: 'a_supply_access',
          label: 'How do you currently access Canadian broadcaster and premium CTV inventory? Do you buy directly from broadcasters, via SSPs, or both?',
          type: 'textarea',
          required: false,
          placeholder: 'Describe your Canadian supply access strategy and any preferred supply path arrangements…',
        },
      ],
    },

    // ─── SECTION 2 ───────────────────────────────────────────────────────────
    {
      id: 'data',
      title: 'Data, Audience Management & Identity',
      description:
        'Understanding your Canadian data stack, PIPEDA compliance approach, and identity strategy helps us identify how to connect buyer and seller data across the Canadian CTV ecosystem.',
      questions: [
        {
          id: 'a_pipeda',
          label: 'How does PIPEDA and Canada\'s privacy framework shape your data strategy and audience activation approach for CTV campaigns?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. consent management requirements, restrictions on data use, differences from US campaigns, impact on targeting capabilities…',
        },
        {
          id: 'a_dmp_tools',
          label: 'What data management, audience segmentation, or enrichment tools do you rely on for Canadian campaigns?',
          type: 'checkbox-group',
          options: [
            'LiveRamp Canada',
            'Nielsen Canada',
            'Environics Analytics',
            'Experian Canada',
            'Acxiom',
            'Epsilon',
            'Lotame',
            'Adobe Audience Manager',
            'First-party data only',
          ],
          allowOther: true,
          required: true,
          helpText: 'Select all that apply.',
        },
        {
          id: 'a_canadian_audiences',
          label: 'How do you build and target Canadian audiences for CTV campaigns? Are there specific Canadian data sources or audience signals you rely on?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. Environics segments, postal code targeting, language targeting for Quebec, telco data, broadcaster first-party data…',
        },
        {
          id: 'a_cleanroom_status',
          label: 'Are you using any cleanroom technologies for data collaboration with Canadian media owners or other partners?',
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
          label: 'What identity resolution tools or approaches are you currently using for Canadian CTV campaigns?',
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
      ],
    },

    // ─── SECTION 3 ───────────────────────────────────────────────────────────
    {
      id: 'measurement',
      title: 'Measurement, Attribution & Canadian Currency',
      description:
        'How you plan, prove, and report Canadian CTV campaign value — and your relationship with Numeris — is a key part of understanding the ecosystem.',
      questions: [
        {
          id: 'a_numeris',
          label: 'How do you currently use Numeris data in your Canadian CTV planning and reporting? Where does it meet your needs and where does it fall short?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. Numeris as planning currency, gaps in digital/CTV coverage, how you reconcile Numeris with DSP reporting…',
        },
        {
          id: 'a_measurement',
          label: 'Beyond Numeris, how do you measure and attribute Canadian CTV campaign performance? Which KPIs are most important to your clients?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. reach and frequency, brand lift, attention, outcomes, share of voice, cross-screen deduplication…',
        },
        {
          id: 'a_measurement_partners',
          label: 'Which measurement or verification partners do you currently work with for Canadian campaigns?',
          type: 'checkbox-group',
          options: [
            'Numeris',
            'Comscore Canada',
            'Kantar Canada',
            'iSpot.tv',
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
          id: 'a_french_market',
          label: 'How do you approach CTV planning and buying for French-language Canadian audiences (Quebec)? Are there specific tools, partners, or challenges unique to this market?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. Quebec-specific buying approach, French-language targeting, TVA/Noovo relationships, francophone audience data sources…',
        },
        {
          id: 'a_linear_convergence',
          label: 'How are you approaching the convergence of linear TV and CTV planning and buying for Canadian clients? Where do you see the biggest opportunity?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. unified planning across Canadian broadcasters, cross-screen reach deduplication, total TV buying approach in Canada…',
        },
      ],
    },

    // ─── SECTION 4 ───────────────────────────────────────────────────────────
    {
      id: 'vision',
      title: 'Pain Points & Future Vision',
      description:
        'Your perspective on what is not working in the Canadian CTV market — and what an ideal future looks like — will help shape how the ecosystem develops.',
      questions: [
        {
          id: 'a_pain_points',
          label: 'What are the biggest pain points or frustrations in your current Canadian CTV workflow?',
          type: 'textarea',
          required: true,
          placeholder: 'e.g. smaller scale vs US market, Canadian broadcaster fragmentation, limited programmatic access to premium inventory, Numeris gaps, PIPEDA compliance complexity, frequency overdelivery across Canadian publishers…',
        },
        {
          id: 'a_canada_vs_us',
          label: 'Where does the Canadian CTV ecosystem lag behind the US market, and what would it take to close those gaps?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. programmatic maturity, data collaboration, identity infrastructure, measurement currency, supply path transparency…',
        },
        {
          id: 'a_integration_needs',
          label: 'Are there specific technology integrations, data partnerships, or workflow improvements that would significantly advance your Canadian CTV capability?',
          type: 'textarea',
          required: false,
          placeholder: 'e.g. better Canadian broadcaster first-party data access, unified Canadian identity framework, simplified programmatic access to premium Canadian inventory…',
        },
        {
          id: 'a_ideal_system',
          label: 'What would an ideal, unified Canadian CTV buying, data, and measurement system look like for your agency or client?',
          type: 'textarea',
          required: true,
          placeholder: 'Describe what you would want across planning, activation, Canadian audience data, identity, measurement, and reporting…',
        },
        {
          id: 'a_freetext',
          label: 'Is there anything else you would like to share about your Canadian CTV technology challenges, priorities, or ambitions?',
          type: 'textarea',
          required: false,
          placeholder: 'Any additional context, priorities, or things we should know about the Canadian market…',
        },
      ],
    },
  ],
};

export default agenciesConfig;
