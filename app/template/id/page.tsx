// app/template/[id]/page.tsx
import { templates } from "@/app/data/templates";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Smartphone, Monitor } from "lucide-react";

// Hàm để lấy dữ liệu dựa trên ID trên URL
export default function TemplateDetail({ params }: { params: { id: string } }) {
  const template = templates.find((t) => t.id === params.id);

  if (!template) {
    return <div className="p-10 text-center">Không tìm thấy mẫu này.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nút Back */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft size={20} /> Quay lại thư viện
        </Link>
      </div>

      <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
        {/* Cột Trái: Hình ảnh */}
        <div className="bg-gray-100 rounded-2xl p-4 md:p-8 flex items-center justify-center">
             {/* Ở đây bạn có thể thay bằng Slider ảnh nếu muốn */}
            <img
              src={template.image}
              alt={template.title}
              className="rounded-lg shadow-2xl w-full"
            />
        </div>

        {/* Cột Phải: Thông tin & CTA */}
        <div>
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            {template.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            {template.title}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            {template.description} Đây là mẫu thiết kế được tối ưu hóa cho tốc độ
            tải trang nhanh, chuẩn SEO Google và hiển thị đẹp mắt trên mọi thiết
            bị.
          </p>

          {/* Feature List (Giả lập) */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={20} />
              <span>Giao diện Responsive (Mobile/Tablet/PC)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={20} />
              <span>Tối ưu điểm tốc độ Google Speed</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={20} />
              <span>Bảo hành & Hỗ trợ cài đặt</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://zalo.me/sdt-cua-ban"
              target="_blank"
              className="flex-1 bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition"
            >
              Liên hệ mua ngay
            </a>
            <button className="flex-1 border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:border-gray-400 transition">
              Xem Demo trực tiếp
            </button>
          </div>
          
          <p className="text-xs text-gray-400 mt-4 text-center">
            * Hỗ trợ đổi màu sắc và nội dung cơ bản sau khi bàn giao.
          </p>
        </div>
      </main>
    </div>
  );
}