import React from 'react';
import Section from '../components/Section';
import AppointmentForm from '../components/Forms/AppointmentForm';
import { ShieldCheck, Clock, Calendar, CheckSquare } from 'lucide-react';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const BookAppointment = () => {
  const guarantees = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-sky-600" />,
      title: 'Painless Promise',
      desc: 'All branches use modern computerized local anesthesia for painless operations.',
    },
    {
      icon: <Clock className="h-5 w-5 text-sky-600" />,
      title: 'Punctual Timing',
      desc: 'We value your schedule. Registered times slot bookings minimize queue wait times.',
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-sky-600" />,
      title: 'No Hidden Costs',
      desc: 'Upfront estimates before procedure starts. Flexible zero-cost EMI plans available.',
    },
  ];

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-12 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-2 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display">
            Book Your Consultation
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Choose your nearest clinic, treatment concern, preferred date, and verify details below.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <Section id="booking-section" className="bg-white">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Reassurance specs */}
          <div className="lg:col-span-4 space-y-6 text-left order-2 lg:order-1">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
              <h3 className="font-bold text-slate-900 text-base font-display">
                What Happens Next?
              </h3>
              
              <ol className="space-y-4 text-xs sm:text-sm text-slate-600 font-sans relative pl-6 border-l border-slate-200">
                <li className="relative">
                  <span className="absolute -left-[31px] top-0 w-4 h-4 bg-sky-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
                  <strong className="text-slate-900 block mb-0.5">Select Options & Contact</strong>
                  Select a branch, procedure category, preferred slot, and input your mobile number.
                </li>
                <li className="relative">
                  <span className="absolute -left-[31px] top-0 w-4 h-4 bg-sky-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold">2</span>
                  <strong className="text-slate-900 block mb-0.5">Instant Confirmation SMS</strong>
                  We send a confirmation text containing directions, landmark info, and coordinator details.
                </li>
                <li className="relative">
                  <span className="absolute -left-[31px] top-0 w-4 h-4 bg-sky-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold">3</span>
                  <strong className="text-slate-900 block mb-0.5">Visit Clinic & Consultation</strong>
                  Meet your assigned MDS specialist, get digital scans done, and discuss treatment plans.
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm font-display">DentaLand Safety Assurances</h4>
              <div className="space-y-3">
                {guarantees.map((guar, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="bg-sky-50 p-2 rounded-xl flex-shrink-0 w-fit h-fit">
                      {guar.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs">{guar.title}</h5>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{guar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Multi-step Form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <AppointmentForm />
          </div>

        </div>
      </Section>

    </div>
  );
};

export default BookAppointment;
