// app/components/ContactButtons.tsx
import { Phone, MessageCircle } from "lucide-react";

export default function ContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* --- Nút Gọi Điện --- */}
      <a
        href="tel:0819949968" // Thay số điện thoại của bạn vào đây
        className="group relative flex items-center justify-center w-14 h-14 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110"
        title="Gọi ngay"
      >
        {/* Hiệu ứng sóng lan tỏa (Ping animation) */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
        
        <Phone className="text-white relative z-10" size={24} />
        
        {/* Tooltip hiện chữ khi di chuột vào */}
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Gọi tư vấn
        </span>
      </a>

      {/* --- Nút Zalo --- */}
      <a
        href="https://zalo.me/0819949968" // Thay link Zalo của bạn vào đây
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
        title="Chat Zalo"
      >
        <MessageCircle className="text-white" size={28} />
        
        {/* Tooltip hiện chữ */}
        <span className="absolute right-16 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Chat Zalo
        </span>
      </a>
    </div>
  );
}