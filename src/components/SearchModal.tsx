import React, { useState } from 'react';
import { Search, X, ArrowLeft, Sparkles } from 'lucide-react';
import { ServiceItem, StoreApp } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  apps: StoreApp[];
  onSelectService: (service: ServiceItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  services,
  apps,
  onSelectService
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filteredServices = services.filter(s =>
    s.title.includes(query) || s.description.includes(query)
  );

  const filteredApps = apps.filter(a =>
    a.title.includes(query) || a.subtitle.includes(query)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-xl bg-white rounded-[28px] border border-gray-100 shadow-2xl p-6 text-right space-y-4 max-h-[80vh] flex flex-col">
        
        {/* Search Header */}
        <div className="relative">
          <input
            type="text"
            autoFocus
            placeholder="بحث عن خدمة، تطبيق، أو استفسار..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-14 pr-12 pl-12 rounded-2xl bg-gray-50 border border-gray-200 text-sm font-bold focus:outline-none focus:border-[#0A4DFF] text-right"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <button
            onClick={onClose}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto flex-1 space-y-4">
          {query && (
            <>
              {/* Services Results */}
              {filteredServices.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-gray-400">الخدمات المطابقة ({filteredServices.length})</h4>
                  {filteredServices.map(s => (
                    <div
                      key={s.id}
                      onClick={() => { onSelectService(s); onClose(); }}
                      className="p-3 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-100 flex items-center justify-between cursor-pointer transition-all"
                    >
                      <ArrowLeft className="w-4 h-4 text-[#0A4DFF]" />
                      <div>
                        <h5 className="font-bold text-xs text-gray-800">{s.title}</h5>
                        <p className="text-[10px] text-gray-500">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Apps Results */}
              {filteredApps.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-gray-400">تطبيقات المتجر ({filteredApps.length})</h4>
                  {filteredApps.map(a => (
                    <div
                      key={a.id}
                      className="p-3 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-100 flex items-center justify-between cursor-pointer transition-all"
                    >
                      <span className="text-xs font-bold text-[#0A4DFF]">{a.price}</span>
                      <div className="flex items-center gap-2">
                        <div>
                          <h5 className="font-bold text-xs text-gray-800">{a.title}</h5>
                          <p className="text-[10px] text-gray-500">{a.subtitle}</p>
                        </div>
                        <img src={a.image} className="w-8 h-8 rounded-lg object-cover" alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {!query && (
            <div className="py-12 text-center text-gray-400 space-y-1">
              <Search className="w-10 h-10 mx-auto stroke-1" />
              <p className="text-xs font-bold">اكتب كلمتك المفتاحية لبدء البحث المباشر</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
