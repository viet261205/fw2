import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md text-black">
      <br />
      <br />
      <div className="max-w-7l  px-4 sm:px-6 lg:px-8 flex justify-between items-center h-33" style={{ margin: "0-auto" }}>
        <br />

        <div className="w-auto flex justify-start items-center space-x-2">
          <div className="max-w-[250px]">
            <img
              src="https://i.pinimg.com/736x/c7/c5/ee/c7c5ee9481e54ff75d26eb62e5d2e4d9.jpg"
              alt="Logo"
              className="w-100% rounded-full object-cover"
            />
          </div>

        </div>
        <nav style={{ textAlign: "center" }} className="flex justify-center items-center text-3xl font-semibold py-3">
          <br />
          <a href="/about" className="px-10 font-bold font-sans transition-all duration-200" style={{ color: "pink" }}>     <b>Trang Chủ</b>
          </a>
          <a href="/about" className="px-10 font-bold font-sans transition-all duration-200" style={{ color: "pink" }}><b>Giới thiệu </b></a>
          <a href="/about" className="px-10 font-bold font-sans transition-all duration-200" style={{ color: "pink" }}>
            <b>Tin tức</b></a>
          <a href="/about" className="px-10 font-bold font-sans transition-all duration-200" style={{ color: "pink" }}>
            <b>Liên Hệ</b>
          </a>


        </nav>

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

    </header>
  );
}
