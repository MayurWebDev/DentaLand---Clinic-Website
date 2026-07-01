import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Activity, Smile, Layers, Sun, Shield, Gem } from 'lucide-react';
import Section from '../components/Section';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import { treatments } from '../data/treatments';
import { useBooking } from '../context/BookingContext';
import { buttons } from '../design-system/buttons';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const Treatments = () => {
  const { updateBookingState } = useBooking();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTreatments = treatments.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.tagline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 px-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            Specialized Dental Treatments
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From routine preventive checkups to complex oral surgery, we deliver painless care using state-of-the-art dental technology.
          </p>
        </div>
      </section>

      {/* Treatments List with Search */}
      <Section id="treatments-directory" className="bg-white">
        <div className="space-y-8">
          
          {/* Search bar widget */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search treatments (e.g. root canal, braces)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-full text-sm font-medium focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:outline-none transition-all"
            />
            <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
          </div>

          {/* Grid list */}
          {filteredTreatments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTreatments.map((t) => (
                <div
                  key={t.id}
                  className={`flex flex-col justify-between bg-white border border-slate-100 hover:border-sky-100 transition-all duration-300 overflow-hidden ${radius.card} ${shadows.ambient} hover:shadow-lg`}
                >
                  <div>
                    <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-100">
                      <img
                        src={t.image}
                        alt={t.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-4 right-4 bg-slate-950/80 text-white text-[10px] font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                        Starts {t.costRange.split(' ')[0]}
                      </span>
                    </div>

                    <div className="p-6 text-left space-y-3">
                      <h4 className="text-lg font-bold font-display text-slate-900 flex items-center gap-2">
                        {t.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.tagline}
                      </p>
                      
                      {/* Short list of key benefits */}
                      <div className="pt-2">
                        <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-1">Key Benefits</span>
                        <ul className="space-y-1 text-[11px] text-slate-500 font-medium">
                          {t.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i} className="flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-sky-500 flex-shrink-0"></span>
                              <span className="truncate">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-50">
                    <Link
                      to={`/treatments/${t.id}`}
                      className="text-xs font-bold text-sky-600 hover:underline flex items-center gap-1"
                    >
                      Read Guide
                      <ArrowRight size={12} />
                    </Link>
                    <Link
                      to={`/book-appointment?treatment=${t.id}`}
                      onClick={() => updateBookingState({ treatment: t.id })}
                      className={`${buttons.primary} py-1.5 px-4 text-xs`}
                    >
                      Book Free Appt
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-slate-500 font-semibold">No treatments match your search term.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-sky-600 font-bold hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}

        </div>
      </Section>

      {/* CTA Footer Section */}
      <Section id="treatments-cta" className="bg-slate-50" compact>
        <BookAppointmentCTA />
      </Section>

    </div>
  );
};

export default Treatments;
