// app/data/templates.ts
// 1. Cập nhật Interface để chấp nhận thêm trường "description"
export interface Template {
  id: number;
  title: string;
  category: string;
  image: string;
  package: 'Essential' | 'Advanced' | 'Professional';
  demoUrl: string;
  description?: string; // Thêm dấu ? để trường này có thể có hoặc không (tùy chọn)
  features?: string[];
}

export const templates: Template[] = [
  // --- GÓI F&B ---
  {
    id: 1,
    title: "FoodWagon",
    category: "F&B",
    package: "Essential",
    description: "Giao diện hiện đại dành riêng cho nhà hàng và dịch vụ ăn uống. Thiết kế chuẩn Responsive, hỗ trợ màn hình Retina sắc nét cùng tông màu ấm áp giúp kích thích vị giác khách hàng.",
    image: "/images/FoodWagon.png",
    demoUrl: "/FoodWagon/public/index.html",
    features: [
      "Xây dựng trên nền tảng Bootstrap 5 mới nhất",
      "Responsive 100% & Tương thích mọi thiết bị",
      "Hỗ trợ màn hình Retina (Hình ảnh sắc nét)",
      "Màu sắc ấm áp, kích thích vị giác",
      "Tối ưu hóa mã nguồn & Tốc độ cao"
    ]
  },

  {
    id: 2,
    title: "Pizza Delicous",
    category: "F&B",
    package: "Advanced",
    description: "Mẫu website xây dựng với giao diện tối (Dark Mode) sang trọng, chuyên dụng cho tiệm Pizza, nhà hàng và tiệm bánh. Thiết kế tập trung vào hình ảnh món ăn với hiệu ứng chuyển động mượt mà giúp thu hút thực khách ngay từ cái nhìn đầu tiên.",
    image: "/images/PizzaDelicous.png",
    demoUrl: "/Pizza/index.html",
    features: [
      "Giao diện Dark Theme ấn tượng & Sang trọng",
      "Slideshow trình chiếu món ăn toàn màn hình",
      "Menu thực đơn dạng lưới có bộ lọc thông minh",
      "Hiệu ứng nền Parallax cuộn trang mượt mà",
      "Tích hợp chuyên mục Blog/Tin tức ẩm thực",
      "Typography (Phông chữ) độc đáo & Bắt mắt"
    ]
  },

  {
    id: 3,
    title: "Fast Food Restaurant",
    category: "F&B",
    package: "Professional",
    description: "Giao diện Bootstrap linh hoạt chuyên dụng cho kinh doanh ẩm thực. Điểm nhấn là khu vực Hero Header nền tối giúp tôn vinh hình ảnh món ăn, kết hợp cùng phong cách thiết kế tối giản (Minimalist) mang lại vẻ đẹp tinh tế và trải nghiệm người dùng hiện đại.",
    image: "/images/Feane.png",
    demoUrl: "/Feane/index.html",
    features: [
      "Nền tối làm nổi bật sản phẩm",
      "Phong cách thiết kế Tối giản & Sạch sẽ",
      "Responsive 100% - Hiển thị đẹp trên mọi màn hình",
      "Cấu trúc hiện đại & Tinh gọn",
      "Giao diện tinh tế, định vị thương hiệu cao cấp"
    ]
  },

  // --- GÓI NAILS & SPA ---
  {
    id: 4,
    title: "Sparlex",
    category: "Nails & Spa",
    package: "Advanced",
    description: "Giao diện hiện đại dành riêng cho Spa & Thẩm mỹ viện, được xây dựng trên nền tảng mới nhất. Sparlex sở hữu thiết kế tinh tế, thư giãn, giúp website của bạn không chỉ đẹp mà còn dễ dàng đạt thứ hạng cao trên Google.",
    image: "/images/Sparlex.png",
    demoUrl: "/Sparlex/index.html",
    features: [
      "Sử dụng công nghệ mới nhất, tối ưu hóa SEO",
      "Tốc độ tải trang cực nhanh (High Performance)",
      "Kho thư viện Icon & Font chữ đa dạng (Font Awesome)",
      "Điều hướng mượt mà, trải nghiệm người dùng tối ưu"
    ]
  },

  {
    id: 5,
    title: "Milina",
    category: "Nails & Spa",
    package: "Essential",
    description: "Mẫu website đa trang chuyên nghiệp dành riêng cho Tiệm Nail và dịch vụ làm đẹp. Được xây dựng trên nền tảng hiện đại, mạnh mẽ với thiết kế tương tác mượt mà, bố cục thông minh giúp giữ chân khách hàng và tối ưu hóa thứ hạng tìm kiếm (SEO).",
    image: "/images/Milina.png",
    demoUrl: "/Milina/index.html",
    features: [
      "Thiết kế chuyên dụng cho Nail Salon & Spa",
      "Giao diện Responsive 100% & Tương tác mượt mà",
      "Tối ưu hóa chuẩn SEO (Tăng thứ hạng tìm kiếm)",
      "Tốc độ tải trang cực nhanh (Page-speed optimized)",
      "Hoạt động ổn định trên mọi trình duyệt"
    ]
  },

  // --- GÓI DOANH NGHIỆP ---
  {
    id: 6,
    title: "BizLand",
    category: "Doanh nghiệp",
    package: "Professional",
    description: "Dành cho công ty công nghệ, giới thiệu giải pháp, hồ sơ năng lực chi tiết.",
    image: "/images/BizLand.png",
    demoUrl: "/BizLand/index.html",
    features: [
      "Thiết kế One-Page hiện đại & Tinh tế",
      "Tốc độ tải trang cực nhanh (Optimized Speed)",
      "Mã nguồn hỗ trợ SASS dễ bảo trì",
      "Tương thích mọi trình duyệt (Cross-browser)",
      "Dễ dàng tùy chỉnh giao diện (Developer-friendly)"
    ]
  },

  {
    id: 7,
    title: "LifeSure",
    category: "Doanh nghiệp",
    package: "Advanced",
    description: "Thiết kế chuyên nghiệp giúp giới thiệu các gói bảo hiểm, bảo vệ tài sản và giải pháp an sinh gia đình.",
    image: "/images/LifeSure.png",
    demoUrl: "/LifeSure/index.html",
    features: [
      "Thiết kế Responsive (Điện thoại/Máy tính)",
      "Tối ưu tốc độ tải trang & SEO",
      "Dễ dàng tùy chỉnh nội dung"
    ]
  },



  // --- LANDING PAGE / BẤT ĐỘNG SẢN ---
  {
    id: 8,
    title: "Switch",
    category: "Landing Page",
    package: "Essential",
    description: "Mẫu Landing Page đẳng cấp với thiết kế chuẩn Mobile-first. Điểm nhấn đặc biệt là tính năng chuyển đổi giao diện Sáng/Tối (Dark/Light Mode) mượt mà lấy cảm hứng từ sự thay đổi của bầu trời, giúp tạo ấn tượng thị giác mạnh mẽ và trải nghiệm người dùng độc đáo.",
    image: "/images/Switch.png",
    demoUrl: "/Switch/index.html",
    features: [
      "Tính năng Switch: Chuyển đổi giao diện Sáng/Tối độc đáo",
      "Thiết kế Mobile-first (Ưu tiên trải nghiệm trên điện thoại)",
      "Đồ họa Vector đa sắc màu & Sắc nét trên mọi màn hình",
      "Mockup giới thiệu App phối cảnh 3D chuyên nghiệp",
      "Hiệu suất cao & Tối ưu trải nghiệm người dùng"
    ]
  },

  {
    id: 9,
    title: "April",
    category: "Landing Page",
    package: "Essential",
    description: "April sở hữu bố cục tinh gọn nhưng khả năng tùy biến cực kỳ mạnh mẽ. Đây là giải pháp hoàn hảo cho các trang giới thiệu ứng dụng (App Landing) hoặc dịch vụ Newsletter, với thiết kế tập trung vào việc làm nổi bật tính năng sản phẩm và đánh giá khách hàng ngay từ cái nhìn đầu tiên.",
    image: "/images/April.png",
    demoUrl: "/April/index.html",
    features: [
      "Phong cách minh họa (Illustration) hiện đại & Đương đại",
      "Kho thư viện Section mẫu phong phú, sẵn sàng sử dụng",
      "Thiết kế đa năng, linh hoạt cho nhiều loại sản phẩm",
      "Tối ưu hiển thị Tính năng App & Đánh giá khách hàng",
      "Bố cục Responsive & Điều hướng mượt mà"
    ]
  },

  {
    id: 10,
    title: "Handkunst",
    category: "Nails & Spa",
    package: "Advanced",
    description: "April sở hữu bố cục tinh gọn nhưng khả năng tùy biến cực kỳ mạnh mẽ. Đây là giải pháp hoàn hảo cho các trang giới thiệu ứng dụng (App Landing) hoặc dịch vụ Newsletter, với thiết kế tập trung vào việc làm nổi bật tính năng sản phẩm và đánh giá khách hàng ngay từ cái nhìn đầu tiên.",
    image: "/images/Handkunst.png",
    demoUrl: "/Handkunst/index.html",
    features: [
      "Phong cách minh họa (Illustration) hiện đại & Đương đại",
      "Kho thư viện Section mẫu phong phú, sẵn sàng sử dụng",
      "Thiết kế đa năng, linh hoạt cho nhiều loại sản phẩm",
      "Tối ưu hiển thị Tính năng App & Đánh giá khách hàng",
      "Bố cục Responsive & Điều hướng mượt mà"
    ]
  },

  {
    id: 11,
    title: "Absinth",
    category: "F&B",
    package: "Essential",
    description: "Absinth sở hữu phong cách thiết kế thoáng đãng, gần gũi với thiên nhiên, mang lại cảm giác thân thiện và chào đón tuyệt đối. Đây là giải pháp hoàn hảo cho các trang web Nhà hàng, Quán Cà phê sân vườn hoặc Pub địa phương, với bố cục tập trung tối đa vào việc trình diễn không gian quán và hình ảnh thực đơn hấp dẫn ngay từ màn hình đầu tiên.",
    image: "/images/Absinth.png",
    demoUrl: "/Absinth/index.html",
    features: [
      "Phong cách thiết kế dựa trên hình ảnh (Photography-driven) đầy cảm xúc",
      "Hero Banner tràn màn hình, gây ấn tượng mạnh mẽ về thị giác",
      "Thanh điều hướng (Navigation) tối giản, tinh tế & dễ sử dụng",
      "Tối ưu hiển thị cho Không gian quán, Thực đơn & Sự kiện",
      "Tương thích hoàn hảo trên mọi thiết bị (Fully Responsive)"
    ]
  },

  {
    id: 12,
    title: "Kumpeltreff",
    category: "F&B",
    package: "Advanced",
    description: "Kumpeltreff nổi bật với phong cách Vintage hoài cổ, sử dụng kết cấu nền giấy (Paper Texture) độc đáo tạo cảm giác thân thuộc và ấm cúng. Đây là lựa chọn tuyệt vời cho các nhà hàng truyền thống, quán Pub địa phương hoặc các trang web kể chuyện (Storytelling), nơi tôn vinh văn hóa và di sản ngay từ cái nhìn đầu tiên.",
    image: "/images/Kumpeltreff.png",
    demoUrl: "/Kumpeltreff/index.html",
    features: [
      "Thiết kế phong cách Retro & Industrial Heritage ấn tượng",
      "Bố cục Navigation đối xứng, tập trung vào nhận diện Thương hiệu",
      "Typography cổ điển kết hợp nền giấy tạo chiều sâu thị giác",
      "Tối ưu hiển thị hình ảnh Panorama & Câu chuyện thương hiệu",
      "Tích hợp sẵn CTA đặt bàn & Chỉ dẫn đường đi (Maps)"
    ]
  },

  {
    id: 13,
    title: "Brauhaus Rietkotter",
    category: "F&B",
    package: "Professional",
    description: "Brauhaus Rietkötter gây ấn tượng mạnh mẽ với thiết kế Full-screen Background, giúp phô diễn trọn vẹn không gian ấm cúng và sang trọng của nhà hàng. Đây là lựa chọn lý tưởng cho các quán Pub, Brewery hoặc Bistro muốn chinh phục thực khách bằng bầu không khí mời gọi ngay từ lần truy cập đầu tiên.",
    image: "/images/BrauhausRietkotter.png",
    demoUrl: "/BrauhausRietkotter/index.html",
    features: [
      "Hero Section tràn màn hình (Full-screen) chất lượng cao",
      "Thiết kế tập trung vào trải nghiệm không gian & Ánh sáng",
      "Thanh điều hướng trong suốt (Transparent Nav) hiện đại",
      "Tối ưu hóa hiển thị cho Hình ảnh nội thất & Món ăn",
      "Bố cục sang trọng, phù hợp cho F&B phân khúc cao cấp"
    ]
  },

  {
    id: 14,
    title: "Fieges Stammhaus",
    category: "F&B",
    package: "Professional",
    description: "Fieges Stammhaus mang đậm hơi thở truyền thống với phong cách thiết kế mộc mạc (Rustic) kết hợp tông xanh cổ điển đặc trưng của thương hiệu bia lâu đời. Đây là giao diện lý tưởng cho các quán bia (Brauhaus), nhà hàng gia đình hoặc các mô hình kinh doanh đề cao giá trị lịch sử, sự gắn kết con người và ẩm thực địa phương.",
    image: "/images/FiegesStammhaus.png",
    demoUrl: "/FiegesStammhaus/index.html",
    features: [
      "Bố cục chia cột (Split Layout) độc đáo kết hợp Sidebar thông tin nổi bật",
      "Sử dụng họa tiết vân gỗ (Wood Texture) tạo cảm giác ấm cúng, hoài niệm",
      "Tối ưu hiển thị Thực đơn theo mùa (Seasonal Menu) dạng bảng phấn/poster",
      "Khu vực Hero tập trung vào Hình ảnh con người & Câu chuyện thương hiệu (Storytelling)",
      "Hệ thống màu sắc & Typography mang phong cách Đức cổ điển, tin cậy"
    ]
  },

  {
    id: 15,
    title: "Event Genuss",
    category: "F&B",
    package: "Advanced",
    description: "EventGenuss gây ấn tượng bởi vẻ đẹp hiện đại, thanh lịch với nền trắng chủ đạo, làm nổi bật tối đa hình ảnh sự kiện và không gian thiên nhiên. Đây là giao diện mẫu mực cho các đơn vị Tổ chức sự kiện (Event Agency), Dịch vụ Catering ngoài trời hoặc Khu du lịch sinh thái, nơi cần sự chuyên nghiệp và thông tin được trình bày mạch lạc, rõ ràng.",
    image: "/images/EventGenuss.png",
    demoUrl: "/EventGenuss/index.html",
    features: [
      "Phong cách thiết kế Tối giản (Minimalism) & Clean Design sang trọng",
      "Header tích hợp Top-bar giúp khách hàng tiếp cận thông tin liên hệ tức thì",
      "Tối ưu trình diễn hình ảnh Không gian (Venue) & Hoạt động ngoài trời",
      "Bố cục linh hoạt cho nhiều loại hình dịch vụ: Food Trucks, Hội nghị, Tiệc cưới",
      "Giao diện tập trung vào trải nghiệm người dùng (UX) và điều hướng trực quan",
    ]
  },

  {
    id: 16,
    title: "Gasthaus Goeke",
    category: "F&B",
    package: "Advanced",
    description: "Gasthaus Goeke mang vẻ đẹp thanh lịch, cổ điển với tông màu xanh rêu (Moss Green) sang trọng và typography theo phong cách Blackletter truyền thống. Đây là giao diện hoàn hảo cho các Nhà hàng lâu đời, Khách sạn di sản (Heritage Hotels) hoặc Khu nghỉ dưỡng vùng ngoại ô, nơi muốn tôn vinh giá trị lịch sử và sự hiếu khách nồng hậu.",
    image: "/images/GasthausGoeke.png",
    demoUrl: "/GasthausGoeke/index.html",
    features: [
      "Sự kết hợp Typography độc đáo giữa Blackletter & Script (Chữ viết tay)",
      "Bảng màu Xanh Rêu & Kem tạo cảm giác Tin cậy & Yên bình",
      "Header cổ điển tích hợp Minh họa thương hiệu (Brand Illustration)",
      "Nền website sử dụng họa tiết chìm (Watermark Pattern) tinh tế",
      "Bố cục tập trung vào Thông điệp chào mừng & Hình ảnh mặt tiền"
    ]
  },

  {
    id: 17,
    title: "Lisas Palmengarten",
    category: "F&B",
    package: "Advanced",
    description: "Lisas Palmengarten mang đến làn gió tươi mới với sự kết hợp thú vị giữa phong cách nhiệt đới (Tropical) năng động và sự ấm cúng mộc mạc của nội thất gỗ. Giao diện này là lựa chọn tuyệt vời cho các mô hình Café, Lounge, Bar hoặc Nhà hàng gia đình, nơi muốn truyền tải cảm giác thư giãn, vui vẻ như một kỳ nghỉ thu nhỏ ngay trong lòng thành phố.",
    image: "/images/LisasPalmengarten.png",
    demoUrl: "/LisasPalmengarten/index.html",
    features: [
      "Header sử dụng nền kết cấu vải (Fabric Texture) tạo nét thủ công, gần gũi",
      "Thanh điều hướng (Navigation) nổi bật với Font chữ viết tay (Script Font) cách điệu",
      "Slider hình ảnh trung tâm (Hero Slider) cỡ lớn giúp phô diễn không gian nội thất",
      "Bảng màu Xanh biển & Cam mang lại năng lượng tích cực, mời gọi",
      "Bố cục tập trung vào hình ảnh trải nghiệm thực tế & Không gian riêng tư"
    ]
  },

  {
    id: 18,
    title: "Miss Seoul Food",
    category: "F&B",
    package: "Professional",
    description: "Miss Seoul Food toát lên vẻ đẹp thanh lịch, tinh tế với tông màu phấn (Pastel) nhẹ nhàng làm chủ đạo. Đây là template lý tưởng cho các Blog Ẩm thực (Food Blog), Trường dạy nấu ăn (Cooking School) hoặc Website xây dựng thương hiệu cá nhân, nơi cần sự chỉn chu về hình ảnh và phong cách kể chuyện lôi cuốn.",
    image: "/images/MissSeoulFood.png",
    demoUrl: "/MissSeoulFood/index.html",
    features: [
      "Phong cách thiết kế Clean & Feminine sang trọng, hiện đại",
      "Typography sử dụng font có chân (Serif) cỡ lớn tạo điểm nhấn uy tín",
      "Hero Section tập trung vào Thông điệp chính & Nút kêu gọi hành động (CTA)",
      "Tối ưu hiển thị cho nội dung Blog, Công thức nấu ăn & Lịch khóa học",
      "Họa tiết nền chìm (Watermark) tinh tế, tạo chiều sâu cho giao diện"
    ]
  },

  {
    id: 19,
    title: "Kimbap Spot",
    category: "F&B",
    package: "Advanced",
    description: "Kimbap Spot mang đến phong cách hiện đại, đầy năng lượng với thiết kế 'Food-first' (đặt món ăn làm trung tâm). Sử dụng góc chụp Flatlay (từ trên xuống) ấn tượng làm nền, giao diện này là lựa chọn hoàn hảo cho các nhà hàng Fast-casual, quán ăn đường phố hiện đại (Street Food) hoặc dịch vụ giao đồ ăn, nơi cần kích thích vị giác và thúc đẩy hành động đặt hàng ngay lập tức.",
    image: "/images/KimbapSpot.png",
    demoUrl: "/KimbapSpot/index.html",
    features: [
      "Hero Section ấn tượng với nền nhiếp ảnh Flatlay chất lượng cao",
      "Tích hợp mạnh mẽ các nút Call-to-Action cho Ứng dụng giao hàng (Delivery Apps)",
      "Typography đậm (Bold Sans-serif) tương phản cao, dễ đọc trên nền ảnh",
      "Bố cục tập trung hiển thị Thông báo Sự kiện & Menu đặc biệt (Specials)",
      "Phong cách Urban (Đô thị) trẻ trung, tối ưu cho trải nghiệm trên di động"
    ]
  },

  {
    id: 20,
    title: "El Dorado Steakhaus",
    category: "F&B",
    package: "Professional",
    description: "El Dorado sở hữu phong cách thiết kế 'Dark & Bold' đầy quyền lực, sử dụng tông màu đen huyền bí làm nền tảng để tôn vinh tối đa màu sắc tươi ngon của nguyên liệu và món ăn. Đây là giao diện 'đo ni đóng giày' cho các nhà hàng Steakhouse, BBQ cao cấp hoặc các quán nướng, nơi muốn khẳng định đẳng cấp thượng hạng và chất lượng dịch vụ ngay từ cái nhìn đầu tiên.",
    image: "/images/ElDoradoSteakhaus.png",
    demoUrl: "/ElDoradoSteakhaus/index.html",
    features: [
      "Giao diện Dark Mode sang trọng, làm nổi bật hình ảnh món ăn",
      "Logo trung tâm & Thanh điều hướng đối xứng tạo sự cân bằng hoàn hảo",
      "Typography mạnh mẽ, kết hợp giữa nét cổ điển và hiện đại",
      "Tối ưu hóa không gian cho hình ảnh Banner (Hero Image) chất lượng cao",
      "Tích hợp nút Kêu gọi hành động (CTA) Đặt bàn/Đặt món nổi bật"
    ]
  },

];