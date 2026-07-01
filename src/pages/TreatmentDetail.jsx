import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Activity, ShieldCheck, Heart, Clock, ArrowLeft, Calendar, HelpCircle } from 'lucide-react';
import Section from '../components/Section';
import FAQAccordion from '../components/FAQAccordion';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import SEOHelmet from '../seo/SEOHelmet';
import SchemaBuilder from '../schemas/SchemaBuilder';
import { treatmentsSEO } from '../seo/defaults';
import { treatments } from '../data/treatments';
import { doctors } from '../data/doctors';
import { useBooking } from '../context/BookingContext';
import { buttons } from '../design-system/buttons';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const TreatmentDetail = () => {
  const { id } = useParams();
  const { updateBookingState } = useBooking();

  const treatment = treatments.find((t) => t.id === id);

  if (!treatment) {
    return (
      <Section className="text-center py-20 bg-white">
        <h3 className="text-xl font-bold text-slate-800">Treatment Guide Not Found</h3>
        <p className="text-slate-500 mt-2">The dental procedure page you are looking for does not exist.</p>
        <Link to="/treatments" className="mt-6 inline-flex items-center text-sky-600 font-bold hover:underline">
          <ArrowLeft size={16} className="mr-1" /> Back to Treatments List
        </Link>
      </Section>
    );
  }

  // Get doctors offering this treatment
  const specializedDoctors = doctors.filter((doc) =>
    doc.treatmentsOffered.some(t => t.toLowerCase() === treatment.shortTitle.toLowerCase() || treatment.title.toLowerCase().includes(t.toLowerCase()))
  );

  // Get related treatments (excluding current)
  const relatedTreatments = treatments.filter((t) => t.id !== treatment.id).slice(0, 3);

  const tSEO = treatmentsSEO[treatment.id] || {};
  const faqSchema = SchemaBuilder.getFAQSchema(treatment.faqs || []);

  return (
    <div className="bg-slate-50 font-sans">
      <SEOHelmet
        title={tSEO.title || `${treatment.title} | DentaLand Clinic`}
        description={tSEO.description || treatment.tagline}
        keywords={tSEO.keywords || `${treatment.shortTitle} Treatment`}
        canonicalUrl={tSEO.canonicalUrl || `https://dentaland.in/treatments/${treatment.id}`}
        ogImage={treatment.image}
        schema={faqSchema}
      />
      
      {/* Header back bar */}
      <div className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/treatments" className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors">
            <ArrowLeft size={14} className="mr-1" /> Back to Treatments Directory
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${treatment.image}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 space-y-4">
            <span className="inline-flex items-center text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
              Dental Treatment Guide
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
              {treatment.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {treatment.tagline}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-2 bg-slate-900/90 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Diagnostic Specs</div>
            <div className="flex justify-between text-xs py-1.5 border-b border-slate-800">
              <span className="text-slate-500 font-medium">Duration:</span>
              <span className="font-bold text-white">{treatment.duration}</span>
            </div>
            <div className="flex justify-between text-xs py-1.5 border-b border-slate-800">
              <span className="text-slate-500 font-medium">Pricing:</span>
              <span className="font-bold text-emerald-400">Starts {treatment.costRange.split(' ')[0]}</span>
            </div>
            <Link
              to={`/book-appointment?treatment=${treatment.id}`}
              onClick={() => updateBookingState({ treatment: treatment.id })}
              className={`${buttons.primary} py-2 text-xs text-center w-full mt-2`}
            >
              Book Free Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <Section id="treatment-details" className="bg-white">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start text-left">
          
          {/* Left Column: Core content (8 cols) */}
          <div className="lg:col-span-8 space-y-8 font-sans">
            
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold font-display text-slate-900">Treatment Overview</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{treatment.overview}</p>
            </div>

            {/* Symptoms */}
            <div className="space-y-3 bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-1.5">
                <Heart size={16} className="text-red-500 animate-pulse" />
                Symptoms: Do You Need This Treatment?
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5 text-slate-600 text-xs sm:text-sm font-semibold pt-2">
                {treatment.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Causes */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold font-display text-slate-900">Common Causes</h3>
              <ul className="space-y-2 text-slate-600 text-xs sm:text-sm font-semibold">
                {treatment.causes.map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0"></span>
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedure steps */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-display text-slate-900">Step-by-Step Procedure</h3>
              <div className="space-y-4 relative pl-6 border-l border-slate-200">
                {treatment.procedure.map((step, idx) => {
                  const [title, desc] = step.split(': ');
                  return (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[31px] top-0.5 w-4.5 h-4.5 bg-sky-600 text-white rounded-full flex items-center justify-center text-[10px] font-extrabold shadow-sm">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{title}</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recovery guide */}
            <div className="space-y-3 bg-sky-50/50 p-6 rounded-3xl border border-sky-100/30">
              <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-1.5">
                <Clock size={16} className="text-sky-600" />
                Recovery & Aftercare Guidelines
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                {treatment.recovery}
              </p>
            </div>

            {/* Benefits & Risks */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3 p-5 bg-emerald-50/30 border border-emerald-100/30 rounded-2xl">
                <h4 className="font-bold text-emerald-800 text-sm font-display flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  Key Advantages
                </h4>
                <ul className="space-y-2 text-[11px] sm:text-xs text-slate-600 font-semibold">
                  {treatment.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 p-5 bg-rose-50/30 border border-rose-100/30 rounded-2xl">
                <h4 className="font-bold text-rose-800 text-sm font-display flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-rose-600" />
                  Considerations & Risks
                </h4>
                <ul className="space-y-2 text-[11px] sm:text-xs text-slate-600 font-semibold">
                  {treatment.risks.map((r, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct consultation doctors */}
            {specializedDoctors.length > 0 && (
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
                <h4 className="font-bold text-slate-900 text-sm font-display border-b border-slate-200/50 pb-2">
                  Consulting Specialists
                </h4>
                <div className="space-y-3">
                  {specializedDoctors.map((doc) => (
                    <Link
                      key={doc.id}
                      to={`/doctors/${doc.id}`}
                      className="flex items-center gap-3 p-2 bg-white rounded-xl hover:shadow-sm border border-transparent hover:border-slate-100 transition-all group"
                    >
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-100"
                        loading="lazy"
                      />
                      <div className="overflow-hidden">
                        <h5 className="font-bold text-slate-800 text-xs group-hover:text-sky-600 transition-colors truncate">
                          {doc.name}
                        </h5>
                        <p className="text-[10px] text-sky-600 font-semibold truncate">
                          {doc.qualification.split(',')[0]}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Treatments sidebar */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm font-display border-b border-slate-200/50 pb-2">
                Related Dental Procedures
              </h4>
              <div className="space-y-2 text-xs font-semibold">
                {relatedTreatments.map((t) => (
                  <Link
                    key={t.id}
                    to={`/treatments/${t.id}`}
                    className="block p-3 bg-white rounded-xl text-slate-600 hover:text-sky-600 hover:shadow-sm border border-transparent hover:border-slate-100 transition-all text-left"
                  >
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </Section>

      {/* FAQ Section */}
      {treatment.faqs && treatment.faqs.length > 0 && (
        <Section
          id="treatment-faqs"
          title={`FAQs About ${treatment.shortTitle}`}
          subtitle="Helpful Answers"
          className="bg-slate-50 border-t border-slate-100"
        >
          <FAQAccordion items={treatment.faqs} />
        </Section>
      )}

      {/* Reusable CTA */}
      <Section id="treatment-cta" className="bg-white animate-fade-in" compact>
        <BookAppointmentCTA
          title={`Ready to Book Your ${treatment.shortTitle}?`}
          description={`Secure your consultation slot for ${treatment.title} at DentaLand. Pain-free care, zero-interest EMIs, and sterile safety guaranteed.`}
          treatmentId={treatment.id}
        />
      </Section>

    </div>
  );
};

export default TreatmentDetail;
