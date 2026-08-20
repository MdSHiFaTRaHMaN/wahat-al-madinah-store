"use client";

import { siteConfig } from "@/data/siteConfig";
import { Star, Quote, UserCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#0b1329] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold px-3.5 py-1 rounded-full text-xs">
            آراء عملائنا بالمدينة المنورة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            ماذا <span className="text-amber-400">يقولون عنا</span>؟
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            تقييمات وثقة عملائنا في خدماتنا لشراء الأثاث والمكيفات بالمدينة المنورة
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 p-6 rounded shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all relative"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-amber-500/20" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <span>{t.name}</span>
                  </h4>
                  <p className="text-slate-500 text-xs">{t.location}</p>
                </div>
                <span className="text-slate-500 text-xs">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
