import React, { useState } from 'react';
import { Star, CheckCircle, Play, X, Heart } from 'lucide-react';
import Section from '../components/Section';
import BookAppointmentCTA from '../components/BookAppointmentCTA';
import { reviews } from '../data/reviews';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideoModal = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  // Video reviews subset
  const videoReviews = reviews.filter((r) => r.videoUrl);

  return (
    <div className="bg-slate-50 font-sans">
      
      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 px-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
            Reviews
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            Patient Stories & Testimonials
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            See how our specialized MDS surgeons have helped patients regain healthy, beautiful, and confident smiles.
          </p>
        </div>
      </section>

      {/* Video Reviews Subsection */}
      {videoReviews.length > 0 && (
        <Section
          id="video-reviews"
          title="Video Testimonials"
          subtitle="Watch Patient Journeys"
          className="bg-white border-b border-slate-100"
        >
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videoReviews.map((review) => (
              <div
                key={review.id}
                className={`bg-slate-950 text-white rounded-3xl relative overflow-hidden aspect-video flex flex-col justify-between p-6 group ${shadows.popover}`}
              >
                {/* Background overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${review.avatar}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                <div className="relative z-10 text-left">
                  <span className="inline-flex items-center text-[10px] font-bold text-sky-400 bg-sky-950/70 border border-sky-900/50 px-2 py-0.5 rounded-full mb-2 uppercase">
                    {review.treatmentName}
                  </span>
                  <h4 className="text-base font-bold font-display text-white">{review.name}</h4>
                  <p className="text-slate-400 text-xs mt-1">Branch Location: {review.branchName}</p>
                </div>

                <button
                  onClick={() => openVideoModal(review.videoUrl)}
                  className="absolute inset-0 m-auto w-14 h-14 bg-white/90 hover:bg-white text-sky-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all cursor-pointer z-20"
                >
                  <Play size={20} fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* All Written Reviews Grid */}
      <Section
        id="written-reviews"
        title="Verified Patient Feedback"
        subtitle="100% Honest Reviews"
        className="bg-slate-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`flex flex-col justify-between bg-white p-6 border border-slate-100 ${radius.card} ${shadows.ambient}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full">
                      <CheckCircle size={10} className="mr-1 text-sky-600 fill-white" />
                      Google Verified
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic text-left">
                  "{review.comment}"
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4 text-left">
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-100">
                    {review.treatmentName}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-100">
                    Location: {review.branchName}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-100"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-slate-900 font-display">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full relative">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-slate-900/85 hover:bg-slate-900 text-white p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                title="Patient Video Review"
                src={activeVideo}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500 font-semibold">
              ✔ Verified Patient Testimonial • DentaLand Dental Clinic Pune
            </div>
          </div>
        </div>
      )}

      {/* CTA Footer Section */}
      <Section id="reviews-cta" className="bg-white" compact>
        <BookAppointmentCTA />
      </Section>

    </div>
  );
};

export default Testimonials;
