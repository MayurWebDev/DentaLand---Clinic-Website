import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const FAQAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-white border border-slate-100 transition-all duration-200 ${radius.card} ${shadows.ambient}`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between text-left p-6 font-semibold font-display text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-2xl cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-btn-${index}`}
            >
              <span className="pr-4 text-base sm:text-lg">{item.question}</span>
              <span className="flex-shrink-0 bg-sky-50 p-2 rounded-full text-sky-600 transition-colors">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-slate-50 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
