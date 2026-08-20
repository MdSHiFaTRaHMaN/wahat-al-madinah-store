"use client";

import { siteConfig } from "@/data/siteConfig";
import { DollarSign, Truck, Zap, Clock, ShieldCheck } from "lucide-react";

const iconMap = {
  DollarSign: DollarSign,
  Truck: Truck,
  Zap: Zap,
  Clock: Clock,
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0b1329] via-[#0e1938] to-[#0b1329] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-400 text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>لماذا نحن خيارك الأول؟</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            لماذا تختار <span className="text-amber-400">مؤسسة واحة المدينة</span>؟
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            نقدم لك تجربة مريحة ومربحة عند بيع أثاثك أو معداتك المستعملة بدون تعقيدات
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;

            return (
              <div
                key={index}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-6 rounded shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
