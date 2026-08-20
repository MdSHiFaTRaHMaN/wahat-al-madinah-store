"use client";

import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageSquare } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 left-5 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 animate-pulse-whatsapp"
      >
        <MessageSquare className="w-7 h-7" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Call"
        className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 animate-pulse-glow"
      >
        <Phone className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
