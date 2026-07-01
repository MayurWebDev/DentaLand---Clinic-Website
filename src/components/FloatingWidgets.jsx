import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Calendar, ChevronUp } from 'lucide-react';
import { generateWhatsAppLink, generatePhoneDialerLink } from '../utils/contact';

const FloatingWidgets = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticked = false;

    const handleScroll = () => {
      if (!ticked) {
        window.requestAnimationFrame(() => {
          const winScroll = window.scrollY;
          
          // Simplify visibility toggle
          setShowBackToTop(winScroll > 400);

          // Scroll progress percentage calculation
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setScrollProgress((winScroll / totalHeight) * 100);
          }
          ticked = false;
        });
        ticked = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = generateWhatsAppLink();
  const phoneUrl = generatePhoneDialerLink();

  return (
    <>
      {/* Scroll Progress Bar at the top of the viewport */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-100/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-none"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Desktop Floating Actions (Side Right) */}
      <div className="fixed bottom-24 right-6 z-40 hidden md:flex flex-col gap-3">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="h-6 w-6" />
        </a>
        <a 
          href={phoneUrl}
          className="bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center"
          title="Call Us Now"
        >
          <Phone className="h-6 w-6" />
        </a>
        {showBackToTop && (
          <button 
            onClick={scrollToTop}
            className="bg-slate-900/80 hover:bg-slate-900 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center backdrop-blur-sm border border-slate-700/30 cursor-pointer"
            title="Back to Top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Mobile Sticky Bottom Bar (Screens < md) */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 border-t border-slate-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-40 flex items-center justify-around py-3 px-4 md:hidden backdrop-blur-md pb-safe">
        <a 
          href={phoneUrl}
          className="flex flex-col items-center gap-1 text-slate-700 hover:text-sky-600 transition-colors py-1 flex-1"
        >
          <Phone className="h-5 w-5 text-sky-600" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Call Now</span>
        </a>
        <div className="h-8 w-px bg-slate-200"></div>
        <Link 
          to="/book-appointment"
          className="flex flex-col items-center gap-1 text-white bg-gradient-to-r from-sky-500 to-blue-600 py-2.5 px-6 rounded-full font-bold shadow-md transform hover:scale-[1.02] flex-[2] mx-4 text-center text-xs tracking-wider uppercase"
        >
          <span className="flex items-center justify-center gap-1.5">
            <Calendar className="h-4 w-4" />
            Book Free Appt
          </span>
        </Link>
        <div className="h-8 w-px bg-slate-200"></div>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-slate-700 hover:text-emerald-600 transition-colors py-1 flex-1"
        >
          <MessageSquare className="h-5 w-5 text-emerald-500" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default FloatingWidgets;
