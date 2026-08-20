"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageSquare, Shield, Truck, DollarSign, CheckCircle2, Star } from "lucide-react";

export default function Hero({ onOpenValuationModal }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#091124] via-[#0b1836] to-[#0b1329] pt-8 pb-16 md:py-20 border-b border-slate-800/80">

      {/* Background Decorative Lighting Circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Right Column (Arabic text content & CTAs) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-amber-300 text-xs sm:text-sm font-bold shadow-inner">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <span>المؤسسة الأفضل والأنسب بالمدينة المنورة</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              نشتري <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">الأثاث المستعمل والسكراب</span> بأعلى الأسعار
            </h1>

            {/* Description Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              مؤسسة <strong className="text-amber-400 font-bold">واحة المدينة</strong> لشراء وتثمين الأثاث المنزلي والكتبي، المكيفات الشغالة والعطلانة، معدات المطاعم، والأجهزة الكهربائية بالمدينة المنورة. خدمة فك ونقل فورية ودفع نقدي كاش من باب منزلك.
            </p>

            {/* Key Value Props Pills */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded">
                <DollarSign className="w-4 h-4 text-amber-400" />
                <span>أعلى تقييم مالي</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>فك ونقل مجاني 100%</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>دفع نقدي فوري</span>
              </div>
            </div>

            {/* Call To Action Buttons (Matching Red & Gold/Green from reference images) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

              {/* Call Now Button (Red) */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white text-lg font-black px-8 py-4 rounded shadow-xl shadow-red-900/40 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 animate-pulse-glow"
              >
                <Phone className="w-6 h-6 fill-white" />
                <span>اتصل الآن: {siteConfig.phoneFormatted}</span>
              </a>

              {/* WhatsApp Button (Green / Gold) */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-lg font-bold px-7 py-4 rounded shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
              >
                <MessageSquare className="w-6 h-6" />
                <span>تواصل عبر الواتساب</span>
              </a>

            </div>

            {/* Sub text note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>معاينة فورية مجانية في جميع أحياء المدينة المنورة والمناطق المجاورة</span>
            </div>

          </div>

          {/* Left Column (Logo Hero Showcase Card & Features) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-br from-slate-900/90 to-[#0d1e3d]/90 border border-slate-700/80 rounded p-6 sm:p-8 shadow-2xl shadow-black/60">

              {/* Highlight Ribbon */}
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black px-4 py-1 rounded-full shadow-lg">
                مؤسسة واحة المدينة المعتمدة
              </div>

              {/* Large Transparent Logo Showcase */}
              <div className="relative w-full h-44 sm:h-52 my-4 flex items-center justify-center bg-slate-950/40 rounded p-4 border border-amber-500/20 shadow-inner">
                <Image
                  src="/logo.png"
                  alt="شعار مؤسسة واحة المدينة لشراء الأثاث المستعمل"
                  fill
                  priority
                  unoptimized
                  className="object-contain p-2"
                />
              </div>

              {/* Feature Checklist inside card */}
              <div className="space-y-3 pt-2 text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>شراء كنب ومجالس ودواليب وغرف نوم مستعملة.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>شراء جميع أنواع المكيفات (سبليت - شباك - مركزي).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>شراء وتصفية معدات المطاعم والكافيهات بالكامل.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>شراء جميع أنواع السكراب والخردة والمعادن.</span>
                </div>
              </div>

              {/* Quick Action inside hero card */}
              <button
                onClick={onOpenValuationModal}
                className="w-full mt-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-4 rounded text-center shadow-lg transition-all"
              >
                أرسل صور أثاثك لتقييمه فوراً
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
