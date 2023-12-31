"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Okide from "../../public/home-Img/ORKIDE-OUTDOOR-TRIPLE-SET-1kapak_11zon-768x432.webp";
import Diamond from "../../public/home-Img/Diamond04_11zon.jpg";
import Lofa from "../../public/home-Img/Loft-Aldisa-Sofa-Set-–-.webp";
import Seeda from "../../public/home-Img/ARTYLIFE-CENTER-TABLE-1-1-500x281-1.jpg";
import Bianca from "../../public/home-Img/BIANCA-BEDROOM-SET-5KAPAK_3_11zon-768x432.jpg";
import Monza from "../../public/home-Img/monza-768x432.webp";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Trending = () => {
  return (
    <div className="lg:px-20  w-full h-full invisible lg:visible overflow-hidden">
      <div className="w-30 h-26 mt-20 items-center text-center ">
        <h2 className="text-lg font-black text-3xl mb-4">TRENDING PRODUCTS</h2>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image
              src={Okide}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] lg:mt-2 text-white">
                Hot
              </p>
            </div>
            <h2 className="text-md lg:text-lg">Royal Office Furniture</h2>
            <p className="text-md lg:text-lg">Office Furniture</p>
            <p className="text-red-500 -mt-8">₦3,100,745,00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center  w-28  lg:w-full h-96">
            <Image
              src={Diamond}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <div className="rounded-full  w-6 h-6 lg:w-12 lg:h-12  bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
            </div>
            <h2 className="text-md lg:text-lg">Asya Sofa set-Tripple</h2>
            <p className="text-md lg:text-lg">SOFA SET</p>
            <p className="text-red-500 -mt-8">₦1,280,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image
              src={Lofa}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
            </div>
            <h2 className="text-md lg:text-lg">Angel Dining Room Set</h2>
            <p className="text-md lg:text-lg">Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦4,916,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image
              src={Seeda}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
            </div>
            <h2 className="text-md lg:text-lg">Picaz Corner Set</h2>
            <p className="text-md lg:text-lg">SOFA SET</p>
            <p className="text-red-500 -mt-8">₦1,280,999.00 - ₦4,916,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image
              src={Bianca}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
            </div>
            <h2 className="text-md lg:text-lg">SIRIUS Dining Set</h2>
            <p className="text-md lg:text-lg">Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦5,002,999.00</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-28 lg:w-full h-96">
            <Image
              src={Monza}
              width={380}
              height={300}
              className="rounded-lg"
              alt="..."
            />
            <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
              <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
            </div>
            <h2 className="text-md lg:text-lg">Natural Dining Set</h2>
            <p className="text-md lg:text-lg">Dining Room Set</p>
            <p className="text-red-500 -mt-8">₦3,545,999.00</p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* mobile view */}
      <div className="-mt-96 ml-16  lg:ml-32 lg:ml-0 px-10 w-full h-full lg:px-0">
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
                src={Okide}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
                <p className="text-xs lg:text-lg mt-[0.3rem] lg:mt-2 text-white">
                  Hot
                </p>
              </div>
              <h2 className="text-md lg:text-lg">Royal Office Furniture</h2>
              <p className="text-md lg:text-lg">Office Furniture</p>
              <p className="text-red-500 -mt-8">₦3,100,745,00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center  w-28  lg:w-full h-96">
              <Image
                src={Diamond}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <div className="rounded-full  w-6 h-6 lg:w-12 lg:h-12  bg-red-500 text-center absolute top-7 cursor-pointer">
                <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
              </div>
              <h2 className="text-md lg:text-lg">Asya Sofa set-Tripple</h2>
              <p className="text-md lg:text-lg">SOFA SET</p>
              <p className="text-red-500 -mt-8">₦1,280,999.00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center w-28 lg:w-full h-96">
              <Image
                src={Lofa}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
                <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
              </div>
              <h2 className="text-md lg:text-lg">Angel Dining Room Set</h2>
              <p className="text-md lg:text-lg">Dining Room Set</p>
              <p className="text-red-500 -mt-8">₦4,916,999.00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center w-28 lg:w-full h-96">
              <Image
                src={Seeda}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
                <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
              </div>
              <h2 className="text-md lg:text-lg">Picaz Corner Set</h2>
              <p className="text-md lg:text-lg">SOFA SET</p>
              <p className="text-red-500 -mt-8">
                ₦1,280,999.00 - ₦4,916,999.00
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center w-28 lg:w-full h-96">
              <Image
                src={Bianca}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
                <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
              </div>
              <h2 className="text-md lg:text-lg">SIRIUS Dining Set</h2>
              <p className="text-md lg:text-lg">Dining Room Set</p>
              <p className="text-red-500 -mt-8">₦5,002,999.00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid items-center text-center w-28 lg:w-full h-96">
              <Image
                src={Monza}
                width={380}
                height={300}
                className="rounded-lg"
                alt="..."
              />
              <div className="rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-red-500 text-center absolute top-7 cursor-pointer">
                <p className="text-xs lg:text-lg mt-[0.3rem] text-white">Hot</p>
              </div>
              <h2 className="text-md lg:text-lg">Natural Dining Set</h2>
              <p className="text-md lg:text-lg">Dining Room Set</p>
              <p className="text-red-500 -mt-8">₦3,545,999.00</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
