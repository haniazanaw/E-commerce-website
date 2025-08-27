'use client'
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 sm:py-5">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-sm sm:text-base">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <Link href="/shop" className="font-bold underline hover:text-pink-700">
            Shop Now
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span>English</span>
          <FaChevronDown size={12} />
        </div>
      </div>
    </header>
  );
};

export default Header;