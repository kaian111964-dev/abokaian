import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Send, CheckCircle2, Phone, MessageSquare, Crown, UserCheck, ShieldCheck, Coins, Sparkles } from 'lucide-react';
import { PLATFORM_INFO } from '../data/mockData';

interface ContactViewProps {
  onOpenWhatsApp: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenWhatsApp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setMsg('');
    }, 2000);
  };

  return (
    <div className="w-full space-y-6 pb-24 text-right">
      {/* Top Banner */}
      <div className="relative rounded-[28px] p-6 sm:p-8 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0284C7] text-white shadow-xl overflow-hidden border border-white/20">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold w-fit">
            <PhoneCall className="w-3.5 h-3.5 text-blue-200" />
            <span>تواصل مباشر مع إدارة المنصة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cairo']">
            نحن هنا لخدمتك ودعم نجاحك دائماً
          </h2>
          <p className="text-sm text-blue-100 max-w-xl font-medium">
            تواصل مباشرة مع مسؤول التطوير والتصميم للحصول على استشارة واستفسارات حول الخدمات والتسويق الرقمي والدفع بكافة العملات.
          </p>
        </div>
      </div>

      {/* DEDICATED MANAGEMENT CONTACT CARD (إدارة المنصة والتطوير) */}
      <div className="relative rounded-[28px] p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white shadow-2xl border border-amber-400/40 overflow-hidden">
        {/* Glow & Accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-5">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-400/20">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-black text-[11px] px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 fill-slate-950" />
                بيانات التواصل الرسمية
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold text-[11px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                متواجدون 24/7
              </span>
            </div>

            <div className="flex items-center gap-2 text-amber-200 text-xs font-bold">
              <Coins className="w-4 h-4 text-amber-400" />
              <span>نتعامل بالعملات: (الريال اليمني • الريال السعودي • الدولار)</span>
            </div>
          </div>

          {/* Leader Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Person & Position */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg shrink-0">
                  <UserCheck className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs text-amber-300 font-extrabold block">
                    مسؤول المنصة والإدارة العامة:
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-['Cairo'] text-white">
                    عبدالحميد داوؤد
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mt-0.5">
                    مسؤول التصميم والدعاية والإعلان والتسويق والبرمجة والتطوير بمنصة أبو كيان الرقمية
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons Box */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">رقم التواصل المباشر والواتساب:</span>
                <span className="text-amber-300 font-black dir-ltr text-sm font-mono">{PLATFORM_INFO.phoneFull}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {/* Direct WhatsApp Button */}
                <a
                  href={`https://wa.me/967${PLATFORM_INFO.phone}?text=${encodeURIComponent('أهلاً أستاذ عبدالحميد داوؤد، أتواصل معك من منصة أبو كيان الرقمية')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-lg hover:scale-105 transition-all text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>محادثة واتساب مباشرة</span>
                </a>

                {/* Direct Call Button */}
                <a
                  href={`tel:${PLATFORM_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs py-3 px-4 rounded-xl shadow-lg hover:scale-105 transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>اتصال هاتفي فوري</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          {/* Direct Phone / Whatsapp Card */}
          <div
            onClick={onOpenWhatsApp}
            className="p-5 rounded-[22px] bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md hover:shadow-xl transition-all cursor-pointer flex items-center justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <span className="text-[10px] bg-emerald-400/30 border border-emerald-300/40 px-2 py-0.5 rounded-md font-bold text-emerald-100">
                رقم التواصل المباشر والإدارة
              </span>
              <h4 className="font-extrabold text-base font-['Cairo'] mt-0.5">778215553 (+967)</h4>
              <p className="text-xs text-emerald-100 font-medium">مسؤول المنصة: عبدالحميد داوؤد</p>
            </div>
          </div>

          {/* Team / Leader Information Card */}
          <div className="p-5 rounded-[22px] bg-white border border-gray-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] bg-blue-100 text-[#062B7F] px-2.5 py-0.5 rounded-md font-extrabold">
                إدارة المنصة والتطوير
              </span>
              <h4 className="font-bold text-sm text-gray-900 font-['Cairo']">عبدالحميد داوؤد</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              مسؤول التصميم والدعاية والإعلان والتسويق والبرمجة والتطوير بمنصة أبو كيان الرقمية.
            </p>
          </div>

          <div className="p-5 rounded-[22px] bg-white border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0A4DFF] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-right">
              <h4 className="font-bold text-sm font-['Cairo']">البريد الإلكتروني والدعم</h4>
              <p className="text-xs text-gray-500 mt-0.5">support@abukian.com</p>
            </div>
          </div>

          <div className="p-5 rounded-[22px] bg-white border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-right">
              <h4 className="font-bold text-sm font-['Cairo']">العملات المعتمدة للمدفوعات</h4>
              <p className="text-xs text-gray-600 mt-0.5 font-bold">الريال اليمني (ر.ي) • الريال السعودي (ر.س) • الدولار الأمريكي ($)</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[26px] p-6 border border-gray-100 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-base">إرسال رسالة مباشرة</h3>

          {sent ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-sm">تم استلام رسالتك بنجاح!</h4>
              <p className="text-xs">سيتواصل معك أستاذ عبدالحميد داوؤد وفريق الدعم في أقرب وقت.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">الاسم</label>
                <input
                  type="text"
                  required
                  placeholder="اسمك الكريم..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium focus:outline-none focus:border-[#0A4DFF] text-right"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">البريد أو الهاتف</label>
                <input
                  type="text"
                  required
                  placeholder="بيانات التواصل..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium focus:outline-none focus:border-[#0A4DFF] text-right"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">الرسالة</label>
                <textarea
                  rows={3}
                  required
                  placeholder="اكتب استفسارك هنا..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium focus:outline-none focus:border-[#0A4DFF] text-right resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-xl bg-gradient-to-r from-[#0A4DFF] to-[#0044CC] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

