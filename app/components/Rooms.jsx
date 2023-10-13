"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import roomBench from "../../public/home-Img/roomBench.png";
import KofaBench from "../../public/home-Img/FUBA-KOSE-KOLTUK-2.jpg";
import cornerBench from "../../public/home-Img/ETRO-BEDROOM-SET-bg-r.webp";
import zeroBench from "../../public/home-Img/PIANO-SMART-SOFA-SET-zero.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Rooms = () => {
  return (
    <div className="px-8 ">
      <Swiper
        // install Swiper modules
        dir="rtl"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid items-center  text-center w-full h-full ">
            <div className="grid place-content-center">
              <Image src={roomBench} width={300} height={300} />
              <p>SOFA SET</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <div className="grid place-content-center">
              <Image src={KofaBench} width={300} height={300} />
              <p>SOFA SET</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <div className="grid place-content-center">
              <Image src={cornerBench} width={300} height={300} />
              <p>SOFA SET</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <div className="grid place-content-center">
              <Image src={zeroBench} width={300} height={300} />
              <p>SOFA SET</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Rooms;
