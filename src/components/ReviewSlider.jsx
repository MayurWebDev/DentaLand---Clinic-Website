import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, CheckCircle, Play, X } from 'lucide-react';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ReviewSlider = ({ reviews = [] }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideoModal = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  return (
    <div className="w-full relative py-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-14"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="h-auto">
            <div className={`flex flex-col justify-between h-full bg-white p-6 md:p-8 border border-slate-100 hover:border-sky-100 transition-all duration-300 ${radius.card} ${shadows.ambient} hover:shadow-lg`}>
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100/50">
                      <CheckCircle size={12} className="mr-1 text-sky-600 fill-white" />
                      Google Verified
                    </span>
                  )}
                </div>

                {/* Comment */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div>
                {/* Treatment and location info tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100">
                    {review.treatmentName}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100">
                    Branch: {review.branchName}
                  </span>
                </div>

                {/* Patient Profile */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-sky-100"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">
                        {review.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  {/* Video review button if available */}
                  {review.videoUrl && (
                    <button
                      onClick={() => openVideoModal(review.videoUrl)}
                      className="flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100/80 px-3 py-2 rounded-full transition-colors cursor-pointer"
                      title="Watch patient video review"
                    >
                      <Play size={12} fill="currentColor" className="text-sky-600" />
                      Video
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Pagination */}
      <div className="custom-swiper-pagination flex justify-center gap-2 mt-4"></div>

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
    </div>
  );
};

export default ReviewSlider;
