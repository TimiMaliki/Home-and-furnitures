"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import Image from "next/image";
import woodenImg from "../../public/home-Img/WOODEN-BEDROOM-SET.webp";
import NaturalImg from "../../public/home-Img/NATURA-DINING-SET-1kapak_1_11zon.jpg.webp";
import picazoImg from "../../public/home-Img/PICAZ-PICASSO-CORNER-SET-10_10_11zon-1.jpg.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className=" mt-4">
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid items-center text-center w-full h-full">
            <Image src={woodenImg} style={{ width: "100%", height: "900px" }} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <Image
              src={NaturalImg}
              style={{ width: "100%", height: "900px" }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center text-center w-full h-96">
            <Image src={picazoImg} style={{ width: "100%", height: "900px" }} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
