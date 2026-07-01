import React from 'react';
import Section from '../components/Section';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import { images } from '../data/images';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';
import { ShieldCheck, Heart, Award, Star } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-sky-600" />,
      title: 'Uncompromised Hygiene',
      desc: 'We follow absolute sterilization protocols using Class B autoclave vacuum seal systems for patient safety.',
    },
    {
      icon: <Heart className="h-6 w-6 text-sky-600" />,
      title: 'Patient-First Compassion',
      desc: 'Our staff are trained to soothe dental anxiety, delivering gentle, comfortable, and pain-free treatments.',
    },
    {
      icon: <Award className="h-6 w-6 text-sky-600" />,
      title: 'Clinical Excellence',
      desc: 'All branches are staffed with qualified MDS surgeons specialized in implants, orthodontics, and root canals.',
    },
  ];

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('${images.heroDoctorPatient}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 px-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
            About DentaLand
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            A Legacy of Confident Smiles in Pune
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            DentaLand was founded with a single mission: to make premium, state-of-the-art dental care accessible and completely painless.
          </p>
        </div>
      </section>

      {/* Intro section */}
      <Section id="about-intro" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 font-display leading-tight">
              25+ Years of Trust and Healthcare Excellence
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Established in Pune, DentaLand has grown from a single chair clinic to one of PCMC’s most trusted dental clinic chains. We have served over 10,000 happy patients, offering advanced diagnostics, cosmetic smile designs, and surgical implants.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our clinics are equipped with modern digital intraoral scanners, low-radiation digital X-rays, and premium dental suites. We believe in transparency—which is why we present cost estimations before any treatment begins.
            </p>
            
            <div className="flex gap-6 pt-4 border-t border-slate-100">
              <div>
                <span className="text-2xl font-extrabold text-sky-600 font-display">10k+</span>
                <p className="text-[10px] uppercase font-bold text-slate-500 mt-1">Happy Patients</p>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div>
                <span className="text-2xl font-extrabold text-sky-600 font-display">25+</span>
                <p className="text-[10px] uppercase font-bold text-slate-500 mt-1">Years Experience</p>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div>
                <span className="text-2xl font-extrabold text-sky-600 font-display">4</span>
                <p className="text-[10px] uppercase font-bold text-slate-500 mt-1">Pune Locations</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={images.heroDoctorPatient}
              alt="DentaLand Dental Clinic advanced patient care"
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg border border-slate-100"
            />
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section
        id="about-values"
        title="Our Core Values"
        subtitle="What Drives Us"
        className="bg-slate-50 border-y border-slate-100"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {coreValues.map((val, i) => (
            <div
              key={i}
              className={`p-8 bg-white border border-slate-100 text-left space-y-4 ${radius.card} ${shadows.ambient}`}
            >
              <div className="bg-sky-50 p-3 rounded-2xl w-fit">
                {val.icon}
              </div>
              <h4 className="text-lg font-bold font-display text-slate-900">{val.title}</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technology & Infrastructure */}
      <Section id="about-technology" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={images.tour.equipment}
              alt="Advanced dental digital intraoral scanner equipment"
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg border border-slate-100"
            />
          </div>
          
          <div className="space-y-6 text-left order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 font-display leading-tight">
              Invested in Modern Dental Technology
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe modern equipment enables safer, faster, and more accurate diagnoses. That is why DentaLand has transitioned completely to digital workflows:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-semibold">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                <span><strong>Intraoral 3D Scanners:</strong> Eliminates uncomfortable gooey molds.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                <span><strong>Digital RVG X-Rays:</strong> Instant chairside imaging with 90% less radiation.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                <span><strong>Rotary Endodontics:</strong> Ensures root canals are fast and virtually painless.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                <span><strong>Soft Tissue Lasers:</strong> For bloodless gum corrections and faster recovery.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Footer Section */}
      <Section id="about-cta" className="bg-slate-50" compact>
        <BookAppointmentCTA />
      </Section>

    </div>
  );
};

export default About;
