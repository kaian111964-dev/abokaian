import React, { useState } from 'react';
import { 
  User as UserIcon, 
  ShieldCheck, 
  ShoppingBag, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Coins, 
  CreditCard, 
  Settings, 
  PhoneCall, 
  MessageSquare, 
  LogOut, 
  ArrowLeft, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  Edit3, 
  Save, 
  Lock, 
  Smartphone, 
  Calendar, 
  Award,
  ChevronLeft,
  X,
  ExternalLink
} from 'lucide-react';
import { User } from '../types';
import { OFFICIAL_LOGO_URL } from './WelcomeScreen';

interface UserDashboardViewProps {
  currentUser: User;
  onBackToHome: () => void;
  onLogout: () => void;
  onOpenWhatsApp: () => void;
}

export const UserDashboardView: React.FC<UserDashboardViewProps> = ({
  currentUser,
  onBackToHome,
  onLogout,
  onOpenWhatsApp
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'subscriptions' | 'points' | 'security' | 'settings'>('orders');

  // Editable user state
  const [fullName, setFullName] = useState(currentUser.fullName);
  const [phone, setPhone] = useState('+967 778 215 553');
  const [email, setEmail] = useState(currentUser.email);
  const [city, setCity] = useState('صنعاء / تعز');
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  // Mock Orders Data
  const orders = [
    {
      id: 'ORD-2026-8841',
      title: 'تصميم وبرمجة تطبيق تمويل إلكتروني ذكي',
      category: 'حلول البرمجة والتطبيقات',
      date: '2026-07-18',
      budget: '$1,200',
      status: 'in_progress',
      statusLabel: 'قيد التنفيذ والتطوير',
      progress: 65,
      developer: 'المهندس عبدالحميد داوؤد'
    },
    {
      id: 'ORD-2026-7719',
      title: 'حملة تسويق وإعلانات ممولة لشهر يوليو',
      category: 'التسويق الرقمي والتمويل',
      date: '2026-07-05',
      budget: '$450',
      status: 'completed',
      statusLabel: 'مكتمل ومسَلَّم',
      progress: 100,
      developer: 'فريق تسويق أبو كيان'
    },
    {
      id: 'ORD-2026-6102',
      title: 'إدارة وتأمين شبكة واي فاي وسيرفر مايكروتك',
      category: 'إدارة الشبكات والأنظمة',
      date: '2026-06-22',
      budget: '$300',
      status: 'completed',
      statusLabel: 'مكتمل ومسَلَّم',
      progress: 100,
      developer: 'المهندس عبدالحميد داوؤد'
    }
  ];

  // Mock Subscriptions Data
  const subscriptions = [
    {
      id: 'SUB-101',
      name: 'باقة السيرفر والاستضافة السحابية VIP 2026',
      renewalDate: '2027-01-15',
      price: '$120 / سنوياً',
      status: 'نشط',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
    },
    {
      id: 'SUB-102',
      name: 'اشتراك حماية وإدارة الشبكات الذكية',
      renewalDate: '2026-11-30',
      price: '$45 / شهرياً',
      status: 'نشط',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300 font-['Cairo']">
      
      {/* TOP NAVIGATION BREADCRUMB */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-slate-700 hover:text-[#0A4DFF] font-bold text-xs sm:text-sm transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>العودة للرئيسية</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-800">لوحة تحكم المستخدم</span>
        </div>
      </div>

      {/* LUXURY HERO HEADER BANNER */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#0044CC] text-white p-6 sm:p-8 shadow-xl shadow-blue-500/15 border border-white/20">
        
        {/* Glowing Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* User Identity Info */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-900 border-4 border-white/80 p-1 shadow-2xl overflow-hidden shrink-0 flex items-center justify-center">
                <img 
                  src={OFFICIAL_LOGO_URL} 
                  alt="شعار الحساب" 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute bottom-0 left-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white" title="حساب نشط وموثق">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black font-['IBM_Plex_Sans_Arabic']">
                  {currentUser.fullName}
                </h1>
                <span className="px-3 py-0.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[11px] font-extrabold flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-300" />
                  <span>عضوية ماسية VIP</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-blue-100 font-medium">
                {currentUser.isGuest ? 'وضع التصفح والعميل التجريبي' : currentUser.email}
              </p>

              <div className="flex items-center gap-4 text-[11px] text-blue-200 pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-300" />
                  <span>تاريخ الانضمام: يناير 2026</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-300 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>حساب محمي وآمن</span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions & Contact */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <button
              onClick={onOpenWhatsApp}
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>محادثة المهندس عبدالحميد</span>
            </button>

            <button
              onClick={onLogout}
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-red-300" />
              <span>تسجيل الخروج</span>
            </button>
          </div>

        </div>

      </div>

      {/* METRICS STATS CARDS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        
        {/* Stat 1: Total Orders */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-2 hover:border-blue-200 transition-all">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold">
            <span>إجمالي الطلبات</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0A4DFF] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 font-['IBM_Plex_Sans_Arabic']">
            20 <span className="text-xs text-gray-500 font-normal">طلب</span>
          </div>
          <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>18 طلب مكتمل ومستلم</span>
          </p>
        </div>

        {/* Stat 2: Active Services */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-2 hover:border-blue-200 transition-all">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold">
            <span>الخدمات المفعّلة</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 font-['IBM_Plex_Sans_Arabic']">
            12 <span className="text-xs text-gray-500 font-normal">خدمة</span>
          </div>
          <p className="text-[10px] text-amber-600 font-bold flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>2 قيد التنفيذ والتطوير</span>
          </p>
        </div>

        {/* Stat 3: Loyalty Points */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-2 hover:border-blue-200 transition-all">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold">
            <span>نقاط المكافآت</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Coins className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 font-['IBM_Plex_Sans_Arabic']">
            250 <span className="text-xs text-purple-600 font-bold">نقطة</span>
          </div>
          <p className="text-[10px] text-purple-600 font-bold flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>تمنحك خصم 15% مقبل</span>
          </p>
        </div>

        {/* Stat 4: Security & Health */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-2 hover:border-blue-200 transition-all">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold">
            <span>حالة الحساب والأمان</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-600 font-['IBM_Plex_Sans_Arabic']">
            100%
          </div>
          <p className="text-[10px] text-gray-500 font-medium">
            تشفير عالي الأمان 2026
          </p>
        </div>

      </div>

      {/* TABS HEADER NAVIGATION */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-gray-200">
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'orders'
              ? 'bg-[#0A4DFF] text-white shadow-md shadow-blue-500/20'
              : 'bg-white text-slate-700 hover:bg-gray-100 border border-gray-100'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>الطلبات والمشاريع ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('subscriptions')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'subscriptions'
              ? 'bg-[#0A4DFF] text-white shadow-md shadow-blue-500/20'
              : 'bg-white text-slate-700 hover:bg-gray-100 border border-gray-100'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>الاشتراكات والخدمات ({subscriptions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('points')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'points'
              ? 'bg-[#0A4DFF] text-white shadow-md shadow-blue-500/20'
              : 'bg-white text-slate-700 hover:bg-gray-100 border border-gray-100'
          }`}
        >
          <Coins className="w-4 h-4" />
          <span>نقاط الولاء والخصومات</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'settings'
              ? 'bg-[#0A4DFF] text-white shadow-md shadow-blue-500/20'
              : 'bg-white text-slate-700 hover:bg-gray-100 border border-gray-100'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>إعدادات الحساب والملف</span>
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'security'
              ? 'bg-[#0A4DFF] text-white shadow-md shadow-blue-500/20'
              : 'bg-white text-slate-700 hover:bg-gray-100 border border-gray-100'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>الأمان والسجل</span>
        </button>
      </div>

      {/* TAB 1: ORDERS & PROJECTS */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-['IBM_Plex_Sans_Arabic'] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0A4DFF]" />
              <span>متابعة الطلبات والمشاريع الخاصة بك</span>
            </h3>
            <span className="text-xs text-gray-500 font-medium">تحديث مباشر للمراحل</span>
          </div>

          <div className="space-y-3">
            {orders.map((order) => (
              <div 
                key={order.id}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4 hover:border-blue-200 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0A4DFF] border border-blue-100">
                        {order.id}
                      </span>
                      <span className="text-xs text-gray-500">{order.category}</span>
                    </div>
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900 font-['Cairo']">
                      {order.title}
                    </h4>
                  </div>

                  <div className="text-left space-y-1">
                    <div className="text-sm font-black text-[#0A4DFF] font-['IBM_Plex_Sans_Arabic']">
                      {order.budget}
                    </div>
                    <div className="text-[11px] text-gray-400">تاريخ الطلب: {order.date}</div>
                  </div>
                </div>

                {/* Progress bar & Developer info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${order.status === 'completed' ? 'bg-emerald-500' : 'bg-amber-500 animate-ping'}`}></span>
                      <span>الحالة: {order.statusLabel}</span>
                    </span>
                    <span className="font-black text-blue-600">{order.progress}%</span>
                  </div>

                  <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${order.status === 'completed' ? 'bg-emerald-500' : 'bg-gradient-to-r from-blue-600 to-amber-500'}`}
                      style={{ width: `${order.progress}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                    <span>المسؤول التقني: <strong className="text-slate-800">{order.developer}</strong></span>
                    <button 
                      onClick={onOpenWhatsApp}
                      className="text-[#0A4DFF] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>متابعة مع المطور</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: SUBSCRIPTIONS */}
      {activeTab === 'subscriptions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-['IBM_Plex_Sans_Arabic'] flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>الاشتراكات والخدمات المستمرة</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subscriptions.map((sub) => (
              <div 
                key={sub.id}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${sub.badgeColor}`}>
                    {sub.status}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{sub.id}</span>
                </div>

                <h4 className="font-extrabold text-sm text-slate-900 font-['Cairo']">
                  {sub.name}
                </h4>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500">تاريخ التجديد القادم: <strong className="text-slate-800">{sub.renewalDate}</strong></span>
                  <span className="font-black text-[#0A4DFF]">{sub.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: POINTS & REWARDS */}
      {activeTab === 'points' && (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white">
            <div className="space-y-1">
              <span className="text-xs text-purple-300 font-bold">برنامج الولاء للعملاء المميزين</span>
              <h3 className="text-xl font-black font-['IBM_Plex_Sans_Arabic']">
                لديك 250 نقطة مجانية متاحة للاستبدال
              </h3>
              <p className="text-xs text-purple-200">تحصل على 10 نقاط لكل $10 تستثمرها في خدمات المنصة.</p>
            </div>

            <button 
              onClick={onOpenWhatsApp}
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs transition-all shadow-md cursor-pointer shrink-0"
            >
              استبدال النقاط بخصم
            </button>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-sm text-slate-900">سجل استحقاق النقاط الأخير</h4>
            
            <div className="divide-y divide-gray-100 text-xs">
              <div className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800">طلب برمجة تطبيق تمويل</div>
                  <div className="text-[11px] text-gray-400">18 يوليو 2026</div>
                </div>
                <span className="font-black text-emerald-600">+120 نقطة</span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800">حملة تسويق رقمي وإعلانات</div>
                  <div className="text-[11px] text-gray-400">05 يوليو 2026</div>
                </div>
                <span className="font-black text-emerald-600">+45 نقطة</span>
              </div>

              <div className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800">مكافأة الانضمام والترحيب</div>
                  <div className="text-[11px] text-gray-400">01 يوليو 2026</div>
                </div>
                <span className="font-black text-emerald-600">+85 نقطة</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SETTINGS & EDIT PROFILE */}
      {activeTab === 'settings' && (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 font-['IBM_Plex_Sans_Arabic']">
                إعدادات الملف الشخصي والبيانات
              </h3>
              <p className="text-xs text-gray-500">قم بتحديث معلومات التواصل الخاصة بك لتسريع متابعة الطلبات</p>
            </div>
          </div>

          {isSaved && (
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>تم حفظ وتحديث بيانات الملف الشخصي بنجاح!</span>
            </div>
          )}

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">الاسم الكامل</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A4DFF]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">رقم الهاتف / الواتساب</label>
                <input 
                  type="text" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A4DFF]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A4DFF]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">المدينة / الدولة</label>
                <input 
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0A4DFF]"
                  required
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#0A4DFF] hover:bg-[#062B7F] text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>حفظ التغييرات</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 5: SECURITY & LOG */}
      {activeTab === 'security' && (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 font-['IBM_Plex_Sans_Arabic'] flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>سجل الجلسات والأمان</span>
            </h3>
            <p className="text-xs text-gray-500">بيانات تشفير وحماية الجلسة الحالية الخاصة بك على منصة أبو كيان</p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0A4DFF] flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">الجلسة الحالية (متصل الآن)</div>
                  <div className="text-gray-500">متصفح ويب حديث - Cloud Sandbox 2026</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold">نشط الآن</span>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between opacity-80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-200 text-gray-600 flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">تسجيل دخول سابق</div>
                  <div className="text-gray-500">تطبيق الواتساب / الهاتف المحمول - 21 يوليو 2026</div>
                </div>
              </div>
              <span className="text-gray-400 font-medium">مكتمل</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
