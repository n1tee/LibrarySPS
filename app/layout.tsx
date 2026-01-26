// app/layout.tsx
import type { Metadata } from "next";
// 1. Import font Be Vietnam Pro
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import ContactButtons from "./components/ContactButtons";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher"; // (Sửa lại đường dẫn cho đúng với thư mục của bạn)

// 2. Cấu hình font
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "SPS - Mẫu giao diện Website",
  description: "Website mẫu chuyên nghiệp",

  icons: {
    icon: "/sps_logo.png", // Đường dẫn tới file logo trong thư mục public
    shortcut: "/sps_logo.png",
    apple: "/sps_logo.png", // Icon cho iPhone/iPad khi lưu web ra màn hình chính
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      {/* 3. Áp dụng biến font và màu nền tổng thể */}
      <body className={`${beVietnamPro.variable} font-sans bg-bg-main text-gray-800`}>
        {children}
        <Footer />
        <ContactButtons />
      </body>
    </html>
  );
}