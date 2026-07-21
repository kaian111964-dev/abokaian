import React, { useState } from 'react';
import { Briefcase, Eye, ExternalLink, Sparkles, Filter, X } from 'lucide-react';
import { PortfolioProject } from '../types';

interface PortfolioViewProps {
  projects: PortfolioProject[];
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ projects }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const tags = ['all', 'لوجو', 'متجر إلكتروني', 'حملة إعلانية', 'موشن جرافيك'];

  const filteredProjects = projects.filter(p => {
    if (selectedTag === 'all') return true;
    return p.tags.includes(selectedTag);
  });

  return (
    <div className="w-full space-y-6 pb-24 text-right">
      {/* Banner */}
      <div className="relative rounded-[28px] p-6 sm:p-8 bg-gradient-to-r from-[#062B7F] via-[#0A4DFF] to-[#1E40AF] text-white shadow-xl overflow-hidden border border-white/20">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold w-fit">
            <Briefcase className="w-3.5 h-3.5 text-blue-200" />
            <span>سجل الإنجازات والأعمال</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cairo']">
            معرض أعمال منصة أبو كيان الرقمية
          </h2>
          <p className="text-sm text-blue-100 max-w-xl font-medium">
            تصفح أبرز التصاميم والمواقع والحملات الإعلانية الناجحة التي نفذناها لعملائنا
          </p>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedTag === tag
                ? 'bg-[#062B7F] text-white shadow-md'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {tag === 'all' ? 'جميع الأعمال' : tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group bg-white rounded-[26px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-video overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#062B7F]">
                {project.category}
              </span>

              <div className="absolute bottom-3 right-3 left-3 text-white">
                <h3 className="font-bold text-base font-['Cairo']">{project.title}</h3>
                <span className="text-xs text-blue-200 font-medium">{project.clientName} ({project.year})</span>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0A4DFF] group-hover:underline flex items-center gap-1">
                <span>معاينة التفاصيل</span>
                <Eye className="w-3.5 h-3.5" />
              </span>

              <div className="flex gap-1.5">
                {project.tags.map((t, i) => (
                  <span key={i} className="text-[10px] font-semibold bg-gray-100 px-2 py-0.5 rounded-md text-gray-600">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-[28px] border border-gray-100 shadow-2xl p-6 text-right space-y-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-lg font-bold text-gray-900 font-['Cairo']">{activeModalProject.title}</h3>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100">
              <img src={activeModalProject.image} alt="" className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-2xl">
              {activeModalProject.description}
            </p>

            <div className="flex items-center justify-between text-xs font-bold text-gray-500 pt-2 border-t border-gray-100">
              <span>العميل: {activeModalProject.clientName}</span>
              <span>سنة التنفيذ: {activeModalProject.year}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
