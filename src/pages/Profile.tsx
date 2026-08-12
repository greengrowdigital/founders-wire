import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Link2 } from 'lucide-react';
import { FOUNDER_BY_SLUG, LANDO_QUOTE, relatedFounders } from '@/data';
import { SECTOR_BY_ID } from '@/data/types';
import { PHOTO_BY_SLUG, creditUrl } from '@/data/photos';
import { useI18n } from '@/i18n/I18nProvider';
import { Monogram } from '@/components/Monogram';
import { FounderCard } from '@/components/FounderCard';
import { SectionHead } from '@/components/SectionHead';

export default function Profile() {
  const { slug = '' } = useParams();
  const { t, pick, lang } = useI18n();
  const founder = FOUNDER_BY_SLUG[slug];

  useEffect(() => {
    if (founder) document.title = `${founder.name} — Founders Wire`;
    return () => {
      document.title = 'Founders Wire — Profiles of the people who built the companies';
    };
  }, [founder]);

  if (!founder) return <Navigate to="/404" replace />;

  const sector = SECTOR_BY_ID[founder.sector];
  const photo = PHOTO_BY_SLUG[founder.slug];
  const paragraphs = founder.body[lang] ?? founder.body.en;
  const related = relatedFounders(founder);

  const facts: { k: string; v: string }[] = [
    { k: t('profile.born'), v: founder.born },
    { k: t('profile.birthplace'), v: pick(founder.birthplace) },
    { k: t('profile.nationality'), v: pick(founder.nationality) },
    { k: t('profile.company'), v: founder.company },
    { k: t('profile.role'), v: pick(founder.role) },
    { k: t('profile.sector'), v: pick(sector.label) },
    { k: t('profile.knownfor'), v: pick(founder.knownFor) },
  ];

  return (
    <article className="mx-auto max-w-[1320px] px-4 sm:px-6">
      {/* ───────────── Headline block ───────────── */}
      <header className="pt-8 pb-8">
        <Link
          to="/profiles"
          className="kicker inline-flex items-center gap-2 text-ink-3 hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t('profile.back')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <span
              className="kicker inline-block px-2.5 py-1.5 text-white mb-4"
              style={{ backgroundColor: sector.color }}
            >
              {pick(sector.label)}
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hed text-[clamp(2.1rem,6vw,4.2rem)]"
            >
              {founder.name}
            </motion.h1>

            {founder.aka && (
              <p className="mt-3 text-sm text-ink-3">
                {t('profile.aka')}{' '}
                <span className="text-ink-2">{founder.aka.join(' · ')}</span>
              </p>
            )}

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="dek mt-5 text-[1.1rem] sm:text-[1.3rem] max-w-[54ch]"
            >
              {pick(founder.dek)}
            </motion.p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 rule-hair pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                {founder.company}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                {t('profile.readtime', { n: founder.readMinutes })}
              </p>
              <ShareButton name={founder.name} />
            </div>
          </div>

          <div className="lg:col-span-4">
            <Monogram
              founder={founder}
              size="lg"
              className="w-full aspect-[4/5] object-[center_18%]"
            />
            {/* Every stock image is labelled. A reader must never be able to
                mistake a contextual photograph for a portrait of the subject. */}
            {photo && (
              <p className="mt-2.5 text-xs leading-relaxed text-ink-3">
                {pick(photo.subject)}. <em>{t('photo.notportrait')}</em>{' '}
                {t('photo.credit')}:{' '}
                <a
                  href={creditUrl(photo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent link-underline"
                >
                  {photo.credit.name}
                </a>{' '}
                /{' '}
                <a
                  href="https://unsplash.com/?utm_source=founders_wire&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent link-underline"
                >
                  Unsplash
                </a>
              </p>
            )}
          </div>
        </div>
      </header>

      {/* ───────────── Body + rail ───────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-t-2 border-ink pt-10">
        <div className="lg:col-span-8">
          <div className="prose-wire max-w-[68ch]">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45 }}
                className={i === 0 ? 'lede' : undefined}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* The lead profile carries a pull quote in his own words. */}
          {founder.lead && (
            <blockquote className="my-12 border-y-2 border-ink py-8 max-w-[68ch]">
              <p className="font-display text-[1.5rem] sm:text-[2rem] font-bold leading-[1.15] tracking-[-0.02em]">
                “{pick(LANDO_QUOTE)}”
              </p>
              <cite className="mt-4 block kicker not-italic text-ink-3">{founder.name}</cite>
            </blockquote>
          )}

          {founder.gallery && (
            <section className="mt-12">
              <SectionHead label={t('profile.gallery')} />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {founder.gallery.map((g) => (
                  <figure key={g.src}>
                    <img
                      src={g.src}
                      alt={pick(g.caption)}
                      loading="lazy"
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <figcaption className="mt-2.5 text-xs leading-relaxed text-ink-3">
                      {pick(g.caption)}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Milestones */}
          <section className="mt-14">
            <SectionHead label={t('profile.timeline')} />
            <ol className="border-l border-rule pl-6 space-y-7 max-w-[62ch]">
              {founder.timeline.map((m) => (
                <motion.li
                  key={m.year + m.en}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <span
                    className="absolute -left-[27px] top-2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: sector.color }}
                    aria-hidden="true"
                  />
                  <p className="kicker" style={{ color: sector.color }}>
                    {m.year}
                  </p>
                  <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink-2">{pick(m)}</p>
                </motion.li>
              ))}
            </ol>
          </section>
        </div>

        {/* ── Fact box rail ── */}
        <aside className="lg:col-span-4">
          <div className="border border-ink">
            <h2 className="kicker bg-ink text-white px-4 py-3">{t('profile.factbox')}</h2>
            <dl>
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="grid grid-cols-[100px_1fr] gap-3 px-4 py-3 border-b border-rule last:border-b-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3 pt-0.5">
                    {f.k}
                  </dt>
                  <dd className="text-[0.9rem] leading-snug">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      {/* ───────────── Read next ───────────── */}
      <section className="pb-16">
        <SectionHead label={t('profile.related')} to="/profiles" toLabel={t('home.all')} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {related.map((f, i) => (
            <FounderCard key={f.slug} founder={f} index={i} />
          ))}
        </div>
      </section>
    </article>
  );
}

function ShareButton({ name }: { name: string }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={async () => {
        const url = window.location.href;
        // Native share where it exists, clipboard everywhere else.
        if (navigator.share) {
          try {
            await navigator.share({ title: name, url });
            return;
          } catch {
            // User dismissed the sheet; fall through to copying.
          }
        }
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          // Clipboard blocked (insecure context or denied permission).
        }
      }}
      className="kicker inline-flex items-center gap-1.5 text-accent hover:text-accent-ink transition-colors"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
      {copied ? t('profile.copied') : t('profile.share')}
    </button>
  );
}
