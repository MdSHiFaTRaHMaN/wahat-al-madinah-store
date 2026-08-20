"use client";

import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft } from "lucide-react";

export default function ProcessSection({ onOpenValuationModal }) {
  return (
    <section className="py-16 md:py-20 bg-[#0b1329] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold px-3.5 py-1 rounded-full text-xs">
            خطوات بسيطة وسريعة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            كيف تتم عملية <span className="text-amber-400">البيع والتقييم</span>؟
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            4 خطوات نضمن لك من خلالها تجربة بيع سلسة وسريعة ودفع كاش مباشر
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-b from-[#0f182e] to-[#0d1629] border border-slate-800 p-6 rounded shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-amber-400 font-mono">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < siteConfig.processSteps.length - 1 && (
                <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowLeft className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Box under process */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/20 border border-amber-500/30 rounded p-6 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-amber-300">
            جاهز لبيع أثاثك أو مكيفاتك بأعلى سعر بالمدينة المنورة؟
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            أرسل لنا صور أغراضك عبر الواتساب وستصلك تسعيرة مجانية خلال دقائق معدودة!
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenValuationModal}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded text-sm transition-all"
            >
              احسب قيمة أثاثك الآن
            </button>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded text-sm transition-all"
            >
              تواصل مباشرة واتساب
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
