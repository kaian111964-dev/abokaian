import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, ShoppingBag, Sparkles, Megaphone, Wifi, Store, ArrowLeft } from 'lucide-react';
import { HeroSlide } from '../types';

interface HeroSliderProps {
  slides: HeroSlide[];
  onSelectSlideTab: (tab: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ slides, onSelectSlideTab }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // swipe left
      } else {
        handlePrev(); // swipe right
      }
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="relative w-full h-[260px] sm:h-[280px] rounded-[28px] overflow-hidden shadow-xl shadow-blue-900/15 group border border-white/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background & Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlide.bgGradient} transition-all duration-700 ease-in-out`}>
        {/* Glow Effects */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Curved Mesh Pattern Lines */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Slide Content Container */}
      <div className="relative z-10 w-full h-full p-6 sm:p-8 flex items-center justify-between gap-6">
        
        {/* Right Content Text (RTL First) */}
        <div className="flex-1 max-w-xl flex flex-col justify-center text-white space-y-3">
          {currentSlide.badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold text-white w-fit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{currentSlide.badge}</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <button 
              onClick={handleNext}
              className="hidden sm:flex w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/30 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['Cairo'] leading-tight tracking-wide text-white drop-shadow-sm">
              {currentSlide.title}
            </h2>
            <button 
              onClick={handlePrev}
              className="hidden sm:flex w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/30 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-lg">
            {currentSlide.description}
          </p>

          <div className="pt-1">
            <button
              onClick={() => onSelectSlideTab(currentSlide.linkTab)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0A4DFF] font-bold text-sm shadow-lg hover:bg-blue-50 hover:shadow-xl active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>تصفح الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Left Side: 3D Neon Storefront / Illustration Graphic */}
        <div className="hidden md:flex items-center justify-center relative w-56 h-56">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Glass Neon Canopy Store Icon Illustration matching screenshot */}
          <div className="relative w-44 h-44 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-6 flex flex-col items-center justify-center text-white transform group-hover:scale-105 transition-transform duration-500">
            <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 border border-cyan-300/40 flex items-center justify-center text-cyan-300 shadow-inner mb-2">
              <Store className="w-12 h-12 stroke-[1.5] drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
            </div>
            <span className="text-xs font-bold text-cyan-200 tracking-wider">STORE 2026</span>
          </div>
        </div>
      </div>

      {/* Pagination Dots / Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentIndex
                ? 'w-8 h-2.5 bg-white shadow-md'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
