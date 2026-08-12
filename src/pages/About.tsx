import { Link } from 'react-router-dom';
import { FOUNDERS } from '@/data';
import { SECTORS } from '@/data/types';
import { useI18n } from '@/i18n/I18nProvider';

export default function About() {
  const { t, lang } = useI18n();

  const copy = {
    en: {
      what: 'What this is',
      whatP: [
        'Founders Wire publishes profiles of the people who built the companies. Not the mythology — the sequence. What they were doing before it worked, which decision actually mattered, and what it cost them.',
        'The archive spans four generations, from industrialists born in the nineteenth century to founders whose companies are only a few years old. They are filed by sector rather than by fame, because the interesting comparisons are between people solving the same kind of problem in different decades.',
      ],
      how: 'How the profiles are made',
      howP: [
        'The lead profile is reported directly with the subject. Every other entry is an editorial summary compiled from widely published public record.',
        'We deliberately avoid two things that make this kind of writing go stale: net-worth figures, which change constantly and say very little, and present-tense claims about who currently holds which title. Where a founder’s record includes documented controversy, it appears in the profile rather than being edited out.',
        'No quotation is attributed to anyone unless the wording is a matter of documented record.',
      ],
      images: 'On the portraits',
      imagesP: [
        'Public figures in the archive are represented typographically: their initials, set in the publication’s display face, over the colour assigned to their sector. This is an editorial convention, not a missing asset. Founders Wire does not license photography of public figures and claims no likeness rights.',
        'Where the publication holds the rights to original photography — as with the lead profile — the real images are used.',
      ],
      numbers: 'The archive in numbers',
    },
    es: {
      what: 'Qué es esto',
      whatP: [
        'Founders Wire publica perfiles de la gente que construyó las empresas. No la mitología: la secuencia. Qué hacían antes de que funcionara, qué decisión importó de verdad y cuánto les costó.',
        'El archivo abarca cuatro generaciones, desde industriales nacidos en el siglo XIX hasta fundadores cuyas empresas tienen apenas unos años. Están clasificados por sector y no por fama, porque las comparaciones interesantes son entre personas que resuelven el mismo tipo de problema en décadas distintas.',
      ],
      how: 'Cómo se hacen los perfiles',
      howP: [
        'El perfil principal se reporta directamente con el protagonista. Cada otra entrada es un resumen editorial compilado de información pública ampliamente publicada.',
        'Evitamos deliberadamente dos cosas que envejecen mal en este tipo de textos: las cifras de patrimonio, que cambian constantemente y dicen muy poco, y las afirmaciones en presente sobre quién ocupa qué cargo. Cuando el historial de un fundador incluye controversias documentadas, aparecen en el perfil en lugar de ser editadas.',
        'No se atribuye ninguna cita a nadie a menos que la formulación sea materia de registro documentado.',
      ],
      images: 'Sobre los retratos',
      imagesP: [
        'Las figuras públicas del archivo se representan tipográficamente: sus iniciales, compuestas en la tipografía de titulares de la publicación, sobre el color asignado a su sector. Es una convención editorial, no un recurso faltante. Founders Wire no licencia fotografía de figuras públicas y no reclama ningún derecho de imagen.',
        'Cuando la publicación sí tiene los derechos de fotografía original, como en el perfil principal, se usan las imágenes reales.',
      ],
      numbers: 'El archivo en números',
    },
  }[lang];

  const stats = [
    { v: String(FOUNDERS.length), k: lang === 'es' ? 'Perfiles' : 'Profiles' },
    { v: String(SECTORS.length), k: lang === 'es' ? 'Sectores' : 'Sectors' },
    { v: '1863', k: lang === 'es' ? 'Nacimiento más antiguo' : 'Earliest birth year' },
    { v: '2006', k: lang === 'es' ? 'Nacimiento más reciente' : 'Latest birth year' },
  ];

  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
      <header className="py-10 border-b-2 border-ink">
        <h1 className="hed text-[clamp(2.2rem,6vw,4rem)]">{t('about.h')}</h1>
        <p className="dek mt-4 text-[1.05rem] max-w-[58ch]">{t('about.sub')}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-12">
        <div className="lg:col-span-8 prose-wire max-w-[68ch]">
          <h2 className="hed text-[1.6rem] mb-4">{copy.what}</h2>
          {copy.whatP.map((p, i) => (
            <p key={i} className={i === 0 ? 'lede' : undefined}>
              {p}
            </p>
          ))}

          <h2 className="hed text-[1.6rem] mt-12 mb-4">{copy.how}</h2>
          {copy.howP.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h2 className="hed text-[1.6rem] mt-12 mb-4">{copy.images}</h2>
          {copy.imagesP.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="border border-ink">
            <h2 className="kicker bg-ink text-white px-4 py-3">{copy.numbers}</h2>
            <dl className="divide-y divide-rule">
              {stats.map((s) => (
                <div key={s.k} className="px-4 py-4">
                  <dt className="font-display text-3xl font-black tabular-nums">{s.v}</dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
                    {s.k}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Link
            to="/profiles"
            className="mt-6 block text-center bg-ink text-white kicker py-4 hover:bg-accent transition-colors"
          >
            {t('home.all')}
          </Link>
        </aside>
      </div>
    </div>
  );
}
