"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import Image from "next/image";
import Royal from "../../public/home-Img/Royal-1_11zon-768x432.webp";
import Angel from "../../public/home-Img/ANGEL-DINING-ROOM.jpg";
import picazo from "../../public/home-Img/PICAZ-PICASSO-CORNER-SET-4_4_11zon-1-700x394-1-400x225.jpg";
import sirius from "../../public/home-Img/SIRIUS-DINING-SET-7KAPAK.jpg";
import Natura from "../../public/home-Img/NATURA-DINING-SET-1kapak_1_11zon.jpg.webp";
import Estilo from "../../public/home-Img/ARTYLIFE-CENTER-TABLE-1-1-500x281-1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BestSellers = () => {
  return (
    <div className="lg:px-20  w-full h-full invisible lg:visible overflow-hidden ">
      <div className="w-30 h-26  items-center text-center ">
        <h2 className="text-lg font-black text-3xl mt-2  mb-4">BEST SELLER</h2>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=""
      >
        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image
              src={Royal}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <h2>Royal Office Furniture</h2>
            <p>Office Furniture</p>
            <p className="text-red-500 -mt-8">₦3,100,745,00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28  lg:w-full h-96">
            <Image
              src={Angel}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <h2>Asya Sofa set-Tripple</h2>
            <p>SOFA SET</p>
            <p className="text-red-500 -mt-8">₦1,280,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28  lg:w-full h-96">
            <Image
              src={picazo}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <h2>Angel Dining Room Set</h2>
            <p>Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦4,916,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28  lg:w-full h-96">
            <Image
              src={sirius}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <h2>Picaz Corner Set</h2>
            <p>SOFA SET</p>
            <p className="text-red-500 -mt-8">₦1,280,999.00 - ₦4,916,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28  lg:w-full h-96">
            <Image
              src={Natura}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <h2>SIRIUS Dining Set</h2>
            <p>Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦5,002,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center  w-28  lg:w-full h-96 ">
            <Image
              src={Estilo}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <h2>Natural Dining Set</h2>
            <p>Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦3,545,999.00</p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* mobile view */}

      <div className="-mt-96  ml-32 lg:ml-0 px-32 w-full h-full lg:px-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper visible lg:invisible "
        >
          <SwiperSlide>
            <div className="grid items-center text-center w-28 lg:w-full h-96">
              <Image
                src={Royal}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <h2>Royalll Office Furniture</h2>
              <p>Office Furniture</p>
              <p className="text-red-500 -mt-8">₦3,100,745,00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center w-28  lg:w-full h-96">
              <Image
                src={Angel}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <h2>Asya Sofa set-Tripple</h2>
              <p>SOFA SET</p>
              <p className="text-red-500 -mt-8">₦1,280,999.00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center w-28  lg:w-full h-96">
              <Image
                src={picazo}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <h2>Angel Dining Room Set</h2>
              <p>Dining Room Set</p>
              <p className="text-red-500 -mt-8">₦4,916,999.00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center w-28  lg:w-full h-96">
              <Image
                src={sirius}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <h2>Picaz Corner Set</h2>
              <p>SOFA SET</p>
              <p className="text-red-500 -mt-8">
                ₦1,280,999.00 - ₦4,916,999.00
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center w-28  lg:w-full h-96">
              <Image
                src={Natura}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <h2>SIRIUS Dining Set</h2>
              <p>Dining Room Set</p>
              <p className="text-red-500 -mt-8">₦5,002,999.00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center  w-28  lg:w-full h-96 ">
              <Image
                src={Estilo}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <h2>Natural Dining Set</h2>
              <p>Dining Room Set</p>
              <p className="text-red-500 -mt-8">₦3,545,999.00</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default BestSellers;
