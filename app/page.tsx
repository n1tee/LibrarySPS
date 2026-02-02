"use client";

import { useState, useEffect } from "react";
import { templates } from "@/app/data/templates";
import { translations } from "@/app/data/translations"; // Import từ điển
import Header from "@/app/components/Header"; // Import Header đã tách
import Link from "next/link";
// Gom gọn các imports từ lucide-react
import { ChevronDown, Check, Search, X, ChevronLeft, ChevronRight } from "lucide-react"; 

export default function Home() {
  // --- STATE ---
  const [currentLang, setCurrentLang] = useState('vi');
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedPackage, setSelectedPackage] = useState("all");
  
  // State quản lý từ khóa tìm kiếm
  const [searchQuery, setSearchQuery] = useState("");

  // --- STATE PHÂN TRANG (PAGINATION) ---
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9; // Số sản phẩm mỗi trang

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

  // --- LOGIC CẮT TRANG (PAGINATION LOGIC) ---
  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // Dữ liệu dùng để hiển thị (chỉ lấy 9 cái)
  const paginatedTemplates = filteredTemplates.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // --- HÀM XỬ LÝ (HANDLERS) ---

  // Chuyển trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Cuộn nhẹ lên đầu danh sách
    document.getElementById("template-list")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  // Chọn gói (Package)
  const handleSelectPackage = (pkg: string) => {
    setSelectedPackage(pkg);
    setCurrentPage(1); // Reset về trang 1
    
    setTimeout(() => {
      document.getElementById("template-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Reset bộ lọc
  const handleReset = () => {
    setSelectedCategory("Tất cả");
    setSelectedPackage("all");
    setSearchQuery(""); 
    setCurrentPage(1); // Reset về trang 1
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Chọn danh mục (Category)
  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1); // Reset về trang 1
  };

  // Nhập tìm kiếm
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset về trang 1
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

        {selectedPackage !== 'all' && (
          <div className="mb-8 text-center animate-in fade-in slide-in-from-bottom-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0F4C81] font-bold border border-blue-100">
              <Check size={16} /> {t.viewing}: {
                selectedPackage === 'Essential' ? t.pkg_essential :
                selectedPackage === 'Advanced' ? t.pkg_advanced :
                t.pkg_pro 
              }
              <button onClick={() => handleSelectPackage('all')} className="ml-2 hover:text-red-500 text-gray-400">✕</button>
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
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#0F4C81] transition-colors" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch} // Đã sửa để reset page về 1
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

            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
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
              onClick={() => handleSelectCategory(cat)} // Đã sửa để reset page về 1
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
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SỬA: Dùng paginatedTemplates thay vì filteredTemplates */}
              {paginatedTemplates.map((item) => (
                <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="p-4 bg-gray-50 relative">
                    {/* Badge Package */}
                    {item.package && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1.5 rounded-md text-xs font-bold text-white shadow-md tracking-wide uppercase
                          ${item.package === 'Essential' ? 'bg-[#00A651]' : item.package === 'Advanced' ? 'bg-[#0F4C81]' : 'bg-orange-500'}
                        `}>
                          {item.package === 'Essential' ? 'ESSENTIAL' : item.package === 'Advanced' ? 'ADVANCED' : 'PROFESSIONAL'}
                        </span>
                      </div>
                    )}
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl h-64 shadow-inner">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
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

            {/* --- THANH PHÂN TRANG (PAGINATION) --- */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
                
                {/* Nút lùi */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border transition-colors ${
                    currentPage === 1 
                      ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                      : "border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-[#0F4C81]"
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Các số trang */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-bold transition-all ${
                      currentPage === page
                        ? "bg-[#0F4C81] text-white shadow-md transform scale-105"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Nút tiến */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border transition-colors ${
                    currentPage === totalPages 
                      ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                      : "border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-[#0F4C81]"
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <div className="mx-auto h-16 w-16 text-gray-300 mb-4 bg-gray-50 rounded-full flex items-center justify-center">
              <Search size={32} />
            </div>
            <p className="text-gray-500 text-lg">{t.not_found}</p>

            <button
              onClick={handleReset}
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