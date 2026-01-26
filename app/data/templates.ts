// app/data/templates.ts

export interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  demoUrl: string;
  // Thêm trường package để phục vụ bộ lọc
  package: 'basic' | 'plus' | 'pro'; 
}

export const templates: Template[] = [
  // --- GÓI F&B ---
  {
    id: "1",
    title: "Coffee House Minimal",
    category: "F&B",
    package: "basic",
    description: "Giao diện quán cafe tối giản, tập trung vào không gian và menu đồ uống.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    demoUrl: "#",
  },
  {
    id: "2",
    title: "Nhà Hàng SteakHouse Luxury",
    category: "F&B",
    package: "pro",
    description: "Tích hợp đặt bàn, quản lý đơn hàng, giao diện sang trọng đẳng cấp.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?w=800&q=80",
    demoUrl: "#",
  },
  {
    id: "3",
    title: "Tiệm Bánh Ngọt Bakery",
    category: "F&B",
    package: "plus",
    description: "Showcase bánh ngọt hấp dẫn, tích hợp đặt bánh online nhanh chóng.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?w=800&q=80",
    demoUrl: "#",
  },

  // --- GÓI NAILS & SPA ---
  {
    id: "4",
    title: "Lotus Beauty Spa",
    category: "Nails & Spa",
    package: "plus",
    description: "Giao diện nhẹ nhàng, thư thái, có tính năng đặt lịch hẹn trước.",
    image: "https://images.unsplash.com/photo-1600334019640-51026cf30193?w=800&q=80",
    demoUrl: "#",
  },
  {
    id: "5",
    title: "Nail Art Trendy",
    category: "Nails & Spa",
    package: "basic",
    description: "Album ảnh mẫu nail đẹp, bảng giá dịch vụ rõ ràng, dễ nhìn.",
    image: "https://images.unsplash.com/photo-1632345031435-8727f68979a6?w=800&q=80",
    demoUrl: "#",
  },

  // --- GÓI DOANH NGHIỆP ---
  {
    id: "6",
    title: "CorpTech Solutions",
    category: "Doanh nghiệp",
    package: "pro",
    description: "Dành cho công ty công nghệ, giới thiệu giải pháp, hồ sơ năng lực chi tiết.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    demoUrl: "#",
  },
  {
    id: "7",
    title: "Law Firm Expert",
    category: "Doanh nghiệp",
    package: "plus",
    description: "Uy tín, chuyên nghiệp dành cho văn phòng luật sư hoặc tư vấn tài chính.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
    demoUrl: "#",
  },

  // --- LANDING PAGE / BẤT ĐỘNG SẢN ---
  {
    id: "8",
    title: "Skyline Apartment Landing",
    category: "Landing Page",
    package: "basic",
    description: "Landing page giới thiệu dự án căn hộ, tối ưu chuyển đổi click đăng ký.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    demoUrl: "#",
  },
  {
    id: "9",
    title: "E-Learning Course Sale",
    category: "Landing Page",
    package: "basic",
    description: "Trang bán khóa học online, bố cục chốt sale mạnh mẽ.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    demoUrl: "#",
  },
];