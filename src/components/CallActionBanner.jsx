"use client";

import { siteConfig } from "@/data/siteConfig";

export default function CallActionBanner() {
  return (
    <section id="contact-banner" className="my-8 max-w-7xl mx-auto px-4">
      <a
        href={`tel:${siteConfig.phone}`}
        className="block bg-[#0284c7] hover:bg-[#0369a1] font-medium text-white text-2xl sm:text-3xl py-4 px-10 rounded shadow-md text-center transition-colors"
      >
        اتصل بنا
      </a>
    </section>
  );
}
