import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Award, Clock, Languages, Stethoscope, ArrowLeft, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import Section from '../components/Section';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import { doctors } from '../data/doctors';
import { branches } from '../data/branches';
import { useBooking } from '../context/BookingContext';
import { buttons } from '../design-system/buttons';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const DoctorDetail = () => {
  const { id } = useParams();
  const { updateBookingState } = useBooking();

  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <Section className="text-center py-20 bg-white">
        <h3 className="text-xl font-bold text-slate-800">Doctor Profile Not Found</h3>
        <p className="text-slate-500 mt-2">The doctor you are looking for does not exist or has relocated.</p>
        <Link to="/doctors" className="mt-6 inline-flex items-center text-sky-600 font-bold hover:underline">
          <ArrowLeft size={16} className="mr-1" /> Back to Doctors Directory
        </Link>
      </Section>
    );
  }

  const getBranchName = (bId) => {
    const branch = branches.find((b) => b.id === bId);
    return branch ? branch.name : '';
  };

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Header back bar */}
      <div className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/doctors" className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors">
            <ArrowLeft size={14} className="mr-1" /> Back to Team Directory
          </Link>
        </div>
      </div>

      {/* Main doctor card */}
      <Section id="doctor-profile" className="bg-white">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start text-left">
          
          {/* Photo Column */}
          <div className="md:col-span-4">
            <div className={`aspect-[4/5] w-full bg-slate-50 overflow-hidden ${radius.card} ${shadows.ambient}`}>
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Quick Timing Card */}
            <div className="mt-6 p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
              <h4 className="font-bold text-slate-900 text-sm font-display flex items-center gap-1.5 border-b border-slate-200/50 pb-2">
                <Clock size={16} className="text-sky-600" />
                Clinic Schedule
              </h4>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                {doctor.timings}
              </p>
              <div className="text-[10px] text-slate-400 font-medium">
                * Timings may vary slightly on holidays. Pre-booking is recommended.
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                MDS Specialist
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                {doctor.name}
              </h1>
              <p className="text-sm sm:text-base text-sky-600 font-bold">
                {doctor.qualification}
              </p>
            </div>

            {/* Quick specs */}
            <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-4 text-xs sm:text-sm text-slate-500 font-semibold">
              <div className="flex items-center gap-2">
                <Stethoscope size={16} className="text-sky-500" />
                <span>Specializes: {doctor.specialization.split(',')[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages size={16} className="text-sky-500" />
                <span>Speaks: {doctor.languages.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-sky-500" />
                <span>Exp: {doctor.experience} work</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-sky-500" />
                <span>Consults: {doctor.branchIds.map(bId => getBranchName(bId)).join(', ')}</span>
              </div>
            </div>

            <div className="space-y-3 font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              <h3 className="font-bold text-slate-900 text-lg font-display">Biography</h3>
              <p>{doctor.bio}</p>
            </div>

            {/* Treatments offered */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-base font-display">Treatments Handled</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.treatmentsOffered.map((treat, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-100">
                    {treat}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-base font-display">Memberships & Credentials</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-semibold">
                {doctor.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Booking Action */}
            <div className="pt-4">
              <Link
                to={`/book-appointment?doctor=${doctor.id}&branch=${doctor.branchIds[0]}`}
                onClick={() => updateBookingState({ doctor: doctor.id, branch: doctor.branchIds[0] })}
                className={`${buttons.primary} flex items-center gap-2`}
              >
                <Calendar size={18} />
                Book Consultation with {doctor.name}
              </Link>
            </div>

          </div>

        </div>
      </Section>

      {/* Reusable CTA */}
      <Section id="doctor-cta" className="bg-slate-50" compact>
        <BookAppointmentCTA
          title={`Need to consult ${doctor.name}?`}
          description={`Secure your appointment slot for ${doctor.name} at our nearest clinic. We will confirm your timing within 15 minutes.`}
          branchId={doctor.branchIds[0]}
          doctor={doctor.id}
        />
      </Section>

    </div>
  );
};
export default DoctorDetail;
