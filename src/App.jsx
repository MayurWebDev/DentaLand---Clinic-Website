import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

// Lazy-loaded Core Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Treatments = lazy(() => import('./pages/Treatments'));
const Doctors = lazy(() => import('./pages/Doctors'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const Branches = lazy(() => import('./pages/Branches'));

// Lazy-loaded Detail Pages
const DoctorDetail = lazy(() => import('./pages/DoctorDetail'));
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'));
const BranchDetail = lazy(() => import('./pages/BranchDetail'));

// Lazy-loaded Content Hub Pages
const BlogList = lazy(() => import('./pages/Blog/BlogList'));
const BlogDetail = lazy(() => import('./pages/Blog/BlogDetail'));

// Lazy-loaded Local SEO Pages
const LocalLandingPage = lazy(() => import('./pages/LocalLandingPage'));
const LocalTreatmentPage = lazy(() => import('./pages/LocalTreatmentPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BookingProvider>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Main Layout wrapper containing Navbar, Footer, and Floating Widgets */}
          <Route path="/" element={<MainLayout />}>
            
            {/* Core Static Pages */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="treatments" element={<Treatments />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="branches" element={<Branches />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book-appointment" element={<BookAppointment />} />

            {/* Dynamic Profiles */}
            <Route path="doctors/:id" element={<DoctorDetail />} />
            <Route path="treatments/:id" element={<TreatmentDetail />} />
            <Route path="branches/:id" element={<BranchDetail />} />

            {/* Content Hub (Blog) */}
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:id" element={<BlogDetail />} />

            {/* Local SEO Landing Pages */}
            <Route path="dentist-in-:branch" element={<LocalLandingPage />} />
            <Route path="dental-clinic-in-:branch" element={<LocalLandingPage />} />
            <Route path="dentist-near-:area" element={<LocalLandingPage />} />
            <Route path="dental-clinic-near-:area" element={<LocalLandingPage />} />
            <Route path="best-dentist-in-pcmc" element={<LocalLandingPage />} />
            <Route path="emergency-dentist-:branch" element={<LocalLandingPage />} />

            {/* Local Treatment Landing Pages */}
            <Route path="dental-implant-in-:branch" element={<LocalTreatmentPage />} />
            <Route path="root-canal-treatment-in-:branch" element={<LocalTreatmentPage />} />
            <Route path="braces-treatment-in-:branch" element={<LocalTreatmentPage />} />
            <Route path="teeth-whitening-in-:branch" element={<LocalTreatmentPage />} />
            <Route path="smile-makeover-in-:branch" element={<LocalTreatmentPage />} />
            <Route path="pediatric-dentist-in-:branch" element={<LocalTreatmentPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BookingProvider>
  );
}

export default App;
