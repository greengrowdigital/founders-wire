import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Bi, Lang } from '@/data/types';
import { DICT, format } from './dict';

const STORAGE_KEY = 'fw.lang';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  /** Pick the active language out of a bilingual data field. */
  pick: (value: Bi) => string;
};

const I18nContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es') return stored;
  // English is the masthead language. A returning reader's own choice is
  // honoured above, but browser locale does not get to pick for a first visit.
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((p) => (p === 'en' ? 'es' : 'en')), []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggle,
      t: (key, vars) => format(DICT[lang][key] ?? DICT.en[key] ?? key, vars),
      pick: (v) => v[lang] ?? v.en,
    }),
    [lang, setLang, toggle],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
