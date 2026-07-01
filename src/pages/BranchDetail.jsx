import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Stethoscope, Compass, Car, HelpCircle, Star, CheckCircle } from 'lucide-react';
import Section from '../components/Section';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import SEOHelmet from '../seo/SEOHelmet';
import SchemaBuilder from '../schemas/SchemaBuilder';
import { branchesSEO } from '../seo/defaults';
import { branches } from '../data/branches';
import { doctors } from '../data/doctors';
import { reviews } from '../data/reviews';
import { useBooking } from '../context/BookingContext';
import { buttons } from '../design-system/buttons';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const BranchDetail = () => {
  const { id } = useParams();
  const { updateBookingState } = useBooking();

  const branch = branches.find((b) => b.id === id);

  if (!branch) {
    return (
      <Section className="text-center py-20 bg-white">
        <h3 className="text-xl font-bold text-slate-800">Branch Profile Not Found</h3>
        <p className="text-slate-500 mt-2">The clinic location page you are looking for does not exist.</p>
        <Link to="/branches" className="mt-6 inline-flex items-center text-sky-600 font-bold hover:underline">
          <Clock size={16} className="mr-1" /> Back to Branches List
        </Link>
      </Section>
    );
  }

  // Get doctors consult at this branch
  const branchDoctors = doctors.filter((doc) => doc.branchIds.includes(branch.id));

  // Get reviews for this branch
  const branchReviews = reviews.filter((r) => r.branchId === branch.id);

  const bSEO = branchesSEO[branch.id] || {};
  const dentistSchema = SchemaBuilder.getDentistSchema(branch);

  return (
    <div className="bg-slate-50 font-sans">
      <SEOHelmet
        title={bSEO.title || `${branch.name} | DentaLand Clinic`}
        description={bSEO.description || `Visit DentaLand Dental Clinic at ${branch.shortName}.`}
        keywords={bSEO.keywords || `Dentist in ${branch.shortName}`}
        canonicalUrl={bSEO.canonicalUrl || `https://dentaland.in/branches/${branch.id}`}
        schema={dentistSchema}
      />
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 text-left relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 space-y-4">
            <span className="inline-flex items-center text-xs font-bold text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
              Clinic Branch Profile
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
              {branch.name}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {branch.address}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-2 bg-slate-900/90 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Contact Details</div>
            <div className="flex justify-between text-xs py-1.5 border-b border-slate-800">
              <span className="text-slate-500 font-medium">Helpline:</span>
              <a href={`tel:+91${branch.phone}`} className="font-bold text-sky-400 hover:underline">+91 {branch.phone}</a>
            </div>
            <div className="flex justify-between text-xs py-1.5 border-b border-slate-800">
              <span className="text-slate-500 font-medium">Working Hours:</span>
              <span className="font-bold text-white">{branch.timings.weekdays}</span>
            </div>
            <Link
              to={`/book-appointment?branch=${branch.id}`}
              onClick={() => updateBookingState({ branch: branch.id })}
              className={`${buttons.primary} py-2 text-xs text-center w-full mt-2`}
            >
              Book at this Location
            </Link>
          </div>
        </div>
      </section>

      {/* Main Info Section */}
      <Section id="branch-profile-details" className="bg-white">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start text-left">
          
          {/* Left Column: Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 border-b border-slate-100 pb-2">
              Clinic Overview & Infrastructure
            </h3>
            
            <div className="space-y-4 text-slate-600 text-xs sm:text-sm font-sans">
              <p className="flex items-start gap-2.5">
                <MapPin size={18} className="text-sky-600 mt-0.5 flex-shrink-0" />
                <span><strong>Full Address: </strong>{branch.address}</span>
              </p>

              <p className="flex items-start gap-2.5">
                <Compass size={18} className="text-sky-600 mt-0.5 flex-shrink-0" />
                <span><strong>Directions & Landmark: </strong>{branch.landmark}</span>
              </p>

              <p className="flex items-start gap-2.5">
                <Car size={18} className="text-sky-600 mt-0.5 flex-shrink-0" />
                <span><strong>Parking Guidelines: </strong>{branch.parking}</span>
              </p>
            </div>

            {/* Facilities Specific List */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base font-display">Specialized Facilities Available</h4>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 font-semibold font-sans">
                {branch.facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 flex-shrink-0"></span>
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas Served Tag list */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base font-display">Areas Served near this Branch</h4>
              <div className="flex flex-wrap gap-2">
                {branch.areasServed.map((area, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-100">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Consulting Doctors */}
            <div className="space-y-4 pt-4">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base font-display">Consulting MDS Surgeons</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {branchDoctors.map((doc) => (
                  <div key={doc.id} className="p-4 border border-slate-100 rounded-2xl flex gap-3 text-left">
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-50"
                      loading="lazy"
                    />
                    <div className="overflow-hidden">
                      <h5 className="font-bold text-slate-950 text-xs truncate">{doc.name}</h5>
                      <p className="text-[10px] text-sky-600 font-extrabold truncate">{doc.qualification.split(',')[0]}</p>
                      <Link to={`/doctors/${doc.id}`} className="text-[10px] text-slate-400 font-semibold hover:underline block mt-1">
                        View Profile &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200/60 aspect-[16/11] sm:aspect-auto sm:h-72 lg:h-96 relative shadow-md">
            <iframe
              title={`${branch.name} Google Map Location`}
              src={branch.mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </Section>

      {/* Local reviews specific to this branch */}
      {branchReviews.length > 0 && (
        <Section
          id="branch-reviews"
          title={`Patient Reviews for ${branch.shortName}`}
          subtitle="Verified Local Feedback"
          className="bg-slate-50 border-t border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {branchReviews.map((review) => (
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
                    <p className="text-[10px] text-slate-400">{review.date} • {review.treatmentName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Reusable CTA */}
      <Section id="branch-cta" className="bg-white" compact>
        <BookAppointmentCTA
          title={`Ready to Visit Our ${branch.shortName} Branch?`}
          description={`Secure your appointment slot with our specialists at our ${branch.name}. Select your timings online.`}
          branchId={branch.id}
        />
      </Section>

    </div>
  );
};

export default BranchDetail;
