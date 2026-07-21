import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, Clock, DollarSign, ShieldCheck, Star } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSendOrder: (orderData: any) => void;
  onRateService?: (serviceId: string, rating: number) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSendOrder,
  onRateService
}) => {
  if (!service) return null;

  const [notes, setNotes] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('50');
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSendOrder({
        serviceId: service.id,
        serviceTitle: service.title,
        notes,
        phone,
        budget
      });
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-[28px] border border-gray-100 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className={`p-6 bg-gradient-to-r ${service.bgGradient} text-white relative flex items-center justify-between`}>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 text-right">
            <div>
              <h3 className="text-xl font-bold font-['Cairo']">{service.title}</h3>
              <span className="text-xs text-white/80 font-medium">{service.category}</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-right">
          
          {/* Rating Summary & Star Interactivity */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => {
                const isFilled = (hoveredStar || service.userRating || 0) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => onRateService?.(service.id, star)}
                    className="p-1 hover:scale-125 transition-transform cursor-pointer focus:outline-none"
                    title={`تقييم ${star} نجوم`}
                  >
                    <Star className={`w-5 h-5 ${isFilled ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                  </button>
                );
              })}
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-1.5 font-bold text-amber-950 text-sm">
                <span>{service.rating.toFixed(1)} من 5</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-[11px] text-amber-800/80 font-medium">({service.reviewsCount} تقييم حقيقي من العملاء)</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-1">تفاصيل الخدمة</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
          </div>

          {/* Quick info tags */}
          <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="flex items-center justify-end gap-2 text-xs font-semibold text-gray-700">
              <span>{service.estimatedTime}</span>
              <Clock className="w-4 h-4 text-[#0A4DFF]" />
            </div>
            <div className="flex items-center justify-end gap-2 text-xs font-semibold text-gray-700">
              <span>{service.priceRange}</span>
              <DollarSign className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Features List */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">مميزات الخدمة</h4>
            <div className="space-y-2">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-center justify-end gap-2 text-xs sm:text-sm font-medium text-gray-700">
                  <span>{feat}</span>
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Request Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-900">طلب الخدمة المباشر</h4>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-center space-y-1">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="font-bold text-sm">تم إرسال طلبك بنجاح!</p>
                <p className="text-xs text-emerald-600">سيتواصل معك فريق خدمة العملاء خلال دقائق.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">رقم الهاتف أو الواتساب</label>
                  <input
                    type="tel"
                    required
                    placeholder="مثال: +967 770 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#0A4DFF] text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">الميزانية المتوقعة ($)</label>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#0A4DFF] text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">تفاصيل طلبك أو ملاحظات إضافية</label>
                  <textarea
                    rows={3}
                    placeholder="اكتب هنا التفاصيل أو رابط الصفحة/الموقع..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#0A4DFF] text-right resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-[#0A4DFF] to-[#0044CC] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>تأكيد وإرسال الطلب</span>
                </button>
              </>
            )}
          </form>

        </div>
      </div>
    </div>
  );
};
