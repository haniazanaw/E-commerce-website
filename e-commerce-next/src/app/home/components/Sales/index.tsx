'use client'
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import Button from "@/app/shared-componens/Button";

const Sales = () => {
  return (
    <div className="max-w-[1512px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-5 h-10 bg-pink-700 rounded"></div>
        <p className="text-pink-700 font-bold text-lg">Today&apos;s</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold">Flash Sales</h1>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <div className="flex flex-col items-center">
            <p className="text-xs">Days</p>
            <p className="font-bold text-2xl sm:text-[30px]">03</p>
          </div>
          <p className="text-pink-600 font-bold text-2xl sm:text-[30px]">:</p>
          <div className="flex flex-col items-center">
            <p className="text-xs">Hours</p>
            <p className="font-bold text-2xl sm:text-[30px]">23</p>
          </div>
          <p className="text-pink-600 font-bold text-2xl sm:text-[30px]">:</p>
          <div className="flex flex-col items-center">
            <p className="text-xs">Minutes</p>
            <p className="font-bold text-2xl sm:text-[30px]">19</p>
          </div>
          <p className="text-pink-600 font-bold text-2xl sm:text-[30px]">:</p>
          <div className="flex flex-col items-center">
            <p className="text-xs">Seconds</p>
            <p className="font-bold text-2xl sm:text-[30px]">56</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <FaArrowLeft className="text-2xl cursor-pointer hover:text-pink-700" />
          <FaArrowRight className="text-2xl cursor-pointer hover:text-pink-700" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            image: '/g92-2-500x500 1.png',
            discount: '-40%',
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            rating: 5,
            reviews: 88,
          },
          {
            image: '/ak-900-01-500x500 1.png',
            discount: '-35%',
            name: 'AK-900 Wired Keyboard',
            price: 960,
            originalPrice: 1160,
            rating: 4,
            reviews: 75,
          },
          {
            image: '/tvscreen.jpeg',
            discount: '-30%',
            name: 'IPS LCD Gaming Monitor',
            price: 370,
            originalPrice: 400,
            rating: 5,
            reviews: 99,
          },
          {
            image: '/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png',
            discount: '-25%',
            name: 'S-Series Comfort Chair',
            price: 375,
            originalPrice: 400,
            rating: 5,
            reviews: 99,
          },
        ].map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-pink-700 text-white text-sm px-2 py-1 rounded">
                {product.discount}
              </div>
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

      <div className="flex justify-center mt-12">
        <Button
          buttonText="View All Products"
          variant="bg-pink-700 hover:bg-pink-800 text-white py-3 px-6 rounded"
          onclickHandler={() => alert('Viewing all products')}
        />
      </div>

      <hr className="mt-12 border-gray-300" />
    </div>
  );
};

export default Sales;