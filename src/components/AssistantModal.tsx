import React, { useState } from 'react';
import { X, Send, Bot, Sparkles, User, RefreshCw } from 'lucide-react';

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMsg {
  sender: 'ai' | 'user';
  text: string;
}

export const AssistantModal: React.FC<AssistantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      sender: 'ai',
      text: 'مرحباً بك في منصة أبو كيان الرقمية! 👋 كيف يمكنني مساعدتك اليوم؟ يمكنك الاستفسار عن تمويل الصفحات، تصميم المواقع، عروض الأسعار أو خدمات الشبكات.'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
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
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              sender: 'ai',
              text: `أهلاً بك! بخصوص استفسارك عن (${userText})، يمكنك التواصل مباشرة مع قسم خدمة العملاء أو اختيار الخدمة المطلوبة من القائمة الرئيسية لحجز استشارة مجانية فورا!`
            }
          ]);
        }, 1000);
      }
    } catch {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            sender: 'ai',
            text: 'يسرنا خدمتك دائماً! يمكنك أيضاً الضغط على أيقونة الواتساب للتحدث مباشرة مع مستشار الإعلانات والخدمات الرقمية.'
          }
        ]);
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-lg h-[600px] bg-white rounded-[28px] border border-gray-100 shadow-2xl flex flex-col overflow-hidden text-right">
        
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-[#062B7F] to-[#0A4DFF] text-white flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <div>
              <h3 className="font-bold text-sm sm:text-base font-['Cairo']">مساعد أبو كيان الذكي 2026</h3>
              <span className="text-[10px] text-blue-200 font-medium">متصل الآن • رد آلي بالذكاء الاصطناعي</span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
              <Bot className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3 bg-gray-50/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${m.sender === 'user' ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`p-3.5 rounded-2xl text-xs sm:text-sm max-w-[80%] font-['Cairo'] leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-[#0A4DFF] text-white rounded-tr-none shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-xs'
              }`}>
                {m.text}
              </div>

              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                m.sender === 'user' ? 'bg-blue-100 text-[#0A4DFF]' : 'bg-[#062B7F] text-white'
              }`}>
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0A4DFF]" />
              <span>جاري الكتابة...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-10 h-10 rounded-xl bg-[#0A4DFF] text-white flex items-center justify-center shadow-md hover:bg-[#0044CC] transition-all cursor-pointer disabled:opacity-50"
          >
            <Send className="w-4 h-4 rotate-180" />
          </button>
          <input
            type="text"
            placeholder="اكتب استفسارك هنا..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 h-10 px-3 rounded-xl bg-gray-100 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0A4DFF] text-right font-['Cairo']"
          />
        </form>

      </div>
    </div>
  );
};
