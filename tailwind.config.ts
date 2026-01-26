// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Đây là mã màu tôi trích xuất từ ảnh của bạn
        brand: {
          DEFAULT: "#0F4C81", // Màu xanh đậm chủ đạo (Logo & Nút Active)
          light: "#F0F8FF",   // Màu nền xanh nhạt (Cho các thẻ tag)
          dark: "#0a355c",    // Màu khi hover
        },
        bg: {
          main: "#F9FAFB",    // Màu nền tổng thể xám rất nhạt
        }
      },
      fontFamily: {
        sans: ['var(--font-be-vietnam-pro)'], // Khai báo font mới
      },
    },
  },
  plugins: [],
};
export default config;