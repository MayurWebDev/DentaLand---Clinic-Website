import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Clock, Stethoscope, Compass, Star, CheckCircle, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import FAQAccordion from '../components/FAQAccordion';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import { branches } from '../data/branches';
import { treatments } from '../data/treatments';
import { doctors } from '../data/doctors';
import { reviews } from '../data/reviews';
import { useBooking } from '../context/BookingContext';
import { buttons } from '../design-system/buttons';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const LocalTreatmentPage = () => {
  const { treatment: treatmentParam, branch: branchParam } = useParams();
  const { updateBookingState } = useBooking();
  const location = useLocation();

  // Helper to parse treatment and branch from slug (e.g. `/root-canal-treatment-in-pimpri`)
  const getResolvedEntities = () => {
    const slug = location.pathname.toLowerCase();
    
    // Find matching branch
    let matchedBranch = branches[0];
    if (slug.includes('pimpri') || slug.includes('chinchwad')) matchedBranch = branches.find(b => b.id === 'pimpri');
    else if (slug.includes('kalewadi') || slug.includes('thergaon')) matchedBranch = branches.find(b => b.id === 'kalewadi');
    else if (slug.includes('chikhali') || slug.includes('moshi')) matchedBranch = branches.find(b => b.id === 'chikhali');
    else if (slug.includes('akurdi') || slug.includes('nigdi')) matchedBranch = branches.find(b => b.id === 'akurdi');

    // Find matching treatment
    let matchedTreatment = treatments[0];
    if (slug.includes('root-canal') || slug.includes('rct')) matchedTreatment = treatments.find(t => t.id === 'root-canal');
    else if (slug.includes('implant')) matchedTreatment = treatments.find(t => t.id === 'dental-implants');
    else if (slug.includes('brace') || slug.includes('aligner') || slug.includes('orthodontic')) matchedTreatment = treatments.find(t => t.id === 'braces');
    else if (slug.includes('makeover') || slug.includes('cosmetic') || slug.includes('smile-design')) matchedTreatment = treatments.find(t => t.id === 'smile-makeover');
    else if (slug.includes('veneer')) matchedTreatment = treatments.find(t => t.id === 'veneers');
    else if (slug.includes('whitening') || slug.includes('bleach')) matchedTreatment = treatments.find(t => t.id === 'teeth-whitening');
    else if (slug.includes('pediatric') || slug.includes('child') || slug.includes('kid')) matchedTreatment = treatments.find(t => t.id === 'pediatric-dentistry');
    else if (slug.includes('scaling') || slug.includes('cleaning')) matchedTreatment = treatments.find(t => t.id === 'scaling');
    else if (slug.includes('extraction') || slug.includes('wisdom') || slug.includes('pull')) matchedTreatment = treatments.find(t => t.id === 'extraction');

    return { branch: matchedBranch, treatment: matchedTreatment };
  };

  const { branch, treatment } = getResolvedEntities();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  // Find branch doctors specialized in this treatment
  const localDoctors = doctors.filter((doc) =>
    doc.branchIds.includes(branch.id) &&
    doc.treatmentsOffered.some(t => t.toLowerCase() === treatment.shortTitle.toLowerCase() || treatment.title.toLowerCase().includes(t.toLowerCase()))
  );

  // Get local reviews for this treatment & branch
  const localReviews = reviews.filter((r) => r.branchId === branch.id && r.treatmentId === treatment.id);

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Local SEO Treatment Header */}
      <section className="bg-slate-900 text-white py-16 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('${treatment.image}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 space-y-4">
            <span className="inline-flex items-center text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50 uppercase tracking-widest">
              Local Treatment Guide • {treatment.shortTitle} in {branch.shortName}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight">
              {treatment.shortTitle} Treatment in {branch.shortName}, Pune
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Looking for professional {treatment.title} in {branch.shortName}? DentaLand offers painless clinical care led by specialized MDS dental surgeons at our state-of-the-art {branch.shortName} clinic.
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-2 bg-slate-900/90 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location Guide</div>
            <div className="flex justify-between text-xs py-1.5 border-b border-slate-800">
              <span className="text-slate-500 font-medium">Estimated Pricing:</span>
              <span className="font-bold text-emerald-400">Starts {treatment.costRange.split(' ')[0]}</span>
            </div>
            <div className="flex justify-between text-xs py-1.5 border-b border-slate-800">
              <span className="text-slate-500 font-medium">Branch Helpline:</span>
              <a href={`tel:+91${branch.phone}`} className="font-bold text-sky-400 hover:underline">+91 {branch.phone}</a>
            </div>
            <Link
              to={`/book-appointment?branch=${branch.id}&treatment=${treatment.id}`}
              onClick={() => updateBookingState({ branch: branch.id, treatment: treatment.id })}
              className={`${buttons.primary} py-2 text-xs text-center w-full mt-2`}
            >
              Book Slot at {branch.shortName}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Info */}
      <Section id="local-treatment-info" className="bg-white">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start text-left">
          
          {/* Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8 font-sans">
            
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                About {treatment.shortTitle} at DentaLand {branch.shortName}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We perform {treatment.title} using modern, low-radiation digital RVG diagnostics and rotary instruments. This ensures the procedure is completed with maximum safety, minimal seat time, and absolute comfort. Our Pimpri/Kalewadi/Chikhali/Akurdi centers feature Class B sterilization autoclave systems to guarantee zero microbial cross-contamination.
              </p>
            </div>

            {/* Symptoms list */}
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-3">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display flex items-center gap-1.5">
                <Heart size={16} className="text-red-500 animate-pulse" />
                Symptoms Mapped
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 font-semibold font-sans">
                {treatment.symptoms.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-step procedure */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-display text-slate-900">What to Expect During the Procedure</h3>
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

            {/* local timing & maps */}
            <div className="p-6 bg-sky-50/50 border border-sky-100/30 rounded-3xl space-y-3">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base font-display flex items-center gap-1.5">
                <Clock size={16} className="text-sky-600" />
                Branch Schedule & Address
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Our clinic is located at <strong>{branch.address}</strong> (Landmark: {branch.landmark}). 
                Open from <strong>{branch.timings.weekdays}</strong>. Patient parking is available.
              </p>
            </div>

          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* On-site doctors */}
            {localDoctors.length > 0 && (
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
                <h4 className="font-bold text-slate-900 text-sm font-display border-b border-slate-200/50 pb-2">
                  Specialist on Duty
                </h4>
                <div className="space-y-3">
                  {localDoctors.map((doc) => (
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

            {/* Map sidebar widget */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/60 aspect-square relative shadow-sm">
              <iframe
                title={`${branch.name} Google Map`}
                src={branch.mapEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </Section>

      {/* Local reviews specific to this branch & treatment */}
      {localReviews.length > 0 && (
        <Section
          id="branch-local-treatment-reviews"
          title={`Reviews for ${treatment.shortTitle} in ${branch.shortName}`}
          subtitle="Patient Smiles"
          className="bg-slate-50 border-t border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {localReviews.map((review) => (
              <div
                key={review.id}
                className={`bg-white p-6 border border-slate-100 ${radius.card} ${shadows.ambient}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="inline-flex items-center text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full">
                    <CheckCircle size={10} className="mr-1 text-sky-600 fill-white" />
                    Google Verified
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic text-left">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-slate-900 font-display">{review.name}</h4>
                    <p className="text-[10px] text-slate-400">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Reusable CTA */}
      <Section id="local-treatment-cta" className="bg-white" compact>
        <BookAppointmentCTA
          title={`Secure Your ${treatment.shortTitle} Slot in ${branch.shortName}`}
          description={`Need this procedure? Contact us to lock your consult appointment at DentaLand ${branch.shortName}.`}
          branchId={branch.id}
          treatmentId={treatment.id}
        />
      </Section>

    </div>
  );
};

export default LocalTreatmentPage;
