import { Tajawal, Cairo } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "مؤسسة واحة المدينة | شراء الأثاث المستعمل والسكراب بأعلى الأسعار بالمدينة المنورة",
  description: "نشتري الأثاث المستعمل، المكيفات، معدات المطاعم، الأجهزة الكهربائية، غرف النوم والسكراب بأفضل الأسعار بالمدينة المنورة مع الفك والنقل المباشر والدفع النقدي الفوري.",
  keywords: ["شراء اثاث مستعمل بالمدينة المنورة", "نشتري الاثاث المستعمل", "شراء مكيفات مستعملة بالمدينة", "شراء معدات مطاعم مستعملة", "مؤسسة واحة المدينة", "شراء سكراب بالمدينة المنورة"],
  openGraph: {
    title: "مؤسسة واحة المدينة | لشراء الأثاث المستعمل والسكراب",
    description: "أفضل محل شراء أثاث مستعمل ومكيفات ومعدات مطاعم بالمدينة المنورة بأعلى سعر ودفع نقدي فوري.",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${cairo.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0b1329] text-slate-100 font-sans selection:bg-[#c59b27] selection:text-white">
        {children}
      </body>
    </html>
  );
}
