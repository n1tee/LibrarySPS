"use client";

import Link from "next/link";
import Image from "next/image"; // Dùng Image để tối ưu tốc độ
import { ChevronDown } from "lucide-react";

interface TemplateCardProps {
  item: any; // Dữ liệu sản phẩm
  t: any;    // Bộ từ điển ngôn ngữ
}

export default function TemplateCard({ item, t }: TemplateCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="p-4 bg-gray-50 relative">
        {/* Badge hiển thị gói (Package) */}
        {item.package && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`px-3 py-1.5 rounded-md text-xs font-bold text-white shadow-md tracking-wide uppercase
              ${
                item.package === "Essential"
                  ? "bg-[#00A651]"
                  : item.package === "Advanced"
                  ? "bg-[#0F4C81]"
                  : "bg-orange-500"
              }
            `}
            >
              {item.package === "Essential"
                ? "ESSENTIAL"
                : item.package === "Advanced"
                ? "ADVANCED"
                : "PROFESSIONAL"}
            </span>
          </div>
        )}

        {/* --- TỐI ƯU ẢNH (Phần 1) --- */}
        <div className="relative overflow-hidden rounded-xl h-64 shadow-inner bg-gray-200">
          <Image
            src={item.image}
            alt={item.title}
            fill // Tự động co giãn theo khung cha
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition duration-700"
            loading="lazy"
          />
        </div>
      </div>

      {/* Nội dung text bên dưới */}
      <div className="p-6 pt-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#0F4C81] transition line-clamp-1">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          {t.cats[item.category] || item.category}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-center items-center">
          <Link
            href={`/demo/${item.id}`}
            className="group/btn flex items-center justify-center gap-2 text-[#0F4C81] font-extrabold text-sm bg-white border-2 border-[#0F4C81] px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-[#0F4C81] hover:text-white transition-all duration-300 w-full"
          >
            {t.view_detail}
            <ChevronDown
              className="-rotate-90 group-hover/btn:translate-x-1 transition-transform"
              size={18}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}