import React, { useState } from 'react';
import { 
  Search, Star, Download, Sparkles, ShoppingBag, Check, ArrowLeft, ShieldCheck, 
  Gamepad2, Smartphone, Crown, AlertTriangle, UserPlus, Share2, 
  MessageSquare, ExternalLink, Mail, Phone, Lock, ChevronRight, ChevronLeft, 
  ThumbsUp, Code, FileText, ArrowRight, Home, Building2, CheckCircle2
} from 'lucide-react';
import { StoreApp, StoreAppComment } from '../types';

interface StoreViewProps {
  apps: StoreApp[];
  onBackToHome?: () => void;
}

export const StoreView: React.FC<StoreViewProps> = ({ apps, onBackToHome }) => {
  // Navigation View State: 'catalog' | 'app_detail' | 'dev_register' | 'custom_app_request' | 'report_violation'
  const [currentView, setCurrentView] = useState<'catalog' | 'app_detail' | 'dev_register' | 'custom_app_request' | 'report_violation'>('catalog');
  
  // Selected App for Detail Page
  const [selectedApp, setSelectedApp] = useState<StoreApp | null>(null);

  // Sub-category filter for apps & games
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Download simulation state
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Comments state
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentRating, setNewCommentRating] = useState(5);
  const [commentsList, setCommentsList] = useState<StoreAppComment[]>([]);

  // Developer Registration Form State
  const [devForm, setDevForm] = useState({
    name: '',
    email: '',
    phone: '',
    platformType: 'android',
    appName: '',
    appDescription: '',
    appLink: ''
  });
  const [devSubmitted, setDevSubmitted] = useState(false);

  // Violation Report Form State
  const [reportForm, setReportForm] = useState({
    name: '',
    email: '',
    phone: '',
    appName: '',
    violationType: 'حقوق ملكية فكرية',
    details: ''
  });
  const [reportSubmitted, setReportSubmitted] = useState(false);

  // Custom App Form State
  const [customAppForm, setCustomAppForm] = useState({
    clientName: '',
    phone: '',
    appType: 'أندرويد وآيفون',
    budget: 'حسب الاتفاق',
    notes: ''
  });
  const [customAppSubmitted, setCustomAppSubmitted] = useState(false);

  // Required Sub-categories
  const subCategoriesList = [
    { id: 'all', label: 'جميع التطبيقات والألعاب' },
    { id: 'تطبيقات العامة', label: 'التطبيقات العامة' },
    { id: 'تطبيقات التواصل', label: 'تطبيقات التواصل' },
    { id: 'تطبيقات الخدمات', label: 'تطبيقات الخدمات' },
    { id: 'تطبيقات الأعمال', label: 'تطبيقات الأعمال' },
    { id: 'تطبيقات الترفيه', label: 'تطبيقات الترفيه' },
    { id: 'تطبيقات التصميم', label: 'تطبيقات التصميم' },
    { id: 'تطبيقات المونتاج', label: 'تطبيقات المونتاج' },
    { id: 'تطبيقات المحاسبة والحسابات', label: 'تطبيقات المحاسبة والحسابات' },
    { id: 'تطبيقات إسلامية', label: 'تطبيقات إسلامية' },
    { id: 'تطبيقات تعليمية', label: 'تطبيقات تعليمية' },
    { id: 'games_zone', label: '🎮 قسم الألعاب المشوقة' }
  ];

  // Filter apps (Focus ONLY on apps & games, no packages or top-ups)
  const filteredApps = apps.filter(app => {
    // Search query filter
    const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (app.subCategory && app.subCategory.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedSubCategory === 'all') {
      return app.category === 'apps' || app.category === 'games';
    }

    if (selectedSubCategory === 'games_zone') {
      return app.category === 'games';
    }

    return app.subCategory?.includes(selectedSubCategory) || app.category === 'apps';
  });

  // Games list for thrilling slider showcase
  const gameItems = apps.filter(a => a.category === 'games');

  // Open App Detail Full Page
  const openAppDetailPage = (app: StoreApp) => {
    setSelectedApp(app);
    setCommentsList(app.comments || []);
    setIsDownloaded(false);
    setDownloadProgress(null);
    setCurrentView('app_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Download simulation handler
  const startDownloadSimulation = () => {
    setDownloadProgress(10);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev === null) return 10;
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloaded(true);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  // Add Comment Handler
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newComment: StoreAppComment = {
      id: Date.now().toString(),
      userName: newCommentName,
      rating: newCommentRating,
      comment: newCommentText,
      date: 'الآن'
    };

    setCommentsList([newComment, ...commentsList]);
    setNewCommentText('');
  };

  const handleDevSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDevSubmitted(true);
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
  };

  const handleCustomAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomAppSubmitted(true);
  };

  return (
    <div className="w-full space-y-6 pb-28 font-['Cairo'] text-right dir-rtl">
      
      {/* GLOBAL BACK TO HOME / NAVIGATION BREADCRUMB BAR */}
      <div className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-gray-200/90 shadow-xs">
        <div className="flex items-center gap-2">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Home className="w-4 h-4 text-[#062B7F]" />
              <span>الرئيسية</span>
            </button>
          )}

          {currentView !== 'catalog' && (
            <button
              onClick={() => setCurrentView('catalog')}
              className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0A4DFF] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>متجر التطبيقات</span>
            </button>
          )}
        </div>

        <div className="text-xs font-black text-gray-600 flex items-center gap-1.5">
          <span className="text-[#0A4DFF]">منصة أبو كيان 2026</span>
          <span className="text-gray-300">•</span>
          <span>المتجر الإلكتروني للتطبيقات الأندرويد والآيفون والويب</span>
        </div>
      </div>


      {/* ========================================================================= */}
      {/* VIEW 1: STORE CATALOG (متجر التطبيقات والألعاب الرئيسي) */}
      {/* ========================================================================= */}
      {currentView === 'catalog' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          
          {/* 1. STORE HERO BANNER */}
          <div className="relative rounded-[32px] p-6 sm:p-8 bg-gradient-to-r from-[#061842] via-[#0A2E80] to-[#0A4DFF] text-white shadow-2xl overflow-hidden border-2 border-amber-400/50">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white/5 -skew-x-12 pointer-events-none"></div>

            <div className="relative z-10 space-y-4 text-right">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black shadow-md">
                  <Crown className="w-4 h-4 fill-slate-950" />
                  <span>المتجر الرقمي للتطبيقات والألعاب 2026</span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-bold text-blue-100 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span>الدعم والدفع:</span>
                  <span className="text-amber-300">الريال اليمني (ر.ي) • الريال السعودي (ر.س) • الدولار ($)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-wide leading-tight text-white">
                متجر منصة أبو كيان الإلكتروني
              </h1>
              <p className="text-xs sm:text-sm text-blue-100 max-w-2xl font-medium leading-relaxed">
                تصفح وحمّل أحدث التطبيقات المشفرة والآمنة، والألعاب المشوقة 3D بإشراف برلمجي وتطوير مباشر من المطور أ. عبدالحميد داوؤد.
              </p>

              {/* Action Buttons on Banner */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <button
                  onClick={() => { setDevSubmitted(false); setCurrentView('dev_register'); }}
                  className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 shadow-lg cursor-pointer"
                >
                  <Code className="w-4 h-4" />
                  <span>تسجيل مطور / رفع تطبيق</span>
                </button>

                <button
                  onClick={() => { setCustomAppSubmitted(false); setCurrentView('custom_app_request'); }}
                  className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>طلب تصميم تطبيق خاص</span>
                </button>

                <button
                  onClick={() => { setReportSubmitted(false); setCurrentView('report_violation'); }}
                  className="px-3.5 py-2.5 rounded-xl bg-red-500/30 hover:bg-red-500/50 backdrop-blur-md text-red-200 border border-red-400/40 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer mr-auto"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>إبلاغ عن انتهاك حقوق</span>
                </button>
              </div>
            </div>
          </div>

          {/* 2. DEVELOPER CALLOUT BANNER (هل أنت مطور تطبيقات؟) */}
          <div className="relative rounded-[26px] p-5 bg-gradient-to-r from-amber-500/10 via-blue-50 to-indigo-50 border-2 border-amber-400/60 shadow-sm text-right space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center justify-start gap-2 text-amber-800 font-extrabold text-sm">
                  <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md">فرصة للمطورين</span>
                  <UserPlus className="w-4 h-4 text-[#062B7F]" />
                  <span>هل أنت مطور تطبيقات ويب، أندرويد، أو أبل؟</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  هل تريد رفع تطبيقك على منصة أبو كيان وتسجيل حساب مطور معتمد؟ قم بالتسجيل في المنصة وتابع الإجراءات والإحصائيات مباشرة من لوحة التحكم.
                </p>
              </div>

              <button
                onClick={() => { setDevSubmitted(false); setCurrentView('dev_register'); }}
                className="px-4 py-2.5 rounded-xl bg-[#062B7F] hover:bg-[#0A4DFF] text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>تسجيل حساب مطور جديد</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. SUB-CATEGORIES PILLS & SEARCH */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Search Box */}
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder="بحث عن تطبيق، لعبة، أو قسم..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pr-10 pl-4 rounded-xl bg-white border border-gray-200 text-xs font-bold focus:outline-none focus:border-[#0A4DFF] shadow-xs"
                />
                <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              <span className="text-xs font-bold text-gray-600 shrink-0">
                إجمالي التطبيقات المتاحة: <strong className="text-[#0A4DFF]">{filteredApps.length}</strong>
              </span>
            </div>

            {/* Sub-categories Horizontal Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none dir-rtl">
              {subCategoriesList.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSubCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedSubCategory === cat.id
                      ? 'bg-[#062B7F] text-white shadow-md border border-blue-400'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. THRILLING GAMES SHOWCASE SLIDER (When Game zone or all selected) */}
          {(selectedSubCategory === 'games_zone' || selectedSubCategory === 'all') && gameItems.length > 0 && (
            <div className="relative rounded-[28px] p-5 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white border-2 border-indigo-500/50 shadow-xl overflow-hidden space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-xs font-black text-amber-400 uppercase tracking-wider">قسم الألعاب المشوقة 3D</span>
                </div>

                <h3 className="text-base sm:text-lg font-black flex items-center gap-2 text-white">
                  <span>عروض وألعاب الإثارة والسباقات</span>
                  <Gamepad2 className="w-5 h-5 text-indigo-400" />
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gameItems.map(game => (
                  <div
                    key={game.id}
                    onClick={() => openAppDetailPage(game)}
                    className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-3 hover:border-amber-400 transition-all cursor-pointer group flex gap-3 items-center"
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-20 h-20 rounded-xl object-cover group-hover:scale-105 transition-transform shrink-0 border border-white/20"
                    />

                    <div className="space-y-1 flex-1 min-w-0 text-right">
                      {game.isAbuKianApp && (
                        <span className="inline-block bg-amber-400 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-md">
                          👑 لعبة حصرية - منصة أبو كيان
                        </span>
                      )}
                      <h4 className="text-xs sm:text-sm font-black text-white truncate group-hover:text-amber-300">
                        {game.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1">{game.subtitle}</p>

                      <div className="flex items-center gap-3 text-[10px] text-indigo-200 pt-1">
                        <span>⭐ {game.rating}</span>
                        <span>💾 {game.size || '300MB'}</span>
                        <span>📥 {game.downloads}</span>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Download className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. MAIN APPS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredApps.map(app => (
              <div
                key={app.id}
                onClick={() => openAppDetailPage(app)}
                className="group relative bg-white rounded-[26px] border border-gray-200/90 p-4 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between text-right"
              >
                {/* Abu Kian App Exclusive Badge */}
                {app.isAbuKianApp && (
                  <div className="mb-2.5 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-amber-500 text-white px-3 py-1.5 rounded-xl border border-amber-300/40 flex items-center justify-between shadow-xs">
                    <span className="text-[10px] font-black text-amber-300 flex items-center gap-1">
                      <Crown className="w-3.5 h-3.5 fill-amber-300" />
                      تطبيق حصري
                    </span>
                    <span className="text-[10px] font-bold text-white">منصة أبو كيان (عبدالحميد داوؤد)</span>
                  </div>
                )}

                <div>
                  {/* Image Preview Container */}
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-3 bg-gray-100 border border-gray-100">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                    {/* Popular / New Tag */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                      {app.isPopular && (
                        <span className="bg-amber-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md">
                          شائع جداً
                        </span>
                      )}
                      {app.isNew && (
                        <span className="bg-emerald-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md">
                          إصدار 2026
                        </span>
                      )}
                    </div>

                    {/* Price Pill */}
                    <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-black text-[#0A4DFF] shadow-md border border-gray-100">
                      {app.price}
                    </div>

                    {/* Size & Version */}
                    <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 text-[10px] text-white font-bold bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md">
                      {app.version && <span>{app.version}</span>}
                      {app.size && <span>• {app.size}</span>}
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="space-y-1.5">
                    {app.subCategory && (
                      <span className="inline-block text-[10px] font-extrabold text-[#0A4DFF] bg-blue-50 px-2 py-0.5 rounded-md">
                        {app.subCategory}
                      </span>
                    )}
                    <h3 className="text-base font-black text-gray-900 group-hover:text-[#0A4DFF] transition-colors leading-snug">
                      {app.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {app.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <button className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-[#0A4DFF] group-hover:bg-[#0A4DFF] group-hover:text-white font-extrabold text-xs transition-all flex items-center gap-1 shadow-xs">
                    <span>عرض التفاصيل والتثبيت</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                    <span className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      {app.rating}
                    </span>
                    <span className="text-gray-400 text-[11px]">{app.downloads}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}


      {/* ========================================================================= */}
      {/* VIEW 2: DEDICATED APP DETAIL PAGE (صفحة تفاصيل التطبيق المستقلة) */}
      {/* ========================================================================= */}
      {currentView === 'app_detail' && selectedApp && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setCurrentView('catalog')}
              className="px-4 py-2 rounded-xl bg-[#062B7F] hover:bg-[#0A4DFF] text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <ArrowRight className="w-4 h-4" />
              <span>الرجوع إلى متجر التطبيقات</span>
            </button>

            <span className="text-xs font-black text-gray-500 hidden sm:inline-block">
              تصفح تفاصيل: {selectedApp.title}
            </span>
          </div>

          {/* Main App Profile Card */}
          <div className="bg-white rounded-[32px] border border-gray-200 p-6 sm:p-8 shadow-md space-y-6">
            
            {/* Header: Icon, Title, Brand Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-b border-gray-100 pb-6">
              
              <div className="flex items-center gap-4">
                <img
                  src={selectedApp.image}
                  alt={selectedApp.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-blue-100 shadow-lg shrink-0"
                />

                <div className="space-y-1.5">
                  {selectedApp.isAbuKianApp && (
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full shadow-xs">
                      <Crown className="w-3.5 h-3.5 fill-slate-950" />
                      تطبيق حصري - تطوير وإدارة منصة أبو كيان (عبدالحميد داوؤد)
                    </span>
                  )}

                  <h1 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                    {selectedApp.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold">{selectedApp.subtitle}</p>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A4DFF] pt-1">
                    <span className="bg-blue-50 px-2.5 py-0.5 rounded-md">{selectedApp.subCategory || 'تطبيق معتمد'}</span>
                    <span>• {selectedApp.price}</span>
                  </div>
                </div>
              </div>

              {/* Download Action Box */}
              <div className="w-full sm:w-auto shrink-0 space-y-2">
                {isDownloaded ? (
                  <div className="px-6 py-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-center font-black text-xs sm:text-sm flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>تم التنزيل بنجاح! جاهز للتثبيت</span>
                  </div>
                ) : (
                  <button
                    onClick={startDownloadSimulation}
                    disabled={downloadProgress !== null}
                    className="w-full sm:w-64 h-13 rounded-2xl bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0044CC] text-white font-black text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Download className="w-5 h-5" />
                    <span>تحميل التطبيق الآن (رابط مباشر)</span>
                  </button>
                )}

                {downloadProgress !== null && !isDownloaded && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-[#062B7F]">
                      <span>{downloadProgress}%</span>
                      <span>جاري تحضير حزمة التثبيت...</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden dir-ltr">
                      <div className="bg-[#0A4DFF] h-2.5 rounded-full transition-all duration-300" style={{ width: `${downloadProgress}%` }}></div>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 p-4 rounded-2xl text-center text-xs font-black text-[#062B7F] border border-blue-100">
              <div className="space-y-0.5">
                <span className="block text-[10px] text-gray-500 font-normal">التقييم العام</span>
                <span className="text-amber-500 text-sm">⭐ {selectedApp.rating}</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-[10px] text-gray-500 font-normal">حجم التطبيق</span>
                <span className="text-sm">{selectedApp.size || '35 ميجابايت'}</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-[10px] text-gray-500 font-normal">الإصدار الحالي</span>
                <span className="text-sm">{selectedApp.version || 'v2.0'}</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-[10px] text-gray-500 font-normal">إجمالي التنزيلات</span>
                <span className="text-emerald-600 text-sm">{selectedApp.downloads}</span>
              </div>
            </div>

            {/* SCREENSHOTS GALLERY */}
            {selectedApp.screenshots && selectedApp.screenshots.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-black text-gray-900 flex items-center justify-start gap-2">
                  <Smartphone className="w-4 h-4 text-[#0A4DFF]" />
                  <span>لقطات الشاشة وواجهة الاستخدام</span>
                </h3>

                <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none dir-rtl">
                  {selectedApp.screenshots.map((shot, idx) => (
                    <img
                      key={idx}
                      src={shot}
                      alt="Screenshot"
                      className="w-44 h-72 object-cover rounded-2xl border-2 border-gray-200 shadow-md shrink-0 hover:scale-105 transition-transform cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* DESCRIPTION & WHAT'S NEW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-2">
                <h3 className="text-xs font-black text-[#062B7F]">شرح وتفاصيل التطبيق:</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {selectedApp.description}
                </p>
              </div>

              <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-100 space-y-2">
                <h3 className="text-xs font-black text-[#0A4DFF] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>ما الجديد في الإصدار {selectedApp.version || 'v2026'}:</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {selectedApp.whatsNew || 'تحسينات أمان عالية، سرعة فائقة في معالجة البيانات، مع دعم الوضع الليلي والشاشات الحديثة.'}
                </p>
              </div>
            </div>

            {/* DEVELOPER & OWNER INFORMATION */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs text-amber-400 font-bold">بيانات موثوقة ومضمونة</span>
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <span>معلومات المطور ومالك التطبيق</span>
                  <Building2 className="w-4 h-4 text-amber-400" />
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px]">جهة التطوير والإدارة:</span>
                  <span className="font-black text-amber-300 text-sm">
                    {selectedApp.developerInfo?.name || 'منصة أبو كيان الرقمية'}
                  </span>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px]">مالك ومسؤول البرمجة:</span>
                  <span className="font-black text-white text-sm">
                    {selectedApp.developerInfo?.owner || 'عبدالحميد داوؤد'}
                  </span>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px]">الدعم والواتساب المباشر:</span>
                  <span className="font-mono text-emerald-400 font-bold text-sm">
                    {selectedApp.developerInfo?.supportPhone || '778215553 (+967)'}
                  </span>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 block text-[10px]">البريد الإلكتروني والموقع:</span>
                  <span className="font-mono text-sky-300 font-bold text-xs">
                    {selectedApp.developerInfo?.email || 'support@abukian.com'}
                  </span>
                </div>
              </div>

              {/* Permissions */}
              {selectedApp.developerInfo?.permissions && (
                <div className="pt-2 border-t border-white/10">
                  <span className="block text-xs font-bold text-slate-300 mb-2">الصلاحيات والأذونات المطلوبة:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedApp.developerInfo.permissions.map((perm, pIdx) => (
                      <span key={pIdx} className="text-xs bg-white/10 text-slate-200 px-3 py-1 rounded-lg border border-white/10">
                        ✓ {perm}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* COMMENTS & REVIEWS SECTION */}
            <div className="space-y-4 pt-2">
              <h3 className="text-base font-black text-gray-900 flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#0A4DFF]">
                  ({commentsList.length}) تعليقات ومراجعات
                </span>
                <span className="flex items-center gap-2">
                  <span>التعليقات وتقييمات المستخدمين</span>
                  <MessageSquare className="w-5 h-5 text-[#0A4DFF]" />
                </span>
              </h3>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="اسمك الكريم..."
                    value={newCommentName}
                    onChange={(e) => setNewCommentName(e.target.value)}
                    className="h-10 px-3 rounded-xl bg-white border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#0A4DFF]"
                    required
                  />
                  <select
                    value={newCommentRating}
                    onChange={(e) => setNewCommentRating(Number(e.target.value))}
                    className="h-10 px-3 rounded-xl bg-white border border-gray-200 text-xs font-bold"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 نجوم - ممتاز)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 نجوم - جيد جداً)</option>
                    <option value={3}>⭐⭐⭐ (3 نجوم - جيد)</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="اكتب تعليقك أو تجربتك للتطبيق..."
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    className="flex-1 h-10 px-3 rounded-xl bg-white border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#0A4DFF]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 h-10 rounded-xl bg-[#0A4DFF] text-white text-xs font-bold hover:bg-blue-700 transition-all cursor-pointer shadow-sm"
                  >
                    إضافة تعليق
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {commentsList.map(c => (
                  <div key={c.id} className="p-3 rounded-2xl bg-gray-50 border border-gray-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-gray-500 text-[11px]">
                      <span>{c.date}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-500 font-bold">{"⭐".repeat(c.rating)}</span>
                        <span className="font-bold text-gray-800">{c.userName}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">{c.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('تم نسخ رابط التطبيق بنجاح!');
                }}
                className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs flex items-center gap-2 cursor-pointer transition-all"
              >
                <Share2 className="w-4 h-4 text-[#062B7F]" />
                <span>مشاركة رابط التطبيق</span>
              </button>

              <button
                onClick={() => { setReportSubmitted(false); setCurrentView('report_violation'); }}
                className="px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs flex items-center gap-2 cursor-pointer transition-all"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>إبلاغ عن مشكلة في التطبيق</span>
              </button>
            </div>

          </div>
        </div>
      )}


      {/* ========================================================================= */}
      {/* VIEW 3: DEVELOPER ACCOUNT REGISTRATION PAGE (صفحة تسجيل مطور) */}
      {/* ========================================================================= */}
      {currentView === 'dev_register' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setCurrentView('catalog')}
              className="px-4 py-2 rounded-xl bg-[#062B7F] hover:bg-[#0A4DFF] text-white font-bold text-xs flex items-center gap-2 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>الرجوع للمتجر</span>
            </button>
            <h2 className="text-base font-black text-gray-900">تسجيل حساب مطور جديد على المنصة</h2>
          </div>

          <div className="bg-white rounded-[32px] border border-gray-200 p-6 sm:p-8 shadow-lg max-w-2xl mx-auto space-y-6 text-right">
            <div className="space-y-2 border-b border-gray-100 pb-4">
              <span className="text-xs font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                لوحة التحكم وإدارة التطبيقات
              </span>
              <h3 className="text-xl font-black text-gray-900">هل أنت مطور تطبيقات ويب، أندرويد، أو أبل؟</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                سجل حسابك الآن لتتمكن من رفع تطبيقاتك، تتبع عدد التنزيلات والتقييمات، وإدارة تحديثات تطبيقك مباشرة عبر لوحة التحكم.
              </p>
            </div>

            {devSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-800 text-center font-black space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base">تم إرسال طلب تسجيلك بنجاح!</h4>
                <p className="text-xs text-emerald-700 font-normal">
                  سيتواصل معك مسئول التطوير (عبدالحميد داوؤد) عبر الواتساب لتفعيل حسابك وإتاحة رفع التطبيقات على المنصة.
                </p>
                <button
                  onClick={() => setCurrentView('catalog')}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-[#062B7F] text-white font-bold text-xs"
                >
                  العودة لتصفح المتجر
                </button>
              </div>
            ) : (
              <form onSubmit={handleDevSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">اسم المطور / اسم الشركة البرمجية *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: المهندس أحمد علي"
                    value={devForm.name}
                    onChange={(e) => setDevForm({ ...devForm, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#0A4DFF]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">رقم الواتساب للتواصل *</label>
                    <input
                      type="tel"
                      required
                      placeholder="778215553 (+967)"
                      value={devForm.phone}
                      onChange={(e) => setDevForm({ ...devForm, phone: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#0A4DFF]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">منصة التطبيق *</label>
                    <select
                      value={devForm.platformType}
                      onChange={(e) => setDevForm({ ...devForm, platformType: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-bold"
                    >
                      <option value="android">تطبيق أندرويد (APK / AAB)</option>
                      <option value="apple">تطبيق آيفون (iOS / IPA)</option>
                      <option value="web">تطبيق ويب / موقع تفاعلي</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">اسم التطبيق المراد رفعه *</label>
                  <input
                    type="text"
                    required
                    placeholder="اكتب اسم تطبيقك بالعربي والإنجليزية"
                    value={devForm.appName}
                    onChange={(e) => setDevForm({ ...devForm, appName: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#0A4DFF]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">وصف التطبيق ورابط المعاينة (إن وجد)</label>
                  <textarea
                    rows={4}
                    placeholder="اشرح أهم مميزات تطبيقك وتصنيفه..."
                    value={devForm.appDescription}
                    onChange={(e) => setDevForm({ ...devForm, appDescription: e.target.value })}
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#0A4DFF]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-2xl bg-[#062B7F] hover:bg-[#0A4DFF] text-white font-black text-xs transition-all cursor-pointer shadow-lg"
                >
                  إرسال الطلب والتسجيل في لوحة التحكم
                </button>
              </form>
            )}
          </div>
        </div>
      )}


      {/* ========================================================================= */}
      {/* VIEW 4: CUSTOM APP DESIGN REQUEST PAGE (صفحة طلب تطبيق مخصص) */}
      {/* ========================================================================= */}
      {currentView === 'custom_app_request' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setCurrentView('catalog')}
              className="px-4 py-2 rounded-xl bg-[#062B7F] hover:bg-[#0A4DFF] text-white font-bold text-xs flex items-center gap-2 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>الرجوع للمتجر</span>
            </button>
            <h2 className="text-base font-black text-gray-900">طلب برمجة وتصميم تطبيق خاص</h2>
          </div>

          <div className="bg-white rounded-[32px] border border-gray-200 p-6 sm:p-8 shadow-lg max-w-2xl mx-auto space-y-6 text-right">
            <div className="space-y-2 border-b border-gray-100 pb-4">
              <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                برمجة وتصميم احترافي
              </span>
              <h3 className="text-xl font-black text-gray-900">صمم تطبيقك الخاص برؤية احترافية</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                هل لديك فكرة مشروع أو تطبيق وتريد تحويله إلى واقع؟ فريق أ. عبدالحميد داوؤد جاهز لبرمجة وتصميم تطبيقك لأجهزة أندرويد وآيفون والويب.
              </p>
            </div>

            {customAppSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-800 text-center font-black space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base">تم استلام طلب البرمجة بنجاح!</h4>
                <p className="text-xs text-emerald-700 font-normal">
                  سيتواصل معك مسئول التطوير (عبدالحميد داوؤد) لدراسة التفاصيل الفنية والبدء بالعمل.
                </p>
                <button
                  onClick={() => setCurrentView('catalog')}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-[#062B7F] text-white font-bold text-xs"
                >
                  العودة لتصفح المتجر
                </button>
              </div>
            ) : (
              <form onSubmit={handleCustomAppSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">اسم صاحب المشورة / المؤسسة *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: مؤسسة النور التجارية"
                    value={customAppForm.clientName}
                    onChange={(e) => setCustomAppForm({ ...customAppForm, clientName: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#0A4DFF]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">رقم الهاتف أو الواتساب للتواصل *</label>
                  <input
                    type="tel"
                    required
                    placeholder="778215553 (+967)"
                    value={customAppForm.phone}
                    onChange={(e) => setCustomAppForm({ ...customAppForm, phone: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#0A4DFF]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">تفاصيل فكرة التطبيق والوظائف المطلوب *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="اشرح الفكرة، الصفحات، وآلية عمل التطبيق..."
                    value={customAppForm.notes}
                    onChange={(e) => setCustomAppForm({ ...customAppForm, notes: e.target.value })}
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#0A4DFF]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-2xl bg-[#062B7F] hover:bg-[#0A4DFF] text-white font-black text-xs transition-all cursor-pointer shadow-lg"
                >
                  إرسال الطلب ومناقشة التفاصيل
                </button>
              </form>
            )}
          </div>
        </div>
      )}


      {/* ========================================================================= */}
      {/* VIEW 5: INFRINGEMENT REPORT PAGE (صفحة إبلاغ عن انتهاك) */}
      {/* ========================================================================= */}
      {currentView === 'report_violation' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setCurrentView('catalog')}
              className="px-4 py-2 rounded-xl bg-[#062B7F] hover:bg-[#0A4DFF] text-white font-bold text-xs flex items-center gap-2 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>الرجوع للمتجر</span>
            </button>
            <h2 className="text-base font-black text-red-600 flex items-center gap-2">
              <span>إبلاغ عن انتهاك حقوق ملكية</span>
              <AlertTriangle className="w-5 h-5" />
            </h2>
          </div>

          <div className="bg-white rounded-[32px] border border-gray-200 p-6 sm:p-8 shadow-lg max-w-2xl mx-auto space-y-6 text-right">
            <div className="space-y-2 border-b border-gray-100 pb-4">
              <span className="text-xs font-black text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                الشؤون القانونية بالمنصة
              </span>
              <h3 className="text-xl font-black text-gray-900">حماية حقوق الملكية الفكرية</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                تلتزم منصة أبو كيان بحماية حقوق الملكية الفكرية. إذا كان هناك تطبيق ينتهك علامتك أو حقوقك، يرجى ملء البلاغ وسيتم اتخاذ الإجراء الفوري.
              </p>
            </div>

            {reportSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-800 text-center font-black space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base">تم إرسال البلاغ بنجاح!</h4>
                <p className="text-xs text-emerald-700 font-normal">
                  سيتولى الفريق القانوني بالمنصة مراجعة الشكوى خلال 24 ساعة.
                </p>
                <button
                  onClick={() => setCurrentView('catalog')}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-[#062B7F] text-white font-bold text-xs"
                >
                  العودة لتصفح المتجر
                </button>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">اسم صاحب الشكوى أو الجهة *</label>
                  <input
                    type="text"
                    required
                    placeholder="الاسم الكامل"
                    value={reportForm.name}
                    onChange={(e) => setReportForm({ ...reportForm, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">التطبيق المخالف *</label>
                  <input
                    type="text"
                    required
                    placeholder="اسم التطبيق المعروض في المتجر"
                    value={reportForm.appName}
                    onChange={(e) => setReportForm({ ...reportForm, appName: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">تفاصيل الشكوى وأدلة الملكية *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="اشرح وجه الانتهاك..."
                    value={reportForm.details}
                    onChange={(e) => setReportForm({ ...reportForm, details: e.target.value })}
                    className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-red-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs transition-all cursor-pointer shadow-lg"
                >
                  تأكيد وإرسال البلاغ
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
