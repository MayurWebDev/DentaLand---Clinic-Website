import React, { useState } from 'react';
import { PhoneCall, Check } from 'lucide-react';
import { radius } from '../../design-system/radius';
import { buttons } from '../../design-system/buttons';

const CallbackForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setPhone('');
      
      // Dispatch mock analytics event
      if (window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('analytics:callback_requested', { detail: { name, phone } }));
      }
    }, 1200);
  };

  return (
    <div className={`p-6 bg-slate-50 border border-slate-100 ${radius.xl}`}>
      {!success ? (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="flex items-center gap-2 text-slate-800 mb-1">
            <PhoneCall size={16} className="text-sky-600 animate-pulse" />
            <h4 className="font-bold font-display text-sm sm:text-base">Request a Quick Callback</h4>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Leave your name and number, and our coordinator will contact you within 15 minutes.
          </p>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 text-xs sm:text-sm border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none bg-white"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Your Phone Number"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className="w-full p-3 text-xs sm:text-sm border border-slate-200 rounded-xl focus:border-sky-500 focus:outline-none bg-white"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`${buttons.primary} w-full py-2.5 text-xs sm:text-sm`}
          >
            {loading ? 'Submitting...' : 'Call Me Back'}
          </button>
        </form>
      ) : (
        <div className="text-center py-4 space-y-3">
          <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <Check size={20} className="stroke-[3]" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm font-display">Callback Registered</h4>
          <p className="text-slate-500 text-xs max-w-[200px] mx-auto">
            We will call you shortly on your provided number.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="text-[10px] text-sky-600 font-bold hover:underline block mx-auto cursor-pointer"
          >
            Request another callback
          </button>
        </div>
      )}
    </div>
  );
};

export default CallbackForm;
