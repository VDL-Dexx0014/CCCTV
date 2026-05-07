export type QuestionType = 'text' | 'email' | 'textarea' | 'radio' | 'checkbox-group';

export interface Question {
  id: string;
  label: string;
  type: QuestionType;
  options?: string[];
  // ─── Toggle required/optional here ───
  required: boolean;
  placeholder?: string;
  helpText?: string;
  allowOther?: boolean; // adds "Other (please specify)" option to checkbox-group
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export interface FormConfig {
  formType: string; // must match the URL slug and the key in config/index.ts
  title: string;
  subtitle: string;
  sheetTab: string; // name of the tab in Google Sheets
  sections: Section[];
}

export type FormData = Record<string, string | string[]>;
