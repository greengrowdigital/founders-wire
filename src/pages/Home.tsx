import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BY_ERA, CURRENT_GENERATION, FOUNDERS, FOUNDER_BY_SLUG, LANDO, LANDO_QUOTE } from '@/data';
import { SECTORS, SECTOR_BY_ID } from '@/data/types';
import type { Founder } from '@/data/types';
import { useI18n } from '@/i18n/I18nProvider';
import { FounderCard } from '@/components/FounderCard';
import { Monogram } from '@/components/Monogram';
import { SectionHead } from '@/components/SectionHead';

/**
 * Front page.
 *
 * Laid out like a newspaper rather than a portfolio: a lead story, two
 * shoulders, a column of briefs, then sector rails down the page. The
 * publication's own lead profile sits in its own labelled slot further down —
 * putting it in the top spot made the whole site read as a vanity page rather
 * than a publication.
 */

// Fixed front-page assignments. Hand-picked rather than sliced off the top of
// the array so the page reads like an edited front rather than a data dump.
const LEAD = 'jensen-huang';
const SHOULDERS = ['elon-musk', 'oprah-winfrey'];
const BRIEFS = ['steve-jobs', 'estee-lauder', 'jack-ma', 'sara-blakely', 'walt-disney'];
const SECOND_ROW = ['vitalik-buterin', 'sam-walton', 'rihanna', 'patrick-collison'];

function pick(slugs: string[]): Founder[] {
  return slugs.map((s) => FOUNDER_BY_SLUG[s]).filter((f): f is Founder => Boolean(f));
}

export default function Home() {
  const { t, pick: L } = useI18n();

  const lead = FOUNDER_BY_SLUG[LEAD] ?? FOUNDERS[1];
  const shoulders = pick(SHOULDERS);
  const briefs = pick(BRIEFS);
  const secondRow = pick(SECOND_ROW);

  const featuredSlugs = new Set([LEAD, ...SHOULDERS, ...BRIEFS, ...SECOND_ROW, LANDO.slug]);
  const young = CURRENT_GENERATION.filter((f) => f.slug !== LANDO.slug).slice(0, 6);
  const rest = FOUNDERS.filter((f) => !featuredSlugs.has(f.slug)).slice(0, 4);
  const era = BY_ERA.slice(0, 6);

  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      {/* ───────────── Front: lead + shoulders + briefs ───────────── */}
      <section className="pt-8 pb-10 border-b-2 border-ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-9">
          {/* Lead. Portrait sits beside the headline rather than above it:
              Commons images are shot vertical, and stretching one across the
              full lead column turned every lead into an extreme close-up. */}
          <article className="lg:col-span-7">
            <Link
              to={`/profiles/${lead.slug}`}
              className="group grid grid-cols-1 sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-6"
            >
              <div className="overflow-hidden">
                <Monogram
                  founder={lead}
                  size="lg"
                  className="w-full aspect-[3/4] object-[center_20%] transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span
                  className="kicker block mb-3"
                  style={{ color: SECTOR_BY_ID[lead.sector].color }}
                >
                  {L(SECTOR_BY_ID[lead.sector].label)}
                </span>
                <h1 className="hed text-[clamp(1.8rem,3.6vw,2.9rem)] group-hover:text-accent transition-colors">
                  {lead.name}
                </h1>
                <p className="dek mt-3 text-[1rem] sm:text-[1.08rem]">{L(lead.dek)}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                  {lead.company} · {t('profile.readtime', { n: lead.readMinutes })}
                </p>
              </div>
            </Link>
          </article>

          {/* Shoulders */}
          <div className="lg:col-span-3 flex flex-col divide-y divide-rule lg:border-l lg:border-rule lg:pl-8">
            {shoulders.map((f, i) => (
              <article key={f.slug} className={i === 0 ? 'pb-6' : 'pt-6'}>
                <Link to={`/profiles/${f.slug}`} className="group block">
                  <Monogram
                    founder={f}
                    size="md"
                    className="w-full aspect-[4/3] mb-3.5 object-[center_22%]"
                  />
                  <span
                    className="kicker block mb-2"
                    style={{ color: SECTOR_BY_ID[f.sector].color }}
                  >
                    {L(SECTOR_BY_ID[f.sector].label)}
                  </span>
                  <h2 className="hed text-[1.3rem] leading-[1.12] group-hover:text-accent transition-colors">
                    {f.name}
                  </h2>
                  <p className="dek mt-2 text-[0.92rem] line-clamp-3">{L(f.dek)}</p>
                </Link>
              </article>
            ))}
          </div>

          {/* Briefs column */}
          <aside className="lg:col-span-2 lg:border-l lg:border-rule lg:pl-6">
            <h2 className="kicker border-b-2 border-ink pb-2 mb-1">{t('home.briefs')}</h2>
            <div className="divide-y divide-rule">
              {briefs.map((f) => (
                <Link
                  key={f.slug}
                  to={`/profiles/${f.slug}`}
                  className="group block py-3.5"
                >
                  <span
                    className="kicker block mb-1.5 text-[10px]"
                    style={{ color: SECTOR_BY_ID[f.sector].color }}
                  >
                    {L(SECTOR_BY_ID[f.sector].label)}
                  </span>
                  <h3 className="hed text-[0.98rem] leading-[1.2] group-hover:text-accent transition-colors">
                    {f.name}
                  </h3>
                  <p className="mt-1 text-[0.82rem] text-ink-3">{f.company}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ───────────── Second row ───────────── */}
      <section className="py-10 border-b border-rule">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
          {secondRow.map((f, i) => (
            <FounderCard key={f.slug} founder={f} index={i} />
          ))}
        </div>
      </section>

      {/* ───────────── Current generation rail ───────────── */}
      <section className="py-12">
        <SectionHead
          label={t('home.young')}
          sub={t('home.young.sub')}
          to="/timeline"
          toLabel={t('nav.timeline')}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-8">
          {young.map((f, i) => (
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
                  className="w-full aspect-square mb-3 object-[center_15%] transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <p className="font-mono text-[10px] text-ink-3 mb-1 tabular-nums">{f.born}</p>
                <h3 className="hed text-[1rem] leading-tight group-hover:text-accent transition-colors">
                  {f.name}
                </h3>
                <p className="mt-1 text-[0.82rem] text-ink-3">{f.company}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── The publication's own lead profile ───────────── */}
      <section className="py-12 border-y-2 border-ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <Monogram
              founder={LANDO}
              size="lg"
              className="w-full aspect-[4/3] object-[center_20%]"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="kicker inline-block bg-flag text-white px-2.5 py-1.5 mb-4">
              {t('home.lead.kicker')}
            </span>
            <h2 className="hed text-[clamp(1.8rem,4vw,2.9rem)]">{LANDO.name}</h2>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
              {LANDO.company} · {t('profile.readtime', { n: LANDO.readMinutes })}
            </p>
            <p className="dek mt-4 text-[1.02rem] max-w-[56ch]">{L(LANDO.dek)}</p>
            <blockquote className="mt-5 border-l-2 border-teal pl-5">
              <p className="font-display text-[1.1rem] sm:text-[1.25rem] font-semibold leading-snug tracking-[-0.015em]">
                “{L(LANDO_QUOTE)}”
              </p>
            </blockquote>
            <Link
              to={`/profiles/${LANDO.slug}`}
              className="group mt-6 inline-flex items-center gap-2 bg-ink text-white kicker px-5 py-3.5 hover:bg-accent transition-colors"
            >
              {t('home.lead.cta')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── More from the archive + newsletter ───────────── */}
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
              {rest.map((f, i) => (
                <FounderCard key={f.slug} founder={f} index={i} />
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="section-head">
              <h2 className="hed text-[1.5rem]">{t('home.era')}</h2>
            </div>
            <div className="divide-y divide-rule">
              {era.map((f, i) => (
                <FounderCard key={f.slug} founder={f} variant="compact" index={i} />
              ))}
            </div>

            <div className="mt-10 bg-sand p-6">
              <h2 className="hed text-[1.35rem]">{t('home.newsletter.h')}</h2>
              <p className="dek mt-2 text-[0.92rem]">{t('home.newsletter.p')}</p>
              <NewsletterForm />
            </div>
          </aside>
        </div>
      </section>

      {/* ───────────── Sectors ───────────── */}
      <section className="pb-14">
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
                  {L(s.label)}
                </h3>
                <p className="dek mt-2 text-[0.9rem]">{L(s.blurb)}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                  {t('founders.count', { n: FOUNDERS.filter((f) => f.sector === s.id).length })}
                </p>
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
