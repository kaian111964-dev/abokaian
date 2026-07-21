import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  MessageSquare, 
  ArrowLeft, 
  Code, 
  Cpu, 
  CheckCircle, 
  Globe, 
  ChevronLeft,
  Share2,
  ExternalLink
} from 'lucide-react';

export const OFFICIAL_LOGO_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgt7FFLuCfsaST7jichIcoO6XRd1Dst-Sim7wYFjegnN9hOAbl3LCQAqSfGhUMfgtCezN7YlX-eVqi9Klqj5aAWOD1-eKjs1w3ZufyWqqSRe080bWyoR3L1hGGGxR4Z6_abOTwdi2cIxYrW-dYJK3iXwOlpjBoh1xif-TdavbwGoG81q-r_2QMCUGqNRko/s1254/file_0000000055588230b07c940935a6e3f5.png";

interface WelcomeScreenProps {
  onEnterPlatform: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnterPlatform }) => {
  return (
    <div className="relative min-h-screen w-full bg-ambient-mesh text-slate-900 flex flex-col items-center justify-between p-4 sm:p-8 overflow-x-hidden font-['Cairo']">
      
      {/* LUXURY AMBIENT GLOW SPOTS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-blue-400/10 via-amber-400/10 to-red-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a4dff08_1px,transparent_1px),linear-gradient(to_bottom,#0a4dff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      {/* TOP HEADER BRANDING */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between py-3.5 px-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-md shadow-blue-500/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 p-1 flex items-center justify-center shadow-sm border border-gray-200 overflow-hidden">
            <img 
              src={OFFICIAL_LOGO_URL} 
              alt="منصة أبو كيان الرقمية"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="block text-[11px] text-[#0A4DFF] font-bold">الموقع الرسمي 2026</span>
            <div className="flex items-center gap-1 font-extrabold text-sm text-slate-900 font-['IBM_Plex_Sans_Arabic']">
              <span>منصة</span>
              <span className="text-[#F44336]">أبو كيان</span>
              <span className="text-[#0A4DFF]">الرقمية</span>
            </div>
          </div>
        </div>

        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0A4DFF] border border-blue-200/80 flex items-center gap-1.5 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>إصدار ذكي حديث</span>
        </span>
      </header>

      {/* MAIN CONTAINER CONTENT */}
      <main className="relative z-10 w-full max-w-4xl my-auto py-8 space-y-8">
        
        {/* LOGO HERO SHOWCASE */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative group">
            {/* Outer Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#F44336] rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
            
            {/* Logo Image Frame */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-slate-900 rounded-full p-2.5 sm:p-3.5 border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden shrink-0">
              <img 
                src={OFFICIAL_LOGO_URL} 
                alt="شعار منصة أبو كيان الرقمية" 
                className="w-full h-full object-contain rounded-full filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="space-y-2 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-black font-['IBM_Plex_Sans_Arabic'] tracking-tight leading-tight text-slate-900">
              مرحباً بكم في <span className="bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#F44336] bg-clip-text text-transparent">منصة أبو كيان الرقمية</span>
            </h1>
            <p className="text-xs sm:text-base text-gray-600 font-medium leading-relaxed">
              المنصة الإعلانية والبرمجية الشاملة للتمويل، التسويق الرقمي، والحلول الذكية 2026
            </p>
          </div>
        </div>

        {/* 3 LUXURY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* CARD 1: WELCOME CUSTOMERS */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-blue-100/80 shadow-md shadow-blue-500/5 space-y-3 relative overflow-hidden hover:border-blue-300 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A4DFF] border border-blue-100 flex items-center justify-center shadow-2xs mx-auto">
              <Sparkles className="w-5 h-5 animate-spin-slow text-[#0A4DFF]" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-center font-['Cairo'] bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0044CC] bg-clip-text text-transparent">
              مرحباً بكم في منصتنا الرقمية.
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              نسعد بانضمامكم واختياركم لمنصتنا. نقدم لكم حلولاً تسويقية وبرمجية متكاملة بلمسة احترافية تعزز حضوركم الرقمي وتضاعف نتائج أعمالكم.
            </p>
          </div>

          {/* CARD 2: PLATFORM UNDER CONTINUOUS DEVELOPMENT */}
          <div className="bg-amber-50/70 backdrop-blur-md rounded-2xl p-5 border border-amber-200/80 shadow-md shadow-amber-500/5 space-y-3 relative overflow-hidden hover:border-amber-300 transition-all hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-amber-100/80 text-amber-700 border border-amber-200 flex items-center justify-center shadow-2xs">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-amber-900 flex items-center gap-1.5 font-['Cairo']">
              <span>المنصة قيد التطوير</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-800 border border-amber-300">تحديث مستمر</span>
            </h3>
            <p className="text-xs text-amber-800 leading-relaxed font-medium">
              تنبيه هام: المنصة قيد التطوير والتحسين المستمر لتقديم جميع الخدمات والمزايا المبتكرة لتلبي كافة طلبات ورغبات المستخدمين بشكل كامل وآمن.
            </p>
          </div>

          {/* CARD 3: FOUNDER & LEAD DEVELOPER (المهندس عبدالحميد داوؤد) */}
          <div className="bg-gradient-to-br from-[#062B7F] via-[#0A4DFF] to-[#0044CC] text-white rounded-2xl p-5 shadow-xl shadow-blue-500/20 space-y-3 relative overflow-hidden border border-white/20 hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/20 text-white font-extrabold flex items-center justify-center text-sm shadow-md border border-white/30 shrink-0">
                م
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white font-['Cairo']">المهندس عبدالحميد داوؤد</h3>
                <span className="text-[11px] text-blue-100 font-medium block">المسؤول والقائم على برمجة وتطوير المنصة</span>
              </div>
            </div>

            <p className="text-xs text-blue-50 leading-relaxed font-medium">
              للتواصل المباشر والاستشارات التقنية والبرمجية مع مطور المنصة:
            </p>

            {/* 3 SOCIAL & CONTACT ICONS BAR */}
            <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/20">
              {/* Phone Icon */}
              <a
                href="tel:+967778215553"
                className="flex-1 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-white/20"
                title="الاتصال الهاتفي المباشر"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>اتصال</span>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/967778215553"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-xl bg-emerald-500/80 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                title="المحادثة عبر الواتساب"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white text-emerald-600" />
                <span>واتساب</span>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/fastandr"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-white/20"
                title="صفحة الفيسبوك الرسمية"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>فيسبوك</span>
              </a>
            </div>
          </div>

        </div>

        {/* ENTER PLATFORM LUXURIOUS ACTION BUTTON */}
        <div className="pt-4 flex flex-col items-center space-y-3">
          <button
            onClick={onEnterPlatform}
            className="w-full max-w-md h-15 rounded-2xl bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0044CC] text-white font-black text-base sm:text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-98 transition-all duration-300 flex items-center justify-center gap-3 border border-blue-400/50 cursor-pointer group"
          >
            <span>الدخول إلى المنصة</span>
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1.5 transition-transform text-amber-300" />
          </button>

          <span className="text-xs text-gray-500 font-medium">
            تصفح آمن وسريع 100% | جميع الحقوق محفوظة لمنصة أبو كيان الرقمية 2026 ©
          </span>
        </div>

      </main>

      {/* FOOTER BAR */}
      <footer className="relative z-10 w-full max-w-4xl text-center pt-4 border-t border-gray-200/80 text-[11px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>إشراف وتطوير: المهندس عبدالحميد داوؤد</span>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/967778215553" target="_blank" rel="noreferrer" className="hover:text-[#0A4DFF] font-bold transition-colors">واتساب: 778215553</a>
          <span>•</span>
          <a href="https://www.facebook.com/fastandr" target="_blank" rel="noreferrer" className="hover:text-[#0A4DFF] font-bold transition-colors">فيسبوك fastandr</a>
        </div>
      </footer>

    </div>
  );
};
