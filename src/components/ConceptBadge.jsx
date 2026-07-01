import React, { useState } from 'react';
import { X } from 'lucide-react';

const ConceptBadge = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-24 right-4 z-50 flex items-center gap-2 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700/50 backdrop-blur-sm animate-pulse-slow">
      <span>Concept Redesign Preview</span>
      <button 
        onClick={() => setVisible(false)}
        className="text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-slate-800 transition-colors"
        aria-label="Dismiss badge"
      >
        <X size={12} />
      </button>
    </div>
  );
};

export default ConceptBadge;
