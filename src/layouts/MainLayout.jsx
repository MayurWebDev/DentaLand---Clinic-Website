import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import FloatingWidgets from '../components/FloatingWidgets';
import ConceptBadge from '../components/ConceptBadge';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased font-sans pb-16 md:pb-0">
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-sky-600 text-white px-4 py-2.5 rounded-full z-50 font-bold text-xs tracking-wider uppercase shadow-md focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Top Header */}
      <Navbar />

      {/* Concept Redesign Floating Badge */}
      <ConceptBadge />

      {/* Scroll trackers & mobile sticky bottom bars */}
      <FloatingWidgets />

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Active Page View Component */}
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      {/* Conversion-focused Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
