import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  School, 
  ArrowLeft, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Video, 
  Calendar, 
  MessageSquare, 
  Download, 
  Search, 
  ChevronRight, 
  Send, 
  Briefcase, 
  Star,
  ShieldCheck,
  PhoneCall,
  Laptop
} from 'lucide-react';
import { PLATFORM_INFO } from '../data/mockData';

interface EducationViewProps {
  onBackToHome: () => void;
  onOpenWhatsApp: () => void;
}

type EduCategory = 'all' | 'students' | 'teachers' | 'parents' | 'graduates' | 'institutions';

interface ResourceItem {
  id: string;
  title: string;
  category: EduCategory;
  type: string;
  gradeOrLevel: string;
  description: string;
  features: string[];
  icon: any;
  badge?: string;
  bgGradient: string;
}

export const EducationView: React.FC<EducationViewProps> = ({ onBackToHome, onOpenWhatsApp }) => {
  const [activeCategory, setActiveCategory] = useState<EduCategory>('all');
  const [selectedSubTab, setSelectedSubTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  // Categories metadata
  const categoriesList = [
    { id: 'all', title: 'جميع الأقسام التعليمية', icon: School, desc: 'عرض شامل لكافة الخدمات والأقسام التعليمية' },
    { id: 'students', title: 'قسم الطلاب', icon: GraduationCap, desc: 'ملخصات، مناهج، اختبارات، وبرامج تعليمية' },
    { id: 'teachers', title: 'قسم المعلمين', icon: BookOpen, desc: 'ملخصات، حصص، دروس إضافية، ودروس خاصة' },
    { id: 'parents', title: 'أولياء الأمور', icon: Users, desc: 'متابعة تقارير الطلاب والدليل التربوي' },
    { id: 'graduates', title: 'الخريجون والجامعيون', icon: Award, desc: 'مشاريع التخرج، السيرة الذاتية، وسوق العمل' },
    { id: 'institutions', title: 'المدارس والجامعات', icon: Laptop, desc: 'أنظمة إدارة المدارس، المنصات، والشبكات' },
  ];

  // Detailed Resources Data
  const resourcesList: ResourceItem[] = [
    // STUDENTS CATEGORY (قسم الطلاب)
    {
      id: 'st-1',
      title: 'ملخصات ومذكرات المراجعة النهائية',
      category: 'students',
      type: 'ملخصات',
      gradeOrLevel: 'جميع الصفوف (أساسي + ثانوي + جامعي)',
      description: 'حقائب تعليمية تحتوي على ملخصات مركزة وشاملة لأهم المفاهيم، القوانين، والخرائط الذهنية لضمان التفوق.',
      features: ['شرح مبسط وخرائط ذهنية ميسرة', 'مراجعة ليلة الامتحان لكل مادة', 'ملفات جاهزة للطباعة والتنزيل المباشر'],
      icon: FileText,
      badge: 'الأكثر طلباً ⭐',
      bgGradient: 'from-[#062B7F] via-[#0A4DFF] to-[#0044CC]'
    },
    {
      id: 'st-2',
      title: 'مناهج ومقررات دراسية تفاعلية',
      category: 'students',
      type: 'مناهج',
      gradeOrLevel: 'المراحل المدرسية والأكاديمية',
      description: 'نسخ إلكترونية حديثة ومطورة من المناهج الدراسية مدعومة بشروحات توضيحية وتمارين محلولة بالكامل.',
      features: ['حلول كاملة لتمارين الكتاب المدرسي', 'روابط فيديو توضيحية للمواضيع المعقدة', 'مواصفات المناهج الرسمية المعتمدة'],
      icon: BookOpen,
      badge: 'محدث 2026',
      bgGradient: 'from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]'
    },
    {
      id: 'st-3',
      title: 'بنك الاختبارات والامتحانات الوزارية',
      category: 'students',
      type: 'اختبارات',
      gradeOrLevel: 'الصف التاسع والثالث الثانوي والجامعات',
      description: 'أكبر مكتبة نماذج امتحانات وزارية وتجريبية سابقة مع نماذج الإجابة النموذجية المعتمدة والتصحيح الآلي.',
      features: ['نماذج امتحانات السنوات السابقة', 'إجابات نمطية موثوقة من كبار المعلمين', 'اختبارات تفاعلية أونلاين لقياس المستويات'],
      icon: CheckCircle2,
      badge: 'اختبارات أونلاين 📝',
      bgGradient: 'from-[#E11D48] via-[#F43F5E] to-[#FB7185]'
    },
    {
      id: 'st-4',
      title: 'برامج وتطبيقات تعليمية وتدريبية',
      category: 'students',
      type: 'برامج تعليمية',
      gradeOrLevel: 'كافة المراحل العمرية',
      description: 'تطبيقات أندرويد وآيفون وبرمجيات حاسوب متخصصة في تقوية اللغات، حفظ القرآن، والمهارات الحسابية الهندسية.',
      features: ['تطبيقات تعلم اللغة الإنجليزية والتركية', 'برامج تحفيظ القرآن الكريم بالصوت والتكرار', 'برمجيات المحاكاة العلمية والهندسية'],
      icon: Sparkles,
      badge: 'تطبيقات مجانية 📱',
      bgGradient: 'from-[#7C3AED] via-[#8B5CF6] to-[#A855F7]'
    },

    // TEACHERS CATEGORY (قسم المعلمين)
    {
      id: 'tc-1',
      title: 'حقيبة المعلم (تحضير الدروس والخطط)',
      category: 'teachers',
      type: 'ملخصات',
      gradeOrLevel: 'المعلمون والأكاديميون',
      description: 'نماذج جاهزة وقابلة للتعديل لتحضير الدروس اليومية، الخطط الفصلية والسنوية، وسجلات المتابعة والتقويم.',
      features: ['خطط تدريسية جغرافية وزمنية متكاملة', 'سجلات درجات وتقويم قابلة للتعديل Word/Excel', 'وسائل تعليمية ومساعدات العرض البصري'],
      icon: FileText,
      badge: 'جاهز للتعديل 📄',
      bgGradient: 'from-[#0F172A] via-[#1E293B] to-[#334155]'
    },
    {
      id: 'tc-2',
      title: 'منصة الحصص والشروحات المسجلة 4K',
      category: 'teachers',
      type: 'حصص',
      gradeOrLevel: 'جميع التخصصات والمراحل',
      description: 'إنتاج وتسجيل الحصص والدروس التعليمية بدقة عالية 4K مع مونتاج احترافي ورفعها على منصة المعلم الخاصة.',
      features: ['تصوير ومونتاج احترافي بدقة 4K', 'إنشاء منصة خاصة باسم المعلم لبيع الدروس', 'تأمين المحتوى ضد السرقة والتسريب'],
      icon: Video,
      badge: 'جودة 4K 🎥',
      bgGradient: 'from-[#15803D] via-[#16A34A] to-[#22C55E]'
    },    {
      id: 'tc-3',
      title: 'برامج الدروس الإضافية وحصص التقوية',
      category: 'teachers',
      type: 'دروس اضافية',
      gradeOrLevel: 'المواد الأساسية واللغات',
      description: 'تنظيم وجدولة برامج التقوية الجماعية قبل الامتحانات النهائية مع توزيع الملازم والتدريبات على الطلاب.',
      features: ['جدولة مواعيد الحصص الجماعية', 'توفير ملازم وأوراق عمل مخصصة', 'إحصائيات حضور وتقييم مستوى الطلاب'],
      icon: Calendar,
      badge: 'مراجعات مركزة ⏳',
      bgGradient: 'from-[#B45309] via-[#D97706] to-[#F59E0B]'
    },
    {
      id: 'tc-4',
      title: 'منصة الدروس الخاصة الخصوصية (Private)',
      category: 'teachers',
      type: 'دروس خاصة',
      gradeOrLevel: 'تعليم فردي ومباشر',
      description: 'نظام إلكتروني متكامل لإدارة الطلبات والمواعيد للدروس الخصوصية المباشرة (حضوري أو عبر الزوم والمنصة).',
      features: ['حجز وتنسيق المواعيد بين المعلم والطالب', 'دفع إلكتروني مباشر عبر المحافظ', 'غرف دراسية افتراضية ومسبورة تفاعلية'],
      icon: Users,
      badge: 'VIP خصوصي 👑',
      bgGradient: 'from-[#062B7F] via-[#0A4DFF] to-[#1D4ED8]'
    },

    // PARENTS CATEGORY (أولياء الأمور)
    {
      id: 'pr-1',
      title: 'تطبيق متابعة تقارير درجات الأبناء',
      category: 'parents',
      type: 'تقارير',
      gradeOrLevel: 'أولياء أمور الطلاب',
      description: 'تطبيق هاتف ذكي يرتبط بالكنترول المدرسي لإرسال تنبيهات فورية بدرجات السلوك، الاختبارات، والحضور والغياب.',
      features: ['إشعارات فورية بالنتائج فور إدخالها', 'رسوم بيانية توضح تطور مستوى الطالب', 'قناة تواصل مباشرة مع مربي الصف'],
      icon: MessageSquare,
      badge: 'تطبيق ذكي 📲',
      bgGradient: 'from-[#0284C7] via-[#0369A1] to-[#075985]'
    },
    {
      id: 'pr-2',
      title: 'الدليل التربوي والحقيبة الاستشارية',
      category: 'parents',
      type: 'دليل تربوي',
      gradeOrLevel: 'الأسرة والتربية',
      description: 'مقالات ونشرات استشارية معدة من متخصصين في التربية لتوجيه الأبناء، التعامل مع صعوبات التعلم والهواتف.',
      features: ['حلول علمية لمشكلة تشتت الانتباه', 'إرشادات تهيئة البيئة المنزلية للامتحانات', 'جلسات استشارية مع مختصين تربويين'],
      icon: ShieldCheck,
      badge: 'إرشادات تربوية 💡',
      bgGradient: 'from-[#7E22CE] via-[#6B21A8] to-[#581C87]'
    },

    // GRADUATES CATEGORY (الخريجون والجامعيون)
    {
      id: 'gr-1',
      title: 'مشاريع التخرج والبحوث الأكاديمية',
      category: 'graduates',
      type: 'مشاريع تخرج',
      gradeOrLevel: 'خريجو الكليات والمعاهد',
      description: 'استشارات هندسية وبرمجية متكاملة لدعم طلاب مشاريع التخرج (تطبيقات، شبكات، مواقع، وأنظمة ذكاء اصطناعي).',
      features: ['تطوير وتطبيق أفكار مشاريع مبتكرة', 'توثيق المشروع بالأسلوب الأكاديمي المعتمد', 'تدريب الطالب على مناقشة المشروع أمام اللجنة'],
      icon: Briefcase,
      badge: 'امتياز مع الشرف 🎓',
      bgGradient: 'from-[#0F172A] via-[#1E293B] to-[#0F172A]'
    },
    {
      id: 'gr-2',
      title: 'صياغة السيرة الذاتية الاحترافية CV & LinkedIn',
      category: 'graduates',
      type: 'سيرة ذاتية',
      gradeOrLevel: 'الخريجون والباحثون عن عمل',
      description: 'تصميم وبناء سيرة ذاتية حديثة باللغتين العربية والإنجليزية متوافقة مع أنظمة الفرز الذاتي ATS لزيادة فرص القبول.',
      features: ['تصميم بصرية وفاخرة متوافقة مع ATS', 'صياغة نصوص الخبرات والمهارات بقوة', 'تحسين حساب LinkedIn واستخراج نماذج معرض الأعمال'],
      icon: FileText,
      badge: 'قبول وظيفي 💼',
      bgGradient: 'from-[#B91C1C] via-[#991B1B] to-[#7F1D1D]'
    },

    // INSTITUTIONS CATEGORY (المدارس والجامعات)
    {
      id: 'in-1',
      title: 'نظام إدارة المدارس والجامعات المتكامل (SMS/LMS)',
      category: 'institutions',
      type: 'أنظمة إدارية',
      gradeOrLevel: 'إدارات المدارس، المعاهد، والجامعات',
      description: 'نظام إلكتروني سحابي كامل يشمل الكنترول، شؤون الطلاب، الرسوم والمالية، وبوابات المعلمين وأولياء الأمور.',
      features: ['إدارة درجات الكنترول وطباعة الشهادات بضغطة زر', 'إدارة الرسوم والأقساط المباشرة مع تقارير مالية', 'ربط التطبيقات للهواتف لجميع أطراف العملية التعليمية'],
      icon: Laptop,
      badge: 'حل مؤسسي 🏫',
      bgGradient: 'from-[#062B7F] via-[#0A4DFF] to-[#0284C7]'
    }
  ];

  // Filter logic
  const filteredResources = resourcesList.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSubTab = selectedSubTab === 'all' || item.type === selectedSubTab;
    const matchesSearch = searchQuery.trim() === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.gradeOrLevel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubTab && matchesSearch;
  });

  return (
    <div className="w-full space-y-6 animate-in fade-in pb-12 font-['Cairo']">
      
      {/* TOP HERO BANNER FOR EDUCATIONAL SERVICES */}
      <div className="relative rounded-[32px] p-6 sm:p-10 bg-gradient-to-r from-[#061B42] via-[#062B7F] to-[#0A4DFF] text-white shadow-2xl shadow-blue-950/40 border-2 border-blue-400/30 overflow-hidden">
        
        {/* Glow & Decorative Background Elements */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Right Header Text */}
          <div className="space-y-3 text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-300 text-xs font-bold shadow-sm">
              <GraduationCap className="w-4 h-4 text-amber-300 animate-bounce" />
              <span>منظومة الخدمات والحلول التعليمية الشاملة 2026</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-wide text-white drop-shadow-sm font-['Cairo']">
              منصة الخدمات التعليمية والأكاديمية
            </h1>

            <p className="text-xs sm:text-base text-blue-100/90 font-medium leading-relaxed">
              حلول برمجية وتكولوجية متكاملة مخصصة للمدارس، المعاهد، والجامعات.. وتوفير أرقى الملخصات والمناهج والدعم للطلاب، المعلمين، أولياء الأمور، والخريجين تحت إشراف <strong className="text-amber-300 font-bold">المهندس عبدالحميد داوؤد</strong>.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex items-center flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg hover:bg-emerald-700 active:scale-95 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>طلب خدمة أو استشارة تعليمية (واتساب)</span>
              </button>

              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm hover:bg-white/25 transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
                <span>العودة للرئيسية</span>
              </button>
            </div>
          </div>

          {/* Left Visual Badge Icon */}
          <div className="hidden lg:flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-xl rounded-[28px] border border-white/20 text-center min-w-[220px] shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 mb-3">
              <School className="w-9 h-9" />
            </div>
            <span className="text-sm font-black text-amber-300">منظومة أبو كيان</span>
            <span className="text-[11px] text-blue-100 font-semibold mt-1">تكنولوجيا التعليم الرقمي</span>
          </div>

        </div>
      </div>

      {/* CATEGORIES SELECTION GRID (شبكة الأقسام الرئيسية) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 font-semibold">اختر القسم لاستعراض الخدمات والبطاقات المتاحة</span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-['Cairo'] flex items-center gap-2">
            <span>الأقسام التعليمية الرئيسية</span>
            <Sparkles className="w-5 h-5 text-[#0A4DFF]" />
          </h2>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {categoriesList.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as EduCategory);
                  setSelectedSubTab('all');
                }}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center gap-2.5 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#062B7F] to-[#0A4DFF] text-white border-blue-400 shadow-xl shadow-blue-500/20 scale-105'
                    : 'bg-white/90 backdrop-blur-md border-gray-200/80 text-gray-700 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                )}

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#0A4DFF]'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                <div>
                  <h3 className={`text-xs sm:text-sm font-bold font-['Cairo'] ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {cat.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* SEARCH & FILTER BAR */}
      <div className="p-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="بحث في الملخصات، المناهج، والاختبارات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pr-10 pl-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0A4DFF] text-right font-['Cairo']"
          />
        </div>

        {/* Sub-Tabs for Active Section */}
        {activeCategory === 'students' && (
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {['all', 'ملخصات', 'مناهج', 'اختبارات', 'برامج تعليمية'].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubTab(sub)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-['Cairo'] transition-all whitespace-nowrap cursor-pointer ${
                  selectedSubTab === sub
                    ? 'bg-[#0A4DFF] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {sub === 'all' ? 'الكل' : sub}
              </button>
            ))}
          </div>
        )}

        {activeCategory === 'teachers' && (
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {['all', 'ملخصات', 'حصص', 'دروس اضافية', 'دروس خاصة'].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubTab(sub)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-['Cairo'] transition-all whitespace-nowrap cursor-pointer ${
                  selectedSubTab === sub
                    ? 'bg-[#0A4DFF] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {sub === 'all' ? 'الكل' : sub}
              </button>
            ))}
          </div>
        )}

        <div className="text-xs text-gray-500 font-semibold shrink-0">
          عدد البطاقات: <strong className="text-[#0A4DFF] font-bold">{filteredResources.length}</strong>
        </div>
      </div>

      {/* CARDS GRID DISPLAY (عرض بطاقات الخدمات والشبكة الاحترافية) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredResources.map((item) => {
          const IconComp = item.icon;

          return (
            <div
              key={item.id}
              className="bg-white/95 backdrop-blur-xl rounded-[26px] border border-gray-200/80 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Card Gradient Header */}
              <div className={`h-24 -mx-5 -mt-5 p-4 bg-gradient-to-r ${item.bgGradient} text-white flex items-center justify-between relative overflow-hidden`}>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-lg pointer-events-none"></div>

                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-sm shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                      {item.type}
                    </span>
                    <h3 className="text-sm font-bold font-['Cairo'] text-white line-clamp-1 mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {item.badge && (
                  <span className="relative z-10 text-[10px] bg-amber-400 text-slate-950 font-black px-2.5 py-1 rounded-full shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Card Body Details */}
              <div className="pt-4 space-y-3 text-right flex-1">
                <div className="text-[11px] text-[#0A4DFF] font-bold bg-blue-50 px-2.5 py-1 rounded-lg w-fit">
                  🎯 {item.gradeOrLevel}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  {item.features.map((ft, fIdx) => (
                    <div key={fIdx} className="flex items-center justify-end gap-1.5 text-[11px] text-gray-700 font-semibold">
                      <span>{ft}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedResource(item)}
                  className="flex-1 h-10 rounded-xl bg-gradient-to-r from-[#062B7F] to-[#0A4DFF] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>استعراض وطلب الخدمة</span>
                </button>

                <button
                  onClick={onOpenWhatsApp}
                  title="استفسار سريع واتساب"
                  className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all cursor-pointer shrink-0"
                >
                  <PhoneCall className="w-4 h-4" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* RESOURCE DETAIL MODAL POPUP */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in font-['Cairo']">
          <div className="w-full max-w-lg bg-white rounded-[28px] border border-gray-100 shadow-2xl p-6 text-right space-y-4 relative overflow-hidden">
            
            <div className={`h-28 -mx-6 -mt-6 p-6 bg-gradient-to-r ${selectedResource.bgGradient} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                  <selectedResource.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-md">
                    {selectedResource.type}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {selectedResource.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedResource(null)}
                className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-[#0A4DFF] bg-blue-50 p-2.5 rounded-xl">
                📌 الفئة الموجهة: {selectedResource.gradeOrLevel}
              </div>

              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                {selectedResource.description}
              </p>

              <div className="space-y-2 p-3 bg-gray-50 rounded-xl border border-gray-200/80">
                <span className="text-xs font-bold text-slate-900 block">مميزات الخدمة أو المادة:</span>
                {selectedResource.features.map((f, i) => (
                  <div key={i} className="flex items-center justify-end gap-2 text-xs text-gray-700 font-medium">
                    <span>{f}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                ))}
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium flex items-center justify-end gap-2">
                <span>تواصل معنا عبر الواتساب لتنزيل المادّة أو حجز المنصة التعليمية فوراً!</span>
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
              <button
                onClick={() => {
                  window.open(`https://wa.me/967778215553?text=${encodeURIComponent(`مرحباً المهندس عبدالحميد داوؤد 👋، أود طلب وتنزيل: (${selectedResource.title}) من قسم الخدمات التعليمية.`)}`, '_blank');
                  setSelectedResource(null);
                }}
                className="flex-1 h-11 rounded-2xl bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>طلب وإرسال التفاصيل عبر الواتساب</span>
              </button>

              <button
                onClick={() => setSelectedResource(null)}
                className="px-4 h-11 rounded-2xl bg-gray-100 text-gray-700 font-bold text-xs hover:bg-gray-200 transition-all cursor-pointer"
              >
                إغلاق
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
