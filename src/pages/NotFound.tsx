import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nProvider';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      <div className="py-24 sm:py-32 max-w-[46ch]">
        <p className="font-display text-[clamp(5rem,18vw,11rem)] font-black leading-none tracking-[-0.05em] text-sand-2">
          404
        </p>
        <h1 className="hed text-[clamp(1.8rem,5vw,3rem)] mt-4">{t('nf.h')}</h1>
        <p className="dek mt-4 text-[1.05rem]">{t('nf.p')}</p>
        <Link
          to="/"
          className="mt-8 inline-block bg-ink text-white kicker px-6 py-4 hover:bg-accent transition-colors"
        >
          {t('nf.cta')}
        </Link>
      </div>
    </div>
  );
}
