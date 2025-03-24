import React, { useEffect, useState } from "react";
import { type Product } from "../types";
import ProductCard from "../components/home/ProductCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 10)));
    }, []);

    return (
        <div>
            <Header />

            <section className="relative h-[500px] w-full">
                <img style={{ width: "100%", height: "auto" }}
                    src="https://vetad.net/wp-content/uploads/2018/10/Banner3-1.jpg"
                    alt="Bubble Tea Banner"
                    className="object-cover" />




            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Danh mục thú cưng
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
