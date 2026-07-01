import { settings } from '../data/settings';

// Centralized contact numbers and social linking helpers
export const getWhatsAppNumber = () => settings.whatsapp;
export const getPhoneNumber = () => settings.phone;
export const getFormattedPhoneNumber = () => settings.phoneFormatted;

// Generates a fully URI-encoded WhatsApp chat link
export const generateWhatsAppLink = (message = settings.whatsappMessage) => {
  return `https://wa.me/91${settings.whatsapp}?text=${encodeURIComponent(message)}`;
};

// Generates a tel: linking dialer path
export const generatePhoneDialerLink = () => {
  return `tel:+91${settings.phone}`;
};
