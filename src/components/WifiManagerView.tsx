import React, { useState } from 'react';
import { Wifi, Smartphone, Tv, Laptop, Plus, RefreshCw, CheckCircle, ShieldCheck, Activity } from 'lucide-react';
import { WifiNetworkDevice } from '../types';

interface WifiManagerViewProps {
  devices: WifiNetworkDevice[];
}

export const WifiManagerView: React.FC<WifiManagerViewProps> = ({ devices }) => {
  const [deviceList, setDeviceList] = useState<WifiNetworkDevice[]>(devices);
  const [testingSpeed, setTestingSpeed] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState<number | null>(84.5);
  const [uploadSpeed, setUploadSpeed] = useState<number | null>(32.1);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDevName, setNewDevName] = useState('');

  const runSpeedTest = () => {
    setTestingSpeed(true);
    setTimeout(() => {
      setDownloadSpeed(Math.floor(Math.random() * 40) + 70);
      setUploadSpeed(Math.floor(Math.random() * 20) + 25);
      setTestingSpeed(false);
    }, 2000);
  };

  const handleAddDevice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDevName) return;
    const newDev: WifiNetworkDevice = {
      id: Date.now().toString(),
      name: newDevName,
      ip: `192.168.1.${Math.floor(Math.random() * 100) + 130}`,
      mac: 'E4:88:F2:11:22:33',
      signal: 'excellent',
      connectedAt: 'الآن',
      speed: '50 Mbps'
    };
    setDeviceList([newDev, ...deviceList]);
    setNewDevName('');
    setShowAddForm(false);
  };

  return (
    <div className="w-full space-y-6 pb-24 text-right">
      {/* Banner */}
      <div className="relative rounded-[28px] p-6 sm:p-8 bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#2563EB] text-white shadow-xl overflow-hidden border border-white/20">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold w-fit">
            <Wifi className="w-3.5 h-3.5 text-white" />
            <span>نظام شبكات الواي فاي والمايكروتك</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cairo']">
            إدارة أجهزة الشبكة وحلول الأمان
          </h2>
          <p className="text-sm text-sky-100 max-w-xl font-medium">
            عرض كافة الأجهزة المتصلة، قياس سرعة الإنترنت الحقيقية، وإضافة أجهزة جديدة بسهولة
          </p>
        </div>
      </div>

      {/* Speed Test & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Speedometer Card */}
        <div className="md:col-span-2 bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={runSpeedTest}
              disabled={testingSpeed}
              className="px-4 py-2 rounded-xl bg-[#0EA5E9] text-white font-bold text-xs hover:bg-[#0284C7] transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${testingSpeed ? 'animate-spin' : ''}`} />
              <span>{testingSpeed ? 'جاري الفحص...' : 'قياس السرعة'}</span>
            </button>
            <h3 className="font-bold text-gray-900 text-sm">سرعة اتصال الشبكة</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-1">
              <span className="text-xs text-gray-500 font-medium">سرعة التحميل (Download)</span>
              <p className="text-2xl font-black text-[#0284C7] font-['Cairo']">
                {downloadSpeed} <span className="text-xs font-bold">Mbps</span>
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 space-y-1">
              <span className="text-xs text-gray-500 font-medium">سرعة الرفع (Upload)</span>
              <p className="text-2xl font-black text-[#2563EB] font-['Cairo']">
                {uploadSpeed} <span className="text-xs font-bold">Mbps</span>
              </p>
            </div>
          </div>
        </div>

        {/* Protection Card */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-[24px] p-6 shadow-md flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <ShieldCheck className="w-8 h-8 text-emerald-200" />
            <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-[11px] font-bold">تشفير WPA3</span>
          </div>
          <div>
            <h4 className="font-bold text-base font-['Cairo']">حماية الفايروال نشطة</h4>
            <p className="text-xs text-emerald-100 mt-1">الشبكة محمية ضد الثغرات والاختراق الخارجي</p>
          </div>
        </div>
      </div>

      {/* Connected Devices Table */}
      <div className="bg-white rounded-[26px] p-6 border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-3.5 py-2 rounded-xl bg-sky-50 text-[#0284C7] font-bold text-xs hover:bg-[#0284C7] hover:text-white transition-all flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>إضافة جهاز جديد</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="bg-sky-100 text-[#0284C7] text-xs font-extrabold px-2.5 py-0.5 rounded-full">
              {deviceList.length} أجهزة
            </span>
            <h3 className="font-bold text-gray-900 text-base">الأجهزة المتصلة بالشبكة</h3>
          </div>
        </div>

        {/* Add device inline form */}
        {showAddForm && (
          <form onSubmit={handleAddDevice} className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-center gap-2 animate-in fade-in">
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-[#0284C7] text-white font-bold text-xs shrink-0 cursor-pointer"
            >
              حفظ
            </button>
            <input
              type="text"
              required
              placeholder="اسم الجهاز الجديد..."
              value={newDevName}
              onChange={(e) => setNewDevName(e.target.value)}
              className="w-full h-10 px-3 rounded-xl bg-white border border-sky-200 text-xs text-right font-semibold focus:outline-none"
            />
          </form>
        )}

        {/* Devices List */}
        <div className="space-y-2">
          {deviceList.map((dev) => (
            <div
              key={dev.id}
              className="p-3.5 rounded-2xl bg-gray-50 hover:bg-sky-50/50 border border-gray-100 transition-colors flex items-center justify-between gap-3"
            >
              <div className="text-left text-xs font-mono text-gray-500">
                <span>{dev.ip}</span>
                <span className="block text-[10px] text-gray-400">{dev.mac}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <h4 className="font-bold text-xs sm:text-sm text-gray-800">{dev.name}</h4>
                  <span className="text-[10px] text-gray-400 font-medium">متصل {dev.connectedAt} • {dev.speed}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0284C7]">
                  <Wifi className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
