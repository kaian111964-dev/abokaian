import React, { useState } from 'react';
import { 
  ArrowRight, 
  Heart, 
  Crown, 
  CheckCircle2, 
  Search, 
  Phone, 
  MessageSquare, 
  Building2, 
  Sparkles,
  Share2,
  Coins,
  ShieldCheck,
  UserCheck,
  Home
} from 'lucide-react';
import { LOYAL_CLIENTS, PLATFORM_INFO } from '../data/mockData';

interface ClientsViewProps {
  onBackToHome: () => void;
}

export const ClientsView: React.FC<ClientsViewProps> = ({ onBackToHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'جميع العملاء الأوفياء' },
    { id: 'القطاع الطبي والصحي', label: 'القطاع الطبي' },
    { id: 'القطاع المصرفي والمالي', label: 'الصرافة والمالية' },
    { id: 'العقارات والاستثمار', label: 'المقاولات والعقارات' },
    { id: 'الهندسة والتخطيط المعماري', label: 'الهندسة والتصاميم' },
    { id: 'شبكات الاتصالات والإنترنت', label: 'الشبكات والاتصالات' },
  ];

  const filteredClients = LOYAL_CLIENTS.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          client.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          client.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                            client.category.includes(selectedCategory) ||
                            (selectedCategory === 'القطاع الطبي والصحي' && client.category.includes('الطبي')) ||
                            (selectedCategory === 'القطاع المصرفي والمالي' && (client.category.includes('المصرفي') || client.category.includes('الصرافة'))) ||
                            (selectedCategory === 'العقارات والاستثمار' && (client.category.includes('العقارات') || client.category.includes('المقاولات')));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full space-y-8 pb-12 animate-fadeIn">
      {/* Top Fixed-Style Navigation Bar */}
      <div className="flex items-center justify-between bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-[24px] border border-amber-200/60 shadow-md sticky top-2 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 bg-[#062B7F] hover:bg-[#0A4DFF] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>الرجوع للرئيسية</span>
          </button>
          
          <button
            onClick={onBackToHome}
            className="hidden sm:flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-xl text-xs font-bold transition-all"
          >
            <Home className="w-4 h-4 text-gray-600" />
            <span>الرئيسية</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-right">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs font-bold text-gray-900">{PLATFORM_INFO.name}</span>
            <span className="text-[11px] text-amber-600 font-semibold">إدارة: {PLATFORM_INFO.leaderName}</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-300 flex items-center justify-center text-amber-600 shadow-xs">
            <Crown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Luxury Hero Header */}
      <div className="relative rounded-[32px] p-6 sm:p-10 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B] text-white shadow-2xl overflow-hidden border border-amber-400/30">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6 text-right">
          {/* Top Badges Bar */}
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow-md">
              <Crown className="w-3.5 h-3.5 fill-slate-950" />
              قائمة الشرف والوفاء 2026
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-200">
              <Coins className="w-3.5 h-3.5 text-amber-300" />
              تعامل بـ (ر.ي / ر.س / $)
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black font-['Cairo'] leading-tight tracking-wide text-amber-100">
              أبرز عملائنا الأوفياء وشركاء النجاح
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed max-w-3xl mr-auto sm:mr-0">
              رسالة شكر وتقدير من صميم القلب لكل شركة، مركز، ومؤسسة منحتنا ثقتها الغالية. نحن نفخر بعرض أسماءكم في قمة منصتنا الرقمية كرموز للتميز والإبداع.
            </p>
          </div>

          {/* Heartwarming Statement Container */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-amber-300/30 text-amber-100 space-y-2 shadow-inner">
            <div className="flex items-center justify-end gap-2 font-extrabold text-xs sm:text-sm text-amber-300">
              <span>كلمات نابعة من القلب لكل عملائنا</span>
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-100">
              «ثقتكم المستمرة هي المحرك الأساسي لابتكارنا وتطورنا. لم تكونوا مجرد عملاء، بل كنتم وما زلتم شركاء حقيقيين في كل خطوة نجاح تخطوها منصة أبو كيان الرقمية.»
            </p>
          </div>

          {/* Management & Leadership Contact Box */}
          <div className="pt-2 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-t border-white/10">
            {/* Direct Phone / Whatsapp */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/967${PLATFORM_INFO.phone}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>واتساب الإدارة ({PLATFORM_INFO.phone})</span>
              </a>

              <a
                href={`tel:${PLATFORM_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-3.5 py-2.5 rounded-xl font-bold text-xs shadow-md border border-white/20 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>اتصال مباشر</span>
              </a>
            </div>

            {/* Leader Info */}
            <div className="text-right space-y-0.5">
              <div className="flex items-center justify-end gap-2 text-xs font-bold text-amber-300">
                <span>إدارة منصة أبو كيان الرقمية</span>
                <UserCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-sm font-extrabold text-white font-['Cairo']">
                {PLATFORM_INFO.leaderName}
              </div>
              <div className="text-[11px] text-gray-300 font-medium">
                {PLATFORM_INFO.leaderRole}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Currency Informational Bar */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-blue-500/10 p-4 rounded-2xl border border-amber-300/40 flex flex-wrap items-center justify-between gap-3 text-right">
        <div className="flex items-center gap-2 text-amber-950 font-bold text-xs sm:text-sm">
          <Coins className="w-5 h-5 text-amber-600" />
          <span>تتعامل المنصة مع كافة العملاء بالعملات المعتمدة:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="bg-white border border-amber-200 px-3 py-1 rounded-lg shadow-xs text-slate-800">
            🇾🇪 الريال اليمني (ر.ي)
          </span>
          <span className="bg-white border border-amber-200 px-3 py-1 rounded-lg shadow-xs text-slate-800">
            🇸🇦 الريال السعودي (ر.س)
          </span>
          <span className="bg-white border border-amber-200 px-3 py-1 rounded-lg shadow-xs text-slate-800">
            🇺🇸 الدولار الأمريكي ($)
          </span>
        </div>
      </div>

      {/* Search & Category Filter Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن عميل أو نشاط تجاري..."
              className="w-full bg-white border border-gray-200 rounded-2xl py-3 pr-10 pl-4 text-xs sm:text-sm focus:outline-none focus:border-[#0A4DFF] focus:ring-2 focus:ring-blue-100 text-right transition-all shadow-xs"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5 pointer-events-none" />
          </div>

          <div className="text-xs font-bold text-gray-500 self-end sm:self-center">
            إجمالي العملاء المعروضين: <span className="text-[#062B7F] font-extrabold text-sm">{filteredClients.length}</span> من 12
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#062B7F] text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clients Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="group relative bg-white rounded-[28px] p-6 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Image Banner & Avatar */}
            <div>
              <div className="relative h-44 rounded-2xl overflow-hidden mb-5 bg-slate-900">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Top Category Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-[#062B7F] shadow-sm">
                  {client.category}
                </div>

                {/* Verified Star Badge */}
                <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-black flex items-center gap-1 shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-slate-950 text-amber-400" />
                  <span>عميل موثق</span>
                </div>

                {/* Bottom Overlay Title in Image */}
                <div className="absolute bottom-3 right-3 left-3 text-right text-white">
                  <span className="text-[10px] text-amber-300 font-bold block mb-0.5">
                    {client.partnershipYear}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-['Cairo'] line-clamp-1">
                    {client.name}
                  </h3>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xs text-gray-500 font-medium text-right mb-4 leading-relaxed">
                {client.subtitle}
              </p>

              {/* Heart Message Box */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-right space-y-1.5 mb-5 relative">
                <div className="flex items-center justify-end gap-1.5 text-amber-900 font-extrabold text-xs">
                  <span>رسالة المنصة للعميل</span>
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                </div>
                <p className="text-xs text-gray-700 font-normal leading-relaxed italic">
                  "{client.heartMessage}"
                </p>
              </div>
            </div>

            {/* Bottom Card Footer Actions */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>شراكة مستمرة</span>
              </div>

              <a
                href={`https://wa.me/967${PLATFORM_INFO.phone}?text=${encodeURIComponent(`أهلاً منصة أبو كيان، أريد خدمة ممثلة لخدمات ${client.name}`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-gray-100 group-hover:bg-[#0A4DFF] text-gray-700 group-hover:text-white px-3.5 py-2 rounded-xl font-bold transition-all"
              >
                <span>طلب خدمة مماثلة</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Appreciation Banner */}
      <div className="rounded-[28px] p-8 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#1E40AF] text-white text-center space-y-4 shadow-xl">
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center text-amber-300 border border-white/30 shadow-md">
          <Sparkles className="w-7 h-7" />
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black font-['Cairo'] text-amber-200">
            هل تريد الانضمام إلى قائمة عملائنا المميزين؟
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
            تواصل مباشرة مع إدارة المنصة (عبدالحميد داوؤد) للحصول على أفضل الخصومات والتصاميم والدعاية والإعلان والبرمجة والتسويق بكافة العملات (ر.ي / ر.س / $).
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/967${PLATFORM_INFO.phone}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-lg transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>تواصل معنا فوراً ({PLATFORM_INFO.phone})</span>
          </a>

          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm border border-white/30 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>العودة للصفحة الرئيسية</span>
          </button>
        </div>
      </div>
    </div>
  );
};
