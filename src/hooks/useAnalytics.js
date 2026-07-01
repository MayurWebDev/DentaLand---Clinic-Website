import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent } from '../services/api/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views on route changes
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  // Specific conversion actions helper
  const trackCTAInteraction = (ctaType, details = {}) => {
    trackEvent('cta_click', {
      type: ctaType, // 'call', 'whatsapp', 'book_button'
      path: location.pathname,
      ...details
    });
  };

  return { trackCTAInteraction };
};

export default useAnalytics;
