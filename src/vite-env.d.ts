/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_FORM_URL: string;
  readonly VITE_CONTACT_FORM_NAME: string;
  readonly VITE_CONTACT_FORM_PRONOUNS: string;
  readonly VITE_CONTACT_FORM_EMAIL: string;
  readonly VITE_CONTACT_FORM_PHONE: string;
  readonly VITE_CONTACT_FORM_SUBJECT: string;
  readonly VITE_CONTACT_FORM_MESSAGE: string;
  readonly VITE_EVENTS_CALENDAR: string;
  readonly VITE_NEWSLETTER_FORM_URL: string;
  readonly VITE_VENDOR_FORM_URL: string;
  readonly VITE_VOLUNTEER_FORM_URL: string;
  readonly VITE_NOMINATE_FORM_URL: string;
  readonly VITE_PAGEANT_FORM_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
