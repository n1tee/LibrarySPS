"use client";

import { useState } from "react";
import { templates } from "@/app/data/templates";
import { translations } from "@/app/data/translations"; 
import Header from "@/app/components/Header"; 
import TemplateCard from "@/app/components/TemplateCard"; // IMPORT COMPONENT MỚI
import { Check, Search, X, ChevronLeft, ChevronRight } from "lucide-react"; 

export default function Home() {
  // --- STATE ---
  const [currentLang, setCurrentLang] = useState('vi');
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedPackage, setSelectedPackage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // --- STATE PHÂN TRANG ---
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9; 

  const t = translations[currentLang];
  const categories = ["Tất cả", "F&B", "Nails & Spa", "Doanh nghiệp", "Landing Page"];

  // --- LOGIC LỌC ---
  const filteredTemplates = templates.filter((item) => {
    const matchCategory = selectedCategory === "Tất cả" || item.category === selectedCategory;
    const matchPackage = selectedPackage === "all" || item.package === selectedPackage;
    const query = searchQuery.toLowerCase();
    const matchSearch = item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
    return matchCategory && matchPackage && matchSearch;
  });

  // --- LOGIC CẮT TRANG ---
  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTemplates = filteredTemplates.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // --- HANDLERS ---
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("template-list")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const handleSelectPackage = (pkg: string) => {
    setSelectedPackage(pkg);
    setCurrentPage(1);
    setTimeout(() => {
      document.getElementById("template-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleReset = () => {
    setSelectedCategory("Tất cả");
    setSelectedPackage("all");
    setSearchQuery(""); 
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
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

        {/* --- THANH TÌM KIẾM --- */}
        <div className="max-w-xl mx-auto mb-12 relative group">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#0F4C81] transition-colors" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder={t.search_placeholder}
              className="block w-full pl-11 pr-10 py-4 border border-gray-200 rounded-full leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300 text-base"
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

        {/* Bộ lọc danh mục */}
        <div id="template-list" className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleSelectCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === cat
                ? "bg-[#0F4C81] text-white shadow-md ring-2 ring-offset-2 ring-[#0F4C81]"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#0F4C81] hover:text-[#0F4C81]"
                }`}
            >
              {t.cats[cat] || cat}
            </button>
          ))}
        </div>

        {/* --- GRID SẢN PHẨM (ĐÃ DÙNG COMPONENT) --- */}
        {filteredTemplates.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedTemplates.map((item) => (
                // Thay thế toàn bộ code cũ bằng component này
                <TemplateCard key={item.id} item={item} t={t} />
              ))}
            </div>

            {/* --- THANH PHÂN TRANG --- */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  suppressHydrationWarning
                  className={`p-2 rounded-lg border transition-colors ${
                    currentPage === 1 
                      ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                      : "border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-[#0F4C81]"
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    suppressHydrationWarning
                    className={`w-10 h-10 rounded-lg font-bold transition-all ${
                      currentPage === page
                        ? "bg-[#0F4C81] text-white shadow-md transform scale-105"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  suppressHydrationWarning
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