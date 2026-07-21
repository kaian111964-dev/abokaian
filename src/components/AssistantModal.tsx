import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, RefreshCw, PhoneCall, Trash2, Sparkles, MessageCircle } from 'lucide-react';
import { PLATFORM_INFO } from '../data/mockData';

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMsg {
  sender: 'ai' | 'user';
  text: string;
}

const SUGGESTED_QUESTIONS = [
  '🚀 ما هي خدمات تمويل وترويج الصفحات؟',
  '💻 كيف أطلب تصميم موقع أو تطبيق إلكتروني؟',
  '📶 ماهي خدمات إدارة وتأمين شبكات الواي فاي؟',
  '💳 ما هي العملات وطرق السداد المتاحة؟',
  '👑 من هو المهندس عبدالحميد وكيف أتواصل معه؟',
  '🎁 كيف أستفيد من برنامج نقاط الولاء؟'
];

export const AssistantModal: React.FC<AssistantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      sender: 'ai',
      text: `أهلاً وسهلاً بك في منصة أبو كيان الرقمية! 🌹👋\n\nأنا مساعدك الذكي والمستشار التقني الرسمي. يسعدني جداً الإجابة عن كافة استفساراتك حول **خدمات التمويل والتسويق، البرمجيات، شبكات الواي فاي، وتطبيقات المنصة** تحت إشراف **المهندس عبدالحميد داوؤد**.\n\nكيف يمكنني مساعدتك اليوم؟`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendQuery = async (userText: string) => {
    if (!userText.trim() || loading) return;

    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const res = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, { sender: 'ai', text: data.reply }]);
      } else {
        throw new Error('API unavailable');
      }
    } catch {
      // Local Client Smart Fallback
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            sender: 'ai',
            text: getLocalFallbackReply(userText)
          }
        ]);
        setLoading(false);
      }, 600);
      return;
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuery(input);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'ai',
        text: `أهلاً بك مجدداً في منصة أبو كيان الرقمية! 👋 تم إعادة تعيين المحادثة. تفضل بطرح استفسارك أو اختر من الأسئلة السريعة أدناه.`
      }
    ]);
  };

  // Helper to format Markdown-like bold text **text** and newlines
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return (
      <div className="space-y-1">
        {lines.map((line, lineIdx) => {
          if (!line) return <div key={lineIdx} className="h-1.5" />;
          const parts = line.split(/(\*\*.*?\*\*)/g);
          return (
            <div key={lineIdx}>
              {parts.map((part, partIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return (
                    <strong key={partIdx} className="font-extrabold text-[#062B7F]">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                return <span key={partIdx}>{part}</span>;
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-lg h-[620px] sm:h-[650px] bg-white rounded-[24px] sm:rounded-[28px] border border-gray-100 shadow-2xl flex flex-col overflow-hidden text-right">
        
        {/* Header */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0044CC] text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              title="إغلاق"
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              title="مسح المحادثة"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white/90 flex items-center justify-center cursor-pointer transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <div>
              <div className="flex items-center justify-end gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <h3 className="font-bold text-sm sm:text-base font-['Cairo']">مساعد أبو كيان الذكي 2026</h3>
              </div>
              <span className="text-[10px] text-blue-100 font-medium block">
                تحت إشراف م. عبدالحميد داوؤد • رد آلي فوري
              </span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-sm shrink-0">
              <Bot className="w-5 h-5 text-amber-300" />
            </div>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div className="px-3 py-2 bg-blue-50/80 border-b border-blue-100/60 flex items-center justify-between text-xs font-['Cairo']">
          <a
            href={PLATFORM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[11px] shadow-xs hover:bg-emerald-700 transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>واتساب المباشر ({PLATFORM_INFO.phone})</span>
          </a>
          <span className="text-gray-600 font-medium text-[11px]">
            للاستشارات الفنية الفورية 📲
          </span>
        </div>

        {/* Chat Messages Area */}
        <div className="p-3.5 sm:p-4 overflow-y-auto flex-1 space-y-3.5 bg-gray-50/60">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${m.sender === 'user' ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`p-3.5 rounded-2xl text-xs sm:text-sm max-w-[85%] font-['Cairo'] leading-relaxed shadow-xs ${
                m.sender === 'user'
                  ? 'bg-[#0A4DFF] text-white rounded-tr-none'
                  : 'bg-white border border-gray-200/80 text-gray-800 rounded-tl-none'
              }`}>
                {renderFormattedText(m.text)}

                {/* WhatsApp Call to Action on AI replies */}
                {m.sender === 'ai' && idx > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={PLATFORM_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>اطلب الخدمة الآن عبر الواتساب</span>
                    </a>
                  </div>
                )}
              </div>

              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                m.sender === 'user' ? 'bg-blue-100 text-[#0A4DFF]' : 'bg-[#062B7F] text-white shadow-xs'
              }`}>
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-blue-600 text-xs font-medium font-['Cairo'] p-2 bg-blue-50/60 rounded-xl w-fit">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0A4DFF]" />
              <span>يقوم مساعد أبو كيان بصياغة الإجابة الوافية...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions Chips */}
        <div className="p-2 bg-gray-100/70 border-t border-gray-100 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
          <Sparkles className="w-3.5 h-3.5 text-[#0A4DFF] shrink-0 mx-1" />
          {SUGGESTED_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => sendQuery(q)}
              disabled={loading}
              className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-[10px] sm:text-[11px] font-bold font-['Cairo'] text-gray-700 hover:bg-blue-50 hover:text-[#0A4DFF] hover:border-blue-200 transition-all shrink-0 cursor-pointer disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-2.5 sm:p-3 bg-white border-t border-gray-200 flex items-center gap-2">
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-10 h-10 rounded-xl bg-[#0A4DFF] text-white flex items-center justify-center shadow-md hover:bg-[#0044CC] active:scale-95 transition-all cursor-pointer disabled:opacity-50 shrink-0"
          >
            <Send className="w-4 h-4 rotate-180" />
          </button>
          <input
            type="text"
            placeholder="اسأل عن أي خدمة أو تفاصيل بالمنصة..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 h-10 px-3.5 rounded-xl bg-gray-100 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A4DFF] text-right font-['Cairo'] text-gray-900"
          />
        </form>

      </div>
    </div>
  );
};

// Client Local Fallback Helper for zero-delay offline or fallback usage
function getLocalFallbackReply(msg: string): string {
  const lower = msg.toLowerCase();

  if (lower.includes('تمويل') || lower.includes('فيسبوك') || lower.includes('ترويج') || lower.includes('إعلان') || lower.includes('اعلان')) {
    return `أهلاً بك في منصة أبو كيان الرقمية! 🌹\n\nتعتبر خدمة **إدارة وتمويل الصفحات والإعلانات الممولة** من أقوى خدماتنا تحت إشراف **المهندس عبدالحميد داوؤد**:\n\n• **استهداف دقيق جداً**: نضمن وصول إعلاناتك للمشترين الحقيقيين.\n• **بوستات وفيديوهات احترافية**: نصوص وتصاميم تحفز للبيع.\n• **المنصات**: فيسبوك، إنستغرام، تيك توك، قوقل، وسناب شات.\n• **الأسعار**: باقات تبدأ من **$50 شهرياً** والباقة الذهبية بـ **$120 / ر.ي 85,000**.\n\nتواصل معنا عبر الواتساب **778215553** لإطلاق حملتك اليوم! 🚀`;
  }

  if (lower.includes('موقع') || lower.includes('تطبيق') || lower.includes('برمجة') || lower.includes('متجر')) {
    return `مرحباً بك! 💻✨\n\nنقدم خدمات **تصميم وتطوير المواقع والتطبيقات والمتاجر الإلكترونية** ببرمجة متطورة:\n\n1️⃣ تطبيقات أندرويد وآيفون سريعة وفاخرة.\n2️⃣ متاجر إلكترونية مع ربط بوابات الدفع وشحن البضائع.\n3️⃣ حماية مشفرة SSL ولوحة تحكم عربية سهلة.\n\nتواصل مع **المهندس عبدالحميد داوؤد** مباشرة عبر الواتساب **778215553** للحصول على استشارة وعرض سعر مجاني!📲`;
  }

  if (lower.includes('شبكة') || lower.includes('واي فاي') || lower.includes('مايكروتك') || lower.includes('كرت')) {
    return `أهلاً بك! 📶⚡\n\nنقدم خدمات **إدارة وتأمين شبكات الواي فاي وسيرفرات المايكروتك**:\n\n• تأمين السيرفرات والجدار الناري ضد الاختراق وسرقة الإنترنت.\n• تصميم وطباعة كروت الإنترنت الحرارية بباركود QR.\n• تطبيق مخصص لمدراء الشبكات لمتابعة الأداء.\n\nللتواصل المباشر مع قسم الشبكات: **778215553** (+967).`;
  }

  if (lower.includes('سعر') || lower.includes('أسعار') || lower.includes('عملة') || lower.includes('دفع')) {
    return `أهلاً بك! 💳💵\n\nنقبل جميع العملات الرئيسية بالمنصة:\n• **الريال اليمني (ر.ي)**\n• **الريال السعودي (ر.س)**\n• **الدولار الأمريكي ($)**\n\nطرق الدفع: المحافظ الرقمية (كيان كاش)، الكريمي، النجم، والتحويلات المالية المباشرة.\nتواصل معنا على الواتساب **778215553** لتلقي التفاصيل والأسعار الفورية!`;
  }

  if (lower.includes('عبدالحميد') || lower.includes('داوؤد') || lower.includes('تواصل') || lower.includes('واتس')) {
    return `أهلاً وسهلاً بك! 👑\n\nيقود المنصة **المهندس عبدالحميد داوؤد** (مسؤول التصميم والدعاية والتسويق والبرمجة والتطوير).\n\n📞 **للتواصل المباشر واتساب أو اتصال:**\n• **778215553** (+967 778215553)\n\nتفضل بمراسلتنا وستجدنا جاهزين لخدمتك فوراً! 📲`;
  }

  return `أهلاً وسهلاً بك في منصة أبو كيان الرقمية! 🌸✨\n\nيسعدنا خدمتكم في كافة المجالات الرقمية:\n1️⃣ **تمويل وإدارة صفحات السوشيال ميديا والحملات الممولة**\n2️⃣ **تصميم وتطوير المواقع والتطبيقات والمتاجر**\n3️⃣ **حلول وتأمين شبكات الواي فاي والمايكروتك**\n4️⃣ **شحن الألعاب والتطبيقات والبث المباشر 4K**\n\nتحت إشراف **المهندس عبدالحميد داوؤد**.\n\nتواصل معنا عبر الواتساب على **778215553** لحجز استشارتك المجانية فوراً! 🚀`;
}

