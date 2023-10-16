import React from "react";
import banner from "../../../public/aboutUs-Img/banner.jpg";
import VentoImg from "../../../public/aboutUs-Img/about-us-vento.jpg";
import Image from "next/image";
import Subscription from "@/app/components/Subscription";
import WaveSvg from "@/app/components/WaveSvg";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const blog = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full h-64 relative">
        <WaveSvg />

        <Image src={banner} className="w-full h-full object-cover "  alt="..."/>
        <div className="absolute top-0  lg:left-24 mt-16">
          <h1 className="text-center text-white lg:text-5xl font-extrabold">
            We are a Luxury Furniture Manufacturing Brand with the vision of
            offering innovative and superior quality product to our customers
          </h1>
        </div>
      </div>

      <div className="card grid place-content-center mb-16">
        <div className="w-64 lg:w-96  h-80 rounded-lg mt-28 relative">
          <Image
            src={VentoImg}
            className="absolute  w-full h-full  rounded-lg "
            alt="..."
          />
        </div>
      </div>
      <div className="">
        <div className="p-28">
          <p className="mb-4">
            Vento Furniture was established in 2002 in Turkey and decided to
            carry its facilities to Nigeria and Canada.
          </p>

          <p className="mb-4">
            Vento targeted the best quality products to its customers. Vento
            Furniture always presented the new modern designs developed by its
            customers taste and always brought the best.
          </p>

          <p className="mb-4">
            Our attention to detail ensures that when you purchase a piece of
            furniture from Vento Furniture, it will provide superior value and
            comfort. Our products are designed with safety in mind as well,
            creating pieces that are long-lasting and safe for all family
            members. We strive to ensure our customers enjoy their experience
            with us by providing the highest quality product and unbeatable
            customer service whenever you buy a Vento Furniture Product.
          </p>

          <p className="mb-4">
            Vento Furniture got many customers within a short time because we
            are aware that our customers understand high quality of products
            very well.
          </p>

          <p className="mb-4">
            Our main goal is not to sell furniture, but to bring you together
            with comfortable, stylish and peaceful furniture.
          </p>

          <p className="mb-4">
            With the technical support we provide after selling the furniture,
            we make our customers feel that we are always with them and provide
            support.
          </p>

          <p className="mb-4">
            The leader of the furniture industry, Vento has been a pioneer in
            the industry and a brand that sets the trends since the day it was
            founded. It continues on its way without slowing down with the
            superiority of its production capacity, the importance it attaches
            to technology in design, and the understanding of merchandising that
            always prioritizes customer satisfaction.
          </p>

          <p className="mb-4">
            Acting with the awareness of the responsibility of being a leading
            company in every field in the sector, Vento produces collections at
            the most affordable and accessible prices for customer needs while
            realizing designs beyond the age with technology and innovation.
            Vento Furniture offers you hundreds of products from sitting groups
            to dining rooms, from bedrooms to children's and teenage rooms, from
            beds, bases to garden furniture.
          </p>

          <p className="mb-4">
            Among the goals of the brand is to keep the brand always young and
            dynamic, as well as the turnover achieved through sustainable
            innovative projects. Among the goals of the brand is to keep the
            brand always young and dynamic, as well as the turnover achieved
            through sustainable innovative projects.
          </p>

          <p>
            Vento Furniture also continues its efforts to increase its market
            share with the number of specialized stores implemented and to reach
            unreachable consumer profiles.
          </p>
        </div>
      </div>

      <div className="">
        <div className="border border-gray-200  lg:w-4/5 lg:ml-20  mb-2"></div>
      </div>

      <div className="flex justify-center gap-4 lg:text-xl p-20">
        <Link href={""}>
          <FaFacebook size={50} />
        </Link>
        <Link href={""}>
          <FaTwitter size={50} />
        </Link>
        <Link href={""}>
          <FaInstagramSquare size={50} />
        </Link>
        <Link href={""}>
          <FaYoutubeSquare size={50} />
        </Link>
      </div>

      <div className="p-20">
        <Subscription />
      </div>
    </div>
  );
};

export default blog;
