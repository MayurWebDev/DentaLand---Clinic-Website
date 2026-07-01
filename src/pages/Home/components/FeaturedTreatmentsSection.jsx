import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../../../components/Section';
import Card from '../../../components/Card';
import { treatments } from '../../../data/treatments';
import { useBooking } from '../../../context/BookingContext';
import { buttons } from '../../../design-system/buttons';

const FeaturedTreatmentsSection = () => {
  const { updateBookingState } = useBooking();
  const featuredTreatments = treatments.slice(0, 6);

  return (
    <Section
      id="featured-treatments"
      title="Premium Dental Treatments"
      subtitle="Specialized Services"
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTreatments.map((t) => (
          <Card
            key={t.id}
            variant="outlined"
            className="flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                {/* Cost badge */}
                <span className="absolute top-4 right-4 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">
                  Starts {t.costRange.split(' ')[0]}
                </span>
              </div>
              <div className="p-6 space-y-3 text-left">
                <h4 className="text-lg font-bold font-display text-slate-900">
                  {t.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {t.tagline}
                </p>
              </div>
            </div>
            
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-50">
              <Link
                to={`/treatments/${t.id}`}
                className="text-xs font-bold text-sky-600 hover:underline flex items-center gap-1"
              >
                Learn More
                <ArrowRight size={12} />
              </Link>
              <Link
                to={`/book-appointment?treatment=${t.id}`}
                onClick={() => updateBookingState({ treatment: t.id, branch: '', doctor: '' })}
                className={`${buttons.primary} py-1.5 px-4 text-xs`}
              >
                Book Now
              </Link>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center pt-8">
        <Link
          to="/treatments"
          className="inline-flex items-center justify-center font-bold text-sm text-sky-600 hover:underline gap-1.5"
        >
          Explore all 15+ dental procedures
          <ArrowRight size={14} />
        </Link>
      </div>
    </Section>
  );
};

export default React.memo(FeaturedTreatmentsSection);
