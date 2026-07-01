import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Section from '../../../components/Section';
import Card from '../../../components/Card';

const WhyChooseSection = () => {
  const whyChoose = [
    { title: 'Experienced Doctors', desc: 'MDS specialists with 10+ years of surgery experience.' },
    { title: 'Latest Equipment', desc: 'State-of-the-art digital scanners and low-radiation X-Rays.' },
    { title: 'Pain Free Dentistry', desc: 'Advanced computerized local anesthesia for painless operations.' },
    { title: 'Digital X-Rays', desc: 'RVG technology reducing radiation exposure by 90%.' },
    { title: 'Dental Implants', desc: 'Highest quality titanium implants with lifetime warranties.' },
    { title: 'Affordable Treatments', desc: 'Zero-cost EMI plans to ease medical bills.' },
    { title: 'Transparent Pricing', desc: 'Upfront cost estimates without any hidden fees.' },
    { title: 'Strict Sterilization', desc: 'Class B autoclaves and vacuum-sealed instruments.' },
    { title: 'Emergency Dental Care', desc: 'Same-day emergency slot allocations across all branches.' },
    { title: 'Patient First Approach', desc: 'Comfortable lounges and friendly staff tailored for all age groups.' },
  ];

  return (
    <Section
      id="why-choose"
      title="Why Choose DentaLand Clinic?"
      subtitle="The DentaLand Advantage"
      className="bg-white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {whyChoose.map((card, i) => (
          <Card
            key={i}
            variant="outlined"
            className="p-5 bg-slate-50/50 hover:bg-white text-left space-y-2"
          >
            <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
              <ShieldCheck size={16} />
            </div>
            <h4 className="font-bold text-sm text-slate-900 font-display">
              {card.title}
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              {card.desc}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default React.memo(WhyChooseSection);
