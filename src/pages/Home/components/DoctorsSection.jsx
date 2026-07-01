import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../../components/Section';
import Card from '../../../components/Card';
import { doctors } from '../../../data/doctors';
import { useBooking } from '../../../context/BookingContext';
import { buttons } from '../../../design-system/buttons';

const DoctorsSection = () => {
  const { updateBookingState } = useBooking();

  return (
    <Section
      id="doctors-preview"
      title="Meet Our Specialized Doctors"
      subtitle="MDS Dental Surgeons"
      className="bg-white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc) => (
          <Card
            key={doc.id}
            variant="outlined"
            className="flex flex-col justify-between text-left"
          >
            <div>
              <div className="aspect-[4/5] w-full bg-slate-50 overflow-hidden">
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5 space-y-1">
                <h4 className="text-base font-bold font-display text-slate-900">{doc.name}</h4>
                <p className="text-xs text-sky-600 font-semibold">{doc.qualification}</p>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{doc.experience} Experience</p>
              </div>
            </div>
            <div className="p-5 pt-0 flex flex-col gap-2">
              <Link
                to={`/doctors/${doc.id}`}
                className="text-center font-bold text-xs text-slate-500 border border-slate-200 py-2 rounded-full hover:bg-slate-50 hover:text-slate-800 transition-colors cursor-pointer"
              >
                View Profile
              </Link>
              <Link
                to={`/book-appointment?doctor=${doc.id}`}
                onClick={() => updateBookingState({ doctor: doc.id, branch: '', treatment: '' })}
                className={`${buttons.primary} py-2 text-center text-xs w-full`}
              >
                Book Appointment
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default React.memo(DoctorsSection);
