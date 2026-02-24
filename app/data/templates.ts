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

  {
    id: 21,
    title: "Kiko's",
    category: "Nails & Spa",
    package: "Essential",
    description: "Kiko's Nails & Spa mang đến cảm giác thư thái tuyệt đối ngay từ cái nhìn đầu tiên với tông màu be (Beige) và cam đất ấm áp. Đây là giao diện hoàn hảo cho các Tiệm Nail, Spa chăm sóc da hoặc Trung tâm Wellness, nơi muốn truyền tải thông điệp về sự bình yên, vẻ đẹp tự nhiên và sự chăm sóc tận tình.",
    image: "/images/Kikos.png",
    demoUrl: "/Kikos/index.html",
    features: [
      "Bảng màu Earthy Tones (Màu đất) tạo không gian ấm cúng & thư giãn",
      "Sử dụng họa tiết hình học bo tròn (Circle Shapes) mềm mại, nữ tính",
      "Nút kêu gọi hành động (CTA) 'Đặt lịch ngay' nổi bật trên nền ảnh",
      "Typography kết hợp giữa Font Serif sang trọng & Sans-serif hiện đại",
      "Bố cục Hero Section ấn tượng với hình ảnh Spa chất lượng cao"
    ]
  },

  {
    id: 22,
    title: "Agnes",
    category: "Landing Page",
    package: "Essential",
    description: "Giao diện này sở hữu thiết kế tối giản (Minimalist) nhưng đầy tinh tế, sử dụng các hình khối hình học trừu tượng và hiệu ứng đổ bóng mềm mại để tạo chiều sâu. Đây là giải pháp Landing Page hoàn hảo cho các Startup công nghệ, SaaS (Phần mềm dịch vụ) hoặc Giới thiệu Ứng dụng Mobile, nơi cần sự mạch lạc, chuyên nghiệp và tập trung tuyệt đối vào việc chuyển đổi người dùng.",
    image: "/images/Agnes.png",
    demoUrl: "/Agnes/index.html",
    features: [
      "Phong cách thiết kế Clean & Modern với khoảng trắng (White-space) thoáng đãng",
      "Sử dụng họa tiết hình học (Geometric Shapes) & Gradient xanh-hồng thời thượng",
      "Bố cục Grid chia cột thông minh cho khu vực Tính năng (Features)",
      "Hero Section bất đối xứng (Asymmetrical) tạo điểm nhấn thị giác mạnh mẽ",
      "Nút kêu gọi hành động (CTA) nổi bật với hiệu ứng đổ bóng (Drop Shadow)"
    ]
  },

  {
    id: 23,
    title: "Solid",
    category: "Landing Page",
    package: "Advanced",
    description: "Solid gây ấn tượng mạnh mẽ với giao diện Dark Mode huyền bí kết hợp cùng các khối hình học 3D trôi nổi đầy chiều sâu. Template này được thiết kế 'đo ni đóng giày' cho các Công ty công nghệ, Startup phần mềm (SaaS) hoặc các Dự án Blockchain/Crypto, nơi cần thể hiện sự hiện đại, vững chãi và dẫn đầu xu hướng công nghệ ngay từ cái nhìn đầu tiên.",
    image: "/images/Solid.png",
    demoUrl: "/Solid/index.html",
    features: [
      "Giao diện Dark Mode thời thượng, giúp làm nổi bật nội dung & giảm mỏi mắt",
      "Sử dụng đồ họa 3D Isometric & Hình khối trừu tượng (Abstract Shapes) độc đáo",
      "Hero Section mạnh mẽ với nút Call-to-Action kép (Primary & Secondary Buttons)",
      "Hệ thống icon 3D minh họa tính năng (Feature Icons) đồng bộ và sắc sảo",
      "Thiết kế Responsive mượt mà, tối ưu trải nghiệm trên mọi thiết bị di động"
    ]
  },

  {
    id: 24,
    title: "Tidy",
    category: "Landing Page",
    package: "Advanced",
    description: "Tidy là sự kết hợp hoàn hảo giữa tính chuyên nghiệp và thẩm mỹ hiện đại. Với thiết kế phân chia mảng màu (Split-screen) táo bạo cùng đường cắt chéo năng động, giao diện này tạo nên sự tin cậy tuyệt đối. Đây là giải pháp lý tưởng cho các Công ty B2B, Agency tư vấn, hoặc Nền tảng quản lý (Management Platforms), nơi cần khẳng định vị thế và sự minh bạch.",
    image: "/images/Tidy.png",
    demoUrl: "/Tidy/HTML/public/index.html",
    features: [
      "Sự kết hợp Typography tinh tế: Tiêu đề Serif sang trọng & Nội dung Sans-serif hiện đại",
      "Bố cục Hero Section tích hợp Video Popup & Họa tiết chấm (Dot Pattern) trang trí",
      "Đường phân cách chéo (Diagonal Divider) tạo dòng chảy thị giác độc đáo",
      "Hệ thống Icon tròn phẳng (Flat Icons) tối giản, đồng bộ nhận diện thương hiệu",
      "Thiết kế tập trung vào chuyển đổi với cụm nút CTA kép (Primary & Secondary)"
    ]
  },

  {
    id: 25,
    title: "Vanilla",
    category: "Landing Page",
    package: "Advanced",
    description: "Vanilla mang đến phong cách thiết kế siêu tối giản (Ultra-minimalist), rạng rỡ và hiện đại với việc tận dụng tối đa không gian trắng (White-space). Đúng như tên gọi, giao diện này mang lại cảm giác 'sạch sẽ' và trực quan, là giải pháp hoàn hảo cho các Công ty Công nghệ, SaaS (Phần mềm dịch vụ) hoặc Landing Page Ứng dụng, nơi hình ảnh sản phẩm và các tính năng cốt lõi cần được tôn vinh một cách tinh tế nhất.",
    image: "/images/Vanilla.png",
    demoUrl: "/Vanilla/index.html",
    features: [
      "Thiết kế Tối giản & Sạch (Clean & Minimal) với tông màu Xanh dương (Blue) tạo sự tin cậy",
      "Bố cục Hero Section căn giữa (Centered layout) tập trung hoàn toàn vào Thông điệp & Nút Call-to-Action",
      "Khu vực hiển thị Mockup Giao diện Ứng dụng/Dashboard nổi bật ngay màn hình đầu tiên",
      "Hệ thống Icon nét mảnh (Line-art Icons) thanh lịch, đồng bộ cho phần giới thiệu Dịch vụ",
      "Cấu trúc phân lớp rõ ràng, tối ưu hóa trải nghiệm đọc và điều hướng mượt mà trên mọi thiết bị"
    ]
  },

  {
    id: 26,
    title: "Spark",
    category: "Landing Page",
    package: "Advanced",
    description: "Spark mang đến một phong cách thiết kế tràn đầy năng lượng và rạng rỡ với tông màu xanh lá mạ (Vibrant Green) làm chủ đạo. Giao diện này là sự lựa chọn hoàn hảo cho các Landing Page giới thiệu Ứng dụng (App Landing Page), Startup công nghệ hoặc Phần mềm SaaS, nơi cần sự trẻ trung, trực quan và thúc đẩy người dùng nhấn nút 'Dùng thử/Tải xuống' ngay lập tức.",
    image: "/images/Spark.png",
    demoUrl: "/Spark/TemplateMain/index.html",
    features: [
      "Hero Section nổi bật với nền màu trơn (Solid Color) & Mockup điện thoại 3D sinh động",
      "Bố cục dạng thẻ (Card-based layout) nền trắng, góc bo tròn tạo cảm giác gọn gàng và thân thiện",
      "Tích hợp hiệu ứng Hover tương tác cao (hiện viền màu xanh & tăng độ đổ bóng khi rê chuột vào thẻ)",
      "Typography sử dụng font Sans-serif đậm, rõ nét, kết hợp khoảng trắng (White-space) rộng rãi dễ đọc",
      "Hệ thống Icon tối giản, được thiết kế đồng bộ hoàn toàn với màu nhận diện thương hiệu"
    ]
  },

  {
    id: 27,
    title: "Softbit",
    category: "Landing Page",
    package: "Essential",
    description: "SoftBit mang đến một phong cách thiết kế hiện đại, tràn đầy năng lượng với sự kết hợp hoàn hảo giữa các hình minh họa vector sinh động và đường nét nền uốn lượn (Fluid shapes). Với tông màu Xanh Tím (Purple-Blue) chủ đạo kết hợp cùng điểm nhấn Xanh Ngọc (Mint Green) tươi sáng, template này là công cụ đắc lực để khởi chạy các Sản phẩm phần mềm, Ứng dụng di động (App) hoặc các Dự án SaaS, giúp thu hút và giữ chân người dùng ngay từ những giây đầu tiên.",
    image: "/images/Softbit.png",
    demoUrl: "/Softbit/index.html",
    features: [
      "Hero Section ấn tượng với Hình minh họa phẳng (Flat Illustration) kết hợp không gian làm việc công nghệ hiện đại",
      "Sử dụng các mảng khối nền dạng sóng (Wave/Fluid Background) tạo sự uyển chuyển và mạch lạc cho trang web",
      "Bảng màu tương phản cao giúp các Nút Kêu gọi hành động (CTA Button) cực kỳ nổi bật và thu hút click",
      "Bố cục khu vực Tính năng (Features) dạng lưới rõ ràng, tích hợp hiệu ứng làm nổi bật thẻ (card) trọng tâm bằng bóng đổ (Box-shadow)",
      "Sự pha trộn Typography tinh tế giữa Font chữ Serif cổ điển (ở Tiêu đề mục) và Sans-serif hiện đại (ở nội dung)"
    ]
  },

  {
    id: 28,
    title: "Shine",
    category: "Landing Page",
    package: "Essential",
    description: "SHINE mang đến một trải nghiệm thị giác vô cùng dễ chịu với phong cách thiết kế Đơn sắc (Monochrome) sử dụng dải màu xanh nhạt (Light Blue) làm chủ đạo. Với định hướng thiết kế tinh gọn và hiện đại, đây là template hoàn hảo dành riêng cho các Startup công nghệ, Dự án SaaS hoặc các Công cụ B2B, nơi sự rõ ràng, tốc độ và tính chuyên nghiệp được đặt lên hàng đầu.",
    image: "/images/Shine.png",
    demoUrl: "/Shine/index.html",
    features: [
      "Phong cách thiết kế Clean & Minimalist với nền xanh nhạt liền mạch, tạo cảm giác tin cậy và thư thái",
      "Bố cục Hero Section căn giữa (Center-aligned) giúp điều hướng sự tập trung của người dùng trực tiếp vào nút Call-to-Action (Download Now)",
      "Hình minh họa phẳng (Flat Illustration) phong cách công nghệ, bổ trợ hoàn hảo cho thông điệp của sản phẩm SaaS",
      "Thanh điều hướng (Navbar) tinh gọn, tích hợp đầy đủ các phân mục tiêu chuẩn cho một Landing Page chuyển đổi cao (Services, Features, Pricing, Testimonial...)",
      "Cấu trúc giao diện sinh ra là để tối ưu hóa với các framework Utility-first như TailwindCSS"
    ]
  },

  {
    id: 29,
    title: "Sprout",
    category: "Landing Page",
    package: "Advanced",
    description: "Giao diện này mang đến một luồng gió tươi mát với dải màu Gradient Xanh dương - Xanh ngọc (Blue-Cyan) tràn đầy năng lượng. Thiết kế tập trung tuyệt đối vào tỷ lệ chuyển đổi (Conversion-focused) với form đăng ký ngay màn hình đầu tiên. Đây là giải pháp hoàn hảo cho các Chiến dịch Pre-launch (Ra mắt sớm), Ứng dụng di động, hoặc Thu thập Lead (Lead Generation) cho các dịch vụ số.",
    image: "/images/Sprout.png",
    demoUrl: "/Sprout/index.html",
    features: [
      "Thanh điều hướng (Navbar) nổi bật với dải màu Gradient thời thượng & Nút CTA 'Download Now' tương phản",
      "Hero Section tối ưu hóa chuyển đổi với Form thu thập Email (Opt-in form) đặt ngay vị trí trung tâm",
      "Sử dụng Hình minh họa 3D Isometric hiện đại, giúp trực quan hóa sản phẩm công nghệ một cách gần gũi",
      "Bố cục căn giữa (Center-aligned) kết hợp khoảng trắng (White-space) tinh tế, dẫn dắt ánh nhìn trực tiếp vào hành động chính",
      "Typography sử dụng font Sans-serif bo tròn nhẹ, tạo cảm giác thân thiện và đáng tin cậy"
    ]
  },

  {
    id: 30,
    title: "Play",
    category: "Landing Page",
    package: "Advanced",
    description: "PLAY mang đến một trải nghiệm thị giác mạnh mẽ và đáng tin cậy với phông nền xanh dương (Solid Blue) rực rỡ và các thành phần tối giản. Được định vị là một mẫu giao diện đa năng (Multidisciplinary), đây là 'vũ khí' lý tưởng cho các Dự án SaaS, Startup công nghệ, hoặc Sản phẩm Open-Source, đặc biệt hấp dẫn đối với cả người dùng cuối lẫn các nhà phát triển.",
    image: "/images/Play.png",
    demoUrl: "/Play/index.html",
    features: [
      "Sử dụng tông màu Xanh dương đậm chủ đạo giúp truyền tải sự chuyên nghiệp, ổn định và an toàn",
      "Hiển thị trực quan hệ sinh thái công nghệ (Tech Stack Icons) ngay dưới phần giới thiệu để tăng độ uy tín",
      "Bố cục Hero căn giữa với cụm Nút kêu gọi hành động (CTA) kép: một nút khối đặc (Solid) và một nút liên kết (Text Link)",
      "Thủ thuật thiết kế 'Lấp ló' (Peekaboo mockup) hiển thị một nửa Dashboard ở viền dưới, kích thích người dùng cuộn trang để xem tiếp",
      "Điểm xuyết bằng họa tiết lưới chấm (Dot Grid Pattern) tinh tế, phá vỡ sự đơn điệu của phông nền trơn"
    ]
  },

  {
    id: 31,
    title: "Fusion",
    category: "Landing Page",
    package: "Advanced",
    description: "Fusion mang đến một phong cách thiết kế tràn đầy năng lượng với điểm nhấn là dải sóng màu Đỏ Hồng (Vibrant Pink-Red Gradient) uốn lượn đẹp mắt. Với sự kết hợp giữa các hình minh họa vector sinh động và không gian trắng (white-space) thoáng đãng, đây là template tuyệt vời dành cho các Doanh nghiệp, Sản phẩm SaaS hoặc Ứng dụng di động (Mobile App) muốn truyền tải sự trẻ trung, sáng tạo và thân thiện với người dùng.",
    image: "/images/Fusion.png",
    demoUrl: "/Fusion/index.html",
    features: [
      "Hero Section nổi bật với Hình minh họa vector (Vector Illustration) mô phỏng một nhóm làm việc đang tương tác với ứng dụng di động khổng lồ",
      "Sử dụng dải nền dạng sóng (Fluid Wave Background) ở viền dưới tạo dòng chảy thị giác mượt mà và phá vỡ sự cứng nhắc của các khối hộp truyền thống",
      "Typography kết hợp ấn tượng: Tiêu đề dùng font Serif/Slab-serif dày dặn tạo sự chú ý, kết hợp với font Sans-serif thanh mảnh cho nội dung",
      "Hệ thống Nút kêu gọi hành động (CTA) kép chuyên nghiệp: một nút chính phủ màu đặc (Solid) và một nút phụ dạng viền (Outline)",
      "Thanh điều hướng (Navbar) tối giản, giữ nền trắng trong suốt để tôn lên toàn bộ khu vực nội dung chính"
    ]
  },

  {
    id: 32,
    title: "Delivery",
    category: "Landing Page",
    package: "Advanced",
    description: "Template Delivery mang đến một thiết kế tinh gọn (Clean Design) với tông màu Trắng - Đỏ (White-Red) tương phản, giúp thông điệp trở nên sắc nét và dễ tiếp nhận. Với hình minh họa phẳng (Flat Illustration) sinh động về trải nghiệm mua sắm trên di động, đây là giao diện hoàn hảo cho các Ứng dụng giao hàng, E-commerce App hoặc Dịch vụ đi chợ hộ, nơi cần thúc đẩy người dùng tải ứng dụng ngay lập tức.",
    image: "/images/Delivery.png",
    demoUrl: "/Delivery/index.html",
    features: [
      "Bố cục Split-screen (chia đôi màn hình) kinh điển: Text bên trái, Hình ảnh minh họa bên phải giúp cân bằng thị giác",
      "Sử dụng Hình minh họa phẳng (Flat Illustration) chất lượng cao, mô tả chính xác trải nghiệm sử dụng ứng dụng di động",
      "Nút Call-to-Action 'Download App' màu đỏ nổi bật, được thiết kế bo góc nhẹ (soft rounded) để tạo sự thân thiện",
      "Typography sử dụng font Sans-serif dày dặn cho Tiêu đề (Headings) và mỏng hơn cho Đoạn văn (Paragraph), tối ưu hóa khả năng đọc",
      "Thanh điều hướng (Navbar) tối giản với Logo kết hợp icon chữ 'D' độc đáo, cùng các liên kết menu dàn trải rõ ràng"
    ]
  },

  {
    id: 33,
    title: "Blaze",
    category: "Landing Page",
    package: "Advanced",
    description: "Blaze mang đến một ngôn ngữ thiết kế thân thiện và mềm mại với tông màu Xanh Tím (Violet-Blue) làm chủ đạo. Điểm nhấn của template này là hiệu ứng đổ bóng mờ (Soft Drop-shadow) kết hợp cùng các góc bo tròn sâu (Large Border-radius), tạo cảm giác mượt mà và an toàn. Đây là một Landing Page chuyên biệt được tối ưu hóa cho tỷ lệ chuyển đổi cao (High-converting), hoàn hảo cho các Phần mềm SaaS, Công cụ tài chính (Fintech) hoặc Dashboard quản trị.",
    image: "/images/Blaze.png",
    demoUrl: "/Blaze/index.html",
    features: [
      "Hero Section gây ấn tượng mạnh với phong cách Typography đặc biệt: Tiêu đề kết hợp giữa chữ nét liền (Solid) và chữ nét viền (Outline/Stroke)",
      "Hiển thị Mockup Giao diện (App Dashboard) nổi bật, chi tiết và có chiều sâu nhờ hiệu ứng đổ bóng đa lớp",
      "Bảng màu dịu mắt với điểm nhấn là Nút CTA 'Get Started' màu Cam Đào (Peach Orange) tương phản, kích thích hành động",
      "Thanh điều hướng (Navbar) trong suốt, gạch chân (underline) menu đang chọn (Active state) một cách tinh tế",
      "Các thành phần UI nhỏ bay lơ lửng (Floating UI Elements) xung quanh Mockup chính giúp giao diện trở nên sống động và bớt khô khan"
    ]
  },

  {
    id: 34,
    title: "Basic",
    category: "Landing Page",
    package: "Essential",
    description: "Basic mang đến một không gian kỹ thuật số sâu thẳm và đầy cuốn hút nhờ dải màu nền Gradient Xanh - Tím (Blue-Purple) kết hợp cùng các họa tiết bong bóng nổi (Floating bubbles). Bất chấp tên gọi 'Basic', template này sở hữu cấu trúc nền tảng vô cùng mạnh mẽ, được thiết kế chuẩn mực để làm bệ phóng (Kickstart) hoàn hảo cho các Dự án SaaS, Ứng dụng Web hoặc Startup công nghệ đang trong giai đoạn ra mắt sản phẩm.",
    image: "/images/Basic.png",
    demoUrl: "/Basic/index.html",
    features: [
      "Sử dụng phông nền Gradient toàn màn hình tích hợp các họa tiết hình tròn mờ (Floating Orbs) tạo chiều sâu 3D bắt mắt",
      "Bố cục Hero căn giữa (Center-aligned) chuẩn mực, giúp thu hút toàn bộ sự tập trung của người dùng vào thông điệp chính",
      "Hệ thống nút Call-to-Action (CTA) sử dụng các dải màu nổi bật (Xanh Mint và Cam Đào) tạo độ tương phản cực mạnh trên nền xanh tối",
      "Đường cắt phân cách lượn sóng (Wave Shape Divider) mềm mại, phá vỡ sự góc cạnh và chuyển tiếp mượt mà xuống khu vực nội dung bên dưới",
      "Áp dụng thủ thuật hiển thị Mockup 'lấp ló' (Peekaboo Dashboard) ở cạnh dưới màn hình, kích thích sự tò mò và hành động cuộn trang của người dùng"
    ]
  },

  {
    id: 35,
    title: "Appvilla",
    category: "Landing Page",
    package: "Advanced",
    description: "Appvilla mang đến một trải nghiệm thị giác bùng nổ với tông màu Hồng San Hô (Coral Pink) rực rỡ và tràn đầy năng lượng. Được thiết kế chuyên biệt như một Landing Page giới thiệu ứng dụng, giao diện này là 'vũ khí' đắc lực cho các Startup, Sản phẩm công nghệ hoặc Giải pháp doanh nghiệp (B2B App) muốn tối ưu hóa tỷ lệ chuyển đổi và thúc đẩy người dùng tải ứng dụng ngay lập tức.",
    image: "/images/Appvilla.png",
    demoUrl: "/Appvilla/index.html",
    features: [
      "Sử dụng nền màu trơn rực rỡ (Vibrant Solid Background) giúp tạo độ tương phản mạnh mẽ, làm nổi bật hoàn toàn văn bản và hình ảnh sản phẩm",
      "Hiển thị kép Mockup Điện thoại (Dual Mobile Mockups) với bố cục xếp chồng lấp ló, giúp phô diễn được nhiều giao diện tính năng của ứng dụng hơn",
      "Cụm nút Call-to-Action (CTA) kép 'App Store' và 'Google Play' được thiết kế chuẩn mực với icon trực quan, tối ưu cho hành động tải xuống",
      "Bố cục chia đôi (Split layout) kinh điển giúp cân bằng thị giác: Nội dung chữ bên trái dẫn dắt, hình ảnh sản phẩm thực tế bên phải để thuyết phục",
      "Thanh điều hướng (Navbar) tinh tế với nút 'Get It Now' dạng viền (Outline), không làm phân tán sự chú ý khỏi cụm CTA chính ở giữa trang"
    ]
  },

  {
    id: 36,
    title: "Applayer",
    category: "Landing Page",
    package: "Essential",
    description: "Applayer mang đến một thiết kế chuẩn mực và đáng tin cậy với tông màu Xanh dương (Royal Blue) đặc trưng của ngành y khoa. Với sự kết hợp giữa các hình khối mềm mại và minh họa trực quan, giao diện này là lựa chọn hoàn hảo cho các Ứng dụng Chăm sóc Sức khỏe (Healthcare App), Phòng khám số (Telemedicine) hoặc các Dự án HealthTech, giúp xây dựng niềm tin vững chắc với bệnh nhân và người dùng ngay từ lần truy cập đầu tiên.",
    image: "/images/Applayer.png",
    demoUrl: "/Applayer/index.html",
    features: [
      "Sử dụng dải nền sóng lượn (Fluid Wave Background) tạo cảm giác êm dịu, an toàn và thân thiện",
      "Hiệu ứng xếp chồng Mockup Điện thoại (Layered Mobile Mockups) thông minh, giúp phô diễn được chuỗi tính năng của ứng dụng mà không làm rối mắt",
      "Tích hợp Hình minh họa phẳng (Flat Illustration) chủ đề Y tế sinh động, dễ dàng truyền tải thông điệp dịch vụ",
      "Nút Kêu gọi hành động (CTA) 'Get Started' nền trắng bo tròn góc (Pill-shape), tạo độ tương phản thanh lịch và tập trung tối đa sự chú ý trên nền xanh",
      "Thanh điều hướng (Navbar) tích hợp hiệu ứng dấu chấm nhỏ (Dot indicator) tinh tế để báo hiệu trang đang xem (Active state)"
    ]
  },

  {
    id: 37,
    title: "Appland",
    category: "Landing Page",
    package: "Advanced",
    description: "AppLand mang đến một không gian thiết kế vô cùng sáng tạo với phong cách Soft & Clean. Sự kết hợp giữa phông nền trắng tinh khôi và các họa tiết hình học pastel mềm mại (Blob shapes) giúp giao diện trở nên bắt mắt mà không bị rối rắm. Đây là một Landing Page mẫu mực dành cho các Ứng dụng di động (Mobile App), Startup sáng tạo, hoặc Nền tảng mạng xã hội/chia sẻ nội dung, nơi cần thu hút người dùng bằng sự trẻ trung, thân thiện và hiện đại.",
    image: "/images/Appland.png",
    demoUrl: "/Appland/index.html",
    features: [
      "Sử dụng các họa tiết nền pastel dạng khối mờ (Abstract Blobs) điểm xuyết lơ lửng, tạo chiều sâu, sự vui tươi và phá vỡ sự cứng nhắc của thiết kế web truyền thống",
      "Typography ấn tượng: Nhấn mạnh cụm từ khóa chính ('Launch Your App With') bằng màu Xanh dương nổi bật ngay trên tiêu đề, giúp dẫn dắt ánh nhìn và thông điệp hiệu quả",
      "Cụm Nút Kêu gọi hành động (CTA) tương tác kép: Tích hợp nút 'Download Now' dạng khối đặc (Solid) đi kèm với nút Play Video bo tròn để người dùng dễ dàng xem demo sản phẩm",
      "Hiển thị Mockup ứng dụng theo phong cách Tối giản (Clay/Minimalist Mockup): Viền điện thoại được làm trắng đồng màu nền, tôn lên tối đa màu sắc rực rỡ của giao diện UI/UX bên trong",
      "Bố cục chia đôi màn hình (Split-layout) chuẩn mực giúp cân bằng hoàn hảo giữa phần nội dung chữ (Typography) bên trái và hình ảnh trực quan (Visual) bên phải"
    ]
  },

  {
    id: 38,
    title: "Appi",
    category: "Landing Page",
    package: "Advanced",
    description: "Appi mang đến một trải nghiệm thiết kế mềm mại, tinh tế nhưng không kém phần năng động với dải màu Gradient Hồng - Tím (Pink-Purple) nữ tính và dịu mắt. Sự kết hợp giữa phông nền trắng sạch sẽ và các thiết bị lơ lửng trong không gian ba chiều tạo cảm giác nhẹ nhàng, biến đây thành template lý tưởng cho các Ứng dụng Tài chính cá nhân (Fintech/Budget App), Phần mềm quản lý, hoặc các Startup công nghệ hướng tới đối tượng người dùng trẻ, yêu thích sự thanh lịch.",
    image: "/images/Appi.png",
    demoUrl: "/Appi/index.html",
    features: [
      "Bố cục Hero Section chia đôi (Split-layout) thanh lịch, sử dụng màu chữ Tím than (Deep Purple) giúp văn bản nổi bật và sang trọng trên nền trắng",
      "Hiển thị Mockup Điện thoại theo góc nghiêng không gian 3D (Isometric/Tilted Mockups), tạo chiều sâu và cảm giác chuyển động linh hoạt cho sản phẩm",
      "Sử dụng các họa tiết hình học mờ lơ lửng (Blurred Floating Shapes) điểm xuyết làm background, giúp không gian bớt trống trải nhưng vẫn giữ được sự tinh giản",
      "Hệ thống nút Kêu gọi hành động (CTA) tương phản: Nút 'Download Now' phủ dải màu Gradient rực rỡ để thu hút click, song hành cùng nút 'Watch How It Works' dạng viền tối giản",
      "Thanh điều hướng (Navbar) tinh gọn, căn lề chuẩn xác và đồng bộ màu sắc hoàn hảo với Logo nhận diện của thương hiệu"
    ]
  },

  {
    id: 39,
    title: "Advanced",
    category: "Landing Page",
    package: "Advanced",
    description: "Advanced mang đến một trải nghiệm thị giác ấn tượng và sang trọng với phông nền Tím đậm (Deep Purple) chủ đạo, giúp tôn lên tối đa màu sắc của sản phẩm. Điểm nhấn đột phá của template này là kỹ thuật trình bày giao diện bóc tách (Pop-out UI), khiến các chi tiết bên trong ứng dụng trở nên sinh động và trực quan hơn bao giờ hết. Đây là lựa chọn hoàn hảo cho các Ứng dụng Đặt đồ ăn (Food Delivery App), Dịch vụ Nhà hàng, hoặc các Startup Công nghệ muốn làm nổi bật trải nghiệm người dùng (UX/UI) ngay từ Landing Page.",
    image: "/images/Advanced.png",
    demoUrl: "/Advanced/index.html",
    features: [
      "Sử dụng nền màu trơn (Solid Color) tối màu kết hợp với họa tiết Gradient chìm nhẹ, tạo chiều sâu và độ tương phản cao cho văn bản màu trắng",
      "Kỹ thuật phô diễn giao diện bóc tách (Floating UI Cards): Các thẻ thông tin (như thẻ món ăn, thanh danh mục) được thiết kế lơ lửng bên ngoài màn hình điện thoại, tạo hiệu ứng 3D vô cùng bắt mắt",
      "Hệ thống nút Kêu gọi hành động (CTA) kép chuyên nghiệp: Nút chính 'Discover More' phủ màu Xanh dương rực rỡ, song hành cùng nút phụ 'Download App' dạng viền (Outline) thanh lịch",
      "Typography mang phong cách Bold & Confident: Sử dụng font chữ Sans-serif bản to, dày cho Tiêu đề chính để khẳng định sự uy tín và thu hút sự chú ý tức thì",
      "Bố cục chia đôi (Split-layout) cân bằng hoàn hảo giữa phần nội dung giới thiệu (trái) và hình ảnh Mockup sản phẩm thực tế (phải)",
    ]
  },

  // {
  //   id: ,
  //   title: "",
  //   category: "Landing Page",
  //   package: "Advanced,Essential",
  //   description: "",
  //   image: "/images/.png",
  //   demoUrl: "//index.html",
  //   features: [

  //   ]
  // },
];