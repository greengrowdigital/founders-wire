import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nProvider';
import { SECTORS } from '@/data/types';

export function Footer() {
  const { t, pick } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-ink text-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-display text-3xl font-black tracking-[-0.045em] leading-none">
              FOUNDERS<span className="text-teal">WIRE</span>
            </p>
            <p className="mt-5 text-white/60 text-[0.95rem] leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="kicker text-teal mb-4">{t('footer.sections')}</h2>
            <ul className="space-y-2.5 text-[0.95rem]">
              {SECTORS.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/sectors/${s.id}`}
                    className="text-white/70 hover:text-white link-underline"
                  >
                    {pick(s.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="kicker text-teal mb-4">{t('footer.publication')}</h2>
            <ul className="space-y-2.5 text-[0.95rem]">
              <li>
                <Link to="/profiles" className="text-white/70 hover:text-white link-underline">
                  {t('nav.founders')}
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="text-white/70 hover:text-white link-underline">
                  {t('nav.timeline')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white link-underline">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col gap-4">
          <p className="text-white/35 text-xs leading-relaxed max-w-3xl">
            {t('footer.disclaimer')}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
            © {year} {t('brand.name')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
