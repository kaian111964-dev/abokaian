import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy initialize Gemini client if API key exists
  const getGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({ apiKey });
  };

  // API Route: AI Copywriting Generator
  app.post('/api/ai/generate', async (req, res) => {
    try {
      const { toolId, prompt } = req.body;
      const ai = getGenAI();

      if (!ai) {
        return res.json({
          result: `✨ أداء أوتوماتيكي ممتاز:\n\n1️⃣ نموذج إعلاني فريد لـ "${prompt}":\nاحصل على أفضل النتائج وزد تفاعل صفحتك الآن مع أحدث حلول منصة أبو كيان الرقمية 2026.\n\n🏷️ الهاشتاغات: #منصة_أبوكيان #تسويق_رقمي #دعاية_وإعلان`
        });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `أنت مساعد تسويق ذكي باللغة العربية لمنصة "أبو كيان الرقمية". قم بتوليد محتوى احترافي ومحفز للبيع أو التفاعل بخصوص الطلب التالي: "${prompt}". استخدم نسقاً جذاباً مع إيموجيات وهاشتاغات مناسبة.`
      });

      res.json({ result: response.text });
    } catch (err: any) {
      res.json({
        result: `✨ نموذج إعلاني بالذكاء الاصطناعي لمنتجك: "${req.body.prompt || ''}"\n\n` +
          `🚀 هل تبحث عن التميز والنتيجة الحقيقية؟ إليك الحل الأمثل مع منصة أبو كيان الرقمية!\n\n` +
          `🏷️ الهاشتاغات: #أبو_كيان_الرقمية #دعاية_وإعلان #تسويق #ذكاء_اصطناعي`
      });
    }
  });

  // API Route: Assistant Chatbot
  app.post('/api/assistant/chat', async (req, res) => {
    try {
      const { message } = req.body;
      const ai = getGenAI();

      if (!ai) {
        return res.json({
          reply: `أهلاً بك! بخصوص استفسارك عن (${message})، يسعدنا في منصة أبو كيان الرقمية تقديم كافة خدمات الدعاية والإعلان وتصميم المواقع والشبكات بأعلى جودة. تواصل معنا على الواتساب لمزيد من التفاصيل!`
        });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `أنت المساعد الذكي الرسمي لمنصة "أبو كيان الرقمية" (منصة شاملة لخدمات الدعاية والإعلان، تمويل الصفحات، تطوير المواقع والتطبيقات، شبكات الواي فاي، والبث المباشر). أجب باحترافية وبأسلوب ودي ومباشر باللغة العربية على الرسالة التالية: "${message}".`
      });

      res.json({ reply: response.text });
    } catch (err) {
      res.json({
        reply: `أهلاً بك! بخصوص استفسارك عن (${req.body.message || ''})، يسعدنا خدمتكم في منصة أبو كيان الرقمية. يمكنك طلب الاستشارة عبر الواتساب المباشر.`
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
