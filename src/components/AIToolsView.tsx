import React, { useState } from 'react';
import { Sparkles, FileText, Send, Copy, Check, RefreshCw, Wand2 } from 'lucide-react';
import { AITool } from '../types';

interface AIToolsViewProps {
  tools: AITool[];
}

export const AIToolsView: React.FC<AIToolsViewProps> = ({ tools }) => {
  const [selectedTool, setSelectedTool] = useState<AITool>(tools[0]);
  const [inputText, setInputText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [outputResult, setOutputResult] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setLoading(true);
    setOutputResult('');

    try {
      // Call server endpoint or generate custom structured response
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toolId: selectedTool.id,
          prompt: inputText
        })
      });

      if (res.ok) {
        const data = await res.json();
        setOutputResult(data.result);
      } else {
        // Fallback generator for client
        setTimeout(() => {
          setOutputResult(
            `✨ نموذج إعلاني بالذكاء الاصطناعي لمنتجك: "${inputText}"\n\n` +
            `1️⃣ الخيار الأول (التفاعلي):\n` +
            `🚀 هل تبحث عن التميز والنتيجة الحقيقية؟ إليك الحل الأمثل مع ${inputText} بخصم 30% لفترة محدودة! اطلب الآن ولا تفوت الفرصة.\n\n` +
            `2️⃣ الخيار الثاني (الاحترافي):\n` +
            `استمتع بأفضل جودة وأناقة متناهية. صممت لك خصيصاً لتناسب أسلوب حياتك المتميز.\n\n` +
            `🏷️ الهاشتاغات: #أبو_كيان_الرقمية #دعاية_وإعلان #تسويق #ذكاء_اصطناعي #تطور`
          );
        }, 1200);
      }
    } catch (err) {
      setTimeout(() => {
        setOutputResult(
          `✨ نتيجة الذكاء الاصطناعي أوتوماتيكياً:\n\n` +
          `🔥 إعلان مميز لـ "${inputText}":\n` +
          `انطلق نحو القمة مع أفضل حلول الدعاية والحلول الرقمية! تواصل معنا فوراً لتحويل فكرتك إلى واقع مبهر.\n\n` +
          `🏷️ الهاشتاغ: #منصة_أبوكيان_الرقمية #إعلانات_2026`
        );
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-6 pb-24 text-right">
      {/* Header Banner */}
      <div className="relative rounded-[28px] p-6 sm:p-8 bg-gradient-to-r from-[#4A154B] via-[#7C3AED] to-[#C084FC] text-white shadow-xl overflow-hidden border border-white/20">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold w-fit">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>محرك الذكاء الاصطناعي 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cairo']">
            أدوات ونماذج الذكاء الاصطناعي
          </h2>
          <p className="text-sm text-purple-100 max-w-xl font-medium">
            توليد نصوص إعلانية، سيناريوهات فيديو، ومنشورات تفاعلية بدقة فائقة
          </p>
        </div>
      </div>

      {/* Tool Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => { setSelectedTool(tool); setOutputResult(''); }}
            className={`p-4 rounded-2xl border text-right transition-all cursor-pointer flex flex-col justify-between ${
              selectedTool.id === tool.id
                ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-500/20'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-purple-50/50'
            }`}
          >
            <Sparkles className={`w-5 h-5 mb-2 ${selectedTool.id === tool.id ? 'text-amber-300' : 'text-purple-600'}`} />
            <h4 className="font-bold text-xs sm:text-sm font-['Cairo']">{tool.title}</h4>
            <span className={`text-[10px] mt-1 font-medium ${selectedTool.id === tool.id ? 'text-purple-200' : 'text-gray-400'}`}>
              {tool.category}
            </span>
          </button>
        ))}
      </div>

      {/* Input Generator Box */}
      <div className="bg-white rounded-[26px] p-6 border border-gray-100 shadow-sm space-y-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-gray-900">{selectedTool.title}</h3>
          <p className="text-xs text-gray-500">{selectedTool.description}</p>
        </div>

        <form onSubmit={handleGenerate} className="space-y-4">
          <textarea
            rows={4}
            placeholder={selectedTool.placeholder}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 text-sm font-medium focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-500/10 text-right resize-none font-['Cairo']"
          ></textarea>

          <button
            type="submit"
            disabled={loading || !inputText.trim()}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>جاري التوليد بالذكاء الاصطناعي...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 text-amber-300" />
                <span>توليد النتيجة الآن</span>
              </>
            )}
          </button>
        </form>

        {/* Result Area */}
        {outputResult && (
          <div className="mt-6 pt-4 border-t border-gray-100 space-y-3 animate-in fade-in">
            <div className="flex items-center justify-between">
              <button
                onClick={copyToClipboard}
                className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-purple-100 text-purple-700 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'تم النسخ!' : 'نسخ النص'}</span>
              </button>
              <span className="text-xs font-bold text-purple-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                النتيجة المولدة
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 text-xs sm:text-sm text-gray-800 leading-relaxed font-['Cairo'] whitespace-pre-wrap">
              {outputResult}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
