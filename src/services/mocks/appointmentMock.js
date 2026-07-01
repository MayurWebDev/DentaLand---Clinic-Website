export const mockBookAppointment = (bookingData) => {
  return new Promise((resolve, reject) => {
    console.log('[API Mock] Sending booking data to server:', bookingData);
    setTimeout(() => {
      // Simulate random failure (1% chance)
      if (Math.random() < 0.01) {
        reject(new Error('Server busy. Please try again.'));
      } else {
        resolve({
          success: true,
          bookingId: `DL-${Math.floor(100000 + Math.random() * 900000)}`,
          message: 'Appointment booked successfully.',
          timestamp: new Date().toISOString(),
        });
      }
    }, 1000);
  });
};

export const mockCallbackRequest = (callbackData) => {
  return new Promise((resolve) => {
    console.log('[API Mock] Sending callback request:', callbackData);
    setTimeout(() => {
      resolve({
        success: true,
        requestId: `CB-${Math.floor(1000 + Math.random() * 9000)}`,
        message: 'Callback request registered.',
      });
    }, 800);
  });
};
export default { mockBookAppointment, mockCallbackRequest };
