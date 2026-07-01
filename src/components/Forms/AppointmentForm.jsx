import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, Phone, MapPin, Stethoscope, ChevronRight, ChevronLeft, ShieldCheck, HeartPulse } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { branches } from '../../data/branches';
import { treatments } from '../../data/treatments';
import { doctors } from '../../data/doctors';
import { settings } from '../../data/settings';
import { bookAppointment } from '../../services/api/appointments';
import { buttons } from '../../design-system/buttons';
import { radius } from '../../design-system/radius';
import { shadows } from '../../design-system/shadows';

const steps = [
  { id: 1, name: 'Select Location' },
  { id: 2, name: 'Select Treatment' },
  { id: 3, name: 'Choose Doctor' },
  { id: 4, name: 'Date & Time' },
  { id: 5, name: 'Patient Details' },
];

const AppointmentForm = () => {
  const { bookingState, updateBookingState, resetBooking } = useBooking();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle auto-prefilling based on query parameters if present (context updates)
  useEffect(() => {
    // Check if URL parameters have pre-filled options
    const params = new URLSearchParams(window.location.search);
    const branchParam = params.get('branch');
    const treatmentParam = params.get('treatment');
    const doctorParam = params.get('doctor');

    const updates = {};
    if (branchParam && branches.some(b => b.id === branchParam)) {
      updates.branch = branchParam;
    }
    if (treatmentParam && treatments.some(t => t.id === treatmentParam)) {
      updates.treatment = treatmentParam;
    }
    if (doctorParam && doctors.some(d => d.id === doctorParam)) {
      updates.doctor = doctorParam;
    }

    if (Object.keys(updates).length > 0) {
      updateBookingState(updates);
      // Skip steps if already prefilled
      if (updates.branch && !updates.treatment) setCurrentStep(2);
      else if (updates.branch && updates.treatment && !updates.doctor) setCurrentStep(3);
      else if (updates.branch && updates.treatment && updates.doctor) setCurrentStep(4);
    }
  }, []);

  // Filter doctors based on selected branch
  const availableDoctors = bookingState.branch
    ? doctors.filter((doc) => doc.branchIds.includes(bookingState.branch))
    : doctors;

  const validateStep = () => {
    setErrorMsg('');
    switch (currentStep) {
      case 1:
        if (!bookingState.branch) {
          setErrorMsg('Please select a branch clinic.');
          return false;
        }
        return true;
      case 2:
        if (!bookingState.treatment) {
          setErrorMsg('Please select a treatment.');
          return false;
        }
        return true;
      case 3:
        // Doctor is optional, can proceed without selection (defaults to "Any Available Specialist")
        return true;
      case 4:
        if (!bookingState.date) {
          setErrorMsg('Please choose a preferred date.');
          return false;
        }
        if (!bookingState.time) {
          setErrorMsg('Please select a preferred time slot.');
          return false;
        }
        return true;
      case 5:
        if (!bookingState.name.trim()) {
          setErrorMsg('Please enter your full name.');
          return false;
        }
        if (!bookingState.phone.trim() || bookingState.phone.trim().length < 10) {
          setErrorMsg('Please enter a valid 10-digit mobile number.');
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setErrorMsg('');
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setLoading(true);
    setErrorMsg('');
    try {
      const sanitizedPayload = {
        ...bookingState,
        name: bookingState.name.trim(),
        email: bookingState.email.trim(),
        phone: bookingState.phone.trim()
      };

      const result = await bookAppointment(sanitizedPayload);
      if (result.success) {
        setIsSubmitted(true);
        if (window.dispatchEvent) {
          window.dispatchEvent(new CustomEvent('analytics:appointment_booked', { detail: sanitizedPayload }));
        }
      } else {
        throw new Error(result.message || 'Failed to submit appointment.');
      }
    } catch (err) {
      console.error('[Booking Error]', err);
      setErrorMsg(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getBranchDetails = (id) => branches.find((b) => b.id === id);
  const getTreatmentDetails = (id) => treatments.find((t) => t.id === id);
  const getDoctorDetails = (id) => doctors.find((d) => d.id === id);

  const selectedBranchObj = getBranchDetails(bookingState.branch);
  const selectedTreatmentObj = getTreatmentDetails(bookingState.treatment);
  const selectedDoctorObj = getDoctorDetails(bookingState.doctor);

  // Time slot chips list
  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '12:30 PM',
    '05:30 PM', '06:30 PM', '07:30 PM', '08:30 PM'
  ];

  return (
    <div className={`max-w-3xl mx-auto bg-white p-6 md:p-10 border border-slate-100 ${radius.card} ${shadows.ambient}`}>
      {/* Dynamic Heading based on status */}
      {!isSubmitted && (
        <div className="mb-8 text-center">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full">
            Step {currentStep} of 5: {steps[currentStep - 1].name}
          </span>
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {errorMsg && (
        <div role="alert" className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-semibold rounded-r-lg">
          {errorMsg}
        </div>
      )}

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* STEP 1: Select Location */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4 text-left"
              >
                <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                  Choose a Branch Near You
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {branches.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => updateBookingState({ branch: b.id })}
                      className={`p-5 border cursor-pointer transition-all duration-200 text-left relative ${radius.xl} ${
                        bookingState.branch === b.id
                          ? 'border-sky-500 bg-sky-50/40 ring-1 ring-sky-500'
                          : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                      }`}
                    >
                      {bookingState.branch === b.id && (
                        <span className="absolute top-4 right-4 bg-sky-600 text-white p-1 rounded-full">
                          <Check size={12} />
                        </span>
                      )}
                      <h4 className="font-bold font-display text-slate-900 flex items-center gap-1.5">
                        <MapPin size={16} className="text-sky-600" />
                        {b.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {b.address}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1 text-[10px] text-slate-500 font-medium">
                        <span>☎ {b.phone}</span>
                        <span>•</span>
                        <span>Open: {b.timings.weekdays}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Select Treatment */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4 text-left"
              >
                <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                  What dental concern or treatment do you need?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {treatments.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => updateBookingState({ treatment: t.id })}
                      className={`p-4 border cursor-pointer text-center transition-all duration-200 flex flex-col items-center justify-center gap-2 relative h-28 ${radius.xl} ${
                        bookingState.treatment === t.id
                          ? 'border-sky-500 bg-sky-50/40 ring-1 ring-sky-500 shadow-sm'
                          : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                      }`}
                    >
                      {bookingState.treatment === t.id && (
                        <span className="absolute top-2 right-2 bg-sky-600 text-white p-0.5 rounded-full">
                          <Check size={8} />
                        </span>
                      )}
                      <span className="text-xs font-bold font-display text-slate-900">
                        {t.shortTitle}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {t.costRange.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Choose Doctor */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4 text-left"
              >
                <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                  Select a Specialist (Optional)
                </h3>
                
                {/* Default option */}
                <div
                  onClick={() => updateBookingState({ doctor: '' })}
                  className={`p-4 border cursor-pointer transition-all duration-200 flex items-center justify-between ${radius.xl} ${
                    !bookingState.doctor
                      ? 'border-sky-500 bg-sky-50/40 ring-1 ring-sky-500'
                      : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                      <Stethoscope size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Any Available Specialist</h4>
                      <p className="text-xs text-slate-500">We will assign the best doctor on-duty for your slot.</p>
                    </div>
                  </div>
                  {!bookingState.doctor && (
                    <span className="bg-sky-600 text-white p-1 rounded-full">
                      <Check size={12} />
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  {availableDoctors.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => updateBookingState({ doctor: doc.id })}
                      className={`p-4 border cursor-pointer transition-all duration-200 flex items-center justify-between ${radius.xl} ${
                        bookingState.doctor === doc.id
                          ? 'border-sky-500 bg-sky-50/40 ring-1 ring-sky-500'
                          : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-12 h-12 rounded-full object-cover border border-slate-100"
                        />
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{doc.name}</h4>
                          <p className="text-xs text-sky-600 font-semibold">{doc.qualification}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Exp: {doc.experience} • Languages: {doc.languages.join(', ')}</p>
                        </div>
                      </div>
                      {bookingState.doctor === doc.id && (
                        <span className="bg-sky-600 text-white p-1 rounded-full">
                          <Check size={12} />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: Choose Date & Time */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6 text-left"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900 mb-3 flex items-center gap-2">
                    <Calendar size={18} className="text-sky-600" />
                    Select a Date
                  </h3>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={bookingState.date}
                    onChange={(e) => updateBookingState({ date: e.target.value })}
                    className="w-full p-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-sans focus:outline-none"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900 mb-3">
                    Select a Preferred Time Slot
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => updateBookingState({ time: slot })}
                        className={`py-3 px-2 text-center text-xs sm:text-sm font-bold border transition-all duration-200 cursor-pointer ${radius.lg} ${
                          bookingState.time === slot
                            ? 'border-sky-500 bg-sky-600 text-white shadow-sm'
                            : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 text-slate-600'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: Patient Details */}
            {currentStep === 5 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4 text-left"
              >
                <h3 className="text-lg font-bold font-display text-slate-900 mb-4">
                  Provide Your Contact Details
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patient-name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      placeholder="Enter full name"
                      autoComplete="name"
                      value={bookingState.name}
                      onChange={(e) => updateBookingState({ name: e.target.value })}
                      className="w-full p-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="patient-phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      id="patient-phone"
                      type="tel"
                      placeholder="10-digit number"
                      maxLength={10}
                      autoComplete="tel"
                      value={bookingState.phone}
                      onChange={(e) => updateBookingState({ phone: e.target.value.replace(/\D/g, '') })}
                      className="w-full p-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="patient-email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    id="patient-email"
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    value={bookingState.email}
                    onChange={(e) => updateBookingState({ email: e.target.value })}
                    className="w-full p-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-sm"
                  />
                </div>

                {/* Optional Pain Level Scale */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Pain Level (Optional)</span>
                    <span className="text-sky-600 font-extrabold">{bookingState.painLevel === 0 ? 'None' : `${bookingState.painLevel}/10`}</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <HeartPulse size={18} className={`${bookingState.painLevel > 5 ? 'text-red-500' : 'text-slate-400'} animate-pulse`} />
                    <input
                      type="range"
                      min={0}
                      max={10}
                      value={bookingState.painLevel}
                      onChange={(e) => updateBookingState({ painLevel: parseInt(e.target.value) })}
                      className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-semibold px-6 mt-1">
                    <span>No pain</span>
                    <span>Moderate</span>
                    <span>Severe</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Message / Special Requests (Optional)
                  </label>
                  <textarea
                    placeholder="Any specific dental concerns, symptoms, or requests..."
                    value={bookingState.message}
                    onChange={(e) => updateBookingState({ message: e.target.value })}
                    rows={3}
                    className="w-full p-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-sm font-sans"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="whatsappUpdates"
                    checked={bookingState.whatsappUpdates}
                    onChange={(e) => updateBookingState({ whatsappUpdates: e.target.checked })}
                    className="mt-1 h-4 w-4 accent-emerald-500 rounded border-slate-300 focus:ring-emerald-500"
                  />
                  <label htmlFor="whatsappUpdates" className="text-xs text-slate-500 leading-relaxed cursor-pointer selection:bg-transparent">
                    Receive appointment confirmation and status updates on WhatsApp.
                  </label>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className={`${buttons.secondary} py-2 px-5 text-sm flex items-center gap-1.5 cursor-pointer`}
                >
                  <ChevronLeft size={16} />
                  Back
                </button>
              ) : (
                <div></div> // Placeholder to align right button
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className={`${buttons.primary} py-2 px-5 text-sm flex items-center gap-1.5 cursor-pointer`}
                >
                  Continue
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className={`${buttons.primary} py-2 px-6 text-sm flex items-center gap-1.5 cursor-pointer`}
                >
                  {loading ? (
                    <span className="flex items-center gap-1.5">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Booking...
                    </span>
                  ) : (
                    <>
                      <ShieldCheck size={16} />
                      Confirm Appointment
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        ) : (
          /* SUCCESS SCREEN */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10 space-y-6"
          >
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check size={40} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-display text-slate-900">
                Appointment Booked Successfully!
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{bookingState.name}</strong>. Your request is registered. We will send a confirmation message shortly.
              </p>
            </div>

            {/* Summary Card */}
            <div className="max-w-md mx-auto bg-slate-50 border border-slate-100 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-3">
              <h4 className="font-bold text-slate-900 font-display border-b border-slate-200/60 pb-2 flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-sky-600" />
                Booking Summary
              </h4>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Location:</span>
                <span className="text-slate-900 font-bold">{selectedBranchObj?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Treatment:</span>
                <span className="text-slate-900 font-bold">{selectedTreatmentObj?.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Doctor:</span>
                <span className="text-slate-900 font-bold">{selectedDoctorObj?.name || 'Any Available Specialist'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Date & Time:</span>
                <span className="text-slate-900 font-bold">{bookingState.date} at {bookingState.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Phone:</span>
                <span className="text-slate-900 font-bold">+91 {bookingState.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/91${settings.whatsapp}?text=${encodeURIComponent(`Hi DentaLand, I just booked an appointment online for ${bookingState.name} at your ${selectedBranchObj?.shortName} branch on ${bookingState.date} at ${bookingState.time}. Please confirm.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full shadow-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                Confirm via WhatsApp
              </a>

              <button
                onClick={() => {
                  resetBooking();
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className={`${buttons.secondary} py-2.5 px-6 text-sm w-full sm:w-auto cursor-pointer`}
              >
                Book Another Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppointmentForm;
