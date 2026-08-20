"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#091124] text-slate-300 border-t border-slate-800 pt-12 pb-24 md:pb-12 text-right">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">

          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative w-52 h-14">
              <Image
                src="/logo.png"
                alt="شراء الاثاث المستعمل بالمدينة المنورة"
                fill
                unoptimized
                className="object-contain object-right"
              />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg">
              شركة شراء الاثاث المستعمل بالمدينة المنورة. نشتري جميع أنواع الأثاث المنزلي والمكتبي، المكيفات، غرف النوم، المطابخ، ومعدات المطاعم بأفضل الأسعار مع الفك والنقل المباشر مجاناً.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white border-r-4 border-[#0284c7] pr-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium">
              {siteConfig.navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#0284c7] transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white border-r-4 border-[#0284c7] pr-2">
              التواصل المباشر
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <p>المدينة المنورة - المملكة العربية السعودية</p>
              <p>خدمة 24/7 طوال أيام الأسبوع</p>
              <p className="font-bold text-[#eab308] dir-ltr text-sm pt-1">
                📞 {siteConfig.phoneFormatted}
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center">
          <p>© {year} جميع الحقوق محفوظة | شراء الاثاث المستعمل بالمدينة المنورة</p>
          <p className="text-slate-400">مؤسسة واحة المدينة</p>
        </div>

      </div>
    </footer>
  );
}
