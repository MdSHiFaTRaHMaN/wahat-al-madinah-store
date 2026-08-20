"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export default function TestimonialsSection() {
  return (
    <section className="my-12 max-w-7xl mx-auto px-4">
      {/* Title Banner */}
      <div className="bg-[#0284c7] text-white text-center py-3.5 rounded font-black text-xl sm:text-2xl shadow-md mb-8">
        تقييمات عملاء سكرب زون المدينة
      </div>

      {/* Grid of Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteConfig.testimonials.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-slate-200 rounded p-5 shadow-lg hover:shadow-xl transition-shadow space-y-4 text-center flex flex-col justify-between"
          >
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[#0284c7] shadow-sm">
              <Image
                src={review.image}
                alt="تقييم عميل"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
              "{review.text}"
            </p>
            <div className="text-amber-500 font-bold text-sm">
              ★★★★★
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
