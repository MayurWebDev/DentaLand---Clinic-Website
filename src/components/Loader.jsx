import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-slate-50/30 gap-4 font-sans">
      <div className="relative w-12 h-12">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-sky-600 animate-spin"></div>
        {/* Inner reverse-rotating ring for complexity */}
        <div className="absolute inset-1.5 rounded-full border-4 border-transparent border-b-cyan-500 animate-[spin_1s_linear_infinite_reverse]"></div>
      </div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest animate-pulse">
        Loading DentaLand...
      </p>
    </div>
  );
};

export default Loader;
