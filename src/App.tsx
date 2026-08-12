import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nProvider } from '@/i18n/I18nProvider';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';

// Home ships in the initial bundle; everything else is split so the landing
// page does not carry the whole archive's page code.
const Profiles = lazy(() => import('@/pages/Profiles'));
const Profile = lazy(() => import('@/pages/Profile'));
const Timeline = lazy(() => import('@/pages/Timeline'));
const About = lazy(() => import('@/pages/About'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const SectorsIndex = lazy(() =>
  import('@/pages/Sectors').then((m) => ({ default: m.SectorsIndex })),
);
const SectorDetail = lazy(() =>
  import('@/pages/Sectors').then((m) => ({ default: m.SectorDetail })),
);

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-live="polite">
      <span className="w-5 h-5 border-2 border-rule border-t-ink rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="profiles" element={<Profiles />} />
              <Route path="profiles/:slug" element={<Profile />} />
              <Route path="sectors" element={<SectorsIndex />} />
              <Route path="sectors/:id" element={<SectorDetail />} />
              <Route path="timeline" element={<Timeline />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nProvider>
  );
}
