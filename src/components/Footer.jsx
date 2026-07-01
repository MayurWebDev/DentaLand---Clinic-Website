import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { generateWhatsAppLink, generatePhoneDialerLink } from '../utils/contact';
import { settings } from '../data/settings';
import { branches } from '../data/branches';
import { treatments } from '../data/treatments';

const Footer = () => {
  const whatsappUrl = generateWhatsAppLink();
  const phoneUrl = generatePhoneDialerLink();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8 text-left font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Row 1: Brand & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-slate-900 pb-10">
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-extrabold text-2xl tracking-tight font-display bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                {settings.brandName}
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Advanced and painless dental care chain across Pune, Maharashtra. Establishing healthy, beautiful, and confident smiles with European sterilization standards.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-emerald-600/20 text-emerald-400 p-2.5 rounded-full border border-slate-800 transition-colors"
                title="WhatsApp Chat"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href={phoneUrl}
                className="bg-slate-900 hover:bg-sky-600/20 text-sky-400 p-2.5 rounded-full border border-slate-800 transition-colors"
                title="Call Helpline"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick link sets */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display">Featured Services</h4>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                {treatments.slice(0, 5).map((t) => (
                  <li key={t.id}>
                    <Link to={`/treatments/${t.id}`} className="hover:text-sky-400 transition-colors">
                      {t.shortTitle}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/treatments" className="text-sky-400 hover:underline">
                    View All 15+ Services →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display">Quick Links</h4>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
                <li><Link to="/doctors" className="hover:text-sky-400 transition-colors">Meet the Doctors</Link></li>
                <li><Link to="/gallery" className="hover:text-sky-400 transition-colors">Clinic Tour Gallery</Link></li>
                <li><Link to="/testimonials" className="hover:text-sky-400 transition-colors">Patient Reviews</Link></li>
                <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact & Location</Link></li>
                <li><Link to="/book-appointment" className="text-sky-400 hover:underline font-bold">Book Appointment</Link></li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display">Helpline hours</h4>
              <ul className="space-y-2 text-xs text-slate-400 font-medium">
                <li className="flex items-center gap-1.5">
                  <Clock size={12} className="text-sky-500" />
                  <span>Mon - Sat: 9 AM - 9 PM</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Clock size={12} className="text-sky-500" />
                  <span>Sunday: 9 AM - 1 PM</span>
                </li>
                <li className="pt-2 border-t border-slate-900">
                  <span className="text-[10px] uppercase font-bold text-red-500 block">Emergency Dentist Line</span>
                  <a href={`tel:+91${settings.emergencyPhone}`} className="text-white font-bold text-sm hover:text-red-400 transition-colors block">
                    📞 +91 {settings.phoneFormatted.slice(4)}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Row 2: Branches List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-slate-900 pb-10">
          {branches.map((b) => (
            <div key={b.id} className="space-y-2 text-xs">
              <h5 className="text-white font-bold font-display flex items-center gap-1">
                <MapPin size={12} className="text-sky-500" />
                {b.name}
              </h5>
              <p className="text-slate-400 leading-relaxed">
                {b.address}
              </p>
              <div className="pt-1 flex flex-wrap gap-2 text-[10px]">
                <a
                  href={`tel:+91${b.phone}`}
                  className="text-slate-300 hover:text-white font-bold flex items-center gap-0.5 border border-slate-800 px-2 py-0.5 rounded bg-slate-900/50"
                >
                  ☎ +91 {b.phone}
                </a>
                <Link
                  to={`/branches/${b.id}`}
                  className="text-sky-400 hover:text-sky-300 font-bold border border-slate-800 px-2 py-0.5 rounded bg-slate-900/50"
                >
                  Details & Maps
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3: Trust Certifications & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-900 pt-6">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-sky-600" />
            <span>WHO & ISO 9001:2015 Sterilization Compliant Clinic Chain</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} DentaLand Clinic. All rights reserved. •
            <Link to="/privacy-policy" className="hover:text-slate-300 ml-1 transition-colors">Privacy Policy</Link> •
            <Link to="/sitemap.xml" className="hover:text-slate-300 ml-1 transition-colors">XML Sitemap</Link>
          </div>
          
          <div className="flex items-center gap-1 text-[10px]">
            <span>Designed with</span>
            <Heart size={10} className="text-red-500 fill-red-500" />
            <span>in Pune</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
