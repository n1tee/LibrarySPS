"use client";

import { useState } from "react";
import { templates } from "@/app/data/templates";
import { translations } from "@/app/data/translations"; // Import từ điển
import Header from "@/app/components/Header"; // Import Header đã tách
import Link from "next/link";
import { ChevronDown, Check, Search, X } from "lucide-react"; // Đã thêm icon Search và X

export default function Home() {
  // --- STATE ---
  const [currentLang, setCurrentLang] = useState('vi');
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedPackage, setSelectedPackage] = useState("all"); 
  
  // State quản lý từ khóa tìm kiếm
  const [searchQuery, setSearchQuery] = useState(""); 

  // Lấy bộ từ điển hiện tại
  const t = translations[currentLang];
  const categories = ["Tất cả", "F&B", "Nails & Spa", "Doanh nghiệp", "Landing Page"];

  // --- LOGIC LỌC SẢN PHẨM ---
  const filteredTemplates = templates.filter((item) => {
    // 1. Lọc theo danh mục
    const matchCategory = selectedCategory === "Tất cả" || item.category === selectedCategory;
    
    // 2. Lọc theo gói
    const matchPackage = selectedPackage === "all" || item.package === selectedPackage;

    // 3. Lọc theo từ khóa tìm kiếm (Tên hoặc Danh mục)
    const query = searchQuery.toLowerCase();
    const matchSearch = item.title.toLowerCase().includes(query) || 
                        item.category.toLowerCase().includes(query);

    return matchCategory && matchPackage && matchSearch;
  });

  const handleSelectPackage = (pkg: string) => {
    setSelectedPackage(pkg);
    // Tự động cuộn xuống danh sách sản phẩm
    setTimeout(() => {
        document.getElementById("template-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleReset = () => {
    setSelectedCategory("Tất cả");
    setSelectedPackage("all");
    setSearchQuery(""); // Reset cả ô tìm kiếm
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* HEADER COMPONENT */}
      <Header 
        t={t} 
        currentPkg={selectedPackage}
        onLanguageChange={setCurrentLang}
        onSelectPackage={handleSelectPackage}
        onReset={handleReset}
      />

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Banner thông báo đang xem gói nào */}
        {selectedPackage !== 'all' && (
          <div className="mb-8 text-center animate-in fade-in slide-in-from-bottom-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0F4C81] font-bold border border-blue-100">
              <Check size={16} /> {t.viewing}: {
                selectedPackage === 'basic' ? t.pkg_essential :
                selectedPackage === 'plus' ? t.pkg_advanced : t.pkg_pro
              }
              <button onClick={() => setSelectedPackage('all')} className="ml-2 hover:text-red-500 text-gray-400">✕</button>
            </span>
          </div>
        )}

        {/* Tiêu đề & Mô tả */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.hero_title}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.hero_desc}
          </p>
        </div>

        {/* --- THANH TÌM KIẾM (SEARCH BAR) --- */}
        <div className="max-w-xl mx-auto mb-12 relative group">
            <div className="relative">
                {/* Icon kính lúp bên trái */}
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#0F4C81] transition-colors" />
                </div>
                
                {/* Ô nhập liệu input */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.search_placeholder} 
                    className="
                        block w-full pl-11 pr-10 py-4 
                        border border-gray-200 rounded-full 
                        leading-5 bg-white text-gray-900 placeholder-gray-400 
                        focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent 
                        shadow-sm hover:shadow-md transition-all duration-300
                        text-base
                    "
                />

                {/* Nút X để xóa nhanh nội dung tìm kiếm */}
                {searchQuery && (
                    <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>
        </div>

        {/* Bộ lọc danh mục (Categories) */}
        <div id="template-list" className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === cat
                ? "bg-[#0F4C81] text-white shadow-md ring-2 ring-offset-2 ring-[#0F4C81]"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#0F4C81] hover:text-[#0F4C81]"
                }`}
            >
              {t.cats[cat] || cat}
            </button>
          ))}
        </div>

        {/* Grid hiển thị sản phẩm */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((item) => (
              <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="p-4 bg-gray-50 relative">
                  {/* Badge Package */}
                  {item.package && (
                    <div className="absolute top-4 left-4 z-10"> 
                      <span className={`px-3 py-1.5 rounded-md text-xs font-bold text-white shadow-md tracking-wide uppercase
                        ${item.package === 'basic' ? 'bg-[#00A651]' : item.package === 'plus' ? 'bg-[#0F4C81]' : 'bg-orange-500' }
                      `}>
                        {item.package === 'basic' ? 'ESSENTIAL' : item.package === 'plus' ? 'ADVANCED' : 'PROFESSIONAL'}
                      </span>
                    </div>
                  )}
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl h-64 shadow-inner">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"/>
                  </div>
                </div>

                <div className="p-6 pt-4 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#0F4C81] transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{t.cats[item.category] || item.category}</p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-center items-center">
                    <Link href={`/demo/${item.id}`} className="group flex items-center justify-center gap-2 text-[#0F4C81] font-extrabold text-sm bg-white border-2 border-[#0F4C81] px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-[#0F4C81] hover:text-white transition-all duration-300">
                      {t.view_detail}
                      <ChevronDown className="-rotate-90 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            {/* Icon khi không tìm thấy kết quả */}
            <div className="mx-auto h-16 w-16 text-gray-300 mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                <Search size={32} />
            </div>
            <p className="text-gray-500 text-lg">{t.not_found}</p>
            
            {/* Nút reset */}
            <button 
                onClick={() => { setSearchQuery(''); setSelectedPackage('all'); setSelectedCategory('Tất cả') }} 
                className="mt-4 text-[#0F4C81] font-bold hover:underline"
            >
              {t.view_all}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}