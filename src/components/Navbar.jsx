import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Calendar, MapPin, Activity, Stethoscope, BookOpen } from 'lucide-react';
import { settings } from '../data/settings';
import { useSearch } from '../hooks/useSearch';
import { buttons } from '../design-system/buttons';
import { radius } from '../design-system/radius';
import { shadows } from '../design-system/shadows';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchResults = useSearch(searchQuery);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Reset activeIndex when query or results change
  useEffect(() => {
    setActiveIndex(-1);
  }, [searchQuery, searchResults]);

  // Focus search input on expansion
  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
        setIsSearchExpanded(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchResultClick = (url) => {
    setSearchQuery('');
    setShowSearchDropdown(false);
    setIsSearchExpanded(false);
    setActiveIndex(-1);
    navigate(url);
  };

  const handleKeyDown = (e) => {
    if (searchResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % searchResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < searchResults.length) {
        handleSearchResultClick(searchResults[activeIndex].url);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setSearchQuery('');
      setIsSearchExpanded(false);
      setShowSearchDropdown(false);
      setActiveIndex(-1);
    }
  };

  const getResultIcon = (type) => {
    switch (type) {
      case 'branch':
        return <MapPin size={14} className="text-sky-600" />;
      case 'treatment':
        return <Activity size={14} className="text-emerald-600" />;
      case 'doctor':
        return <Stethoscope size={14} className="text-indigo-600" />;
      case 'blog':
        return <BookOpen size={14} className="text-amber-600" />;
      default:
        return <Search size={14} className="text-slate-400" />;
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-100/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight font-display bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                {settings.shortBrandName}
              </span>
              <span className="hidden sm:inline-block bg-sky-50 text-[10px] font-bold text-sky-700 uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-sky-100">
                Clinic
              </span>
            </Link>
          </div>

          {/* Middle Section: Navigation & Expanding Search */}
          <div ref={searchRef} className="hidden md:flex items-center justify-end flex-1 gap-4 max-w-4xl">
            
            {isSearchExpanded ? (
              // Wide Search Input (takes full middle width)
              <div className="relative flex-1 max-w-xl transition-all duration-300 animate-fadeIn">
                <div className="relative flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search treatments, doctors, blogs, locations..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSearchDropdown(true);
                      }}
                      onFocus={() => setShowSearchDropdown(true)}
                      onKeyDown={handleKeyDown}
                      aria-label="Search treatments, doctors, or branches"
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-full text-sm font-medium focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-50 focus:bg-white focus:outline-none transition-all shadow-sm"
                    />
                    <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  </div>
                  
                  {/* Collapse trigger */}
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchExpanded(false);
                      setShowSearchDropdown(false);
                    }}
                    className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-700 rounded-full transition-colors cursor-pointer"
                    title="Close Search"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Dropdown results */}
                {showSearchDropdown && searchResults.length > 0 && (
                  <div className={`absolute top-14 left-0 right-0 bg-white border border-slate-100 max-h-80 overflow-y-auto z-50 p-2 text-left ${radius.xl} ${shadows.popover}`}>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                      Suggestions
                    </p>
                    {searchResults.map((result, idx) => (
                      <button
                        key={`${result.type}-${result.id}-${idx}`}
                        onClick={() => handleSearchResultClick(result.url)}
                        className={`w-full flex items-start gap-2.5 px-3 py-2 rounded-xl transition-colors text-left cursor-pointer ${
                          idx === activeIndex ? 'bg-sky-50 text-sky-950 font-semibold' : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <span className="mt-1 bg-slate-100 p-1.5 rounded-lg flex-shrink-0">
                          {getResultIcon(result.type)}
                        </span>
                        <div className="overflow-hidden">
                          <h5 className="text-xs font-bold text-slate-800 truncate leading-tight">
                            {result.title}
                          </h5>
                          <p className="text-[10px] text-slate-400 truncate mt-0.5">
                            {result.subtitle}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Navigation links + Pill search button trigger
              <>
                <div className="flex items-center space-x-1 lg:space-x-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-xs lg:text-sm font-semibold px-3 py-2 rounded-full transition-colors ${
                        isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:text-sky-600'
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-xs lg:text-sm font-semibold px-3 py-2 rounded-full transition-colors ${
                        isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:text-sky-600'
                      }`
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/treatments"
                    className={({ isActive }) =>
                      `text-xs lg:text-sm font-semibold px-3 py-2 rounded-full transition-colors ${
                        isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:text-sky-600'
                      }`
                    }
                  >
                    Treatments
                  </NavLink>
                  <NavLink
                    to="/doctors"
                    className={({ isActive }) =>
                      `text-xs lg:text-sm font-semibold px-3 py-2 rounded-full transition-colors ${
                        isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:text-sky-600'
                      }`
                    }
                  >
                    Doctors
                  </NavLink>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `text-xs lg:text-sm font-semibold px-3 py-2 rounded-full transition-colors ${
                        isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:text-sky-600'
                      }`
                    }
                  >
                    Gallery
                  </NavLink>
                  <NavLink
                    to="/branches"
                    className={({ isActive }) =>
                      `text-xs lg:text-sm font-semibold px-3 py-2 rounded-full transition-colors ${
                        isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:text-sky-600'
                      }`
                    }
                  >
                    Branches
                  </NavLink>
                  <NavLink
                    to="/testimonials"
                    className={({ isActive }) =>
                      `text-xs lg:text-sm font-semibold px-3 py-2 rounded-full transition-colors ${
                        isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:text-sky-600'
                      }`
                    }
                  >
                    Reviews
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `text-xs lg:text-sm font-semibold px-3 py-2 rounded-full transition-colors ${
                        isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600 hover:text-sky-600'
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </div>

                {/* Pill Search Button */}
                <button
                  onClick={() => setIsSearchExpanded(true)}
                  className="px-3.5 py-2 hover:bg-slate-50 border border-slate-200 hover:border-sky-300 hover:text-sky-600 rounded-full text-slate-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm text-xs font-bold flex-shrink-0"
                  title="Search treatments, doctors..."
                >
                  <Search size={13} />
                  <span>Search</span>
                </button>
              </>
            )}

          </div>

          {/* Desktop Booking CTA */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold rounded-full shadow-md text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02] flex-shrink-0 cursor-pointer"
            >
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-3">
            {/* Quick search button for mobile */}
            <Link to="/treatments" className="p-2 text-slate-500 hover:text-sky-600">
              <Search size={20} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white p-6 space-y-4 shadow-lg text-left">
          
          {/* Mobile Search Bar inside Drawer */}
          <div className="relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search treatments, doctors..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                onKeyDown={handleKeyDown}
                aria-label="Search treatments, doctors, or branches"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-full text-sm font-medium focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-50 focus:bg-white focus:outline-none transition-all shadow-sm"
              />
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            </div>

            {/* Dropdown results */}
            {showSearchDropdown && searchResults.length > 0 && (
              <div className={`absolute top-14 left-0 right-0 bg-white border border-slate-100 max-h-60 overflow-y-auto z-50 p-2 text-left ${radius.xl} ${shadows.popover}`}>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                  Suggestions
                </p>
                {searchResults.map((result, idx) => (
                  <button
                    key={`mobile-${result.type}-${result.id}-${idx}`}
                    onClick={() => {
                      handleSearchResultClick(result.url);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-start gap-2.5 px-3 py-2 rounded-xl transition-colors text-left cursor-pointer ${
                      idx === activeIndex ? 'bg-sky-50 text-sky-950 font-semibold' : 'hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <span className="mt-1 bg-slate-100 p-1.5 rounded-lg flex-shrink-0">
                      {getResultIcon(result.type)}
                    </span>
                    <div className="overflow-hidden">
                      <h5 className="text-xs font-bold text-slate-800 truncate leading-tight">
                        {result.title}
                      </h5>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">
                        {result.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              About Clinic
            </Link>
            <Link
              to="/treatments"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Treatments Offered
            </Link>
            <Link
              to="/doctors"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Our Specialists
            </Link>
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Clinic Gallery
            </Link>
            <Link
              to="/branches"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Branch Locator
            </Link>
            <Link
              to="/testimonials"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Patient Reviews
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center py-3 text-center text-sm font-bold rounded-full text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all duration-200 shadow-md w-full cursor-pointer"
            >
              <Calendar className="mr-1.5 h-4 w-4" />
              Book Appointment
            </Link>
            <a
              href={`tel:+91${settings.phone}`}
              className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-bold border border-slate-200 py-3 rounded-full text-center hover:bg-slate-50"
            >
              Call Helpline: {settings.phoneFormatted}
            </a>
          </div>
        </div>
      )}

      {/* Soft backdrop blur overlay on search focus */}
      {isSearchExpanded && (
        <div
          className="fixed inset-0 top-20 bg-slate-950/20 backdrop-blur-[2px] z-30 transition-all duration-300 animate-fadeIn"
          onClick={() => {
            setIsSearchExpanded(false);
            setShowSearchDropdown(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
