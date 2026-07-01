import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Stethoscope, Compass, Car, HelpCircle } from 'lucide-react';
import Section from '../components/Section';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import { branches } from '../data/branches';
import { doctors } from '../data/doctors';
import { useBooking } from '../context/BookingContext';
import { buttons } from '../design-system/buttons';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const Branches = () => {
  const { updateBookingState } = useBooking();

  const getDoctorName = (docId) => {
    const doc = doctors.find((d) => d.id === docId);
    return doc ? doc.name : '';
  };

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 px-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
            Locations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            Find a DentaLand Clinic Near You
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            All our Pune branches feature identical safety guidelines, MDS surgeons, transparent pricing models, and interest-free EMI programs.
          </p>
        </div>
      </section>

      {/* Branches locator grid */}
      <Section id="branches-list" className="bg-white">
        <div className="space-y-12">
          {branches.map((b) => (
            <div
              key={b.id}
              className={`grid lg:grid-cols-12 gap-8 bg-slate-50/40 p-6 md:p-10 border border-slate-100 rounded-3xl ${shadows.ambient}`}
            >
              
              {/* Left Column: Details (6 cols) */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                    Pune Branch Clinic
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-tight">
                    {b.name}
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium font-sans">
                  <p className="flex items-start gap-2">
                    <MapPin size={16} className="text-sky-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Address: </strong>{b.address}</span>
                  </p>
                  
                  <p className="flex items-start gap-2">
                    <Compass size={16} className="text-sky-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Landmark: </strong>{b.landmark}</span>
                  </p>

                  <p className="flex items-start gap-2">
                    <Car size={16} className="text-sky-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Parking: </strong>{b.parking}</span>
                  </p>

                  <p className="flex items-start gap-2">
                    <Phone size={16} className="text-sky-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Phone Contact: </strong>
                      <a href={`tel:+91${b.phone}`} className="text-sky-600 font-bold ml-0.5">
                        +91 {b.phone}
                      </a>
                    </span>
                  </p>

                  <p className="flex items-start gap-2">
                    <Clock size={16} className="text-sky-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Consulting Hours: </strong>{b.timings.weekdays} (Sundays: {b.timings.sunday})</span>
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100/80">
                    <Stethoscope size={16} className="text-sky-600" />
                    <span className="text-xs">
                      <strong>Lead Doctor: </strong>
                      {b.doctorIds.map((docId) => (
                        <Link key={docId} to={`/doctors/${docId}`} className="text-sky-600 hover:underline font-bold ml-1">
                          {getDoctorName(docId)}
                        </Link>
                      ))}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={b.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 rounded-full text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 transition-colors"
                  >
                    Directions on Maps
                  </a>
                  <Link
                    to={`/branches/${b.id}`}
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 rounded-full text-xs font-bold text-sky-600 bg-sky-50 hover:bg-sky-100 transition-colors"
                  >
                    View Branch Profile
                  </Link>
                  <Link
                    to={`/book-appointment?branch=${b.id}`}
                    onClick={() => updateBookingState({ branch: b.id })}
                    className={`${buttons.primary} py-2.5 px-6 text-xs`}
                  >
                    Book Appointment Here
                  </Link>
                </div>
              </div>

              {/* Right Column: Google Maps Embed (6 cols) */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200/60 aspect-[16/10] sm:aspect-auto sm:h-72 lg:h-full relative shadow-sm">
                <iframe
                  title={`${b.name} Google Map Location`}
                  src={b.mapEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          ))}
        </div>
      </Section>

      {/* CTA Footer Section */}
      <Section id="branches-cta" className="bg-slate-50" compact>
        <BookAppointmentCTA />
      </Section>

    </div>
  );
};

export default Branches;
