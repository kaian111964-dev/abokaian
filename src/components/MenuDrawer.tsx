import React from 'react';
import { 
  X, 
  Home, 
  ShoppingBag, 
  Sparkles, 
  Wifi, 
  Radio, 
  Briefcase, 
  Users, 
  PhoneCall, 
  LogOut, 
  User as UserIcon,
  Phone,
  Crown,
  Maximize2,
  BarChart2,
  Clock,
  CheckCircle2,
  Coins,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { User } from '../types';
import { PLATFORM_INFO } from '../data/mockData';
import { OFFICIAL_LOGO_URL } from './WelcomeScreen';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  onOpenWhatsApp: () => void;
  onShowWelcome?: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  currentUser,
  activeTab,
  onTabChange,
  onLogout,
  onOpenWhatsApp,
  onShowWelcome
}) => {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'dashboard', label: 'لوحة تحكم المستخدم والحساب', icon: UserIcon },
    { id: 'clients', label: 'أبرز عملائنا الأوفياء', icon: Crown },
    { id: 'store', label: 'متجر التطبيقات والألعاب', icon: ShoppingBag },
    { id: 'ai', label: 'أدوات الذكاء الاصطناعي', icon: Sparkles },
    { id: 'wifi', label: 'شبكات الواي فاي والمايكروتك', icon: Wifi },
    { id: 'live', label: 'البث المباشر والتغطيات', icon: Radio },
    { id: 'portfolio', label: 'معرض أعمالنا الإبداعية', icon: Briefcase },
    { id: 'about', label: 'من نحن ورؤيتنا', icon: Users },
    { id: 'contact', label: 'اتصل بنا والدعم المباشر', icon: PhoneCall },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-sm h-full bg-white border-r border-gray-100 shadow-2xl flex flex-col justify-between text-right animate-in slide-in-from-right duration-300">
        
        {/* Top Info Header */}
        <div className="p-5 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0044CC] text-white space-y-3.5">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 font-bold font-['IBM_Plex_Sans_Arabic'] text-base">
              <div className="w-9 h-9 rounded-full bg-slate-900 p-1 border border-white/30 shrink-0 overflow-hidden shadow-sm">
                <img 
                  src={OFFICIAL_LOGO_URL} 
                  alt="منصة أبو كيان" 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span>منصة</span>
              <span className="text-[#F44336]">ابوكيان</span>
              <span>الرقمية</span>
            </div>
          </div>

          {/* Leader Badge */}
          <div className="p-2.5 rounded-xl bg-amber-400/20 border border-amber-300/30 text-amber-100 text-xs text-right font-medium">
            <div className="font-extrabold text-amber-300 font-['Cairo']">إدارة المنصة والتطوير:</div>
            <div>{PLATFORM_INFO.leaderName}</div>
            <div className="text-[10px] text-amber-200/80 font-normal">{PLATFORM_INFO.leaderRole}</div>
          </div>

          {/* User Profile Info Card (Clickable to open Full User Dashboard Page) */}
          <button 
            onClick={() => {
              onTabChange('dashboard');
              onClose();
            }}
            className="w-full p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-between text-right transition-all cursor-pointer group"
          >
            <div className="text-right">
              <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">{currentUser?.fullName || 'زائر المنصة'}</h4>
              <span className="text-[10px] text-blue-200 font-medium">
                {currentUser?.isGuest ? 'وضع الضيف التجريبي' : currentUser?.email || 'حساب نشط'}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors flex items-center justify-center text-white shadow-xs">
              <UserIcon className="w-5 h-5" />
            </div>
          </button>

          {/* MINI DASHBOARD PANEL (Clickable to open Full User Dashboard Page) */}
          <button 
            onClick={() => {
              onTabChange('dashboard');
              onClose();
            }}
            className="w-full text-right p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-900 border border-white/20 hover:border-amber-400/50 text-white space-y-2.5 shadow-lg font-['Cairo'] transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-2">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-300">
                <BarChart2 className="w-4 h-4 text-amber-300" />
                <span>لوحة التحكم المصغرة (فتح الصفحة)</span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>عرض الكل ↗</span>
              </span>
            </div>

            {/* Stats Grid 2x2 */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-xl bg-white/10 border border-white/10 space-y-0.5">
                <div className="flex items-center justify-between text-[10px] text-blue-200">
                  <span>الخدمات النشطة</span>
                  <Zap className="w-3 h-3 text-amber-300" />
                </div>
                <div className="text-sm font-black text-white">12 خدمة</div>
              </div>

              <div className="p-2 rounded-xl bg-white/10 border border-white/10 space-y-0.5">
                <div className="flex items-center justify-between text-[10px] text-blue-200">
                  <span>طلبات جارية</span>
                  <Clock className="w-3 h-3 text-amber-400" />
                </div>
                <div className="text-sm font-black text-amber-300">2 طلب</div>
              </div>

              <div className="p-2 rounded-xl bg-white/10 border border-white/10 space-y-0.5">
                <div className="flex items-center justify-between text-[10px] text-blue-200">
                  <span>طلبات مكتملة</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-sm font-black text-emerald-300">18 طلب</div>
              </div>

              <div className="p-2 rounded-xl bg-white/10 border border-white/10 space-y-0.5">
                <div className="flex items-center justify-between text-[10px] text-blue-200">
                  <span>نقاط المكافآت</span>
                  <Coins className="w-3 h-3 text-amber-300" />
                </div>
                <div className="text-sm font-black text-amber-200">250 نقطة</div>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="pt-1 flex items-center justify-between text-[10px] text-gray-300">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>حساب مفعل وآمن</span>
              </span>
              <span className="text-blue-200">تحديث تلقائي</span>
            </div>
          </button>
        </div>

        {/* Menu Navigation Links */}
        <div className="p-4 overflow-y-auto flex-1 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  onClose();
                }}
                className={`w-full p-3.5 rounded-2xl font-bold text-xs sm:text-sm font-['Cairo'] transition-all flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#0A4DFF] text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <span>{item.label}</span>
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-100 space-y-2 bg-gray-50/50">
          <button
            onClick={onOpenWhatsApp}
            className="w-full h-11 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>واتساب المباشر ({PLATFORM_INFO.phone})</span>
          </button>

          <button
            onClick={onLogout}
            className="w-full h-11 rounded-xl bg-red-50 text-red-600 border border-red-100 font-bold text-xs flex items-center justify-center gap-2 hover:bg-red-100 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>تسجيل الخروج</span>
          </button>
        </div>

      </div>
    </div>
  );
};

