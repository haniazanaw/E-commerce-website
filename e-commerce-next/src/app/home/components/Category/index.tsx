'use client'
import { FaMobileAlt, FaDesktop, FaCamera, FaHeadphones, FaStopwatch } from "react-icons/fa";

const Category = () => {
  const categories = [
    { icon: <FaMobileAlt size={60} />, name: 'Phones' },
    { icon: <FaDesktop size={60} />, name: 'Computers' },
    { icon: <FaStopwatch size={60} />, name: 'Smartwatch' },
    { icon: <FaCamera size={60} />, name: 'Camera' },
    { icon: <FaHeadphones size={60} />, name: 'HeadPhones' },
  ];

  return (
    <div className="max-w-[1512px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-5 h-10 bg-pink-700 rounded"></div>
        <p className="text-pink-700 font-bold text-lg">Categories</p>
      </div>
      <p className="font-bold text-2xl sm:text-3xl lg:text-[40px] mb-10">Browse By Category</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center outline outline-gray-300 hover:bg-pink-700 hover:text-white transition-colors duration-300 p-6 rounded-lg"
          >
            {category.icon}
            <p className="mt-4 text-base sm:text-lg">{category.name}</p>
          </div>
        ))}
      </div>

      <hr className="mt-12 border-gray-300" />
    </div>
  );
};

export default Category;