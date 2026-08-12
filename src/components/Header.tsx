import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { FOUNDERS } from '@/data';

const LINKS = [
  { to: '/profiles', key: 'nav.founders' },
  { to: '/sectors', key: 'nav.sectors' },
  { to: '/timeline', key: 'nav.timeline' },
  { to: '/about', key: 'nav.about' },
];

/** Masthead wordmark. The rule under it is the publication's signature. */
function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span
        className={`font-display font-black tracking-[-0.045em] ${
          compact ? 'text-[1.35rem]' : 'text-[2rem] sm:text-[2.6rem]'
        }`}
      >
        FOUNDERS<span className="text-teal">WIRE</span>
      </span>
      {!compact && (
        <span className="mt-1.5 h-[3px] w-full bg-ink" aria-hidden="true" />
      )}
    </span>
  );
}

export function Header() {
  const { t, lang, setLang } = useI18n();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.3 });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 140);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Ticker headlines are drawn from the archive so the rail always reflects
  // what is actually on the site.
  const wire = FOUNDERS.slice(0, 14);

  return (
    <>
      {/* ── Wire rail ── */}
      <div className="wire-rail bg-ink text-white overflow-hidden">
        <div className="flex items-center">
          <span className="kicker shrink-0 bg-teal text-ink px-3 py-2 z-10">
            {t('ticker.label')}
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="wire-track flex w-max whitespace-nowrap">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                  {wire.map((f) => (
                    <Link
                      key={`${copy}-${f.slug}`}
                      to={`/profiles/${f.slug}`}
                      className="flex items-center gap-2.5 px-5 py-2 font-mono text-[11px] tracking-wide text-white/75 hover:text-teal transition-colors"
                    >
                      <span className="text-teal">▪</span>
                      <span className="font-semibold text-white">{f.name}</span>
                      <span className="text-white/40">{f.company}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Masthead ── */}
      <header className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 pt-6 pb-4">
            <Link to="/" aria-label={t('brand.name')}>
              <Wordmark />
            </Link>

            <div className="hidden md:flex items-center gap-5 pb-1">
              <p className="font-serif italic text-sm text-ink-3 max-w-[15rem] text-right leading-snug">
                {t('brand.tagline')}
              </p>
              <LangToggle lang={lang} setLang={setLang} />
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center gap-2 pb-1"
              aria-label={t('nav.menu')}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ── Section nav ── */}
        <nav className="border-y-2 border-ink bg-paper hidden md:block">
          <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
            <ul className="flex items-center gap-1">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `kicker inline-block px-4 py-3 transition-colors ${
                        isActive ? 'bg-ink text-white' : 'text-ink hover:text-accent'
                      }`
                    }
                  >
                    {t(l.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Scroll progress — sits under the sticky bar so both read as one unit */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[60]"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      {/* ── Sticky condensed bar ── */}
      <AnimatePresence>
        {stuck && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 inset-x-0 z-50 bg-paper/95 backdrop-blur-md border-b border-ink"
          >
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
              <Link to="/" aria-label={t('brand.name')}>
                <Wordmark compact />
              </Link>
              <nav className="hidden md:flex items-center gap-1">
                {LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `kicker px-3 py-2 transition-colors ${
                        isActive ? 'text-accent' : 'text-ink hover:text-accent'
                      }`
                    }
                  >
                    {t(l.key)}
                  </NavLink>
                ))}
                <span className="ml-2">
                  <LangToggle lang={lang} setLang={setLang} />
                </span>
              </nav>
              <button
                onClick={() => setOpen(true)}
                className="md:hidden"
                aria-label={t('nav.menu')}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-paper md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-5 border-b-2 border-ink">
              <Wordmark compact />
              <button onClick={() => setOpen(false)} aria-label={t('nav.close')}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-2 overflow-y-auto">
              {[{ to: '/', key: 'nav.home' }, ...LINKS].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <NavLink
                    to={l.to}
                    className="block hed text-3xl py-4 border-b border-rule"
                  >
                    {t(l.key)}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="px-4 py-6 border-t border-rule">
              <LangToggle lang={lang} setLang={setLang} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LangToggle({ lang, setLang }: { lang: 'en' | 'es'; setLang: (l: 'en' | 'es') => void }) {
  return (
    <div className="inline-flex items-center border border-ink" role="group">
      {(['en', 'es'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`kicker px-2.5 py-1.5 transition-colors ${
            lang === l ? 'bg-ink text-white' : 'text-ink hover:bg-sand'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
