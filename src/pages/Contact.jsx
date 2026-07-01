import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldAlert, MessageSquare } from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/Forms/ContactForm';
import { settings } from '../data/settings';
import { branches } from '../data/branches';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const Contact = () => {
  const whatsappUrl = `https://wa.me/91${settings.whatsapp}?text=${encodeURIComponent(settings.whatsappMessage)}`;

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${images.heroDoctorPatient}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 px-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            We’re Here to Help You Smile
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reach out to our central team or contact one of our local branches in Pune directly.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <Section id="contact-main" className="bg-white">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info Widgets */}
          <div className="md:col-span-5 space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Get in Touch Directly
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Have questions about costs, treatment times, or zero-interest finance? Send us a message, and our patient care team will get back to you immediately.
            </p>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-600 font-semibold">
              <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <Phone className="text-sky-600 mt-1 flex-shrink-0" size={16} />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs">Call Helpline</h5>
                  <a href={`tel:+91${settings.phone}`} className="text-sky-600 font-bold block mt-0.5">
                    +91 {settings.phoneFormatted.slice(4)}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <MessageSquare className="text-emerald-500 mt-1 flex-shrink-0" size={16} />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs">WhatsApp Chat</h5>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold block mt-0.5">
                    Click to Chat Online
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <Mail className="text-sky-600 mt-1 flex-shrink-0" size={16} />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs">General Email</h5>
                  <span className="text-slate-600 font-medium block mt-0.5">
                    {settings.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Emergency Notice Block */}
            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-2xl space-y-2">
              <div className="flex items-center gap-2 text-red-700">
                <ShieldAlert size={16} className="animate-pulse" />
                <h4 className="font-bold text-xs uppercase tracking-wider">Emergency Dental Care</h4>
              </div>
              <p className="text-red-900 text-[11px] leading-relaxed">
                If you are experiencing severe, unbearable tooth pain, jaw trauma, or active bleeding, call our emergency line directly at <strong>{settings.phoneFormatted}</strong> for same-day walk-in slots.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="md:col-span-7 bg-slate-50/50 p-6 md:p-8 border border-slate-100 rounded-3xl">
            <h3 className="text-lg font-bold font-display text-slate-900 mb-6 text-left">
              Send an Inquiry
            </h3>
            <ContactForm />
          </div>

        </div>
      </Section>

      {/* Branch Locator in details */}
      <Section
        id="branch-contacts"
        title="Our Branch Address Directory"
        subtitle="Pune Clinic Details"
        className="bg-slate-50 border-t border-slate-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {branches.map((b) => (
            <div
              key={b.id}
              className={`p-6 bg-white border border-slate-100 ${radius.card} ${shadows.ambient}`}
            >
              <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 flex items-center gap-1.5 mb-3">
                <MapPin size={16} className="text-sky-600" />
                {b.name}
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                <p>
                  <strong className="text-slate-800">Address: </strong> {b.address}
                </p>
                <p>
                  <strong className="text-slate-800">Landmark: </strong> {b.landmark}
                </p>
                <p>
                  <strong className="text-slate-800">Parking: </strong> {b.parking}
                </p>
                <p>
                  <strong className="text-slate-800">Branch Phone: </strong> 
                  <a href={`tel:+91${b.phone}`} className="text-sky-600 font-bold ml-1">
                    +91 {b.phone}
                  </a>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                <a
                  href={b.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-slate-200 rounded-full text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 transition-colors"
                >
                  Get Directions (Google Maps)
                </a>
                <Link
                  to={`/branches/${b.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors"
                >
                  Branch Profile & Timings
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
};

// Quick mock import placeholder to avoid compile errors
const images = {
  heroDoctorPatient: 'https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=800'
};

export default Contact;
