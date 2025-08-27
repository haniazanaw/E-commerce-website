'use client'
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
    { href: '/signup', label: 'Sign Up' },
  ];

  return (
    <nav className="flex items-center justify-between py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-md max-w-[1512px] ">
      <div className="text-xl sm:text-2xl font-bold ">
        Exclusive
      </div>
      <div className="hidden md:flex gap-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-base sm:text-lg hover:text-pink-700 hover:underline transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-full max-w-[300px] sm:max-w-[400px]">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="outline-none bg-transparent flex-1 text-sm sm:text-base placeholder-gray-500"
        />
        <button className="ml-2 text-gray-600 hover:text-pink-700">
          <FaSearch size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;