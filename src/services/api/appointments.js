import { mockBookAppointment } from '../mocks/appointmentMock';

// Set this to true to connect to a real backend REST API later
const USE_REAL_API = false;
const API_BASE_URL = 'https://api.dentaland.in/v1';

export const bookAppointment = async (bookingData) => {
  if (USE_REAL_API) {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      if (!response.ok) {
        throw new Error('API error during booking.');
      }
      return await response.json();
    } catch (err) {
      console.error('[API Error] Failed to book appointment via server:', err);
      throw err;
    }
  } else {
    // Fallback to mock service
    return mockBookAppointment(bookingData);
  }
};
export default { bookAppointment };
