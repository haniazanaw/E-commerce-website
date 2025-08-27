'use client'
import { FaTelegramPlane, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaCopyright } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const accountLinks = [
    { href: '/', label: 'My Account' },
    { href: '/', label: 'Login/Register' },
    { href: '/', label: 'Cart' },
    { href: '/', label: 'Wishlist' },
    { href: '/', label: 'Shop' },
  ];

  const quickLinks = [
    { href: '/', label: 'Privacy Policy' },
    { href: '/', label: 'Terms Of Use' },
    { href: '/', label: 'FAQ' },
    { href: '/', label: 'Contact' },
  ];

  const socialIcons = [
    { icon: <FaFacebookF size={20} />, key: 'facebook' },
    { icon: <FaTwitter size={20} />, key: 'twitter' },
    { icon: <FaInstagram size={20} />, key: 'instagram' },
    { icon: <FaLinkedin size={20} />, key: 'linkedin' },
  ];

  return (
    <footer className="bg-black text-white ">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Exclusive</h1>
          <p className="mb-2 text-base">Subscribe</p>
          <p className="mb-4 text-sm text-gray-300">Get 10% off your first order</p>
          <form className="relative w-full max-w-[250px]">
            <input
              type="email"
              className="w-full py-2 pl-4 pr-12 rounded border border-gray-500 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
              <FaTelegramPlane size={20} className="text-gray-300 hover:text-pink-700" />
            </button>
          </form>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Support</h1>
          <p className="text-sm text-gray-300 mb-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
          <p className="text-sm text-gray-300 mb-2">exclusive@gmail.com</p>
          <p className="text-sm text-gray-300">+88015-88888-9999</p>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Account</h1>
          <ul className="space-y-2 text-sm">
            {accountLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-pink-700 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Quick Links</h1>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-pink-700 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Download App</h1>
          <p className="text-sm text-gray-300 mb-3">Save $3 with App New User Only</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Image
              src={'/qr.png'}
              alt="QR code for app download"
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-lg w-25 h-25 bg-white"
            />
            <div className="flex flex-col gap-3">
              <Link href="/" className="flex items-center w-25 gap-2 border border-gray-500 rounded p-2 hover:bg-gray-800">
                <Image
                  src={'/google-removebg-preview.png'}
                  alt="Google Play Store"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div>
                  <span className="text-[5px] text-gray-300">GET IT ON</span>
                  <p className="text-[7px]">Google Play</p>
                </div>
              </Link>
              <Link href="/" className="flex items-center gap-2 border border-gray-500 rounded p-2 hover:bg-gray-800">
                <Image
                  src={'/pple.png'}
                  alt="App Store"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div>
                  <span className="text-[5px] text-gray-300">DOWNLOAD ON THE</span>
                  <p className="text-[7px]">App Store</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            {socialIcons.map((social, index) => (
              <Link key={index} href="/" className="hover:text-pink-700">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-600 max-w-[1512px] mx-auto" />
      <p className="flex items-center justify-center py-4 text-sm text-gray-500">
        <FaCopyright className="mr-2" /> Copyright Rimel 2022. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;