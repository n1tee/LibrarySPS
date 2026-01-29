"use client";

import { useParams, useRouter } from "next/navigation";
import { templates } from "@/app/data/templates";
import { ArrowLeft, ExternalLink, CheckCircle, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function DemoPage() {
  const params = useParams();
  const router = useRouter();
  const [template, setTemplate] = useState<any>(null);

  useEffect(() => {
    if (params?.id) {
      const idFromUrl = Number(params.id);
      const found = templates.find((t) => t.id === idFromUrl);
      setTemplate(found);
    }
  }, [params]);

  // Hàm xử lý khi bấm nút "Liên hệ"
  const handleSelectTemplate = () => {
    window.open('https://spsmarketing.de/contact-us/', '_blank');
  };

  // Hàm xử lý mở Demo
  const handleViewDemo = () => {
    if (template?.demoUrl) {
      window.open(template.demoUrl, '_blank');
    }
  };

  if (!template) return <div className="text-center py-20 text-gray-500">Đang tải dữ liệu...</div>;

  return (
    <div className="h-screen flex flex-col bg-gray-50 font-sans">

      {/* --- HEADER --- */}
      <header className="h-16 bg-white border-b flex items-center justify-between px-4 lg:px-8 shadow-sm z-50 shrink-0">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-[#0F4C81] font-semibold transition"
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline">Quay lại trang chủ</span>
        </button>

        <h1 className="font-bold text-gray-800 text-lg hidden md:block truncate max-w-md">
          {template.title}
        </h1>

        <button
          onClick={handleSelectTemplate}
          className="bg-[#0F4C81] hover:bg-[#09355E] text-white px-5 py-2 rounded-full font-bold shadow-md transition-colors text-sm sm:text-base"
        >
          Liên Hệ Ngay
        </button>
      </header>

      {/* --- BODY: NỘI DUNG CHI TIẾT --- */}
      <div className="flex-1 w-full overflow-hidden p-4 lg:p-8 flex items-center justify-center">
        <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row h-full max-h-[85vh] lg:h-[700px]">

          {/* 1. CỘT TRÁI: ẢNH REVIEW (Giữ nguyên) */}
          <div className="w-full lg:w-3/5 bg-gray-100 relative h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-gray-200 group overflow-hidden shrink-0">
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Lớp phủ */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={handleViewDemo}
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-gray-100 transform hover:scale-105 transition"
              >
                <Eye size={20} /> Xem Demo
              </button>
            </div>
          </div>

          {/* 2. CỘT PHẢI: NỘI DUNG (ĐÃ SỬA LẠI CẤU TRÚC) */}
          <div className="w-full lg:w-2/5 flex flex-col h-full bg-white">
            
            {/* --- A. PHẦN ĐẦU (Cố định): Badges & Title --- */}
            <div className="p-6 pb-2 lg:p-10 lg:pb-2 flex-none">
                <div className="mb-4 flex flex-wrap gap-2">
                    {/* Category Badge */}
                    <span className="bg-blue-50 text-[#0F4C81] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                        {template.category}
                    </span>
                    
                    {/* Package Badge (Logic màu sắc) */}
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm
                        ${template.package === 'Essential' ? 'bg-[#00A651]' : 
                          template.package === 'Advanced' ? 'bg-[#0F4C81]' : 'bg-orange-500' }
                    `}>
                        {template.package === 'Essential' ? 'Gói Essential' : 
                         template.package === 'Advanced' ? 'Gói Advanced' : 'Gói Professional'}
                    </span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {template.title}
                </h2>
            </div>

            {/* --- B. PHẦN GIỮA (Cuộn dọc): Description & Features --- */}
            <div className="flex-1 overflow-y-auto p-6 pt-4 lg:p-10 lg:pt-6 space-y-6 custom-scrollbar">
                <p className="text-gray-600 text-lg leading-relaxed">
                    {template.description || "Mẫu giao diện chuyên nghiệp, được tối ưu hóa chuẩn SEO và trải nghiệm người dùng (UX/UI), giúp tăng tỷ lệ chuyển đổi cho doanh nghiệp của bạn."}
                </p>

                {/* Danh sách tính năng */}
                {template.features && template.features.length > 0 && (
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Tính năng nổi bật:</h3>
                        <div className="space-y-3">
                            {template.features.map((feature: string, index: number) => (
                                <div key={index} className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle size={18} className="text-green-500 shrink-0 mt-1" />
                                    <span className="text-base font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* --- C. PHẦN CUỐI (Cố định): Nút bấm --- */}
            <div className="p-6 pt-4 lg:p-10 lg:pt-4 flex-none mt-auto bg-white border-t border-gray-50">
                <div className="flex flex-col gap-3">
                    <button 
                        onClick={handleViewDemo}
                        className="w-full bg-white border-2 border-[#0F4C81] text-[#0F4C81] py-3.5 rounded-xl font-bold text-lg hover:bg-blue-50 transition flex items-center justify-center gap-2 group"
                    >
                        <Eye size={20} className="group-hover:scale-110 transition-transform"/>
                        Xem Demo Trực Tiếp
                    </button>

                    <button 
                        onClick={handleSelectTemplate}
                        className="w-full bg-[#0F4C81] text-white py-3.5 rounded-xl font-bold text-lg hover:bg-[#09355E] transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                        Liên Hệ Để Sử Dụng Mẫu Này <ExternalLink size={20} />
                    </button>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}