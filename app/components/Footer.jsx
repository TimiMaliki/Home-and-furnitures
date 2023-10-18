import React from "react";
import facebook from "../../public/aboutUs-Img/facebook-1-768x768.png";
import Instagram from "../../public/aboutUs-Img/instagram-1-768x768.png";
import twitter from "../../public/aboutUs-Img/twitter-1-768x768.png";
import youtube from "../../public/aboutUs-Img/youtube-1-768x768.png";
import ventoBanner from "../../public/home-Img/logo-black.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" w-full h-full bg-gray-100 lg:gap-16 grid grid-cols-1 px-5 lg:px-10 lg:px-0  sm:grid-cols-2 md:grid-cols-5  lg:grid-cols-5">
      <div className="w-full h-[200px] lg:h-full p-5 lg:p-20">
        <Image src={ventoBanner} width={100} className="mb-8" alt="..." />

        <div className="flex gap-4 justify-center mb-4">
          <Image src={facebook} alt="..." className=" w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] " />
          <Image src={Instagram} className=" w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]" alt="..." />
          <Image src={twitter} className=" w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]" alt="..." />
          <Image src={youtube} className=" w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]" alt="..." />
        </div>

        <h1 className="text-sm lg:text-lg text-center mb-8">
          FURNITURE CATEGORY
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-10">
          <div>
           <ul className="text-sm lg:text-xl">
           <li>Bedroom Sets</li>
            <li>Sofa Sets</li>
            <li>Dining Sets</li>
           </ul>
          </div>

          <div>
           <ul className="text-sm lg:text-xl">
           <li>Office Furniture</li>
            <li>TV Stand</li>
            <li>Accessories</li>
           </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-[360px] lg:h-full">
        <div className="border border-gray-200  w-full mt-20 mb-8"></div>
        <h1 className="mb-8 font-extrabold cursor-pointer  text-xl lg:text-2xl ">ABUJA</h1>
        <div className="border border-gray-200 mb-10"></div>

        <div className="grid">
          <p className="mb-8 hover:font-extrabold cursor-pointer  text-sm lg:text-lg">
            Shop L32/33, Jabi Lake Mall, Abuja
          </p>

          <p className="mb-4  cursor-pointer  text-sm lg:text-lg">WORKING HOURS</p>
          <p className="mb-6  cursor-pointer  text-sm lg:text-lg">
            Monday to Saturday: 08:00-22:00 Sunday: 11:00-21:00
          </p>
          <p className="mb-2  cursor-pointer  text-sm lg:text-lg">CONTACT</p>
          <p className=" cursor-pointer  text-sm lg:text-lg">0809 445 1133</p>
        </div>
      </div>

      <div className="w-full  h-[410px] lg:h-full">
        <div className="border border-gray-200  w-full mt-20 mb-8"></div>
        <h1 className="mb-8 font-extrabold cursor-pointer text-xl lg:text-2xl">Lagos</h1>
        <div className="border border-gray-200 mb-10"></div>

        <div className="grid">
          <p className="mb-8 hover:font-extrabold cursor-pointer  text-sm lg:text-lg">
            79 Allen Avenue Ikeja 25 Glover Road Ikoyi Festival Mall Festac
          </p>
          <p className="mb-4  cursor-pointer  text-sm lg:text-lg">WORKING HOURS</p>
          <p className="mb-6  cursor-pointer  text-sm lg:text-lg">
            Monday to Saturday: 08:00-22:00 Sunday: 11:00-21:00
          </p>
          <p className="mb-2  cursor-pointer  text-sm lg:text-lg">CONTACT</p>
          <p className=" cursor-pointer  text-sm lg:text-lg">Ikeja: 0809 999 0082</p>
          <p className=" cursor-pointer  text-sm lg:text-lg">Ikoyi: 0909 463 1471</p>
          <p className=" cursor-pointer  text-sm lg:text-lg">Festac: 0909 711 1311</p>
        </div>
      </div>

      <div className="w-full  h-[360px] lg:h-full">
        <div className="border border-gray-200  w-full mt-20 mb-8"></div>
        <h1 className="mb-8 font-extrabold cursor-pointer  text-xl lg:text-2xl">
          PORT HARCOURT
        </h1>
        <div className="border border-gray-200 mb-10"></div>

        <div className="grid">
          <p className="mb-8 hover:font-extrabold cursor-pointer  text-sm lg:text-lg  text-sm lg:text-lg">
            7a Azikiwe Road 17 Peter Odili Road
          </p>
          <p className="mb-4  cursor-pointer  text-sm lg:text-lg">WORKING HOURS</p>
          <p className="mb-6  cursor-pointer  text-sm lg:text-lg">
            Monday to Saturday: 08:00-22:00 Sunday: 11:00-21:00
          </p>
          <p className="mb-2  cursor-pointer  text-sm lg:text-lg">CONTACT</p>
          <p className=" cursor-pointer  text-sm lg:text-lg">0809 781 7298</p>
        </div>
      </div>

      <div className="w-full  h-[430px] lg:h-full">
        <div className="border border-gray-200  w-full mt-20 mb-8"></div>
        <h1 className="mb-8 font-extrabold cursor-pointer text-xl lg:text-2xl">CANADA</h1>
        <div className="border border-gray-200 mb-10"></div>

        <div className="grid">
          <p className="mb-8 hover:font-extrabold cursor-pointer  text-sm lg:text-lg">
            4326 Walker Rd, Windsor, ON N8W 3T5 Canada
          </p>
          <p className="mb-4  cursor-pointer  text-sm lg:text-lg">WORKING HOURS</p>
          <p className="mb-6  cursor-pointer  text-sm lg:text-lg">
            Monday to Saturday: 08:00-22:00 Sunday: 11:00-21:00
          </p>
          <p className="mb-2  cursor-pointer  text-sm lg:text-lg">CONTACT</p>
          <p className=" cursor-pointer  text-sm lg:text-lg">+1 (519) 250-0606</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
