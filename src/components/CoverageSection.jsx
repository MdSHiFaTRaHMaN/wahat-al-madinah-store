"use client";

import { siteConfig } from "@/data/siteConfig";
import { MapPin, Phone, MessageSquare } from "lucide-react";

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-16 bg-[#0c1630] border-t border-slate-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold px-3.5 py-1 rounded-full text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>نغطيك أينما كنت بالمدينة المنورة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            نصلك في جميع <span className="text-amber-400">أحياء المدينة المنورة</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            فريق السيارات والدبابات والفك الميداني جاهز للوصول إليك بسرعة وتلبية طلبك في أي حي
          </p>
        </div>

        {/* Areas Chips Grid */}
        <div className="bg-slate-900/80 border border-slate-800 rounded p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {siteConfig.coverageAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-[#111c38] hover:bg-amber-500/20 border border-slate-700/60 hover:border-amber-400 p-3 rounded text-center text-xs sm:text-sm font-medium text-slate-200 hover:text-amber-300 transition-all flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
            <div>
              <p className="text-white font-bold text-base">
                هل حيُّك خارج القائمة الموضحة؟
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                لا تقلق، نغطي جميع الأحياء والمناطق المجاورة للمدينة المنورة على مدار 24 ساعة.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded text-xs sm:text-sm flex items-center gap-1.5 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>طلب سيارة نقل</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('السلام عليكم، هل تغطون موقعي بالمدينة المنورة؟')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded text-xs sm:text-sm flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>إرسال الموقع بالواتساب</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
