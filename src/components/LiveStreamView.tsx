import React, { useState } from 'react';
import { Radio, Play, Pause, Volume2, Tv, Sparkles, Film, Eye } from 'lucide-react';

export const LiveStreamView: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChannel, setActiveChannel] = useState('قناة أبو كيان الإخبارية');

  const channels = [
    { name: 'قناة أبو كيان الإخبارية', category: 'أخبار وتغطيات', viewers: '14.2K' },
    { name: 'بث المباريات والرياضة المباشر', category: 'رياضة', viewers: '32.8K' },
    { name: 'قناة المسلسلات والأفلام العربية', category: 'ترفيه', viewers: '9.5K' },
    { name: 'بث التقنية والتكنولوجيا', category: 'تقنية', viewers: '5.1K' }
  ];

  return (
    <div className="w-full space-y-6 pb-24 text-right">
      {/* Header Banner */}
      <div className="relative rounded-[28px] p-6 sm:p-8 bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#FB7185] text-white shadow-xl overflow-hidden border border-white/20">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold w-fit">
            <Radio className="w-3.5 h-3.5 text-white animate-pulse" />
            <span>منصة البث المباشر والتغطيات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cairo']">
            البث المباشر، الأفلام، والمسلسلات
          </h2>
          <p className="text-sm text-rose-100 max-w-xl font-medium">
            شاهد التغطيات الحية والأخبار بأعلى جودة بدقة HD و 4K بدون تقطيع
          </p>
        </div>
      </div>

      {/* Video Player Simulator */}
      <div className="relative w-full aspect-video rounded-[28px] overflow-hidden bg-black border border-gray-800 shadow-2xl flex flex-col justify-between p-4 sm:p-6 group">
        {/* Background Image / Video Simulation */}
        <img
          src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1000&auto=format&fit=crop&q=80"
          alt="Live Broadcast"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-70' : 'opacity-40'}`}
        />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white text-xs font-bold">
            <Eye className="w-3.5 h-3.5 text-rose-400" />
            <span>28.4K مشاهد أونلاين</span>
          </div>

          <div className="bg-red-600 text-white font-extrabold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            مباشر (LIVE)
          </div>
        </div>

        {/* Center Play Button Overlay */}
        <div className="relative z-10 my-auto flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white backdrop-blur-md border-2 border-white/50 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 translate-x-0.5" />}
          </button>
        </div>

        {/* Bottom Bar Info */}
        <div className="relative z-10 bg-black/70 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/10 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <Volume2 className="w-5 h-5 text-gray-300" />
            <span className="text-xs font-mono font-bold">1080p60 HD</span>
          </div>

          <div className="text-right">
            <h3 className="font-bold text-sm sm:text-base font-['Cairo']">{activeChannel}</h3>
            <span className="text-[11px] text-rose-300 font-medium">بث مباشر متواصل عبر سيرفرات أبو كيان</span>
          </div>
        </div>
      </div>

      {/* Channels List */}
      <div className="bg-white rounded-[26px] p-6 border border-gray-100 shadow-sm space-y-4">
        <h3 className="font-bold text-gray-900 text-base">القنوات المتاحة حالياً</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {channels.map((ch, idx) => (
            <div
              key={idx}
              onClick={() => { setActiveChannel(ch.name); setIsPlaying(true); }}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                activeChannel === ch.name
                  ? 'bg-rose-50 border-rose-200 text-rose-700 shadow-sm'
                  : 'bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xs font-bold bg-white px-2.5 py-1 rounded-full border border-gray-200 text-gray-500">
                {ch.viewers}
              </span>

              <div className="text-right">
                <h4 className="font-bold text-xs sm:text-sm font-['Cairo']">{ch.name}</h4>
                <span className="text-[10px] text-gray-400 font-medium">{ch.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
