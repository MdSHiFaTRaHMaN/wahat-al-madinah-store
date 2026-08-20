"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { X, MessageSquare, Phone, Send, Sparkles } from "lucide-react";

export default function ValuationModal({ isOpen, onClose }) {
  const [itemType, setItemType] = useState("شراء أثاث مستعمل");
  const [district, setDistrict] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `السلام عليكم مؤسسة واحة المدينة 👋\n\nأرغب في تقييم وبيع:\nنوع الأغراض: ${itemType}\nالحي بالمدينة: ${district || "لم يحدد"}\nالتفاصيل: ${description || "لا يوجد ملاحظات إضافية"}\n\nيرجى التواصل معي وتزويدي بتقدير السعر المالي.`;
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0f182e] border border-slate-700 rounded p-6 sm:p-8 shadow-2xl space-y-6 text-right">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/30 text-amber-400 px-3 py-1 rounded-full text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>خدمة مجانية 100%</span>
          </div>
          <h3 className="text-2xl font-black text-white">
            طلب تقييم مجاني للأثاث والمعدات
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            أدخل تفاصيل أغراضك بالمدينة المنورة ليصلك تثمين السعر فائق السرعة عبر الواتساب:
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">

          <div>
            <label className="block text-slate-300 font-bold mb-1.5">
              نوع الأغراض المراد بيعها *
            </label>
            <select
              value={itemType}
              onChange={(e) => setItemType(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-amber-400"
            >
              <option value="شراء أثاث مستعمل (مجالس - كنب - طاولات)">أثاث منزلي ومجالس مستعملة</option>
              <option value="شراء مكيفات مستعملة (سبليت - شباك)">مكيفات (سبليت / شباك / مركزي)</option>
              <option value="شراء غرف نوم مستعملة">غرف نوم وتجهيزات خشبية</option>
              <option value="شراء معدات مطاعم وكافيهات">معدات مطاعم وكافيهات واستانلس</option>
              <option value="شراء الأجهزة الكهربائية (ثلاجات - غسالات)">أجهزة كهربائية ومنزلية</option>
              <option value="شراء السكراب والخردة والمعادن">سكراب وخردة ومعادن</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-bold mb-1.5">
              اسم الحي بالمدينة المنورة
            </label>
            <input
              type="text"
              placeholder="مثال: العزيزية / سلطانة / شوران"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-bold mb-1.5">
              تفاصيل إضافية / الحالة
            </label>
            <textarea
              rows="3"
              placeholder="اذكر عدد القطع، حالتهم، أو أي ملاحظات..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
            />
          </div>

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded shadow-lg flex items-center justify-center gap-2 text-sm transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>إرسال الطلب عبر الواتساب تلقائياً</span>
            </button>

            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded flex items-center justify-center gap-2 text-xs transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>أو الاتصال المباشر على المندوب</span>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
}
