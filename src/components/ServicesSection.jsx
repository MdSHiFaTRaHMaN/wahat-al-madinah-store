"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageSquare, Check, Sparkles } from "lucide-react";

export default function ServicesSection({ onOpenValuationModal }) {
  return (
    <section className="py-16 md:py-24 bg-[#0b1329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm">
            خدماتنا المتخصصة بالمدينة المنورة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            ماذا <span className="text-amber-400">نشتري</span> في واحة المدينة؟
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            نحن نشتري جميع أنواع الأثاث والأجهزة والمعدات المستعملة والسكراب بأعلى سعر بالسوق وبأسهل إجراءات ودون أي عناء.
          </p>
        </div>

        {/* Services Grid & Alternate Cards */}
        <div className="space-y-16">
          {siteConfig.services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 bg-gradient-to-br from-[#0f172a] via-[#111e3b] to-[#0f172a] border border-slate-800 rounded overflow-hidden shadow-2xl hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>

                  {/* Service Image Container */}
                  <div className={`lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0f172a]/60" />

                    {/* Badge Overlay */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-black px-3.5 py-1.5 rounded-full text-xs shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                      <span>{service.badge}</span>
                    </div>
                  </div>

                  {/* Service Text Details */}
                  <div className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-amber-400 font-medium text-sm sm:text-base">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 bg-slate-900/60 p-2.5 rounded border border-slate-800">
                          <div className="bg-amber-400/20 text-amber-400 p-1 rounded">
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-slate-200">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap gap-3">
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded text-sm flex items-center gap-2 transition-all shadow-md shadow-red-600/30"
                      >
                        <Phone className="w-4 h-4 fill-white" />
                        <span>اتصل للبيع الآن</span>
                      </a>

                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`السلام عليكم، أرغب في تقييم وبيع: ${service.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded text-sm flex items-center gap-2 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>أرسل صورة بالواتساب</span>
                      </a>

                      <button
                        onClick={onOpenValuationModal}
                        className="bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 font-bold px-4 py-3 rounded text-sm transition-all"
                      >
                        طلب تثمين
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
