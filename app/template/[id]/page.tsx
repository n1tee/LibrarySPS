import { templates } from "@/app/data/templates";
import Link from "next/link";
import Image from "next/image"; // Sử dụng Image tối ưu của Next.js
import { notFound } from "next/navigation"; // Để xử lý trang 404 chuẩn
import { ArrowLeft, CheckCircle, ExternalLink, Eye } from "lucide-react";

// Định nghĩa kiểu cho params (Next.js 15 yêu cầu params là Promise)
interface Props {
  params: Promise<{ id: string }>;
}

export default async function TemplateDetail({ params }: Props) {
  // 1. Xử lý params (Bắt buộc await trong Next.js mới)
  const resolvedParams = await params;
  
  // 2. Chuyển đổi ID từ String sang Number để so sánh
  const id = Number(resolvedParams.id);

  // 3. Tìm template trong dữ liệu
  const template = templates.find((t) => t.id === id);

  // 4. Nếu không tìm thấy -> Chuyển hướng sang trang 404 hoặc báo lỗi
  if (!template) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nút Back */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0F4C81] transition font-medium"
        >
          <ArrowLeft size={20} /> Quay lại thư viện
        </Link>
      </div>

      <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
        
        {/* Cột Trái: Hình ảnh (Dùng Next/Image tối ưu) */}
        <div className="bg-gray-100 rounded-2xl p-4 md:p-8 flex items-center justify-center relative group overflow-hidden border border-gray-200">
           <div className="relative w-full h-[300px] md:h-[450px] shadow-2xl rounded-lg overflow-hidden">
             <Image
               src={template.image}
               alt={template.title}
               fill
               className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
               sizes="(max-width: 768px) 100vw, 50vw"
               priority
             />
           </div>
        </div>

        {/* Cột Phải: Thông tin & CTA */}
        <div className="flex flex-col justify-center">
          <span className="text-[#0F4C81] font-bold tracking-wider uppercase text-sm bg-blue-50 w-fit px-3 py-1 rounded-full mb-4">
            {template.category}
          </span>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {template.title}
          </h1>
          
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {template.description || "Mẫu thiết kế tối ưu tốc độ, chuẩn SEO và hiển thị đẹp mắt trên mọi thiết bị."}
          </p>

          {/* Feature List (Lấy từ dữ liệu thật) */}
          {template.features && template.features.length > 0 && (
            <div className="space-y-3 mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-2">Tính năng nổi bật:</h3>
              {template.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <a
              href="https://spsmarketing.de/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#0F4C81] text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-[#09355E] shadow-lg shadow-blue-900/20 transition flex items-center justify-center gap-2"
            >
              Liên hệ mua ngay <ExternalLink size={20}/>
            </a>
            
            {/* Kiểm tra nếu có link Demo mới hiện nút */}
            {template.demoUrl ? (
              <a 
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:border-[#0F4C81] hover:text-[#0F4C81] transition flex items-center justify-center gap-2"
              >
                <Eye size={20}/> Xem Demo
              </a>
            ) : (
              <button disabled className="flex-1 border-2 border-gray-100 text-gray-300 py-4 rounded-xl font-bold text-lg cursor-not-allowed">
                Đang cập nhật Demo
              </button>
            )}
          </div>
          
          <p className="text-xs text-gray-400 mt-4 text-center">
            * Hỗ trợ đổi màu sắc, logo và nội dung sau khi bàn giao.
          </p>
        </div>
      </main>
    </div>
  );
}