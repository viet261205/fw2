import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-pink-100 py-10 px-6 text-gray-800">
            <div className=" mx-auto grid grid-cols-3 gap-8">
                {/* Cột Liên Lạc */}
                <div>
                    <h3 className="font-bold text-lg">LIÊN LẠC</h3>
                    <p className="mt-2"><strong>Địa chỉ:</strong> Số 136 Hồ Tùng Mậu - Hà Nội</p>
                    <p><strong>Điện thoại:</strong> 550.86.36.96</p>
                    <p><strong>Email:</strong> petshop223@gmail.com</p>
                </div>

                {/* Cột Instagram */}
                <div>
                    <h3 className="font-bold text-lg">INSTAGRAM</h3>
                    <div className=" mt-2">
                        <img width="300" src="https://i.pinimg.com/736x/c7/c5/ee/c7c5ee9481e54ff75d26eb62e5d2e4d9.jpg" alt="" />
                    </div>
                </div>

                {/* Cột Facebook */}
                <div>
                    <div className="mt-2">
                        <div>
                            <h3 className="font-bold text-lg">FACEBOOK</h3>
                            <img width="300" src="https://i.pinimg.com/736x/c7/c5/ee/c7c5ee9481e54ff75d26eb62e5d2e4d9.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <br /><br />

            {/* Thanh Footer Dưới */}
            <div className="mt-8 bg-pink-300 py-4 flex justify-between items-center px-10 text-white">
                <div className="flex items-center gap-3">
                    <span className="text-xl">🏠 HOME</span>
                    <span className="text-xl">💬 CHAT ZALO</span>
                    <span className="text-xl">💬 MESSENGER</span>
                </div>
                <button className="bg-pink-500 px-4 py-2 rounded-full text-lg">📞 HOTLINE</button>
            </div>
        </footer>
    );
};

export default Footer;

