/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { NewsTicker } from './components/NewsTicker';
import { FeaturedBanners } from './components/FeaturedBanners';
import { ServicesGrid } from './components/ServicesGrid';
import { BottomNavigation } from './components/BottomNavigation';
import { AuthView } from './components/AuthView';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { WelcomeScreen } from './components/WelcomeScreen';
import { StoreView } from './components/StoreView';
import { AIToolsView } from './components/AIToolsView';
import { WifiManagerView } from './components/WifiManagerView';
import { LiveStreamView } from './components/LiveStreamView';
import { PortfolioView } from './components/PortfolioView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { ClientsView } from './components/ClientsView';
import { NotificationsDrawer } from './components/NotificationsDrawer';
import { AssistantModal } from './components/AssistantModal';
import { SearchModal } from './components/SearchModal';
import { MenuDrawer } from './components/MenuDrawer';
import { UserDashboardView } from './components/UserDashboardView';

import { 
  HERO_SLIDES, 
  SERVICES_LIST, 
  NEWS_LIST, 
  STORE_APPS, 
  PORTFOLIO_PROJECTS, 
  AI_TOOLS_LIST, 
  WIFI_CONNECTED_DEVICES, 
  INITIAL_NOTIFICATIONS 
} from './data/mockData';

import { User, ServiceItem, NotificationItem, NewsItem } from './types';

export default function App() {
  // Welcome Splash Screen State
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>(true);

  // Authentication State (Null = Auth screen visible after welcome screen)
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Navigation Active Tab State
  const [activeTab, setActiveTab] = useState<string>('home');

  // Modals & Drawers State
  const [servicesList, setServicesList] = useState<ServiceItem[]>(SERVICES_LIST);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Dynamic Notifications State
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

  // Toast Notification Message
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Scroll to top whenever active tab or selected service changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeTab, selectedService]);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  // Helper tab change handler that clears selected service and scrolls to top
  const handleTabChange = (tab: string) => {
    setSelectedService(null);
    setActiveTab(tab);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Service Rating Handler
  const handleRateService = (serviceId: string, userStars: number) => {
    setServicesList(prev => prev.map(s => {
      if (s.id !== serviceId) return s;

      const hadUserRating = typeof s.userRating === 'number';
      const oldRatingSum = s.rating * s.reviewsCount;
      const newCount = hadUserRating ? s.reviewsCount : s.reviewsCount + 1;
      const previousUserVal = s.userRating || 0;
      const updatedRatingSum = oldRatingSum - previousUserVal + userStars;
      const newAvg = parseFloat((updatedRatingSum / newCount).toFixed(1));

      const updatedService = {
        ...s,
        rating: newAvg,
        reviewsCount: newCount,
        userRating: userStars
      };

      if (selectedService?.id === serviceId) {
        setSelectedService(updatedService);
      }

      return updatedService;
    }));

    showToast(`تم تسجيل تقييمك (${userStars}/5 نجوم) بنجاح ⭐`);
  };

  // Auth Handlers
  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    showToast(`مرحباً بك ${user.fullName}! تم تسجيل الدخول بنجاح.`);
  };

  const handleEnterGuest = () => {
    setCurrentUser({
      fullName: 'زائر أبو كيان الرقمية',
      email: 'guest@abukian.com',
      isLoggedIn: true,
      isGuest: true
    });
    showToast('مرحباً بك في المنصة بوضع الضيف');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowWelcomeScreen(true);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Notification Handlers
  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    showToast('تم تحديد جميع الإشعارات كقروءة');
  };

  const handleClearNotifications = () => {
    setNotifications([]);
    showToast('تم مسح جميع الإشعارات');
  };

  // Order Submission Handler
  const handleSendOrder = (orderData: any) => {
    showToast(`تم استلام طلبك لخدمة: (${orderData.serviceTitle}) بنجاح!`);
    // Add dynamic notification
    const newNotif: NotificationItem = {
      id: Date.now().toString(),
      title: `طلب جديد: ${orderData.serviceTitle}`,
      message: `تم إرسال تفاصيل طلبك بقيمة $${orderData.budget} وجاري المتابعة معك.`,
      time: 'الآن',
      read: false,
      type: 'success'
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  // WhatsApp Redirect Handler
  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/967778215553?text=' + encodeURIComponent('مرحباً منصة أبو كيان الرقمية (الأستاذ عبدالحميد داوؤد 👋)، أود الاستفسار عن الخدمات المتاحة.'), '_blank');
  };

  // 1. Render Welcome Screen if active
  if (showWelcomeScreen) {
    return (
      <WelcomeScreen 
        onEnterPlatform={() => {
          setShowWelcomeScreen(false);
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }}
      />
    );
  }

  // 2. Render Auth screen if no user
  if (!currentUser) {
    return (
      <AuthView 
        onLoginSuccess={handleLoginSuccess}
        onEnterGuest={handleEnterGuest}
        onReturnWelcome={() => {
          setShowWelcomeScreen(true);
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen w-full bg-ambient-mesh flex flex-col items-center selection:bg-[#0A4DFF]/20 selection:text-[#0A4DFF]">
      
      {/* Toast Popup Notification */}
      {toastMsg && (
        <div className="fixed top-20 z-50 px-5 py-2.5 rounded-full bg-[#062B7F] text-white text-xs sm:text-sm font-bold font-['Cairo'] shadow-xl shadow-blue-900/30 border border-white/20 animate-in fade-in slide-in-from-top-4">
          ✨ {toastMsg}
        </div>
      )}

      {/* Glass Sticky Header Bar - Always visible across ALL pages */}
      <Header
        notifications={notifications}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenWhatsApp={handleOpenWhatsApp}
        onGoHome={() => handleTabChange('home')}
      />

      {/* Main View Container */}
      <main className="w-full flex-1">
        
        {/* VIEW A: FULL SERVICE DETAIL PAGE */}
        {selectedService ? (
          <ServiceDetailPage
            service={selectedService}
            onBack={() => {
              setSelectedService(null);
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
            onSendOrder={handleSendOrder}
            onRateService={handleRateService}
          />
        ) : (
          <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-3 sm:pt-4 pb-28 space-y-4 sm:space-y-6 overflow-x-hidden">
            
            {/* TAB 11: USER DASHBOARD PAGE (لوحة تحكم المستخدم والحساب) */}
            {activeTab === 'dashboard' && (
              <UserDashboardView 
                currentUser={currentUser} 
                onBackToHome={() => handleTabChange('home')} 
                onLogout={handleLogout} 
                onOpenWhatsApp={handleOpenWhatsApp} 
              />
            )}

            {/* TAB 1: HOME DASHBOARD */}
            {activeTab === 'home' && (
              <>
                {/* Hero Slider */}
                <HeroSlider
                  slides={HERO_SLIDES}
                  onSelectSlideTab={(tab) => handleTabChange(tab)}
                />

                {/* News Ticker */}
                <NewsTicker
                  newsItems={NEWS_LIST}
                  onSelectNews={(news) => showToast(`خبر: ${news.title}`)}
                />

                {/* Featured Banners Cards Grid (2x2 + Showcase) */}
                <FeaturedBanners
                  onSelectTab={(tab) => handleTabChange(tab)}
                />

                {/* Services Grid Section */}
                <ServicesGrid
                  services={servicesList}
                  onSelectService={(service) => handleSelectService(service)}
                  onRateService={handleRateService}
                />
              </>
            )}

            {/* TAB 2: STORE (المتجر الإلكتروني) */}
            {activeTab === 'store' && (
              <StoreView apps={STORE_APPS} onBackToHome={() => handleTabChange('home')} />
            )}

            {/* TAB 3: AI TOOLS (الذكاء الاصطناعي) */}
            {activeTab === 'ai' && (
              <AIToolsView tools={AI_TOOLS_LIST} />
            )}

            {/* TAB 4: WI-FI NETWORKS (شبكات واي فاي) */}
            {activeTab === 'wifi' && (
              <WifiManagerView devices={WIFI_CONNECTED_DEVICES} />
            )}

            {/* TAB 5: LIVE STREAMING (البث المباشر) */}
            {activeTab === 'live' && (
              <LiveStreamView />
            )}

            {/* TAB 6: PORTFOLIO SHOWCASE (معرض الأعمال) */}
            {activeTab === 'portfolio' && (
              <PortfolioView projects={PORTFOLIO_PROJECTS} />
            )}

            {/* TAB 10: LOYAL CLIENTS SHOWCASE PAGE (أبرز عملائنا الأوفياء) */}
            {activeTab === 'clients' && (
              <ClientsView onBackToHome={() => handleTabChange('home')} />
            )}

            {/* TAB 7: ABOUT US (من نحن) */}
            {activeTab === 'about' && (
              <AboutView />
            )}

            {/* TAB 8: CONTACT US (اتصل بنا) */}
            {(activeTab === 'contact' || activeTab === 'assistant') && (
              <ContactView onOpenWhatsApp={handleOpenWhatsApp} />
            )}

            {/* TAB 9: OFFERS / SERVICES SUMMARY */}
            {activeTab === 'offers' && (
              <ServicesGrid
                services={servicesList}
                onSelectService={(service) => handleSelectService(service)}
                onRateService={handleRateService}
              />
            )}

          </div>
        )}

      </main>

      {/* Floating Bottom Navigation Bar */}
      <BottomNavigation
        activeTab={selectedService ? 'home' : (activeTab === 'offers' || activeTab === 'ai' || activeTab === 'wifi' || activeTab === 'live' || activeTab === 'portfolio' ? 'home' : activeTab)}
        onTabChange={(tab) => {
          if (tab === 'assistant') {
            setIsAssistantOpen(true);
          } else {
            handleTabChange(tab);
          }
        }}
      />

      {/* Service Request Detail Modal (Fallback) */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSendOrder={handleSendOrder}
        onRateService={handleRateService}
      />

      {/* Notifications Drawer */}
      <NotificationsDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllRead}
        onClearAll={handleClearNotifications}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        services={servicesList}
        apps={STORE_APPS}
        onSelectService={(s) => handleSelectService(s)}
      />

      {/* AI Assistant Support Chatbot Modal */}
      <AssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      {/* Side Drawer Menu */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentUser={currentUser}
        activeTab={activeTab}
        onTabChange={(tab) => handleTabChange(tab)}
        onLogout={handleLogout}
        onOpenWhatsApp={handleOpenWhatsApp}
        onShowWelcome={() => {
          setShowWelcomeScreen(true);
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }}
      />

    </div>
  );
}

