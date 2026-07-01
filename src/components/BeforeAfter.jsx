import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';
import { images } from '../data/images';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const cases = [
  {
    id: 'makeover',
    title: 'Smile Makeover',
    description: 'Complete aesthetic restoration using ultra-thin porcelain veneers.',
    before: images.beforeAfter.implantBefore,
    after: images.beforeAfter.implantAfter,
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'In-office laser whitening bringing teeth up to 8 shades brighter.',
    before: images.beforeAfter.whiteningBefore,
    after: images.beforeAfter.whiteningAfter,
  }
];

const BeforeAfter = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const activeCase = cases[activeCaseIndex];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1 || isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const startDrag = () => {
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);
    return () => {
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Category selector tabs */}
      <div className="flex justify-center gap-3">
        {cases.map((c, i) => (
          <button
            key={c.id}
            onClick={() => {
              setActiveCaseIndex(i);
              setSliderPosition(50);
            }}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeCaseIndex === i
                ? 'bg-sky-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* Main slider box */}
      <div className="grid md:grid-cols-12 gap-8 items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles size={12} />
            Smile Transformation
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-tight">
            {activeCase.title} Case Study
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {activeCase.description} Drag the slider to inspect the before and after details.
          </p>
          <div className="pt-2 flex items-center gap-3 text-xs font-medium text-slate-500">
            <ArrowLeftRight size={14} className="text-sky-500 animate-pulse" />
            <span>Interactive Drag Comparison</span>
          </div>
        </div>

        {/* Draggable canvas container */}
        <div className="md:col-span-7 flex justify-center">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            className={`relative select-none overflow-hidden aspect-[4/3] w-full max-w-[450px] border border-slate-100 cursor-ew-resize ${radius.card} ${shadows.ambient}`}
          >
            {/* Before image (Background) */}
            <img
              src={activeCase.before}
              alt="Before Treatment"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute bottom-4 left-4 bg-slate-900/80 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded backdrop-blur-sm z-10 select-none">
              Before
            </div>

            {/* After image (Overlay clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src={activeCase.after}
                alt="After Treatment"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
                draggable="false"
              />
              <div className="absolute bottom-4 right-4 bg-sky-600/90 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded backdrop-blur-sm z-10 select-none">
                After
              </div>
            </div>

            {/* Slidable Divider bar and handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100 pointer-events-auto cursor-ew-resize">
                <ArrowLeftRight size={14} className="text-sky-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
