import React, { useState, useEffect } from 'react';
import { Newspaper, ChevronDown, Sparkles, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsTickerProps {
  newsItems: NewsItem[];
  onSelectNews: (news: NewsItem) => void;
}

export const NewsTicker: React.FC<NewsTickerProps> = ({ newsItems, onSelectNews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto cycle news items
  useEffect(() => {
    if (!isPlaying || newsItems.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, newsItems.length]);

  const currentNews = newsItems[currentIndex] || newsItems[0];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full relative z-20">
      {/* Main Active Ticker Card */}
      <div 
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        className="w-full bg-gradient-to-r from-white via-blue-50/40 to-white backdrop-blur-md rounded-[20px] border border-blue-200/80 shadow-md hover:shadow-lg transition-all duration-300 p-2.5 sm:p-3 flex items-center justify-between gap-3 overflow-hidden"
      >
        
        {/* Live Ticker Icon Badge on Right */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#062B7F] to-[#0A4DFF] text-white flex items-center justify-center shadow-md shadow-blue-900/20">
            <Newspaper className="w-5 h-5 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </div>

          <div className="hidden md:flex flex-col text-right">
            <span className="text-[10px] font-black text-[#062B7F] uppercase tracking-wider">الشريط الإخباري</span>
            <span className="text-[11px] font-bold text-red-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
              مباشر الأن
            </span>
          </div>
        </div>

        {/* Ticker Animated Content Text */}
        <div 
          className="flex-1 overflow-hidden cursor-pointer py-1"
          onClick={() => onSelectNews(currentNews)}
        >
          <div key={currentIndex} className="flex items-center gap-2.5 animate-fadeIn">
            <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#F44336] bg-red-50 px-2.5 py-0.5 rounded-md border border-red-200/70 shrink-0">
              <Sparkles className="w-3 h-3 text-red-500" />
              {currentNews?.category || 'خبر عاجل'}
            </span>

            <p className="text-xs sm:text-sm font-bold text-gray-800 truncate font-['Cairo'] group-hover:text-[#0A4DFF] transition-colors">
              {currentNews?.title}
            </p>
          </div>
        </div>

        {/* Controls & Navigation Buttons */}
        <div className="flex items-center gap-1 shrink-0 border-r border-gray-200 pr-2">
          {/* Play/Pause Toggle */}
          <button
            onClick={togglePlay}
            title={isPlaying ? "إيقاف مؤقت" : "تشغيل الشريط"}
            className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-[#062B7F] flex items-center justify-center transition-all cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          {/* Previous/Next Controls */}
          <button
            onClick={handlePrev}
            title="الخبر السابق"
            className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-[#062B7F] flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            title="الخبر التالي"
            className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-[#062B7F] flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Expand Dropdown Arrow Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title="عرض جميع الأخبار"
            className="w-8 h-8 rounded-xl bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-xs mr-1"
          >
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Expanded News Items Dropdown Drawer */}
      {isExpanded && (
        <div className="mt-2 w-full bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-2xl p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <span className="text-xs font-black text-gray-500 uppercase tracking-wider">جميع الأخبار والتحديثات الرسمية ({newsItems.length})</span>
            <span className="text-[11px] font-bold text-blue-600">منصة أبو كيان الرقمية 2026</span>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {newsItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  onSelectNews(item);
                  setIsExpanded(false);
                }}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 group ${
                  idx === currentIndex
                    ? 'bg-blue-50 border-blue-300 shadow-xs'
                    : 'bg-gray-50 hover:bg-blue-50/60 border-transparent hover:border-blue-100'
                }`}
              >
                <div className="space-y-1 text-right">
                  <span className="text-[10px] font-extrabold text-[#0A4DFF] bg-blue-100 px-2 py-0.5 rounded-md inline-block">
                    {item.category}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-[#0A4DFF] transition-colors leading-snug">
                    {item.title}
                  </p>
                </div>
                <span className="text-[10px] text-gray-400 shrink-0 font-medium">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

