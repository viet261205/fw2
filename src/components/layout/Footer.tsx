import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400">PetShop</h3>
                        <p className="mt-4 text-gray-400">Được quý khách tin tưởng là niềm tự hào của chúng tôi</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-purple-400">Trang chủ</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-purple-400">Giới thiệu</a></li>
                            <li><a href="/promotions" className="text-gray-400 hover:text-purple-400">Tin tức</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-purple-400">Liên hệ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Địa chỉ</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Hồ tùng mậu</li>
                            <li>Phone: 032565687</li>
                            <li>Email: contact@tuna</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h4>
                        <div className="flex space-x-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-purple-400">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-purple-400">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-purple-400">
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} BSP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
