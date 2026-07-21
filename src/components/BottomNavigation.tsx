import React from 'react';
import { Home, Users, ShoppingBag, PhoneCall, Briefcase, Bot } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'about', label: 'من نحن', icon: Users },
    { id: 'store', label: 'متجر', icon: ShoppingBag },
    { id: 'contact', label: 'اتصل بنا', icon: PhoneCall },
    { id: 'assistant', label: 'المساعد', icon: Briefcase }
  ];

  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 px-4 max-w-lg mx-auto pointer-events-none">
      <nav className="pointer-events-auto h-[76px] sm:h-[80px] bg-[#062B7F]/90 backdrop-blur-2xl rounded-[30px] border border-white/20 shadow-2xl shadow-blue-950/40 p-2 flex items-center justify-between gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`relative flex-1 h-full rounded-[22px] flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-b from-[#0A4DFF] to-[#0044CC] text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {/* Active Red Dot Indicator */}
              {isActive && (
                <span className="absolute -top-1 right-2 w-2 h-2 rounded-full bg-[#F44336] shadow-sm animate-pulse"></span>
              )}

              <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[11px] font-bold font-['Cairo'] tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
