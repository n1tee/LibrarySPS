// app/components/Footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8 text-gray-700 text-sm">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* --- CỘT 1: LOGO & SOCIAL --- */}
                <div className="flex flex-col gap-6">
                    {/* Logo & Slogan */}
                    <div>
                        <img
                            src="/sps_logo_final.png"
                            alt="SPS Logo - Schlank – Professionell – Stabil"
                            className="h-68 w-auto object-contain"
                        />
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-auto">
                        <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:opacity-80 transition"><Facebook size={20} /></a>
                        <a href="#" className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-2 rounded-full hover:opacity-80 transition"><Instagram size={20} /></a>
                        <a href="#" className="bg-red-600 text-white p-2 rounded-full hover:opacity-80 transition"><Youtube size={20} /></a>
                        <a href="#" className="bg-[#0077b5] text-white p-2 rounded-full hover:opacity-80 transition"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* --- CỘT 2: THÔNG TIN LIÊN HỆ --- */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-gray-900 text-lg">
                        Southern Star Investment and Development Consulting JSC (SPN)
                    </h3>

                    <ul className="space-y-3">
                        <li className="flex gap-2 items-start">
                            <MapPin size={18} className="text-[#0F4C81] mt-1 shrink-0" />
                            <span>
                                <strong>Vietnam Office:</strong> 6 Phung Khac Khoan Street, Da Kao Ward, District 1, Ho Chi Minh City
                            </span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Phone size={18} className="text-[#0F4C81] shrink-0" />
                            <span>
                                <strong>Phone:</strong> (028) 3818 1287
                            </span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png" className="w-4 h-4 mt-0.5" alt="Zalo" /> {/* Icon giả lập Zalo/Whatsapp */}
                            <span>
                                <strong>WhatsApp / Zalo:</strong> (+84) 819 949 968
                            </span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <MapPin size={18} className="text-[#0F4C81] mt-1 shrink-0" />
                            <span>
                                <strong>EU Contact Address:</strong> Eyller strasse 8a, Kamp-Lintfort, 47475, NRW
                            </span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="font-bold text-[#0F4C81]">👤</span>
                            <span>
                                <strong>Contacter:</strong> Albert Hoang (WhatsApp / Mobile): <br />
                                <span className="font-semibold">+49 1512 4172951</span>
                            </span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Mail size={18} className="text-[#0F4C81] shrink-0" />
                            <span>
                                <strong>Email:</strong> spsmarketingdevn@gmail.com
                            </span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Globe size={18} className="text-[#0F4C81] shrink-0" />
                            <span>
                                <strong>Website:</strong> <a href="https://spsmarketing.de" className="text-[#0F4C81] hover:underline">spsmarketing.de</a>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* --- CỘT 3: CHÍNH SÁCH & BẢN ĐỒ --- */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-4">Policies</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-[#0F4C81] transition">Membership Benefits Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#0F4C81] transition">Warranty Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#0F4C81] transition">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Bản đồ (Iframe Google Maps) */}
                    <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.664446452285!2d6.5365!3d51.4965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8bf9b7b7b7b7b%3A0x123456789!2sEyller%20Stra%C3%9Fe%208a%2C%2047475%20Kamp-Lintfort%2C%20Germany!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs">
                © 2024 SPS Marketing. All rights reserved.
            </div>
        </footer>
    );
}