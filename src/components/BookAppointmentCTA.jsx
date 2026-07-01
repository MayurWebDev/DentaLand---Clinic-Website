import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { generateWhatsAppLink, generatePhoneDialerLink } from '../utils/contact';
import { buttons } from '../design-system/buttons';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';
import { settings } from '../data/settings';
import Card from './Card';

const BookAppointmentCTA = ({
  title = "Ready to Transform Your Smile?",
  description = "Book your consultation today with one of our experienced dental specialists across Pune. We offer painless treatments, transparent pricing, and zero-cost EMI options.",
  branchId = "",
  treatmentId = "",
  className = "",
}) => {
  const { updateBookingState } = useBooking();
  const whatsappUrl = generateWhatsAppLink();
  const phoneUrl = generatePhoneDialerLink();
  
  // Link to book appointment, carrying branch or treatment context
  const bookingQuery = new URLSearchParams();
  if (branchId) bookingQuery.append('branch', branchId);
  if (treatmentId) bookingQuery.append('treatment', treatmentId);
  const bookingPath = `/book-appointment${bookingQuery.toString() ? `?${bookingQuery.toString()}` : ''}`;

  const handleBookingClick = () => {
    updateBookingState({
      branch: branchId || '',
      treatment: treatmentId || '',
      doctor: ''
    });
  };

  return (
    <Card
      variant="glass"
      className={`p-8 md:p-12 text-center relative overflow-hidden ${className}`}
    >
      {/* Decorative background gradients */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-sky-200/20 blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-cyan-200/20 blur-2xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 font-display">
          {title}
        </h3>
        
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to={bookingPath}
            onClick={handleBookingClick}
            className={`${buttons.primary} w-full sm:w-auto`}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Link>
          
          <a
            href={phoneUrl}
            className={`${buttons.secondary} w-full sm:w-auto`}
          >
            <Phone className="mr-2 h-5 w-5 text-sky-600" />
            Call Now
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-emerald-200 text-base font-semibold rounded-full shadow-sm text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-all duration-200 transform hover:scale-[1.02] w-full sm:w-auto cursor-pointer"
          >
            <MessageSquare className="mr-2 h-5 w-5 text-emerald-600" />
            WhatsApp Chat
          </a>
        </div>

        {/* Small trust indicator under CTA */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 pt-4 text-xs text-slate-500 font-medium border-t border-slate-100">
          {settings.trustBadges.map((badge, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="hidden sm:inline">•</span>}
              <span>{badge}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default BookAppointmentCTA;
