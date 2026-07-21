import React from 'react';
import { ArrowLeft, Sparkles, Crown, Radio, Wifi, Briefcase, CheckCircle2, ShoppingBag, Gamepad2, Zap, Smartphone } from 'lucide-react';

interface FeaturedBannersProps {
  onSelectTab: (tab: string) => void;
}

export const FeaturedBanners: React.FC<FeaturedBannersProps> = ({ onSelectTab }) => {
  return (
    <div className="w-full space-y-4">
      {/* 2x2 Grid for Featured Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Card 1: AI Tools & Models */}
        <div 
          onClick={() => onSelectTab('ai')}
          className="relative rounded-[24px] p-5 bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] text-white shadow-lg shadow-purple-500/20 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden group border border-white/20"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>

          <div className="flex items-start justify-between gap-4 relative z-10">
            {/* Arrow Circle Button */}
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#7C3AED] transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>

            {/* Right Side Content & Icon */}
            <div className="flex items-start gap-3 text-right">
              <div className="flex flex-col items-end">
                <h3 className="text-base sm:text-lg font-bold font-['Cairo']">
                  أدوات ونماذج الذكاء الاصطناعي
                </h3>
                <p className="text-xs text-purple-100 mt-1 font-medium">
                  أقوى أدوات AI في مكان واحد
                </p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
                <Sparkles className="w-6 h-6 text-purple-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: View New Offers */}
        <div 
          onClick={() => onSelectTab('offers')}
          className="relative rounded-[24px] p-5 bg-gradient-to-br from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] text-white shadow-lg shadow-sky-500/20 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden group border border-white/20"
        >
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform"></div>

          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0284C7] transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>

            <div className="flex items-start gap-3 text-right">
              <div className="flex flex-col items-end">
                <h3 className="text-base sm:text-lg font-bold font-['Cairo']">
                  اطلاع على عروضنا الجديدة
                </h3>
                <p className="text-xs text-sky-100 mt-1 font-medium">
                  عروض وخصومات حصرية لفترة محدودة
                </p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
                <Crown className="w-6 h-6 text-amber-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Live Streaming */}
        <div 
          onClick={() => onSelectTab('live')}
          className="relative rounded-[24px] p-5 bg-gradient-to-br from-[#E11D48] via-[#F43F5E] to-[#FB7185] text-white shadow-lg shadow-red-500/20 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden group border border-white/20"
        >
          {/* LIVE Badge */}
          <div className="absolute top-3 right-3 bg-white/25 backdrop-blur-md border border-white/40 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            LIVE
          </div>

          <div className="flex items-start justify-between gap-4 relative z-10 pt-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#E11D48] transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>

            <div className="flex items-start gap-3 text-right">
              <div className="flex flex-col items-end">
                <h3 className="text-base sm:text-lg font-bold font-['Cairo']">
                  البث المباشر
                </h3>
                <p className="text-xs text-rose-100 mt-1 font-medium">
                  أخبار وتغطيات / ترفيه . مسلسلات وأفلام
                </p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
                <Radio className="w-6 h-6 text-rose-100" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Wi-Fi Networks */}
        <div 
          onClick={() => onSelectTab('wifi')}
          className="relative rounded-[24px] p-5 bg-gradient-to-br from-[#0EA5E9] via-[#0284C7] to-[#2563EB] text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden group border border-white/20"
        >
          <div className="flex items-center justify-between relative z-10 mb-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0284C7] transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/30 border border-emerald-300/40 text-[11px] font-bold text-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                متاح الآن
              </span>

              <h3 className="text-base sm:text-lg font-bold font-['Cairo']">
                شبكات واي فاي
              </h3>

              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
                <Wifi className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="relative z-10 text-right space-y-1 text-xs text-sky-100 font-medium pt-1 pr-1 border-t border-white/10">
            <div className="flex items-center justify-end gap-1.5">
              <span>إضافة شبكة جديدة ومشاركة</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
            </div>
            <div className="flex items-center justify-end gap-1.5">
              <span>عرض الأجهزة المتصلة</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
            </div>
            <div className="flex items-center justify-end gap-1.5">
              <span>حلول برمجة وحماية متكاملة</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
            </div>
          </div>
        </div>

      </div>

      {/* Full Width Showcase Banner: معرض أعمالنا */}
      <div 
        onClick={() => onSelectTab('portfolio')}
        className="relative rounded-[26px] p-6 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#1E40AF] text-white shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:scale-[1.005] transition-all duration-300 cursor-pointer overflow-hidden group border border-white/25"
      >
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white/5 skew-x-12 pointer-events-none"></div>

        <div className="flex items-center justify-between relative z-10">
          <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#062B7F] transition-all shadow-md">
            <ArrowLeft className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-4 text-right">
            <div className="flex flex-col items-end">
              <h3 className="text-lg sm:text-xl font-extrabold font-['Cairo'] tracking-wide">
                معرض أعمالنا
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                تصاميم احترافية . صور . تجارب ملهمة لأعمالنا
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-lg">
              <Briefcase className="w-7 h-7 text-blue-200" />
            </div>
          </div>
        </div>
      </div>

      {/* NEW Full Width Card: المتجر الإلكتروني (Located right under معرض أعمالنا as requested) */}
      <div 
        onClick={() => onSelectTab('store')}
        className="relative rounded-[28px] p-6 bg-gradient-to-r from-[#061842] via-[#0A2E80] to-[#0A4DFF] text-white shadow-2xl shadow-blue-950/30 hover:shadow-blue-600/30 hover:scale-[1.008] transition-all duration-300 cursor-pointer overflow-hidden group border-2 border-amber-400/50"
      >
        {/* Glow Effects */}
        <div className="absolute -right-12 -bottom-12 w-56 h-56 bg-amber-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform"></div>
        <div className="absolute left-10 top-0 bottom-0 w-1/3 bg-white/5 -skew-x-12 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          
          {/* Action Left Side */}
          <div className="flex items-center justify-between md:justify-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 backdrop-blur-md border border-amber-300/40 flex items-center justify-center text-amber-300 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-lg shrink-0">
              <ArrowLeft className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black text-slate-950 bg-amber-400 px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 fill-slate-950" />
                متجر جديد 2026
              </span>
              <span className="text-xs text-blue-200 font-bold hidden sm:inline-block">تصفح المئات من التطبيقات</span>
            </div>
          </div>

          {/* Right Side Header & Details */}
          <div className="flex items-center gap-4 text-right">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-500/30 text-blue-200 border border-blue-400/40 text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  منصة أبو كيان
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-['Cairo'] tracking-wide text-white group-hover:text-amber-300 transition-colors">
                  المتجر الإلكتروني
                </h3>
              </div>

              {/* Department Highlights */}
              <div className="flex items-center flex-wrap justify-end gap-2 text-xs font-semibold text-blue-100 mt-1">
                <span className="bg-white/10 px-2.5 py-1 rounded-lg border border-white/15 flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-sky-300" />
                  متجر التطبيقات البرمجية
                </span>
                <span className="bg-white/10 px-2.5 py-1 rounded-lg border border-white/15 flex items-center gap-1">
                  <Gamepad2 className="w-3.5 h-3.5 text-amber-300" />
                  قسم الألعاب المشوقة 3D
                </span>
              </div>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A4DFF] to-blue-800 border-2 border-amber-400/80 text-amber-300 flex items-center justify-center shrink-0 shadow-xl shadow-blue-900/40 group-hover:rotate-6 transition-transform">
              <ShoppingBag className="w-8 h-8" />
            </div>
          </div>

        </div>
      </div>

      {/* Full Width Card: أبرز عملائنا الأوفياء */}
      <div 
        onClick={() => onSelectTab('clients')}
        className="relative rounded-[26px] p-6 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#B45309] text-white shadow-xl shadow-amber-950/20 hover:shadow-2xl hover:scale-[1.005] transition-all duration-300 cursor-pointer overflow-hidden group border border-amber-400/30"
      >
        {/* Decorative Golden Ambient Glow */}
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-amber-400/10 -skew-x-12 pointer-events-none"></div>

        <div className="flex items-center justify-between relative z-10">
          {/* Action Left Button */}
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-300/40 flex items-center justify-center text-amber-300 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all shadow-md">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="hidden sm:inline-block text-xs font-bold text-amber-200 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
              تصفح القائمة كاملة
            </span>
          </div>

          {/* Right Header Text & Icon */}
          <div className="flex items-center gap-4 text-right">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
                  شركاء النجاح
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold font-['Cairo'] tracking-wide text-amber-100">
                  أبرز عملائنا الأوفياء
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                شركاؤنا في رحلة الإبداع والتميز الرقمي - كلمات صريحة من القلب
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
              <Crown className="w-8 h-8 fill-slate-950 text-slate-950" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
