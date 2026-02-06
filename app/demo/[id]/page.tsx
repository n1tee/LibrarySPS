import { templates } from "@/app/data/templates";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Eye, CheckCircle } from "lucide-react";

// Sửa 1: Định nghĩa params là Promise (Chuẩn Next.js 15/16)
interface Props {
  params: Promise<{ id: string }>;
}

// Sửa 2: Thêm async vào function
export default async function TemplateDetail({ params }: Props) {
  // Sửa 3: Await params để lấy dữ liệu
  const resolvedParams = await params;
  
  // Sửa 4: Chuyển đổi id từ String sang Number
  const templateId = Number(resolvedParams.id);

  // Sửa 5: So sánh số với số (Hết lỗi Type Error)
  const template = templates.find((t) => t.id === templateId);

  // Nếu không tìm thấy, báo lỗi 404
  if (!template) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
            <p className="text-xl font-semibold text-gray-600">Không tìm thấy mẫu giao diện này.</p>
            <Link href="/" className="text-blue-600 hover:underline">Quay lại trang chủ</Link>
        </div>
    );
  }

  // --- PHẦN GIAO DIỆN (Copy nguyên giao diện cũ của bạn vào đây) ---
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* HEADER */}
      <header className="h-16 bg-white border-b flex items-center justify-between px-4 lg:px-8 shadow-sm z-50 sticky top-0">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-600 hover:text-[#0F4C81] font-semibold transition"
        >
          <ArrowLeft size={20} />
          <span className="hidden sm:inline">Quay lại trang chủ</span>
        </Link>

        <h1 className="font-bold text-gray-800 text-lg hidden md:block truncate max-w-md">
          {template.title}
        </h1>

        <a
          href="https://spsmarketing.de/contact-us/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0F4C81] hover:bg-[#09355E] text-white px-5 py-2 rounded-full font-bold shadow-md transition-colors text-sm sm:text-base flex items-center gap-2"
        >
          Liên Hệ Ngay
        </a>
      </header>

      {/* BODY */}
      <div className="flex-1 w-full p-4 lg:p-8 flex flex-col items-center gap-12">
        <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row lg:h-[700px]">
          
          {/* CỘT ẢNH */}
          <div className="w-full lg:w-3/5 bg-gray-100 relative h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-gray-200 group overflow-hidden">
            <Image
              src={template.image}
              alt={template.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
              {template.demoUrl && (
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-gray-100 transform hover:scale-105 transition"
                >
                  <Eye size={20} /> Xem Demo
                </a>
              )}
            </div>
          </div>

          {/* CỘT NỘI DUNG */}
          <div className="w-full lg:w-2/5 flex flex-col h-full bg-white">
            <div className="p-6 pb-2 lg:p-10 lg:pb-2 flex-none">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="bg-blue-50 text-[#0F4C81] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                    {template.category}
                </span>
                <span className="bg-[#0F4C81] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {template.package} Package
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {template.title}
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pt-4 lg:p-10 lg:pt-6 space-y-6 custom-scrollbar">
              <p className="text-gray-600 text-lg leading-relaxed">
                {template.description || "Mẫu giao diện chuyên nghiệp, tối ưu SEO."}
              </p>

              {/* KHUNG TÍNH NĂNG (Đã fix lỗi map) */}
              {template.features && template.features.length > 0 && (
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                    Tính năng nổi bật:
                  </h3>
                  <div className="space-y-3">
                    {template.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-1" />
                        <span className="text-base font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 pt-4 lg:p-10 lg:pt-4 flex-none mt-auto bg-white border-t border-gray-50">
                <div className="flex flex-col gap-3">
                    {template.demoUrl && (
                        <a 
                            href={template.demoUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-white border-2 border-[#0F4C81] text-[#0F4C81] py-3.5 rounded-xl font-bold text-lg hover:bg-blue-50 transition flex items-center justify-center gap-2 group"
                        >
                            <Eye size={20} className="group-hover:scale-110 transition-transform"/>
                            Xem Demo Trực Tiếp
                        </a>
                    )}
                    <a 
                        href="https://spsmarketing.de/contact-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#0F4C81] text-white py-3.5 rounded-xl font-bold text-lg hover:bg-[#09355E] transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                        Liên Hệ Để Sử Dụng <ExternalLink size={20} />
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}