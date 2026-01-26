"use client";

import { useState, useEffect } from "react";
import { templates } from "@/app/data/templates";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Smartphone, Tablet, Monitor, X, ShoppingCart, 
  ChevronLeft, ExternalLink, Loader2 
} from "lucide-react";

export default function LivePreview({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  // 1. Tìm template tương ứng với ID trên URL
  const template = templates.find((t) => t.id === params.id);

  // 2. State quản lý chế độ xem (Desktop, Tablet, Mobile)
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [isLoading, setIsLoading] = useState(true);

  // Nếu không tìm thấy template thì báo lỗi 404
  if (!template) {
    return notFound();
  }

  // Hàm tính chiều rộng của khung Iframe dựa trên chế độ xem
  const getFrameStyle = () => {
    switch (viewMode) {
      case "mobile": return { width: "375px", height: "100%" }; // Kích thước iPhone
      case "tablet": return { width: "768px", height: "100%" }; // Kích thước iPad
      default: return { width: "100%", height: "100%" };        // Full màn hình
    }
  };

  return (
    // Dùng fixed inset-0 z-[9999] để trang này đè lên toàn bộ Header/Footer cũ của web
    <div className="fixed inset-0 z-[9999] flex flex-col bg-gray-100 font-sans h-screen w-screen overflow-hidden">
      
      {/* --- PHẦN 1: THANH CÔNG CỤ (HEADER) --- */}
      <header className="h-16 bg-[#0F4C81] text-white flex justify-between items-center px-4 shadow-md shrink-0">
        
        {/* Bên trái: Logo & Nút Quay lại */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition px-3 py-2 rounded-lg hover:bg-white/10">
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Quay lại thư viện</span>
          </Link>
          <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
          <span className="font-bold text-lg truncate max-w-[150px] sm:max-w-[250px]">
            {template.title}
          </span>
        </div>

        {/* Ở giữa: Bộ chuyển đổi thiết bị (Responsive Switcher) */}
        <div className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-lg">
          <button 
            onClick={() => setViewMode("desktop")}
            className={`p-2 rounded-md transition ${viewMode === 'desktop' ? 'bg-white text-[#0F4C81]' : 'hover:bg-white/10 text-white'}`}
            title="Máy tính"
          >
            <Monitor size={20} />
          </button>
          <button 
            onClick={() => setViewMode("tablet")}
            className={`p-2 rounded-md transition ${viewMode === 'tablet' ? 'bg-white text-[#0F4C81]' : 'hover:bg-white/10 text-white'}`}
            title="Máy tính bảng"
          >
            <Tablet size={20} />
          </button>
          <button 
            onClick={() => setViewMode("mobile")}
            className={`p-2 rounded-md transition ${viewMode === 'mobile' ? 'bg-white text-[#0F4C81]' : 'hover:bg-white/10 text-white'}`}
            title="Điện thoại"
          >
            <Smartphone size={20} />
          </button>
        </div>

        {/* Bên phải: Giá tiền & Nút Mua */}
        <div className="flex items-center gap-3">
          
          <a 
            href="https://spsmarketing.de/contact-us/" 
            target="_blank"
            className="bg-[#00A651] hover:bg-[#008f45] text-white px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition shadow-lg animate-in fade-in"
          >
            <ShoppingCart size={16} /> <span className="hidden sm:inline">Mua ngay</span>
          </a>
          
          {/* Nút tắt Frame (dẫn ra trang gốc nếu khách muốn xem tab mới) */}
          <a 
             href={template.demoUrl} 
             target="_blank"
             title="Mở tab mới"
             className="p-2 hover:bg-white/10 rounded-full transition text-white/80 hover:text-white"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </header>

      {/* --- PHẦN 2: KHUNG HIỂN THỊ WEB (IFRAME) --- */}
      <div className="flex-1 w-full bg-[#E5E5E5] flex justify-center overflow-hidden relative">
        
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 z-0">
            <Loader2 size={40} className="animate-spin text-[#0F4C81] mb-2" />
            <p>Đang tải giao diện...</p>
          </div>
        )}

        {/* Khung chứa Iframe */}
        <div 
          className="transition-all duration-500 ease-in-out bg-white shadow-2xl relative z-10 origin-top"
          style={getFrameStyle()} // Áp dụng kích thước ở đây
        >
          <iframe
            src={template.demoUrl}
            className="w-full h-full border-0"
            title="Live Preview"
            onLoad={() => setIsLoading(false)} // Tắt loading khi tải xong
          />
        </div>
      </div>
    </div>
  );
}