import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Languages, Stethoscope, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import { doctors } from '../data/doctors';
import { branches } from '../data/branches';
import { useBooking } from '../context/BookingContext';
import { buttons } from '../design-system/buttons';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const Doctors = () => {
  const { updateBookingState } = useBooking();
  const [selectedBranch, setSelectedBranch] = useState('all');

  const filteredDoctors = selectedBranch === 'all'
    ? doctors
    : doctors.filter((doc) => doc.branchIds.includes(selectedBranch));

  const getBranchName = (id) => {
    const branch = branches.find((b) => b.id === id);
    return branch ? branch.shortName : '';
  };

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=800')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 px-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
            Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            Meet Our Specialized Dental Surgeons
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            DentaLand brings together highly qualified, experienced MDS specialists in Pune dedicated to pain-free treatments.
          </p>
        </div>
      </section>

      {/* Team Grid with Branch Filters */}
      <Section id="doctors-directory" className="bg-white">
        <div className="space-y-8">
          
          {/* Branch Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedBranch('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedBranch === 'all'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
              }`}
            >
              All Clinics
            </button>
            {branches.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBranch(b.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedBranch === b.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
                }`}
              >
                {b.shortName} Clinic
              </button>
            ))}
          </div>

          {/* Grid listing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className={`flex flex-col justify-between bg-white border border-slate-100 hover:border-sky-100 transition-all duration-300 overflow-hidden text-left ${radius.card} ${shadows.ambient} hover:shadow-lg`}
              >
                <div>
                  {/* Photo container */}
                  <div className="aspect-[4/5] w-full bg-slate-50 overflow-hidden relative">
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      loading="lazy"
                    />
                    
                    {/* Location Badge */}
                    <div className="absolute bottom-4 left-4 bg-slate-950/80 text-white text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                      <MapPin size={10} className="text-sky-400" />
                      {doc.branchIds.map((bId) => getBranchName(bId)).join(', ')}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold font-display text-slate-900">{doc.name}</h4>
                      <p className="text-xs text-sky-600 font-extrabold">{doc.qualification}</p>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed truncate-3-lines font-sans">
                      {doc.bio}
                    </p>

                    {/* Meta stats */}
                    <div className="pt-2 border-t border-slate-50 space-y-2 text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Stethoscope size={14} className="text-sky-500" />
                        <span>Exp: {doc.experience} of surgery work</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Languages size={14} className="text-sky-500" />
                        <span>Speaks: {doc.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex flex-col gap-2">
                  <Link
                    to={`/doctors/${doc.id}`}
                    className="text-center font-bold text-xs text-slate-500 border border-slate-200 py-2.5 rounded-full hover:bg-slate-50 hover:text-slate-800 transition-colors"
                  >
                    View Biography & Schedule
                  </Link>
                  <Link
                    to={`/book-appointment?doctor=${doc.id}`}
                    onClick={() => updateBookingState({ doctor: doc.id, branch: doc.branchIds[0] })}
                    className={`${buttons.primary} py-2.5 text-center text-xs w-full`}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Section>

      {/* CTA Footer Section */}
      <Section id="doctors-cta" className="bg-slate-50" compact>
        <BookAppointmentCTA />
      </Section>

    </div>
  );
};

export default Doctors;
