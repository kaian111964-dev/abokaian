import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  User, 
  RefreshCw, 
  Trash2, 
  Sparkles, 
  MessageCircle, 
  PhoneCall, 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight, 
  Copy, 
  Check, 
  Zap, 
  ShieldCheck, 
  Share2, 
  HelpCircle,
  Clock
} from 'lucide-react';
import { PLATFORM_INFO } from '../data/mockData';

interface AssistantViewProps {
  onBackToHome: () => void;
  onOpenWhatsApp: () => void;
}

interface MessageItem {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  copied?: boolean;
}

const CATEGORY_PROMPTS = [
  {
    category: '📢 التمويل والدعاية',
    items: [
      'ما هي باقات تمويل وترويج صفحة فيسبوك أو انستقرام؟',
      'كيف استهدف المشترين الحقيقيين في إعلاناتي؟',
      'كم سعر الباقة الذهبية الشاملة للتمويل؟'
    ]
  },
  {
    category: '💻 المواقع والمتاجر',
    items: [
      'ما تكلفة تصميم موقع وتطبيق إلكتروني متكامل؟',
      'هل توفرون لوحة تحكم عربية وبوابة دفع؟',
      'كيف اطلب متجر إلكتروني مع تطبيق آيفون وأندرويد؟'
    ]
  },
  {
    category: '📶 شبكات الواي فاي',
    items: [
      'ما هي خدمات إدارة وتأمين سيرفرات المايكروتك؟',
      'كيف احمي شبكتي من سحب السرعات والاختراق؟',
      'كيف اطبع كروت إنترنت حرارية بباركود QR؟'
    ]
  },
  {
    category: '🎓 الخدمات التعليمية',
    items: [
      'ما هي الخدمات والملخصات المتاحة للطلاب والمدرسين؟',
      'كيف اطلب نظام إدارة مدرسة أو جامعة متكامل؟',
      'هل توفرون خدمات المساعدة بمشاريع التخرج والـ CV؟'
    ]
  },
  {
    category: '🎮 الألعاب والتطبيقات',
    items: [
      'كيف اشحن شدات ببجي وجواهر فري فاير بالآيدي؟',
      'ما هو تطبيق أبو كيان تي في (Abukian TV) للبث؟',
      'ما هي العملات وطرق السداد المتاحة بالمنصة؟'
    ]
  }
];

export const AssistantView: React.FC<AssistantViewProps> = ({ onBackToHome, onOpenWhatsApp }) => {
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: `أهلاً وسهلاً بك في **منصة أبو كيان الرقمية**! 🌹👋\n\nأنا **مساعدك الذكي والمستشار التقني الرسمي** 🤖. يسعدني جداً الإجابة باحترافية وشمولية كاملة عن كافة استفساراتك حول **تمويل وترويج الصفحات، تصميم المواقع والتطبيقات، شبكات الواي فاي والمايكروتك، الخدمات التعليمية، وشحن الألعاب** تحت إشراف **المهندس عبدالحميد داوؤد**.\n\nتفضل بطرح أي سؤال أو اختر إحدى العبارات السريعة أدناه!`,
      timestamp: new Date().toLocaleTimeString('ar-YE', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'ai',
        text: `أهلاً بك مجدداً في **منصة أبو كيان الرقمية**! 👋 تم إعادة تعيين المحادثة. كيف يمكنني خدمتك الآن؟`,
        timestamp: new Date().toLocaleTimeString('ar-YE', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const sendQuery = async (userText: string) => {
    if (!userText.trim() || loading) return;

    const timeStr = new Date().toLocaleTimeString('ar-YE', { hour: '2-digit', minute: '2-digit' });
    const userMsgId = `user-${Date.now()}`;

    setInput('');
    setMessages(prev => [...prev, { id: userMsgId, sender: 'user', text: userText, timestamp: timeStr }]);
    setLoading(true);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            sender: 'ai',
            text: data.reply,
            timestamp: new Date().toLocaleTimeString('ar-YE', { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else {
        throw new Error('Server unavailable');
      }
    } catch {
      // Local Smart Response Generation
      setTimeout(() => {
        const replyText = getSmartLocalReply(userText);
        setMessages(prev => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            sender: 'ai',
            text: replyText,
            timestamp: new Date().toLocaleTimeString('ar-YE', { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        setLoading(false);
      }, 600);
      return;
    } finally {
      setLoading(false);
    }
  };

  const handleSendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuery(input);
  };

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
    <div className="w-full space-y-6 animate-in fade-in pb-16 font-['Cairo'] text-right">
      
      {/* PAGE LUXURY BANNER HEADER */}
      <div className="relative rounded-[32px] p-6 sm:p-8 bg-gradient-to-r from-[#061B42] via-[#062B7F] to-[#0A4DFF] text-white shadow-2xl shadow-blue-950/40 border-2 border-blue-400/30 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-300 text-xs font-bold shadow-sm">
              <Bot className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span>مساعد الذكاء الاصطناعي والاستشارات التقنية 2026</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white">
              المساعد الذكي الرسمي لمنصة أبو كيان
            </h1>

            <p className="text-xs sm:text-base text-blue-100/90 font-medium leading-relaxed">
              إجابات فورية وافية وشاملة عن كافة خدمات المنصة، التمويل الإعلاني، البرمجيات، الشبكات، والخدمات التعليمية تحت إشراف مباشر من <strong className="text-amber-300 font-bold">المهندس عبدالحميد داوؤد</strong>.
            </p>

            <div className="flex items-center flex-wrap gap-2.5 pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>تواصل مباشر مع م. عبدالحميد ({PLATFORM_INFO.phone})</span>
              </button>

              <button
                onClick={handleResetChat}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs hover:bg-white/25 transition-all cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>مسح وإعادة المحادثة</span>
              </button>

              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
                <span>الرئيسية</span>
              </button>
            </div>
          </div>

          {/* Left Avatar Card */}
          <div className="hidden lg:flex flex-col items-center justify-center p-5 bg-white/10 backdrop-blur-xl rounded-[28px] border border-white/20 text-center min-w-[210px] shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-100 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 mb-2">
              <Bot className="w-9 h-9" />
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-black text-white">متصل الآن 24/7</span>
            </div>
            <span className="text-[11px] text-blue-100 font-semibold mt-0.5">ذكاء اصطناعي فائق السرعة</span>
          </div>

        </div>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT FOR DESKTOP & RESPONSIVE FOR MOBILE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* RIGHT SIDEBAR ON DESKTOP: PROMPT CATEGORIES & CONTACT CARD */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Eng. Abdulhamid Direct Contact Widget */}
          <div className="bg-gradient-to-br from-[#061842] to-[#0A2E80] text-white rounded-[26px] p-5 border border-blue-400/30 shadow-xl space-y-3 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg shadow-md shrink-0">
                ع.د
              </div>
              <div>
                <h3 className="text-base font-black text-white">المهندس عبدالحميد داوؤد</h3>
                <span className="text-[11px] text-amber-300 font-semibold block">المشرف العام والمدير التقني للمنصة</span>
              </div>
            </div>

            <p className="text-xs text-blue-100 leading-relaxed font-medium">
              مسؤول الدعاية والتسويق الرقمي، البرمجة والتطوير، وإدارة السيرفرات. احصل على استشارة مخصصة لمشروعك فوراً!
            </p>

            <a
              href={PLATFORM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>محادثة واتساب مباشرة ({PLATFORM_INFO.phone})</span>
            </a>
          </div>

          {/* Quick Prompts Categories Accordion/Cards */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[26px] p-5 border border-gray-200/80 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <span className="text-xs text-gray-500 font-semibold">اضغط على أي استفسار لإرساله</span>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <span>أسئلة واستفسارات شائعة</span>
                <Sparkles className="w-4 h-4 text-[#0A4DFF]" />
              </h3>
            </div>

            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1 scrollbar-none">
              {CATEGORY_PROMPTS.map((cat, cIdx) => (
                <div key={cIdx} className="space-y-1.5">
                  <span className="text-[11px] font-bold text-[#0A4DFF] bg-blue-50 px-2.5 py-0.5 rounded-md inline-block">
                    {cat.category}
                  </span>
                  <div className="space-y-1">
                    {cat.items.map((item, iIdx) => (
                      <button
                        key={iIdx}
                        onClick={() => sendQuery(item)}
                        disabled={loading}
                        className="w-full p-2 rounded-xl bg-gray-50 hover:bg-blue-50/80 text-gray-700 hover:text-[#0A4DFF] border border-gray-100 text-xs font-semibold text-right transition-all flex items-center justify-between gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <span className="line-clamp-2">{item}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0 rotate-180" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* LEFT MAIN COLUMN: DEDICATED CHAT INTERFACE */}
        <div className="lg:col-span-8 flex flex-col h-[650px] bg-white rounded-[28px] border border-gray-200/90 shadow-xl overflow-hidden">
          
          {/* Chat Stream Header Bar */}
          <div className="p-4 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0044CC] text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <button
                onClick={handleResetChat}
                title="مسح المحادثة"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="text-right">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h3 className="font-bold text-sm sm:text-base font-['Cairo']">مساعد أبو كيان الذكي 2026</h3>
                </div>
                <span className="text-[10px] text-blue-100 font-medium block">
                  دعم فني استشاري فوري متصل دائماً
                </span>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 border border-white/30 shrink-0">
                <Bot className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Chat Messages Container */}
          <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4 bg-slate-50/60">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start gap-3 ${
                  m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar Icon */}
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-tr from-[#0A4DFF] to-blue-600 text-white'
                    : 'bg-gradient-to-tr from-[#062B7F] to-[#0A4DFF] text-amber-300 border border-blue-400/40'
                }`}>
                  {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble Box */}
                <div className={`p-4 rounded-[22px] text-xs sm:text-sm max-w-[85%] sm:max-w-[80%] font-['Cairo'] leading-relaxed shadow-sm relative ${
                  m.sender === 'user'
                    ? 'bg-[#0A4DFF] text-white rounded-tr-none'
                    : 'bg-white border border-gray-200/90 text-slate-800 rounded-tl-none'
                }`}>
                  {renderFormattedText(m.text)}

                  {/* Bubble Footer & Actions */}
                  <div className={`mt-2.5 pt-2 border-t flex items-center justify-between text-[10px] ${
                    m.sender === 'user' ? 'border-white/20 text-blue-100' : 'border-gray-100 text-gray-500'
                  }`}>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {m.timestamp}
                    </span>

                    {m.sender === 'ai' && (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleCopyText(m.id, m.text)}
                          className="flex items-center gap-1 text-gray-500 hover:text-[#0A4DFF] font-bold transition-colors cursor-pointer"
                        >
                          {copiedId === m.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-600">تم النسخ</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>نسخ النص</span>
                            </>
                          )}
                        </button>

                        <a
                          href={PLATFORM_INFO.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-bold"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>اطلب الخدمة واتساب</span>
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 p-3 bg-blue-50/80 rounded-2xl w-fit text-xs font-bold text-[#0A4DFF]">
                <RefreshCw className="w-4 h-4 animate-spin text-[#0A4DFF]" />
                <span>جاري صياغة الإجابة الاحترافية الوافية...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Form Input Bar */}
          <form onSubmit={handleSendSubmit} className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#062B7F] to-[#0A4DFF] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50 shrink-0"
            >
              <Send className="w-5 h-5 rotate-180" />
            </button>

            <input
              type="text"
              placeholder="اسأل عن أي خدمة، تمويل، برمجيات، أو أسعار داخل المنصة..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 h-12 px-4 rounded-2xl bg-gray-100 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0A4DFF] text-right font-['Cairo'] text-slate-900"
            />
          </form>

        </div>

      </div>

    </div>
  );
};

// Intelligent Local Response Generator for instant offline/fallback responses
function getSmartLocalReply(msg: string): string {
  const lower = msg.toLowerCase().trim();

  if (lower.includes('تمويل') || lower.includes('فيسبوك') || lower.includes('انستقرام') || lower.includes('إعلان') || lower.includes('ترويج') || lower.includes('تيك توك')) {
    return `أهلاً وسهلاً بك في منصة أبو كيان الرقمية! 🌹\n\nخدمة **إدارة وتمويل الصفحات والحملات الإعلانية الممولة** من أقوى خدماتنا تحت إشراف **المهندس عبدالحميد داوؤد**:\n\n• **استهداف جرافي وفئوي حقيقي 100%**: نضمن وصول إعلاناتك للمشترين المهتمين بالفعل.\n• **تصاميم ونصوص إعلانية محفزة للبيع**: بوستات وفيديوهات قصيرة تضاعف المبيعات.\n• **الباقات والأسعار**: تبدأ من **$50 شهرياً** والباقة الذهبية الشاملة بـ **$120 / ر.ي 85,000**.\n• **العملات المقبولة**: الريال اليمني، الريال السعودي، والدولار الأمريكي.\n\nتواصل مباشرة مع **م. عبدالحميد داوؤد** عبر الواتساب على **778215553** لتجهيز خطتك فوراً! 🚀`;
  }

  if (lower.includes('موقع') || lower.includes('تطبيق') || lower.includes('برمجة') || lower.includes('متجر') || lower.includes('تطوير')) {
    return `مرحباً بك عزيزي العميل! 💻✨\n\nنقدم خدمات **تصميم وتطوير المواقع والتطبيقات والمتاجر الإلكترونية** بأحدث التكنولوجيا:\n\n1️⃣ تطبيقات أندرويد وآيفون سريعة وفاخرة واجهات متطورة.\n2️⃣ متاجر إلكترونية شاملة بوابات الدفع الإلكتروني متعددة العملات.\n3️⃣ حماية مشفرة SSL ولوحة تحكم عربية سهلة الإدارة.\n\nتواصل معنا عبر الواتساب المباشر **778215553** لتسليمك العرض الفني والسعر المناسب لطلبك!`;
  }

  if (lower.includes('شبكة') || lower.includes('واي فاي') || lower.includes('مايكروتك') || lower.includes('كرت')) {
    return `أهلاً بك! 📶⚡\n\nنقدم خدمات **إدارة وتأمين شبكات الواي فاي وسيرفرات المايكروتك (MikroTik)**:\n\n• **تأمين السيرفرات**: حماية الجدار الناري ضد الاختراق وسرقة السرعات.\n• **طباعة كروت الإنترنت**: تصاميم حرارية مميزة مزودة بباركود QR لتسجيل الدخول السريع.\n• **تطبيق مدراء الشبكات**: متابعة الأداء والمشتركين بدقة.\n\nللتواصل المباشر مع قسم الشبكات: **778215553** (+967).`;
  }

  if (lower.includes('تعليم') || lower.includes('مدرسة') || lower.includes('جامعة') || lower.includes('طالب') || lower.includes('مدرس') || lower.includes('معلم') || lower.includes('ملخص') || lower.includes('منهج')) {
    return `مرحباً بك في **قسم الخدمات التعليمية والأكاديمية** بمنصة أبو كيان! 🎓✨\n\nنوفر منظومة كاملة تشمل:\n• **للطلاب**: ملخصات مركزة، مناهج تفاعلية، بنك امتحانات وزارية، وتطبيقات تعليمية.\n• **للمعلمين**: خطط تحضير الدروس، تصوير حصص بدقة 4K، وبرامج الدروس الخصوصية.\n• **لأولياء الأمور**: تطبيق متابعة تقارير درجات الأبناء والحضور.\n• **للخريجين**: مساعدة بمشاريع التخرج، وصياغة السيرة الذاتية CV الاحترافية.\n• **للمدارس والجامعات**: أنظمة إدارة المدارس (SMS/LMS) المكتملة.\n\nتفضل بتصفح صفحة **الخدمات التعليمية** بالمنصة أو تواصل معنا عبر الواتساب **778215553**!`;
  }

  if (lower.includes('لعبة') || lower.includes('ألعاب') || lower.includes('ببجي') || lower.includes('فري فاير') || lower.includes('شحن') || lower.includes('شدات')) {
    return `أهلاً بك! 🎮💎\n\nفي **متجر أبو كيان للألعاب والتطبيقات**:\n• شحن شدات ببجي (PUBG UC) برقم الآيدي فورياً بأسعار الجملة.\n• شحن جواهر فري فاير (Free Fire) وسيرفرات البطاقات.\n• تطبيقات مميزة مجانية مثل تطبيق أبو كيان تي في (Abukian TV) للبث المباشر 4K.\n\nارسل لنا الآيدي والكمية المطلوبة عبر الواتساب **778215553** لتنفيذ الشحن فوراً!`;
  }

  if (lower.includes('عبدالحميد') || lower.includes('داوؤد') || lower.includes('واتس') || lower.includes('تواصل')) {
    return `أهلاً وسهلاً بك! 👑\n\nيقود كافة الأعمال الهندسة والتسويق بالمنصة **المهندس عبدالحميد داوؤد** (مسؤول التصميم، الدعاية، التسويق، البرمجة، وإدارة السيرفرات).\n\n📞 **للتواصل المباشر عبر الواتساب أو الاتصال:**\n• **778215553** (+967 778215553)\n\nتفضل بمراسلتنا وستجدنا في خدمتك فوراً! 📲`;
  }

  return `أهلاً وسهلاً بك في منصة أبو كيان الرقمية! 🌸✨\n\nيسعدنا خدمتكم في كل ما يتعلق بـ:\n1️⃣ **تمويل وترويج الصفحات والحملات الممولة**\n2️⃣ **تصميم وتطوير المواقع والتطبيقات والمتاجر**\n3️⃣ **تأمين وإدارة شبكات الواي فاي وسيرفرات المايكروتك**\n4️⃣ **منظومة الخدمات والحلول التعليمية الشاملة**\n5️⃣ **شحن الألعاب وتطبيق البث المباشر 4K**\n\nتحت إشراف **المهندس عبدالحميد داوؤد**.\n\nتواصل معنا عبر الواتساب **778215553** وحصل على استشارتك المجانية فوراً! 🚀`;
}
