import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Sparkles, 
  Send, 
  Clock, 
  DollarSign, 
  ShieldCheck, 
  Star, 
  MessageSquare, 
  Briefcase, 
  Award, 
  Zap, 
  PhoneCall, 
  ChevronRight,
  User,
  ThumbsUp
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onSendOrder: (orderData: any) => void;
  onRateService: (serviceId: string, rating: number) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onSendOrder,
  onRateService
}) => {
  const [notes, setNotes] = useState('');
  const [phone, setPhone] = useState('');
  const [clientNameInput, setClientNameInput] = useState('');
  const [budget, setBudget] = useState('50');
  const [currency, setCurrency] = useState<'USD' | 'YER' | 'SAR'>('USD');
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Smooth scroll to form
  const scrollToBookingForm = () => {
    const el = document.getElementById('booking-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Direct WhatsApp Booking
  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `مرحباً منصة أبو كيان الرقمية (الأستاذ عبدالحميد داوؤد 👋)،\nأود حجز وشراء خدمة: *${service.title}*\nالتصنيف: ${service.category}\nأرجو تزويدي بالتفاصيل وخطوات البدء.`
    );
    window.open(`https://wa.me/967778215553?text=${text}`, '_blank');
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSendOrder({
      serviceId: service.id,
      serviceTitle: service.title,
      clientName: clientNameInput || 'عميل أبو كيان',
      phone,
      budget: `${budget} (${currency})`,
      notes
    });

    setTimeout(() => {
      setSubmitted(false);
      setNotes('');
      setPhone('');
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 pb-20 animate-in fade-in duration-300 font-['Cairo']">
      
      {/* Sub Sticky Bar Navigation sitting under 72px main Header */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 sm:px-8 py-3 flex items-center justify-between shadow-xs">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 hover:text-[#0A4DFF] bg-gray-100 hover:bg-blue-50 px-3.5 py-2 rounded-xl transition-all cursor-pointer border border-gray-200/60"
        >
          <ArrowRight className="w-4 h-4 text-[#0A4DFF]" />
          <span>العودة للواجهة الرئيسية</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 hidden sm:inline-block">منصة أبو كيان &gt; الخدمات &gt;</span>
          <span className="text-xs sm:text-sm font-bold text-[#062B7F] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            {service.title}
          </span>
        </div>

        <button
          onClick={handleWhatsAppBooking}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-xl border border-emerald-200 transition-all cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600" />
          <span className="hidden sm:inline">حجز سريع عبر</span>
          <span>واتساب</span>
        </button>
      </div>

      {/* LUXURY HERO HEADER SECTION */}
      <div className={`relative w-full bg-gradient-to-br ${service.bgGradient} text-white py-12 sm:py-16 px-4 sm:px-8 overflow-hidden shadow-xl`}>
        {/* Background decorative glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
              ✨ {service.category}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950 flex items-center gap-1 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              <span>{service.rating.toFixed(1)} من 5</span>
              <span className="text-[10px] opacity-80">({service.reviewsCount} تقييم حقيقي)</span>
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/90 text-white flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>خدمة مضمونة 100%</span>
            </span>
          </div>

          {/* Main Title & Persuasive Headline */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight">
              {service.title}
            </h1>
            <p className="text-sm sm:text-lg text-white/95 leading-relaxed font-normal max-w-3xl">
              {service.longDescription || service.description}
            </p>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl pt-2">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-300">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-white/70">السعر والتكلفة</span>
                <span className="text-xs sm:text-sm font-bold text-white">{service.priceRange}</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-400/20 flex items-center justify-center text-blue-200">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-white/70">مدة التسليم والبدء</span>
                <span className="text-xs sm:text-sm font-bold text-white">{service.estimatedTime}</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center text-emerald-300">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-white/70">إشراف مباشر</span>
                <span className="text-xs sm:text-sm font-bold text-white">عبدالحميد داوؤد</span>
              </div>
            </div>
          </div>

          {/* TWO PRIMARY DUAL CALL TO ACTION BUTTONS */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xl">
            {/* Button 1: Direct Platform Booking */}
            <button
              onClick={scrollToBookingForm}
              className="flex-1 h-13 px-6 rounded-2xl bg-white text-[#062B7F] font-extrabold text-sm sm:text-base hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
            >
              <Send className="w-5 h-5 text-[#0A4DFF]" />
              <span>حجز مباشر عبر المنصة</span>
            </button>

            {/* Button 2: Direct WhatsApp Booking */}
            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 h-13 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 border border-emerald-400"
            >
              <MessageSquare className="w-5 h-5 fill-white text-emerald-500" />
              <span>حجز عبر واتساب</span>
            </button>
          </div>

        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-12">

        {/* SECTION 1: PERSUASIVE SELLING POINTS & BENEFITS */}
        <section className="bg-white rounded-[28px] p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0A4DFF] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                لماذا تختار منصة أبو كيان لهذه الخدمة؟
              </h2>
              <p className="text-xs text-gray-500">
                مميزات حقيقية تضمن لك نتائج ملموسة وعائداً عالي الجودة
              </p>
            </div>
          </div>

          {/* Persuasive Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.persuasivePoints?.map((point, index) => (
              <div key={index} className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80 space-y-2">
                <div className="flex items-center gap-2 text-[#0A4DFF] font-bold text-sm">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <h4>{point.title}</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            )) || (
              <div className="col-span-3 text-xs text-gray-500">
                خدمة عالية الدقة بإشراف مهني مباشر لضمان تلبية تطلعاتك الكاملة.
              </div>
            )}
          </div>

          {/* Features List */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-gray-900">ما الذي تشتمله هذه الخدمة بالتفصيل؟</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feat, i) => (
                <div key={i} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees Box */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>ضمانات منصة أبو كيان الرقمية</span>
              </h4>
              <p className="text-xs text-emerald-800/80">
                تعديلات مجانية متواصلة حتى الوصول للرضا التام، ودعم فني متواصل عبر الهاتف والواتساب.
              </p>
            </div>
            <button
              onClick={handleWhatsAppBooking}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shrink-0"
            >
              استفسر عن الضمانات
            </button>
          </div>
        </section>

        {/* SECTION 2: PORTFOLIO SHOWCASE OF COMPLETED WORKS ("أعمال من ضمن الخدمة بشكل احترافي") */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#0A4DFF]" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  نماذج وأعمال سابقة من ضمن هذه الخدمة
                </h2>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                استعرض بعض المشاريع الناجحة التي نفذناها لعملائنا في هذه الخدمة
              </p>
            </div>

            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-50 text-[#0A4DFF] border border-blue-100 self-start sm:self-auto">
              إنجازات حقيقية
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.works && service.works.length > 0 ? (
              service.works.map((work) => (
                <div 
                  key={work.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-[#100%] h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                      {work.client}
                    </div>
                    {work.stats && (
                      <div className="absolute bottom-3 left-3 bg-emerald-600 text-white text-xs font-extrabold px-3 py-1 rounded-lg shadow-md">
                        {work.stats}
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-gray-900 line-clamp-1">{work.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{work.description}</p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                      <span>العميل: {work.client}</span>
                      <span className="text-emerald-600 font-semibold">تم التسليم والاعتماد ✓</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-8 rounded-2xl bg-white border border-gray-100 text-center space-y-2">
                <Briefcase className="w-10 h-10 text-gray-300 mx-auto" />
                <h4 className="text-sm font-bold text-gray-700">جاري إضافة المزيد من المعارض والمشاريع السابقة</h4>
                <p className="text-xs text-gray-500">يمكنك طلب أمثلة إضافية بالواتساب مباشرة مع المهندس عبدالحميد داوؤد.</p>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 3: CLIENT TESTIMONIALS & REVIEWS ("آراء العملاء بشكل احترافي") */}
        <section className="bg-white rounded-[28px] p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-amber-500" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  آراء وتقييمات العملاء عن هذه الخدمة
                </h2>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                تجارب حقيقية وتقييمات مباشرة من المؤسسات والشركات والأفراد
              </p>
            </div>

            {/* Overall Rating Pill */}
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200/80 px-4 py-2 rounded-2xl">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <div>
                <span className="text-base font-extrabold text-amber-950">{service.rating.toFixed(1)} من 5</span>
                <span className="block text-[10px] text-amber-800">بناءً على {service.reviewsCount} تقييم</span>
              </div>
            </div>
          </div>

          {/* User Interactive Rating Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
            <span className="text-xs font-bold text-gray-700">
              {service.userRating
                ? `تقييمك الحالي لهذه الخدمة: (${service.userRating} نجوم) ★ - يمكنك التعديل:`
                : 'شاركنا رأيك وتقييمك لهذه الخدمة بنجاح:'}
            </span>

            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => {
                const isFilled = (hoveredStar || service.userRating || 0) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => onRateService(service.id, star)}
                    className="p-1.5 hover:scale-125 transition-transform cursor-pointer focus:outline-none"
                    title={`تقييم ${star} نجوم`}
                  >
                    <Star className={`w-6 h-6 ${isFilled ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Testimonials List */}
          <div className="space-y-4 pt-2">
            {service.testimonials && service.testimonials.length > 0 ? (
              service.testimonials.map((t) => (
                <div key={t.id} className="p-4 sm:p-5 rounded-2xl bg-gray-50/80 border border-gray-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#062B7F] to-[#0A4DFF] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                        {t.clientName.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                          <span>{t.clientName}</span>
                          {t.verified && (
                            <span className="text-[10px] font-bold px-1.5 py-0.2 bg-emerald-100 text-emerald-700 rounded-md">
                              عميل موثق ✓
                            </span>
                          )}
                        </h4>
                        <span className="text-[11px] text-gray-500">{t.clientTitle}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-white p-3 rounded-xl border border-gray-100">
                    "{t.comment}"
                  </p>

                  <div className="text-[10px] text-gray-400 text-left">
                    التاريخ: {t.date}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-gray-500">
                لا توجد تقييمات مكتوبة مسبقاً، كن أول من يضيف تقييمه المباشر أعلاه!
              </div>
            )}
          </div>
        </section>

        {/* SECTION 4: DIRECT INSTANT BOOKING FORM ("تطوير زر الطلب وحجز مباشر عبر المنصة") */}
        <section id="booking-form-section" className="bg-gradient-to-b from-white to-blue-50/30 rounded-[28px] p-6 sm:p-8 border border-blue-100 shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-blue-100 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#0A4DFF] to-[#0044CC] text-white flex items-center justify-center shadow-md">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                نموذج الحجز المباشر عبر المنصة
              </h2>
              <p className="text-xs text-gray-500">
                أدخل بياناتك وسيتواصل معك عبدالحميد داوؤد وفريق خدمة العملاء فوراً
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in zoom-in-95">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900">تم إرسال طلب حجزك بنجاح! 🎉</h3>
              <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                شكراً لثقتك بمنصة أبو كيان الرقمية. تم تسجيل طلبك بخصوص ({service.title}) وسنتواصل معك على رقم هاتفك خلال وقت قصير جداً.
              </p>
              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleWhatsAppBooking}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 hover:bg-emerald-700 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>تأكيد المتابعة عبر الواتساب فوراً</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">الاسم الكامل / اسم الشركة أو النشاط</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: شركة الفخامة / عبدالسلام"
                    value={clientNameInput}
                    onChange={(e) => setClientNameInput(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#0A4DFF] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">رقم الهاتف أو الواتساب (مهم جداً)</label>
                  <input
                    type="tel"
                    required
                    placeholder="مثال: 770000000 أو +967 778215553"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#0A4DFF] focus:ring-2 focus:ring-blue-100 text-left dir-ltr"
                  />
                </div>
              </div>

              {/* Budget & Currency Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 mb-1">الميزانية المستهدفة للطلب</label>
                  <input
                    type="number"
                    required
                    min="10"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-white border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#0A4DFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">عملة الدفع المفضلة</label>
                  <select
                    value={currency}
                    onChange={(e: any) => setCurrency(e.target.value)}
                    className="w-full h-12 px-3 rounded-xl bg-white border border-gray-200 text-sm font-bold focus:outline-none focus:border-[#0A4DFF]"
                  >
                    <option value="USD">دولار أمريكي ($)</option>
                    <option value="YER">ريال يمني (ر.ي)</option>
                    <option value="SAR">ريال سعودي (ر.س)</option>
                  </select>
                </div>
              </div>

              {/* Notes / Details */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">شرح التفاصيل والطلبات الخاصة بـ ({service.title})</label>
                <textarea
                  rows={4}
                  required
                  placeholder="اكتب هنا التفاصيل الكاملة، رابط الصفحة، الشعار، أو التطلعات المطلوبة..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-4 rounded-xl bg-white border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#0A4DFF] resize-none"
                ></textarea>
              </div>

              {/* Submit Buttons Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 h-13 rounded-2xl bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0044CC] text-white font-extrabold text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>تأكيد وإرسال طلب الحجز المباشر</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto h-13 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>أو اطلب عبر الواتساب مباشرة</span>
                </button>
              </div>

            </form>
          )}

        </section>

        {/* SECTION 5: BOTTOM BACK BUTTON & DIRECT CONTACT BAR ("زر الرجوع والإنهاء") */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للواجهة الرئيسية (أبو كيان الرقمية)</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <PhoneCall className="w-4 h-4 text-[#0A4DFF]" />
            <span>للتواصل المباشر: 778215553 (+967) - عبدالحميد داوؤد</span>
          </div>
        </div>

      </div>

    </div>
  );
};
