import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, AlertCircle } from 'lucide-react';
import Section from '../components/Section';
import { buttons } from '../design-system/buttons';

const NotFound = () => {
  return (
    <div className="bg-slate-50 font-sans flex items-center justify-center min-h-[70vh]">
      <Section className="text-center py-20 bg-white max-w-xl mx-auto rounded-3xl border border-slate-100 shadow-sm px-6">
        <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={32} />
        </div>
        <h1 className="text-3xl font-extrabold font-display text-slate-900 mb-2">404 - Page Not Found</h1>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className={`${buttons.primary} flex items-center justify-center gap-1.5 text-sm`}
          >
            <Home size={16} />
            Back to Home
          </Link>
          <a
            href="tel:+919000000001"
            className={`${buttons.secondary} flex items-center justify-center gap-1.5 text-sm`}
          >
            <Phone size={16} className="text-sky-600" />
            Contact Helpline
          </a>
        </div>
      </Section>
    </div>
  );
};

export default NotFound;
