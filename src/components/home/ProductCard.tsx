
import { useNavigate } from "react-router-dom";
import { type Product } from "../../types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)} 
    >
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-500 text-sm line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-purple-600 font-bold text-xl">
            {Number(product.price).toLocaleString("vi-VN")}đ
          </span>
          <button
            className="bg-purple-600 text-white px-3 py-1 text-sm rounded-md hover:bg-purple-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation(); 
              alert("Đã thêm vào giỏ hàng!");
            }}
          >
            🛒 Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
}
