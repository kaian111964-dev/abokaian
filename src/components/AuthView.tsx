import React, { useState } from 'react';
import { User as UserIcon, Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, LogIn } from 'lucide-react';
import { User } from '../types';
import { OFFICIAL_LOGO_URL } from './WelcomeScreen';

interface AuthViewProps {
  onLoginSuccess: (user: User) => void;
  onEnterGuest: () => void;
  onReturnWelcome?: () => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ onLoginSuccess, onEnterGuest, onReturnWelcome }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('signup'); // Default to signup as in screenshot 1
  const [showPassword, setShowPassword] = useState(false);
  
  // Form fields state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email) {
      setErrorMsg('يرجى إدخال البريد الإلكتروني');
      return;
    }

    if (!password) {
      setErrorMsg('يرجى إدخال كلمة المرور');
      return;
    }

    if (mode === 'signup' && !fullName) {
      setErrorMsg('يرجى إدخال الاسم الكامل');
      return;
    }

    if (mode === 'signup' && password !== confirmPassword && confirmPassword) {
      setErrorMsg('كلمتا المرور غير متطابقتين');
      return;
    }

    // Success user
    const loggedUser: User = {
      fullName: fullName || (mode === 'login' ? email.split('@')[0] : 'عضو أبو كيان'),
      email: email,
      isLoggedIn: true,
      isGuest: false
    };

    onLoginSuccess(loggedUser);
  };

  return (
    <div className="relative min-h-screen w-full bg-ambient-mesh flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Background Curved Glowing Ribbon Shapes matching Screenshots */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-[#0A4DFF]/30 via-[#062B7F]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#F44336]/25 via-[#0A4DFF]/20 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      {/* Back to welcome button */}
      {onReturnWelcome && (
        <button
          onClick={onReturnWelcome}
          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-white/80 hover:bg-white backdrop-blur-md px-3.5 py-2 rounded-xl border border-gray-200/80 shadow-xs transition-all cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 text-[#0A4DFF]" />
          <span>شاشة الترحيب</span>
        </button>
      )}

      {/* Abstract Glowing Floating Circles */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full border border-white/40 bg-white/10 backdrop-blur-md pointer-events-none shadow-sm"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full border border-white/30 bg-white/5 backdrop-blur-md pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10 my-auto space-y-6">
        
        {/* Top Logo Card & Platform Name */}
        <div className="flex flex-col items-center text-center space-y-3">
          {/* Logo Container Card */}
          <div className="w-24 h-24 bg-slate-900 rounded-full p-2 shadow-xl shadow-blue-500/20 border-2 border-white flex items-center justify-center relative shrink-0 group hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A4DFF]/20 via-transparent to-[#F44336]/20"></div>
            
            <img 
              src={OFFICIAL_LOGO_URL} 
              alt="منصة أبو كيان الرقمية"
              className="w-full h-full object-contain rounded-full relative z-10 filter drop-shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title Text */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['IBM_Plex_Sans_Arabic'] tracking-tight">
              <span className="text-[#062B7F]">منصة </span>
              <span className="text-[#F44336]">ابوكيان </span>
              <span className="text-[#0A4DFF]">الرقمية</span>
            </h1>
            <p className="text-sm font-medium text-gray-500 font-['Cairo']">
              خدمات الدعاية والإعلان والحلول الرقمية 2026
            </p>
          </div>
        </div>

        {/* Auth Glass Card Form */}
        <div className="glass-card rounded-[28px] p-6 sm:p-8 space-y-6 shadow-2xl border border-white/80">
          
          {/* Toggle Tab Bar (تسجيل الدخول / حساب جديد) */}
          <div className="w-full h-14 p-1.5 bg-gray-100/80 backdrop-blur-md rounded-2xl flex items-center gap-1 border border-gray-200/60">
            <button
              type="button"
              onClick={() => { setMode('login'); setErrorMsg(''); }}
              className={`flex-1 h-full rounded-xl font-bold text-sm font-['Cairo'] transition-all duration-300 cursor-pointer ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-[#0A4DFF] to-[#0044CC] text-white shadow-md shadow-blue-500/25'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              تسجيل الدخول
            </button>

            <button
              type="button"
              onClick={() => { setMode('signup'); setErrorMsg(''); }}
              className={`flex-1 h-full rounded-xl font-bold text-sm font-['Cairo'] transition-all duration-300 cursor-pointer ${
                mode === 'signup'
                  ? 'bg-gradient-to-r from-[#0A4DFF] to-[#0044CC] text-white shadow-md shadow-blue-500/25'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              حساب جديد
            </button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-bold text-center animate-shake">
                {errorMsg}
              </div>
            )}

            {/* Full Name Input (Only on Sign Up) */}
            {mode === 'signup' && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-[60px] pr-12 pl-4 rounded-[18px] bg-white border border-gray-200 text-gray-800 text-sm font-semibold focus:outline-none focus:border-[#0A4DFF] focus:ring-4 focus:ring-blue-500/10 transition-all font-['Cairo'] text-right placeholder:text-gray-400"
                />
                <UserIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A4DFF]" />
              </div>
            )}

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[60px] pr-12 pl-4 rounded-[18px] bg-white border border-gray-200 text-gray-800 text-sm font-semibold focus:outline-none focus:border-[#0A4DFF] focus:ring-4 focus:ring-blue-500/10 transition-all font-['Cairo'] text-right placeholder:text-gray-400"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A4DFF]" />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[60px] pr-12 pl-4 rounded-[18px] bg-white border border-gray-200 text-gray-800 text-sm font-semibold focus:outline-none focus:border-[#0A4DFF] focus:ring-4 focus:ring-blue-500/10 transition-all font-['Cairo'] text-right placeholder:text-gray-400"
              />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A4DFF]" />
            </div>

            {/* Confirm / Extra Password Input or Toggle matching Screenshots */}
            <div className="relative overflow-hidden rounded-[18px] border border-gray-200">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder={mode === 'signup' ? 'تأكيد كلمة المرور' : 'كلمة المرور'}
                value={mode === 'signup' ? confirmPassword : password}
                onChange={(e) => mode === 'signup' ? setConfirmPassword(e.target.value) : setPassword(e.target.value)}
                className="w-full h-[60px] pr-12 pl-14 rounded-[18px] bg-white text-gray-800 text-sm font-semibold focus:outline-none focus:border-[#0A4DFF] transition-all font-['Cairo'] text-right placeholder:text-gray-400"
              />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A4DFF]" />
              
              {/* Left Eye Toggle Button matching Screenshot design cut */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-0 top-0 bottom-0 w-14 bg-gradient-to-r from-[#062B7F] to-[#F44336] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[60px] rounded-[18px] bg-gradient-to-r from-[#0A4DFF] to-[#0044CC] text-white font-extrabold text-base font-['Cairo'] shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>{mode === 'signup' ? 'إنشاء حساب' : 'دخول'}</span>
              <LogIn className="w-5 h-5 rotate-180" />
            </button>
          </form>

          {/* Divider "أو" with Endpoint Accents matching Screenshot */}
          <div className="relative flex items-center justify-center my-4">
            <div className="w-full border-t border-gray-200"></div>
            <span className="bg-white px-4 text-xs font-bold text-gray-400 relative z-10 rounded-full border border-gray-100 py-0.5">
              أو
            </span>
            <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-[#0A4DFF]"></span>
            <span className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#F44336]"></span>
          </div>

          {/* Secondary Guest Login Button matching Screenshot */}
          <button
            type="button"
            onClick={onEnterGuest}
            className="w-full h-[60px] rounded-[18px] bg-white border-2 border-[#0A4DFF] text-[#0A4DFF] font-extrabold text-base font-['Cairo'] shadow-sm hover:bg-blue-50/50 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>الدخول كضيف</span>
            <UserIcon className="w-5 h-5" />
          </button>

        </div>

      </div>
    </div>
  );
};
