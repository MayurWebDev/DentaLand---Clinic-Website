import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingState, setBookingState] = useState({
    branch: '',
    treatment: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    painLevel: 0,
    message: '',
    whatsappUpdates: true,
  });

  const updateBookingState = (updates) => {
    setBookingState((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const resetBooking = () => {
    setBookingState({
      branch: '',
      treatment: '',
      doctor: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: '',
      painLevel: 0,
      message: '',
      whatsappUpdates: true,
    });
  };

  return (
    <BookingContext.Provider value={{ bookingState, updateBookingState, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
