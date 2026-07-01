import { mockCallbackRequest } from '../mocks/appointmentMock';

const USE_REAL_API = false;
const API_BASE_URL = 'https://api.dentaland.in/v1';

export const submitContactInquiry = async (inquiryData) => {
  if (USE_REAL_API) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData),
      });
      return await response.json();
    } catch (err) {
      console.error('[API Error] Failed to submit contact form:', err);
      throw err;
    }
  } else {
    // Mock success
    return new Promise((resolve) => {
      console.log('[API Mock] Submitting contact inquiry:', inquiryData);
      setTimeout(() => {
        resolve({ success: true, message: 'Inquiry received.' });
      }, 1000);
    });
  }
};

export const requestCallback = async (callbackData) => {
  if (USE_REAL_API) {
    try {
      const response = await fetch(`${API_BASE_URL}/callback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(callbackData),
      });
      return await response.json();
    } catch (err) {
      console.error('[API Error] Callback registration failed:', err);
      throw err;
    }
  } else {
    return mockCallbackRequest(callbackData);
  }
};
export default { submitContactInquiry, requestCallback };
