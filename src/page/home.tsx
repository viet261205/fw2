import React, { useEffect, useState } from "react";
import { type Product } from "../types";
import ProductCard from "../components/home/ProductCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import dog3 from "../assets/images/dog3.png";
import dog1 from "../assets/images/dog1.png";
import dog2 from "../assets/images/dog2.png";
import dog5 from "../assets/images/dog5.png";
import dog6 from "../assets/images/dog6.png";
import dog7 from "../assets/images/dog7.png";
import dog8 from "../assets/images/dog8.png";
import dog4 from "../assets/images/dog4.png";

const newsData = [
    {
        id: 1,
        title: "Chú chó đắt nhất thế giới",
        description: "Chú chó Cadabomb Okami, con lai của một chú sói nguyên bản và chó chăn cừu Caucasian, vừa được bán với giá 5,7 triệu USD, đắt nhất thế giới.",
        image: "https://i1-giadinh.vnecdn.net/2025/03/19/bc746a0d9d292c70ea4cbbd40db65f-3538-8979-1742355963.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=k9T9jmh-qI4l3AH-RFN0Bw",
        comments: 14
    },
    {
        id: 2,
        title: "Bức xúc vì bị nhắc nhở để mèo kêu trên máy bay",
        description: "Một hành khách tại Mỹ yêu cầu bồi thường do trải nghiệm tệ vì tiếp viên yêu cầu ngăn mèo kêu ồn ào, nếu không sẽ phải rời máy bay.",
        image: "https://i1-dulich.vnecdn.net/2025/03/11/travel-information-cat-transpo-1543-1342-1741648830.png?w=680&h=0&q=100&dpr=1&fit=crop&s=sOYcaGky8paRPtQ1y3Gfag",
        comments: 17
    },
    {
        id: 3,
        title: "Startup Mỹ tạo ra thế hệ thú cưng mới nhờ chỉnh sửa gene",
        description: "Công ty Los Angeles Project đang phát triển những vật nuôi 'thú vị' hơn như thỏ phát sáng, chó mèo không gây dị ứng, thậm chí kỳ lân.",
        image: "https://i1-vnexpress.vnecdn.net/2025/02/28/thu-cung-set-1740740196-8435-1740741227.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=M0Wfw2fQaI71rYRyZXkYHw",
        comments: 22
    },
    {
        id: 4,
        title: "Thi tạo mẫu lông độc lạ cho chó cưng",
        description: "Hơn 60 con chó từ trong nước, Trung Quốc, Thái Lan, Malaysia tham gia cuộc thi cắt tỉa lông tạo kiểu trong lễ hội thú cưng, ngày 20/2.",
        image: "https://i1-giadinh.vnecdn.net/2025/02/20/233A8526-1740061630.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Sc1P45nM3mk_2M-LFzFkTQ",
        comments: 12
    }
];


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
                <h2 style={{
                    textAlign: "center",
                    color: "pink",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                }}
                    className="text-pink-300 text-3xl">
                    Danh mục thú cưng
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <section>
                <h1
                    style={{
                        textAlign: "center",
                        color: "pink",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
                    }}
                    className="text-pink-300 text-3xl"
                >
                    Tin tức mới nhất
                </h1>
                <br />
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {newsData.map((news) => (
                        <div key={news.id} className="flex flex-col md:flex-row items-center gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
                            <div className="w-full md:w-1/2">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full md:w-80 lg:w-96 max-w-sm rounded-lg shadow-md object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 max-w-lg text-gray-700 text-lg py-4">
                                <h3 className="text-xl font-semibold text-black text-center md:text-left">
                                    {news.title}
                                </h3>
                                <p>{news.description}</p>
                                <p className="text-gray-500 text-sm mt-2">
                                    {news.comments} bình luận
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <br />
            <hr />
            <section className="relative w-full bg-white pb-10"> <br />
                <div className="relative w-full flex justify-center space-x-2">
                    <img src={dog1} alt="Dog 1" className="dog-banner" />
                    <img src={dog2} alt="Dog 2" className="dog-banner" />
                    <img src={dog3} alt="Dog 3" className="dog-banner" />
                    <img src={dog5} alt="Dog 5" className="dog-banner" />
                    <img src={dog6} alt="Dog 6" className="dog-banner" />
                    <img src={dog7} alt="Dog 7" className="dog-banner" />
                    <img src={dog8} alt="Dog 8" className="dog-banner" />
                    <img src={dog4} alt="Dog 4" className="dog-banner" />
                </div>

                <div className="absolute bottom-0 left-0 w-full h-2 bg-pink-300"></div>
            </section>
            <br />
            <br /> <br />
            <Footer />
        </div>
    );
}
