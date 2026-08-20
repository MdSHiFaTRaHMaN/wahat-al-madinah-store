"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* RIGHT SIDE (First in RTL): Call Button & Nav Links */}
        <div className="flex items-center gap-6">
          {/* Call Button */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold px-5 py-2.5 rounded text-sm hidden sm:flex items-center gap-2 shadow transition-all"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span className="dir-ltr">{siteConfig.phoneFormatted}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-bold text-slate-700 text-base">
            {siteConfig.navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-[#0284c7] transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-[#0284c7] text-white p-2 rounded text-xs font-bold"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* LEFT SIDE (Last in RTL): Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-48 sm:w-56 h-12">
            <Image
              src="/logo.png"
              alt="شراء الاثاث المستعمل بالمدينة المنورة"
              fill
              priority
              unoptimized
              className="object-contain object-left"
            />
          </div>
        </Link>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 text-white border-t border-slate-800 px-4 py-4 space-y-3">
          {siteConfig.navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-200 hover:text-[#0284c7]"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
