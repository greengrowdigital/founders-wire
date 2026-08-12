import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SECTOR_BY_ID } from '@/data/types';
import type { Founder } from '@/data/types';
import { useI18n } from '@/i18n/I18nProvider';
import { Monogram } from './Monogram';

type Variant = 'grid' | 'list' | 'compact';

export function FounderCard({
  founder,
  variant = 'grid',
  index = 0,
}: {
  founder: Founder;
  variant?: Variant;
  index?: number;
}) {
  const { t, pick } = useI18n();
  const sector = SECTOR_BY_ID[founder.sector];

  if (variant === 'compact') {
    return (
      <Link to={`/profiles/${founder.slug}`} className="group flex gap-4 py-4 items-start">
        <span className="font-display text-2xl font-black text-rule leading-none w-8 shrink-0 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="min-w-0">
          <span className="kicker block mb-1.5" style={{ color: sector.color }}>
            {pick(sector.label)}
          </span>
          <span className="hed block text-[1.05rem] group-hover:text-accent transition-colors">
            {founder.name}
          </span>
          <span className="mt-1 block text-sm text-ink-3">{founder.company}</span>
        </span>
      </Link>
    );
  }

  if (variant === 'list') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.04 }}
        className="rule-hair py-6"
      >
        <Link to={`/profiles/${founder.slug}`} className="group grid grid-cols-[64px_1fr] sm:grid-cols-[92px_1fr] gap-5 items-start">
          <Monogram founder={founder} size="sm" className="aspect-square w-full" />
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="kicker" style={{ color: sector.color }}>
                {pick(sector.label)}
              </span>
              <span className="font-mono text-[10px] text-ink-3">{founder.born}</span>
            </div>
            <h3 className="hed text-xl sm:text-2xl group-hover:text-accent transition-colors">
              {founder.name}
            </h3>
            <p className="dek mt-2 text-[0.95rem] line-clamp-2">{pick(founder.dek)}</p>
            <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              {founder.company} · {t('profile.readtime', { n: founder.readMinutes })}
            </p>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: Math.min(index, 8) * 0.05 }}
      className="group"
    >
      <Link to={`/profiles/${founder.slug}`} className="block">
        <div className="overflow-hidden mb-4">
          <Monogram
            founder={founder}
            size="lg"
            className="aspect-[4/3] w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>
        <span className="kicker block mb-2" style={{ color: sector.color }}>
          {pick(sector.label)}
        </span>
        <h3 className="hed text-[1.35rem] leading-[1.12] group-hover:text-accent transition-colors">
          {founder.name}
        </h3>
        <p className="dek mt-2 text-[0.95rem] line-clamp-3">{pick(founder.dek)}</p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
          {founder.company} · {t('profile.readtime', { n: founder.readMinutes })}
        </p>
      </Link>
    </motion.article>
  );
}
