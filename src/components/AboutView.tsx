import React from 'react';
import { Users, Award, ShieldCheck, Zap, Sparkles, CheckCircle2, PhoneCall, MessageSquare, Globe, Code } from 'lucide-react';
import { OFFICIAL_LOGO_URL } from './WelcomeScreen';

export const AboutView: React.FC = () => {
  return (
    <div className="w-full space-y-6 pb-24 text-right">
      {/* Banner */}
      <div className="relative rounded-[28px] p-6 sm:p-8 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0044CC] text-white shadow-xl overflow-hidden border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative z-10 space-y-2 flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold w-fit">
            <Users className="w-3.5 h-3.5 text-blue-200" />
            <span>من نحن ورؤيتنا المستقبلية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cairo']">
            منصة أبو كيان الرقمية 2026
          </h2>
          <p className="text-sm text-blue-100 max-w-xl font-medium">
            رواد تقديم خدمات الدعاية والإعلان الرقمي، تطوير الأنظمة، وتمويل الصفحات بأحدث تقنيات 2026
          </p>
        </div>

        {/* Official Logo Badge */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-900 rounded-full p-2 sm:p-2.5 border-2 border-white/30 shadow-2xl flex items-center justify-center shrink-0 overflow-hidden">
          <img 
            src={OFFICIAL_LOGO_URL} 
            alt="منصة أبو كيان الرقمية"
            className="w-full h-full object-contain rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Founder & Lead Developer Card */}
      <div className="bg-white rounded-[26px] p-6 border border-blue-100 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#062B7F] to-[#0A4DFF] text-white font-extrabold flex items-center justify-center text-lg shadow-md">
              <Code className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 font-['Cairo']">
                المهندس عبدالحميد داوؤد
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                المسؤول والقائم على برمجة وتطوير وإنشاء منصة أبو كيان الرقمية
              </p>
            </div>
          </div>

          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-50 text-[#0A4DFF] border border-blue-100 self-start sm:self-auto">
            إشراف هندسي مباشر
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          نحرص في منصة أبو كيان الرقمية على التطوير والتحسين المستمر لمواكبة أحدث تقنيات البرمجة والدعاية الرقمية، مع توفير دعم مباشر لجميع عملائنا ومستخدمي المنصة.
        </p>

        {/* Contact Links Bar */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="tel:+967778215553"
            className="h-11 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0A4DFF] font-bold text-xs flex items-center justify-center gap-2 border border-blue-100 transition-colors cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>اتصال مباشر: 778215553</span>
          </a>

          <a
            href="https://wa.me/967778215553"
            target="_blank"
            rel="noreferrer"
            className="h-11 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center gap-2 border border-emerald-200 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-50" />
            <span>محادثة الواتساب المباشرة</span>
          </a>

          <a
            href="https://www.facebook.com/fastandr"
            target="_blank"
            rel="noreferrer"
            className="h-11 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center gap-2 border border-sky-200 transition-colors cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span>صفحة الفيسبوك الرسمية</span>
          </a>
        </div>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0A4DFF] flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 text-base font-['Cairo']">جودة عالمية</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            نعتمد معايير التصميم والتطوير العالمية المستوحاة من Apple وStripe وGoogle لنمنحك تجربة لا مثيل لها.
          </p>
        </div>

        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 text-base font-['Cairo']">ذكاء اصطناعي متطور</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            دمج أدوات AI متطورة لتسريع إنجاز حملاتك التسويقية، كتابة الإعلانات، وتحليل بيانات الوصول.
          </p>
        </div>

        <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 text-base font-['Cairo']">أمان وموثوقية</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            ضمان نتائج الحسابات والتطبيقات والتمويل مع دعم فني متواصل على مدار 24 ساعة.
          </p>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="bg-gradient-to-r from-[#062B7F] to-[#0A4DFF] text-white rounded-[26px] p-6 shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <span className="block text-2xl sm:text-3xl font-black font-['Cairo']">+10,000</span>
          <span className="text-xs text-blue-200">عميل وثقوا بنا</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-black font-['Cairo']">+25,000</span>
          <span className="text-xs text-blue-200">حملة ممولة ناجحة</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-black font-['Cairo']">99.8%</span>
          <span className="text-xs text-blue-200">نسبة رضا العملاء</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-black font-['Cairo']">24 / 7</span>
          <span className="text-xs text-blue-200">دعم فني متواصل</span>
        </div>
      </div>
    </div>
  );
};

