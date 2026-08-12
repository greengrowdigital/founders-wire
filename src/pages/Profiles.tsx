import { useMemo, useState } from 'react';
import { FOUNDERS } from '@/data';
import { SECTORS } from '@/data/types';
import type { SectorId } from '@/data/types';
import { useI18n } from '@/i18n/I18nProvider';
import { FounderCard } from '@/components/FounderCard';

type Filter = SectorId | 'all';
type Sort = 'era' | 'az';

export default function Profiles() {
  const { t, pick } = useI18n();
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('era');

  const list = useMemo(() => {
    const filtered = filter === 'all' ? FOUNDERS : FOUNDERS.filter((f) => f.sector === filter);
    return [...filtered].sort((a, b) =>
      sort === 'az'
        ? a.name.localeCompare(b.name)
        : parseInt(a.born, 10) - parseInt(b.born, 10),
    );
  }, [filter, sort]);

  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      <header className="py-10 border-b-2 border-ink">
        <h1 className="hed text-[clamp(2.2rem,6vw,4rem)]">{t('founders.h')}</h1>
        <p className="dek mt-4 text-[1.05rem] max-w-[58ch]">{t('founders.sub')}</p>
      </header>

      {/* Filter rail */}
      <div className="sticky top-0 z-30 bg-paper/95 backdrop-blur-sm py-4 border-b border-rule">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <FilterChip active={filter === 'all'} onClick={() => setFilter('all')}>
            {t('founders.filter.all')}
          </FilterChip>
          {SECTORS.map((s) => (
            <FilterChip key={s.id} active={filter === s.id} onClick={() => setFilter(s.id)}>
              {pick(s.label)}
            </FilterChip>
          ))}

          <span className="ml-auto flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
              {t('founders.count', { n: list.length })}
            </span>
            <span className="inline-flex border border-ink">
              {(['era', 'az'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  aria-pressed={sort === s}
                  className={`kicker px-2.5 py-1.5 transition-colors ${
                    sort === s ? 'bg-ink text-white' : 'hover:bg-sand'
                  }`}
                >
                  {t(`founders.sort.${s}`)}
                </button>
              ))}
            </span>
          </span>
        </div>
      </div>

      <div className="py-8">
        {list.length === 0 ? (
          <p className="dek py-16 text-center">{t('founders.empty')}</p>
        ) : (
          <div className="divide-y divide-rule">
            {list.map((f, i) => (
              <FounderCard key={f.slug} founder={f} variant="list" index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`kicker px-3.5 py-2 border transition-colors ${
        active ? 'bg-ink text-white border-ink' : 'border-rule text-ink-2 hover:border-ink hover:text-ink'
      }`}
    >
      {children}
    </button>
  );
}
