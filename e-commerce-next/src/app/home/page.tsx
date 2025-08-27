'use client'
import Sales from "./components/Sales";
import Link from "next/link";
import Header from "../shared-componens/Header";
import Navbar from "../shared-componens/Navbar";
import Image from 'next/image';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';
import Category from "./components/Category";
import BestProducts from "./components/Best-Products";
import ExploreProducts from "./components/Explore-Products";
import NewArrival from "./components/New Arrival";
import Footer from "../shared-componens/Footer";

const HomePage = () => {
  const navItems = [
    { label: "Woman's Fashion", hasDropdown: true },
    { label: "Men's Fashion", hasDropdown: true },
    { label: "Electronics", hasDropdown: false },
    { label: "Home & Lifestyle", hasDropdown: false },
    { label: "Medicine", hasDropdown: false },
    { label: "Sports & Outdoor", hasDropdown: false },
    { label: "Baby's & Toys", hasDropdown: false },
    { label: "Groceries & Pets", hasDropdown: false },
    { label: "Health & Beauty", hasDropdown: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="max-w-[1512px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[200px]">
            <ul className="space-y-4 text-lg">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href="/" className="flex items-center gap-2 hover:text-pink-700">
                    {item.label}
                    {item.hasDropdown && <FaChevronDown className="text-sm" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block w-px bg-gray-300" ></div>
          <div className="flex-1 bg-black rounded-lg overflow-hidden text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-4">
                  <Image
                    src={'/pple.png'}
                    alt="Apple Logo"
                    width={40}
                    height={40}
                    sizes="(max-width: 1512px) 10vw, 40px"
                    className="w-10 h-10"
                  />
                  <p className="text-xl">iPhone 14 Series</p>
                </div>
                <h1 className="mt-6 text-3xl sm:text-4xl md:text-[50px] font-bold max-w-[400px]">
                  Up to 10% off Voucher
                </h1>
                <p className="mt-4 flex items-center gap-3 text-base sm:text-lg underline">
                  Shop Now <FaArrowRight className="text-base" />
                </p>
              </div>
              <Image
                src={'/hero_endframe__cvklg0xk3w6e_large 2.png'}
                alt="iPhone 14"
                width={600}
                height={400}
                sizes="(max-width: 1512px) 50vw, 600px"
                className="w-full max-w-[600px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <Sales />
        <Category />
        <BestProducts />
        <ExploreProducts />
        <NewArrival/>
      <Footer />
      </div>
    </div>
  );
};

export default HomePage;