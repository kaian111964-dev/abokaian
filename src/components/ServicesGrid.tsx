import React, { useState } from 'react';
import { 
  FileText, 
  Megaphone, 
  Globe, 
  TrendingUp, 
  Headphones, 
  ShieldCheck, 
  Smartphone, 
  Video, 
  ArrowLeft,
  Sparkles,
  Star
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
  onRateService: (serviceId: string, rating: number) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  onSelectService,
  onRateService
}) => {
  const [hoveredRating, setHoveredRating] = useState<{ serviceId: string; star: number } | null>(null);

  // Map icon strings to Lucide components
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-7 h-7 text-white" />;
      case 'Megaphone': return <Megaphone className="w-7 h-7 text-white" />;
      case 'Globe': return <Globe className="w-7 h-7 text-white" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-white" />;
      case 'Headphones': return <Headphones className="w-7 h-7 text-white" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-white" />;
      case 'Smartphone': return <Smartphone className="w-7 h-7 text-white" />;
      case 'Video': return <Video className="w-7 h-7 text-white" />;
      default: return <Sparkles className="w-7 h-7 text-white" />;
    }
  };

  return (
    <section className="w-full space-y-6 py-2">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs sm:text-sm text-gray-500 font-medium">اختر الخدمة المطلوبة وتصفح التقييمات</span>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#062B7F] font-['Cairo']">
              خدماتنا وتقييمات العملاء
            </h2>
          </div>
          {/* Accent Underline */}
          <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#0A4DFF] to-[#F44336] mt-1"></div>
        </div>
      </div>

      {/* Services Grid (2 Columns on mobile, 4 Columns on md/lg) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6">
        {services.map((service) => {
          const currentHover = hoveredRating?.serviceId === service.id ? hoveredRating.star : 0;

          return (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative bg-white/90 backdrop-blur-xl rounded-[18px] sm:rounded-[24px] p-3 sm:p-5 border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center justify-between text-center min-h-[200px] sm:min-h-[230px] overflow-hidden"
            >
              {/* Top Hover Ripple Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Rating Summary Badge (Top Bar) */}
              <div className="w-full flex items-center justify-between relative z-10 mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
                  {service.category}
                </span>

                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full text-[11px] font-extrabold text-amber-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{service.rating.toFixed(1)}</span>
                  <span className="text-[10px] text-amber-600/80 font-normal">({service.reviewsCount})</span>
                </div>
              </div>

              {/* Icon Block with Custom Gradient */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300 relative z-10 my-1`}>
                {getServiceIcon(service.iconName)}
              </div>

              {/* Title & Subtitle */}
              <div className="my-2 space-y-1 relative z-10 w-full">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#0A4DFF] transition-colors font-['Cairo'] line-clamp-1">
                  {service.title}
                </h3>
                <p className="text-[11px] text-gray-500 font-normal line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Interactive Rating Section */}
              <div
                className="w-full pt-2.5 mt-1 border-t border-gray-100/90 relative z-20 flex flex-col items-center space-y-1"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = currentHover >= star || (!currentHover && (service.userRating || 0) >= star);
                    return (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoveredRating({ serviceId: service.id, star })}
                        onMouseLeave={() => setHoveredRating(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          onRateService(service.id, star);
                        }}
                        className="p-1 hover:scale-125 transition-transform cursor-pointer focus:outline-none"
                        title={`تقييم ${star} نجوم`}
                      >
                        <Star
                          className={`w-4 h-4 transition-colors ${
                            isFilled
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300 hover:text-amber-300'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
                <span className="text-[10px] font-semibold text-gray-400">
                  {service.userRating
                    ? `تقييمك: ${service.userRating} ★ (اضغط للتعديل)`
                    : 'اضغط للتقييم بالنجوم'}
                </span>
              </div>

              {/* Bottom Arrow Circle Button */}
              <div className="mt-2 w-full flex items-center justify-between text-[11px] font-bold text-gray-400 group-hover:text-[#0A4DFF] relative z-10 pt-1">
                <span>طلب الخدمة</span>
                <div className="w-6 h-6 rounded-full bg-gray-50 group-hover:bg-[#0A4DFF] text-gray-400 group-hover:text-white border border-gray-100 group-hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-xs">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

