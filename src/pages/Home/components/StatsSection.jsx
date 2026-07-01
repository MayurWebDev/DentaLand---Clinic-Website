import React from 'react';
import Section from '../../../components/Section';

const StatsSection = () => {
  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '10,000+', label: 'Happy Patients' },
    { value: '4+', label: 'Clinic Locations' },
    { value: '5,000+', label: 'Successful Implants' },
    { value: '4.9★', label: 'Google Rating' },
  ];

  return (
    <Section id="trust-stats" className="bg-slate-50 border-b border-slate-100/40" compact>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent animate-fadeIn">
              {stat.value}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default React.memo(StatsSection);
