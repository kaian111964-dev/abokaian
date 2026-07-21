import React from 'react';
import { X, Bell, Check, Trash2, Sparkles } from 'lucide-react';
import { NotificationItem } from '../types';

interface NotificationsDrawerProps {
  notifications: NotificationItem[];
  isOpen: boolean;
  onClose: () => void;
  onMarkAllRead: () => void;
  onClearAll: () => void;
}

export const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({
  notifications,
  isOpen,
  onClose,
  onMarkAllRead,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md h-full bg-white border-r border-gray-100 shadow-2xl flex flex-col text-right animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-2">
            <button
              onClick={onMarkAllRead}
              className="p-2 text-xs font-bold text-[#0A4DFF] hover:bg-blue-50 rounded-xl transition-colors"
              title="تحديد الكل كقروء"
            >
              <Check className="w-4 h-4 inline ml-1" />
              قراءة الكل
            </button>
            <button
              onClick={onClearAll}
              className="p-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
              title="مسح الكل"
            >
              <Trash2 className="w-4 h-4 inline ml-1" />
              مسح
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <h3 className="font-bold text-gray-900 font-['Cairo'] text-base">مركز الإشعارات</h3>
              <span className="text-[11px] text-gray-500 font-medium">تنبيهات منصة أبو كيان</span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Notifications Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {notifications.length === 0 ? (
            <div className="py-20 text-center text-gray-400 space-y-2">
              <Bell className="w-12 h-12 mx-auto stroke-1" />
              <p className="text-sm font-bold">لا توجد إشعارات حالياً</p>
            </div>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`p-4 rounded-2xl border transition-all space-y-1 ${
                  n.read
                    ? 'bg-gray-50/60 border-gray-100 opacity-75'
                    : 'bg-blue-50/40 border-blue-100 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-medium">{n.time}</span>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900 font-['Cairo']">{n.title}</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{n.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
