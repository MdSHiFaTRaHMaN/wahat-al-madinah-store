"use client";

import { siteConfig } from "@/data/siteConfig";

export default function HeroBanner() {
  return (
    <section id="hero" className="my-6 max-w-7xl w-full mx-auto px-6">
      <div className="bg-[#091124] text-white rounded p-6 sm:p-10 border border-slate-800 shadow-2xl text-center space-y-6">

        {/* Golden Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#eab308] leading-tight">
          شراء الاثاث المستعمل بالمدينة المنورة
        </h1>

        {/* Content Paragraph */}
        <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-normal">
          مؤسسة واحة المدينة نقدم مجموعة متكاملة من الخدمات سواء كنت ترغب في بيع أثاثك المستعمل، أو التخلص من العفش القديم. شركة شراء الاثاث المستعمل بالمدينة المنورة نشتري اثاثك المستخدم مثل غرف نوم، المكيفات، المطابخ، معدات المطاعم، اثاث الفنادق، سكراب، نرسل مندوباً متخصصاً لتقييم الأثاث وشرائه فورآ حيث نعتمد على أمانة التسعير في حراج المدينة المنورة نوفر خدمة الفك والنقل المجاني والدفع الفوري بأفضل الأسعار اتصل بنا.
        </p>

        {/* CTA Buttons Box */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          {/* Phone Call Gold Button */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-[#eab308] hover:bg-[#d97706] text-slate-950 font-black text-lg px-8 py-3.5 rounded shadow-lg transition-all transform hover:-translate-y-0.5 dir-ltr"
          >
            {siteConfig.phoneFormatted}
          </a>

          {/* WhatsApp Red Button */}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-black text-lg px-8 py-3.5 rounded shadow-lg transition-all transform hover:-translate-y-0.5 animate-pulse-glow"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
