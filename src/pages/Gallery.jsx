import React from 'react';
import Section from '../components/Section';
import ClinicTour from '../components/ClinicTour';
import BookAppointmentCTA from '../components/BookAppointmentCTA';

const Gallery = () => {
  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 px-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
            Clinic Photos
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            A Virtual Tour of DentaLand
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Take a look inside our clinic spaces, diagnostic rooms, and sterilization centers to experience DentaLand quality.
          </p>
        </div>
      </section>

      {/* Clinic Tour Interactive Section */}
      <Section id="tour-gallery" className="bg-white">
        <ClinicTour />
      </Section>

      {/* CTA Footer Section */}
      <Section id="gallery-cta" className="bg-slate-50" compact>
        <BookAppointmentCTA />
      </Section>

    </div>
  );
};

export default Gallery;
