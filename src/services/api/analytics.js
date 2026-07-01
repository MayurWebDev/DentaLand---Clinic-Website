// Centralized Analytics Event Tracking
const USE_REAL_ANALYTICS = false;

export const trackEvent = (eventName, params = {}) => {
  console.log(`[Analytics Event] Event: "${eventName}"`, params);
  
  if (USE_REAL_ANALYTICS) {
    // 1. Google Analytics 4 (GA4) Global Site Tag
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
    
    // 2. Google Tag Manager Data Layer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params
      });
    }

    // 3. Meta Pixel (Facebook Ads conversion)
    if (window.fbq) {
      window.fbq('trackCustom', eventName, params);
    }
  }
};

export const trackPageView = (url) => {
  console.log(`[Analytics PageView] Path: "${url}"`);
  if (USE_REAL_ANALYTICS && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
};

export default { trackEvent, trackPageView };
