"use client";

import { siteConfig } from "@/data/siteConfig";

export default function PillsNav() {
  return (
    <section className="my-8 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {siteConfig.pills.map((pill, idx) => (
          <a
            key={idx}
            href={pill.target}
            className="border-2 border-[#0284c7] text-[#0284c7] hover:bg-[#0284c7] hover:text-white font-bold text-sm sm:text-base text-center py-3 px-2 rounded transition-all shadow-sm flex items-center justify-center min-h-[54px]"
          >
            {pill.label}
          </a>
        ))}
      </div>
    </section>
  );
}
