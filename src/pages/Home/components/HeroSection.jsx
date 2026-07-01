import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Star, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { settings } from '../../../data/settings';
import { images } from '../../../data/images';
import { buttons } from '../../../design-system/buttons';

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-10 pb-20 md:py-24 overflow-hidden border-b border-slate-100/50 text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Copy */}
          <div className="md:col-span-6 space-y-6 text-left relative z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-xs font-bold border border-sky-100/60 uppercase tracking-wider">
              <Star size={12} fill="currentColor" className="text-sky-600" />
              4.9★ Google Rating Across Pune
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
              Creating Healthy & <br />
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Confident Smiles
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              Advanced Dental Care by Experienced MDS Specialists Across Multiple Modern Clinics in Pune. Pain-free treatments tailored for your family.
            </p>

            {/* Status / Working Hours Indicator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Open Today: 09:00 AM - 09:00 PM
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/book-appointment"
                className={`${buttons.primary} flex items-center justify-center gap-2`}
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
              <a
                href={`tel:+91${settings.phone}`}
                className={`${buttons.secondary} flex items-center justify-center gap-2`}
              >
                <Phone size={18} className="text-sky-600" />
                Call Helpline
              </a>
            </div>

            {/* Quick statistics checklist */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 text-xs text-slate-500 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>Class B Sterility Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>Zero-Cost EMI Available</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>25+ Years of Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>Emergency Same-Day Appt</span>
              </div>
            </div>
          </div>

          {/* Right visuals */}
          <div className="md:col-span-6 flex justify-center relative">
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-sky-100/40 shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-sky-50 text-sky-600 p-2.5 rounded-full">
                <Zap size={18} className="fill-sky-50" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">Emergency Care</h4>
                <p className="text-[10px] text-slate-400">Same Day Appointment</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-emerald-100/40 shadow-xl flex items-center gap-3">
              <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-full">
                <CheckCircle2 size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">Verified Safety</h4>
                <p className="text-[10px] text-slate-400">WHO Standards Compliant</p>
              </div>
            </div>

            {/* Main Image in premium circular frame */}
            <div className="relative w-full max-w-[450px] aspect-[4/3] md:aspect-square overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl">
              <img
                src={images.heroDoctorPatient}
                alt="Doctor with patient smiling at DentaLand Dental Clinic Pune"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
