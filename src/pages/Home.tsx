import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ARCHIVE, BY_ERA, FOUNDERS, LANDO, LANDO_QUOTE } from '@/data';
import { SECTORS, SECTOR_BY_ID } from '@/data/types';
import { useI18n } from '@/i18n/I18nProvider';
import { FounderCard } from '@/components/FounderCard';
import { Monogram } from '@/components/Monogram';
import { SectionHead } from '@/components/SectionHead';

export default function Home() {
  const { t, pick } = useI18n();
  const leadSector = SECTOR_BY_ID[LANDO.sector];

  const grid = ARCHIVE.slice(0, 8);
  const mostRead = ARCHIVE.slice(8, 14);
  const era = BY_ERA.slice(0, 6);

  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      {/* ───────────── Lead story ───────────── */}
      <section className="pt-8 pb-12 border-b-2 border-ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <Monogram
                founder={LANDO}
                size="xl"
                className="w-full aspect-[4/3] sm:aspect-[16/10] object-[center_20%]"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="kicker inline-block bg-flag text-white px-2.5 py-1.5 mb-4">
                {t('home.lead.kicker')}
              </span>

              <h1 className="hed text-[clamp(2rem,5.2vw,3.6rem)]">{LANDO.name}</h1>

              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                {LANDO.company} · {pick(leadSector.label)} ·{' '}
                {t('profile.readtime', { n: LANDO.readMinutes })}
              </p>

              <p className="dek mt-5 text-[1.05rem] sm:text-[1.15rem]">{pick(LANDO.dek)}</p>

              <blockquote className="mt-6 border-l-2 border-teal pl-5">
                <p className="font-display text-[1.15rem] sm:text-[1.3rem] font-semibold leading-snug tracking-[-0.015em]">
                  “{pick(LANDO_QUOTE)}”
                </p>
              </blockquote>

              <Link
                to={`/profiles/${LANDO.slug}`}
                className="group mt-7 inline-flex items-center gap-2 bg-ink text-white kicker px-5 py-3.5 hover:bg-accent transition-colors"
              >
                {t('home.lead.cta')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────── Latest + most read ───────────── */}
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <SectionHead
              label={t('home.latest')}
              sub={t('home.latest.sub')}
              to="/profiles"
              toLabel={t('home.all')}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-10">
              {grid.map((f, i) => (
                <FounderCard key={f.slug} founder={f} index={i} />
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="section-head">
              <h2 className="hed text-[1.5rem]">{t('home.mostread')}</h2>
            </div>
            <div className="divide-y divide-rule">
              {mostRead.map((f, i) => (
                <FounderCard key={f.slug} founder={f} variant="compact" index={i} />
              ))}
            </div>

            {/* Newsletter — demo only, nothing is transmitted */}
            <div className="mt-10 bg-sand p-6">
              <h2 className="hed text-[1.35rem]">{t('home.newsletter.h')}</h2>
              <p className="dek mt-2 text-[0.92rem]">{t('home.newsletter.p')}</p>
              <NewsletterForm />
            </div>
          </aside>
        </div>
      </section>

      {/* ───────────── Sectors ───────────── */}
      <section className="py-12">
        <SectionHead label={t('home.sectors')} to="/sectors" toLabel={t('sectors.read')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {SECTORS.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-paper"
            >
              <Link to={`/sectors/${s.id}`} className="group block p-6 h-full">
                <span
                  className="block w-10 h-[3px] mb-4"
                  style={{ backgroundColor: s.color }}
                  aria-hidden="true"
                />
                <h3 className="hed text-[1.25rem] group-hover:text-accent transition-colors">
                  {pick(s.label)}
                </h3>
                <p className="dek mt-2 text-[0.9rem]">{pick(s.blurb)}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                  {FOUNDERS.filter((f) => f.sector === s.id).length} ·{' '}
                  {t('nav.founders')}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── Era strip ───────────── */}
      <section className="py-12">
        <SectionHead
          label={t('home.era')}
          sub={t('home.era.sub')}
          to="/timeline"
          toLabel={t('nav.timeline')}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-8">
          {era.map((f, i) => (
            <motion.div
              key={f.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Link to={`/profiles/${f.slug}`} className="group block">
                <Monogram
                  founder={f}
                  size="md"
                  className="w-full aspect-square mb-3 transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <p className="font-mono text-[10px] text-ink-3 mb-1">{f.born}</p>
                <h3 className="hed text-[1rem] leading-tight group-hover:text-accent transition-colors">
                  {f.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function NewsletterForm() {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'ok' | 'error'>('idle');

  return (
    <form
      className="mt-5"
      onSubmit={(e) => {
        e.preventDefault();
        // Front-end only: this publication has no backend, so the form
        // validates and confirms without transmitting anything.
        setState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'ok' : 'error');
      }}
    >
      <label htmlFor="nl-email" className="sr-only">
        {t('home.newsletter.ph')}
      </label>
      <input
        id="nl-email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setState('idle');
        }}
        placeholder={t('home.newsletter.ph')}
        className="w-full border border-ink bg-paper px-3.5 py-3 text-[0.95rem] placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="mt-2.5 w-full bg-ink text-white kicker py-3.5 hover:bg-accent transition-colors"
      >
        {t('home.newsletter.cta')}
      </button>
      <p
        aria-live="polite"
        className={`mt-2.5 text-xs ${state === 'error' ? 'text-flag' : 'text-teal'}`}
      >
        {state === 'ok' ? t('home.newsletter.ok') : state === 'error' ? t('home.newsletter.err') : ''}
      </p>
      <p className="mt-1 text-[10px] text-ink-3">{t('home.newsletter.note')}</p>
    </form>
  );
}
