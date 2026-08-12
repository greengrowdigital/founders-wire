import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { foundersInSector } from '@/data';
import { SECTORS, SECTOR_BY_ID } from '@/data/types';
import type { SectorId } from '@/data/types';
import { useI18n } from '@/i18n/I18nProvider';
import { FounderCard } from '@/components/FounderCard';

/** Hub listing every sector. */
export function SectorsIndex() {
  const { t, pick } = useI18n();

  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      <header className="py-10 border-b-2 border-ink">
        <h1 className="hed text-[clamp(2.2rem,6vw,4rem)]">{t('sectors.h')}</h1>
        <p className="dek mt-4 text-[1.05rem] max-w-[58ch]">{t('sectors.sub')}</p>
      </header>

      {/* Padding lives on the wrapper: putting it on the grid itself would let
          the hairline background bleed into the vertical gutters. */}
      <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
        {SECTORS.map((s, i) => {
          const members = foundersInSector(s.id);
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-paper"
            >
              <Link to={`/sectors/${s.id}`} className="group flex flex-col h-full p-7">
                <span
                  className="block w-12 h-[3px] mb-5"
                  style={{ backgroundColor: s.color }}
                  aria-hidden="true"
                />
                <h2 className="hed text-[1.6rem] group-hover:text-accent transition-colors">
                  {pick(s.label)}
                </h2>
                <p className="dek mt-3 text-[0.95rem] flex-1">{pick(s.blurb)}</p>
                <p className="mt-5 flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                    {t('founders.count', { n: members.length })}
                  </span>
                  <span className="kicker text-accent inline-flex items-center gap-1.5">
                    {t('sectors.read')}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

/** A single sector's roster. */
export function SectorDetail() {
  const { id = '' } = useParams();
  const { t, pick } = useI18n();
  const sector = SECTOR_BY_ID[id as SectorId];

  if (!sector) return <Navigate to="/404" replace />;
  const members = foundersInSector(sector.id);

  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      <header className="py-10 border-b-2 border-ink">
        <Link
          to="/sectors"
          className="kicker inline-flex items-center gap-2 text-ink-3 hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t('sectors.h')}
        </Link>
        <span
          className="block w-16 h-1 mb-5"
          style={{ backgroundColor: sector.color }}
          aria-hidden="true"
        />
        <h1 className="hed text-[clamp(2.2rem,6vw,4rem)]">{pick(sector.label)}</h1>
        <p className="dek mt-4 text-[1.05rem] max-w-[58ch]">{pick(sector.blurb)}</p>
        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
          {t('founders.count', { n: members.length })}
        </p>
      </header>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-11">
        {members.map((f, i) => (
          <FounderCard key={f.slug} founder={f} index={i} />
        ))}
      </div>
    </div>
  );
}
