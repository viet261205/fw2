import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md text-black">
      <br />
      <div className="w-3/4 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <br />
        <div className="w-auto flex justify-start items-center space-x-2">
          <div className="max-w-[150px]">
            <img
              src="https://i.pinimg.com/736x/c7/c5/ee/c7c5ee9481e54ff75d26eb62e5d2e4d9.jpg"
              alt="Logo"
              className="w-30 h-40 rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold flex-1 text-center">PetShop</h1>

        <div className="flex-1 flex justify-center items-center">
          
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center space-x-4">
          <button className="hover:text-gray-400">
            <User className="h-10 w-10" />
          </button>
          <button className="hover:text-gray-400 relative">
            <ShoppingCart className="h-10 w-10" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
      <nav style={{ textAlign: "center" }} className="flex justify-center items-center text-3xl font-semibold py-3">
        <br />
        <a href="/" className="px-10 hover:text-gray-500 transition-all duration-200 font-bold font-sans text-black">Trang chủ</a>
        <a href="/menu" className="px-10 hover:text-gray-500 transition-all duration-200 font-bold font-sans">Giới thiệu</a>
        <a href="/promotions" className="px-10 hover:text-gray-500 transition-all duration-200 font-bold font-sans">Tin tức</a>
        <a href="/about" className="px-10 hover:text-gray-500 transition-all duration-200 font-bold font-sans">Liên Hệ</a>

      </nav>


    </header>
  );
}
