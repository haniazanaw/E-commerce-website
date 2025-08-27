'use client'
import Image from "next/image";
import Button from "../shared-componens/Button";
import Footer from "../shared-componens/Footer";
import Header from "../shared-componens/Header";
import Navbar from "../shared-componens/Navbar";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto scrollbar-hide max-w-[1512px] mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={'/login image.webp'}
            alt="Login image"
            width={756}
            height={982}
            sizes="(max-width: 1512px) 50vw, 756px"
            className="object-cover h-[50vh] lg:h-[982px] w-full max-w-[756px] py-10 lg:py-20"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center py-10 lg:py-20 px-4 sm:px-10">
          <div className="w-full max-w-[500px]">
            <p className="text-3xl sm:text-4xl lg:text-[45px] font-bold mb-2">Log in to Exclusive</p>
            <p className="text-lg sm:text-xl lg:text-[20px] mb-8">Enter your details below</p>
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full py-4 bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 text-base sm:text-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-4 bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-500 text-base sm:text-lg"
              />
              <div className="flex flex-col sm:flex-row justify-between items-center  gap-4">
                <Link href="/home">
                  <Button
                    buttonText="Log in"
                    variant="secondary"
                    onclickHandler={() => alert('You have successfully logged in')}
                  />
                </Link>
                <button className="text-pink-500 hover:underline text-base sm:text-lg">
                  Forget Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage;