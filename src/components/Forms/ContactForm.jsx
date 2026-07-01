import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { radius } from '../../design-system/radius';
import { buttons } from '../../design-system/buttons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      // Dispatch mock analytics event
      if (window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('analytics:contact_form_submitted', { detail: formData }));
      }
    }, 1200);
  };

  return (
    <div className="w-full">
      {!success ? (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Rahul Patil"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 text-sm border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none bg-white font-sans"
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile"
                maxLength={10}
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value.replace(/\D/g, '') }))}
                className="w-full p-4 text-sm border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none bg-white font-sans"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 text-sm border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none bg-white font-sans"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              How can we help you? *
            </label>
            <textarea
              name="message"
              placeholder="Type your question or dental concern..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-4 text-sm border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none bg-white font-sans"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`${buttons.primary} w-full flex items-center justify-center gap-2`}
          >
            {loading ? (
              'Sending...'
            ) : (
              <>
                <Send size={16} />
                Send Inquiry
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="text-center py-10 space-y-4 bg-slate-50 rounded-3xl border border-slate-100 p-6">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Check size={24} className="stroke-[3]" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg font-display">Inquiry Sent Successfully</h3>
          <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out. A clinic administrator will review your message and reply via email or phone within 2 hours.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="text-xs text-sky-600 font-bold hover:underline cursor-pointer"
          >
            Send another message
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
