'use client'
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import Button from "@/app/shared-componens/Button";

const BestProducts = () => {
  const products = [
    {
      image: '/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png',
      name: 'The North Coat',
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
    },
    {
      image: '/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png',
      name: 'Gucci Duffle Bag',
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 65,
    },
    {
      image: '/gammaxx-l240-argb-1-500x500 1.png',
      name: 'RGB Liquid CPU Cooler',
      price: 160,
      originalPrice: 170,
      rating: 5,
      reviews: 65,
    },
    {
      image: '/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png',
      name: 'Small Bookshelf',
      price: 375,
      originalPrice: 400,
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <div className="max-w-[1512px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-5 h-10 bg-pink-700 rounded"></div>
        <p className="text-pink-700 font-bold text-lg">This Month</p>
      </div>
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-[40px] mb-10">Best Selling Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                sizes="(max-width: 1512px) 25vw, 200px"
                className="w-full h-[200px] object-contain"
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <AiOutlineHeart className="text-xl cursor-pointer hover:text-pink-700" />
                <AiOutlineEye className="text-xl cursor-pointer hover:text-pink-700" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-base sm:text-lg font-medium">{product.name}</p>
              <div className="flex gap-3 items-center mt-1">
                <span className="text-pink-700 font-bold">${product.price}</span>
                <span className="text-gray-500 line-through">${product.originalPrice}</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < product.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
                <p className="text-gray-500 text-sm">({product.reviews})</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center bg-black rounded-lg p-8 mt-12 gap-8">
        <div className="flex-1">
          <p className="text-green-300 text-sm sm:text-base">Categories</p>
          <p className="text-white font-bold text-2xl sm:text-3xl lg:text-[50px] max-w-[500px]">
            Enhance Your Music Experience
          </p>
          <div className="flex gap-4 mt-6">
            {[
              { value: '23', label: 'Hours' },
              { value: '05', label: 'Days' },
              { value: '59', label: 'Minutes' },
              { value: '35', label: 'Seconds' },
            ].map((timer, index) => (
              <div
                key={index}
                className="bg-white rounded-full flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20"
              >
                <p className="font-bold text-lg sm:text-xl">{timer.value}</p>
                <p className="text-xs sm:text-sm">{timer.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button
              buttonText="Buy Now"
              variant="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded"
              onclickHandler={() => alert('Buy Now clicked')}
            />
          </div>
        </div>
        <Image
          src={'/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'}
          alt="JBL Boombox"
          width={500}
          height={400}
          sizes="(max-width: 1512px) 50vw, 500px"
          className="w-full max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default BestProducts;