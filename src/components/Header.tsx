import React from 'react';
import { Sparkles, MessageCircle, Phone, Bell, Search, Menu, MessageSquareText } from 'lucide-react';
import { NotificationItem } from '../types';
import { OFFICIAL_LOGO_URL } from './WelcomeScreen';

interface HeaderProps {
  notifications: NotificationItem[];
  onOpenNotifications: () => void;
  onOpenSearch: () => void;
  onOpenAssistant: () => void;
  onOpenMenu: () => void;
  onOpenWhatsApp: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  notifications,
  onOpenNotifications,
  onOpenSearch,
  onOpenAssistant,
  onOpenMenu,
  onOpenWhatsApp,
  onGoHome
}) => {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-40 w-full h-[72px] bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-2.5 sm:px-6 flex items-center justify-between gap-1.5 sm:gap-3">
        
        {/* Right side (RTL Start): Logo & Brand Title */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0" onClick={onGoHome}>
          {/* Logo Card */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 rounded-full p-0.5 sm:p-1 shadow-md shadow-blue-500/10 border border-gray-100 flex items-center justify-center relative overflow-hidden shrink-0 group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A4DFF]/20 via-transparent to-[#F44336]/20"></div>
            
            <img 
              src={OFFICIAL_LOGO_URL} 
              alt="منصة أبو كيان الرقمية"
              className="w-full h-full object-contain rounded-full relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5 sm:gap-1 text-sm sm:text-xl font-bold font-['IBM_Plex_Sans_Arabic'] leading-tight whitespace-nowrap">
              <span className="text-[#062B7F]">منصة</span>
              <span className="text-[#F44336] font-extrabold tracking-tight">ابوكيان</span>
              <span className="text-[#0A4DFF]">الرقمية</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-[#6B7280] font-medium hidden sm:inline-block">خدمات الدعاية والإعلان والتكنولوجيا</span>
          </div>
        </div>

        {/* Left side (RTL End): Action Icon Cards (WhatsApp, Assistant, Notifications, Search, Menu) */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          {/* WhatsApp Action Icon */}
          <button
            onClick={onOpenWhatsApp}
            title="واتساب المباشر"
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/90 border border-emerald-100 shadow-xs sm:shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-emerald-600 relative group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-500/20" />
          </button>

          {/* AI Assistant Chatbot Icon */}
          <button
            onClick={onOpenAssistant}
            title="المساعد الذكي"
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/90 border border-blue-100 shadow-xs sm:shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-[#0A4DFF] relative group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full bg-[#0A4DFF]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <MessageSquareText className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Notifications Bell Icon */}
          <button
            onClick={onOpenNotifications}
            title="الإشعارات"
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/90 border border-gray-100 shadow-xs sm:shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-gray-700 relative group cursor-pointer"
          >
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[#0A4DFF] transition-colors" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] sm:min-w-[20px] sm:h-[20px] px-1 bg-[#F44336] text-white text-[10px] sm:text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            title="بحث"
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/90 border border-gray-100 shadow-xs sm:shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-gray-700 group cursor-pointer"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-[#0A4DFF] transition-colors" />
          </button>

          {/* Drawer Menu Button */}
          <button
            onClick={onOpenMenu}
            title="القائمة"
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/90 border border-gray-100 shadow-xs sm:shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-[#062B7F] group cursor-pointer"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-[#0A4DFF] transition-colors" />
          </button>
        </div>

      </div>
    </header>
  );
};
