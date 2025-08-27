'use client'
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import Button from "@/app/shared-componens/Button";

const ExploreProducts = () => {
  const products = [
    {
      image: '/71RdoeXxtrL 1.png',
      name: 'Breed Dry Dog Food',
      price: 360,
      rating: 3,
      reviews: 35,
      discount: null,
      colors: ['bg-pink-700', 'bg-pink-700'],
    },
    {
      image: '/eos-250d-03-500x500 1.png',
      name: 'CANON EOS DSLR Camera',
      price: 360,
      rating: 4,
      reviews: 95,
      discount: null,
      colors: [],
    },
    {
      image: '/ideapad-gaming-3i-01-500x500 1.png',
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      rating: 5,
      reviews: 325,
      discount: null,
      colors: [],
    },
    {
      image: '/e-comm.png',
      name: 'Curology Product Set',
      price: 500,
      rating: 4,
      reviews: 145,
      discount: null,
      colors: [],
    },
    {
      image: '/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png',
      name: 'Kids Electric Car',
      price: 960,
      rating: 5,
      reviews: 65,
      discount: 'NEW',
      colors: ['bg-pink-700', 'bg-pink-700'],
    },
    {
      image: '/Copa_Sense 1.png',
      name: 'Jr.Zoom Soccer Cleats',
      price: 1160,
      rating: 5,
      reviews: 35,
      discount: '-35%',
      colors: ['bg-yellow-200', 'bg-pink-700'],
    },
    {
      image: '/GP11_PRD3 1.png',
      name: 'GP11 Shooter USB Gamepad',
      price: 660,
      rating: 5,
      reviews: 55,
      discount: '-30%',
      colors: ['bg-black', 'bg-pink-700'],
    },
    {
      image: '/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png',
      name: 'Quilted Satin Jacket',
      price: 660,
      rating: 5,
      reviews: 55,
      discount: '-25%',
      colors: ['bg-green-800', 'bg-pink-700'],
    },
  ];

  return (
    <div className="max-w-[1512px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-5 h-10 bg-pink-700 rounded"></div>
        <p className="text-pink-700 font-bold text-lg">Our Products</p>
      </div>
      <p className="font-bold text-2xl sm:text-3xl lg:text-[40px] mb-10">Explore Our Products</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative">
              {product.discount && (
                <div className="absolute top-4 left-4 bg-pink-700 text-white text-sm px-2 py-1 rounded">
                  {product.discount}
                </div>
              )}
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
              <div className="flex items-center gap-3 mt-1">
                <span className="text-pink-700 font-bold">${product.price}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < product.rating ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                  <p className="text-gray-500 text-sm">({product.reviews})</p>
                </div>
              </div>
              {product.colors.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, i) => (
                    <div key={i} className={`p-2 rounded-full ${color}`}></div>
                  ))}
                </div>
              )}
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
    </div>
  );
};

export default ExploreProducts;