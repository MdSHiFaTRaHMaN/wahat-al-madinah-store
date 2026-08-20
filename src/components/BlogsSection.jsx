"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function BlogsSection() {
  return (
    <section id="blogs" className="my-12 max-w-7xl mx-auto px-4 scroll-mt-24">
      {/* Title Banner */}
      <div className="bg-[#0284c7] text-white text-center py-3.5 rounded font-black text-xl sm:text-2xl shadow-md mb-8">
        تحديث التدوينة
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="bg-white border border-slate-200 rounded overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col justify-between text-right">
          <div>
            <div className="relative h-48 w-full bg-slate-100">
              <Image
                src="/images/furniture_buyer.webp"
                alt="شراء الاثاث المستعمل بالمدينة المنورة"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="p-5 space-y-3">
              <span className="text-xs font-semibold text-[#0284c7]">
                27 يونيو 2026
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                شراء الاثاث المستعمل بالمدينة المنورة بأعلى الأسعار
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                أفضل شركة شراء أثاث مستعمل بالمدينة المنورة. نشتري الكنب، غرف النوم، الدواليب، المكيفات، والأثاث المكتبي والمنزلي بأفضل الأسعار.
              </p>
            </div>
          </div>

          <div className="p-5 pt-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-block text-xs font-bold text-[#0284c7] hover:underline"
            >
              اقرأ المزيد ←
            </a>
          </div>
        </article>

        <article className="bg-white border border-slate-200 rounded overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col justify-between text-right">
          <div>
            <div className="relative h-48 w-full bg-slate-100">
              <Image
                src="/images/ac_stack.webp"
                alt="شراء مكيفات مستعملة بالمدينة المنورة"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="p-5 space-y-3">
              <span className="text-xs font-semibold text-[#0284c7]">
                25 يونيو 2026
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                نشتري المكيفات المستعملة بالمدينة المنورة (سبليت وشباك)
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                نشتري كافة أنواع أجهزة التبريد والمكيفات المستعملة والعطلانة بأفضل سعر بالسوق مع خدمات الفك والتحميل المباشر.
              </p>
            </div>
          </div>

          <div className="p-5 pt-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-block text-xs font-bold text-[#0284c7] hover:underline"
            >
              اقرأ المزيد ←
            </a>
          </div>
        </article>

        <article className="bg-white border border-slate-200 rounded overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col justify-between text-right">
          <div>
            <div className="relative h-48 w-full bg-slate-100">
              <Image
                src="/images/kitchen.webp"
                alt="شراء مطابخ ومعدات مستعملة"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="p-5 space-y-3">
              <span className="text-xs font-semibold text-[#0284c7]">
                20 يونيو 2026
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                شراء مطابخ ومعدات مطاعم مستعملة بالمدينة
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                تصفية شاملة وتأهيل المطابخ ومعدات المطاعم والاستانلس والدواليب بأسعار فورية نقداً.
              </p>
            </div>
          </div>

          <div className="p-5 pt-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-block text-xs font-bold text-[#0284c7] hover:underline"
            >
              اقرأ المزيد ←
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
