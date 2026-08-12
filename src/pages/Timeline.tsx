import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BY_ERA } from '@/data';
import { SECTOR_BY_ID } from '@/data/types';
import { useI18n } from '@/i18n/I18nProvider';
import { Monogram } from '@/components/Monogram';

/**
 * Chronological view of the whole archive, grouped by the decade the founder
 * was born. Reading it top to bottom is the argument the page makes: the job
 * has looked broadly the same for a century and a half.
 */
export default function Timeline() {
  const { t, pick } = useI18n();

  const decades = BY_ERA.reduce<Record<string, typeof BY_ERA>>((acc, f) => {
    const decade = `${Math.floor(parseInt(f.born, 10) / 10) * 10}s`;
    (acc[decade] ??= []).push(f);
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      <header className="py-10 border-b-2 border-ink">
        <h1 className="hed text-[clamp(2.2rem,6vw,4rem)]">{t('timeline.h')}</h1>
        <p className="dek mt-4 text-[1.05rem] max-w-[58ch]">{t('timeline.sub')}</p>
      </header>

      <div className="py-10">
        {Object.entries(decades).map(([decade, people]) => (
          <section key={decade} className="mb-12">
            <div className="section-head">
              <h2 className="hed text-[1.6rem] tabular-nums">{decade}</h2>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                {t('founders.count', { n: people.length })}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-8">
              {people.map((f, i) => {
                const sector = SECTOR_BY_ID[f.sector];
                return (
                  <motion.div
                    key={f.slug}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.04 }}
                  >
                    <Link to={`/profiles/${f.slug}`} className="group block">
                      <Monogram
                        founder={f}
                        size="md"
                        className="w-full aspect-square mb-3 transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <p className="font-mono text-[10px] text-ink-3 mb-1 tabular-nums">{f.born}</p>
                      <h3 className="hed text-[1rem] leading-tight group-hover:text-accent transition-colors">
                        {f.name}
                      </h3>
                      <p className="kicker mt-1.5" style={{ color: sector.color }}>
                        {pick(sector.label)}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
