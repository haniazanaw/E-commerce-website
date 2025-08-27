'use client'
import { FaArrowRight, FaTruck, FaHeadphonesAlt } from "react-icons/fa";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="max-w-[1512px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-5 h-10 bg-pink-700 rounded"></div>
        <p className="text-pink-700 font-bold text-lg">Featured</p>
      </div>
      <p className="font-bold text-2xl sm:text-3xl lg:text-[40px] mb-10">New Arrival</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative bg-black rounded-lg overflow-hidden">
          <Image
            src="/ps5-slim-goedkope-playstation_large 1.png"
            alt="PlayStation 5"
            width={756}
            height={491}
            sizes="(max-width: 1512px) 50vw, 756px"
            className="h-auto w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl">PlayStation 5</h3>
            <p className="text-sm sm:text-base lg:text-lg mb-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="underline flex gap-3 items-center text-sm sm:text-base">
              Shop Now <FaArrowRight className="text-base" />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative col-span-1 sm:col-span-2 bg-black rounded-lg overflow-hidden">
            <Image
              src="/attractive-woman-wearing-hat-posing-black-background 1.png"
              alt="Women's Collections"
              width={756}
              height={245}
              sizes="(max-width: 1512px) 50vw, 756px"
              className="w-full h-[245px] object-cover"
              style={{ transform: "scaleX(-1)" }}
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl">Women&apos;s Collections</h3>
              <p className="text-sm sm:text-base lg:text-lg mb-2">
                Featured woman collections that give you another vibe.
              </p>
              <p className="underline flex gap-3 items-center text-sm sm:text-base">
                Shop Now <FaArrowRight className="text-base" />
              </p>
            </div>
          </div>
          <div className="relative bg-black rounded-lg overflow-hidden">
            <Image
              src="/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
              alt="Speakers"
              width={378}
              height={245}
              sizes="(max-width: 1512px) 25vw, 378px"
              className="w-full h-[245px] object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">Speakers</h3>
              <p className="text-sm sm:text-base mb-2">Amazon wireless speakers</p>
              <p className="underline flex gap-3 items-center text-sm sm:text-base">
                Shop Now <FaArrowRight className="text-base" />
              </p>
            </div>
          </div>
          <div className="relative bg-black rounded-lg overflow-hidden">
            <Image
              src="/652e82cd70aa6522dd785109a455904c.png"
              alt="Perfume"
              width={378}
              height={245}
              sizes="(max-width: 1512px) 25vw, 378px"
              className="w-full h-[245px] object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">Perfume</h3>
              <p className="text-sm sm:text-base mb-2">GUCCI INTENSE OUD EDP</p>
              <p className="underline flex gap-3 items-center text-sm sm:text-base">
                Shop Now <FaArrowRight className="text-base" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[
          {
            icon: <FaTruck size={40} className="bg-black rounded-full text-white p-2" />,
            title: "Free and Fast Delivery",
            description: "Free delivery for all orders over $140",
          },
          {
            icon: <FaHeadphonesAlt size={40} className="bg-black rounded-full text-white p-2" />,
            title: "24/7 Customer Service",
            description: "Friendly 24/7 customer support",
          },
          {
            icon: <AiTwotoneSecurityScan size={40} className="bg-black rounded-full text-white p-2" />,
            title: "Money Back Guarantee",
            description: "We return money within 30 days",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-gray-300 rounded-full p-4 mb-4">
              {item.icon}
            </div>
            <p className="font-bold text-xl sm:text-2xl lg:text-[30px]">{item.title}</p>
            <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;