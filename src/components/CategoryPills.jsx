"use client";

import { siteConfig } from "@/data/siteConfig";

export default function CategoryPills() {
  return (
    <section className="bg-[#0e1935] border-y border-slate-800 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3">
          <p className="text-xs sm:text-sm font-semibold text-amber-400">
            تصفح الخدمات السريعة لشراء كافة المستلزمات بالمدينة المنورة:
          </p>
        </div>

        {/* Scrollable / Flexible Navigation Chips Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {siteConfig.categoryPills.map((pill, idx) => (
            <a
              key={idx}
              href={pill.target}
              className="bg-slate-900/90 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/30 hover:border-amber-400 px-4 py-2 rounded text-xs sm:text-sm font-bold transition-all shadow-md transform hover:-translate-y-0.5"
            >
              {pill.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
