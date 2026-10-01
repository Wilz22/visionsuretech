export const defaultLocale = 'en' as const;
export const locales = [
  { code: 'en', label: 'English', enabled: true },
  { code: 'es', label: 'Español', enabled: false },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', enabled: false },
] as const;

// Widen this union only when an approved dictionary and routes are ready.
export type Locale = typeof defaultLocale;
