import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Play, Eye } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/gallery';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const ClinicTour = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (item) => {
    setLightboxImage(item);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-50'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Interactive 360 & Video Quick Widgets */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* 360 Virtual Tour Card */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between aspect-[16/9] sm:aspect-auto sm:h-48 group shadow-md">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0369a1,transparent)] opacity-40"></div>
          <div className="relative z-10 space-y-2 text-left">
            <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
              Interactive 3D
            </span>
            <h4 className="text-lg font-bold font-display">360° Virtual Clinic Tour</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[280px]">
              Step inside our Pune clinic and inspect our sterilization units digitally from home.
            </p>
          </div>
          <button 
            onClick={() => alert("Launching 360° VR View... (Demo Feature)")}
            className="relative z-10 mt-4 flex items-center justify-center gap-2 bg-white text-slate-900 font-bold text-xs px-4 py-2.5 rounded-full hover:bg-sky-50 transition-colors w-fit cursor-pointer"
          >
            <Eye size={14} className="text-sky-600" />
            Start 360° Tour
          </button>
        </div>

        {/* Video Tour Walkthrough Card */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between aspect-[16/9] sm:aspect-auto sm:h-48 group shadow-md">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400')` }}></div>
          <div className="relative z-10 space-y-2 text-left">
            <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-900/50">
              Walkthrough Video
            </span>
            <h4 className="text-lg font-bold font-display">Video Clinic Tour</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[280px]">
              Take a short 1-minute walkthrough tour of our facilities and safety guidelines.
            </p>
          </div>
          <button 
            onClick={() => setVideoOpen(true)}
            className="relative z-10 mt-4 flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-md transition-colors w-fit cursor-pointer"
          >
            <Play size={14} fill="currentColor" />
            Watch Video
          </button>
        </div>
      </div>

      {/* Grid Photos */}
      <motion.div 
        layout 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`group relative overflow-hidden aspect-square bg-slate-100 border border-slate-100 ${radius.card} ${shadows.ambient}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay with magnifying glass */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => openLightbox(item)}
                  className="bg-white text-slate-900 p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 cursor-pointer"
                  title="Enlarge Image"
                >
                  <Maximize2 size={18} className="text-sky-600" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-left pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h5 className="text-white text-xs font-bold font-display">{item.title}</h5>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-slate-900/85 hover:bg-slate-900 text-white p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="aspect-[4/3] md:aspect-[16/10] w-full">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-left border-t border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 font-display mb-1">{lightboxImage.title}</h4>
              <p className="text-slate-500 text-sm">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Walkthrough Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full relative">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 bg-slate-900/85 hover:bg-slate-900 text-white p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                title="Clinic Video Tour Walkthrough"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500 font-semibold">
              Clinic Tour • DentaLand Dental Clinic PCMC Pune
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClinicTour;
