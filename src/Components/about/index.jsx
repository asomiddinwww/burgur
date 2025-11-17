import { Link } from "react-router-dom";
import burger from "../about/burger2.png";
import cardimg from "../about/cardimg1.png";
import cardimg2 from "../about/cardimg2.png";
import cardimg3 from "../about/cardimg3.png";
import cardimg4 from "../about/cardimg4.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const About = () => {
  return (
    <div className="w-full h-full bg-[#13382b] p-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-[1470px] m-auto pt-2 pb-3 flex flex-col gap-5">
            <div className="w-full flex items-center justify-center max-[775px]:flex-col gap-8">
              <div className="text-center">
                <h1 className="font-lexend text-4xl text-[#ADBC9F] mb-[-20px] font-bold max-[775px]:text-[20px] max-[775px]:mb-[-10px]">
                  THE ULTIMATE
                </h1>
                <h1 className="pb-5 font-sansita font-bold text-white text-9xl max-[775px]:text-5xl">
                  Burger Club{" "}
                </h1>
                <p className="font-lexend font-bold text-[#ADBC9F] max-[775px]:">
                  Savor the Flavor, Join the Club!
                </p>
              </div>
              <div>
                <img className="w-[530px]" src={burger} alt="vurgerimgye" />
              </div>
            </div>
            <div className="flex items-center justify-center max-w-200 gap-4 max-[775px]:pt-10">
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg2} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg3} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg4} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="max-w-[1470px] m-auto pt-2 pb-3 flex flex-col gap-5">
            <div className="w-full flex items-center justify-center max-[775px]:flex-col gap-8">
              <div className="text-center">
                <h1 className="font-lexend text-4xl text-[#ADBC9F] mb-[-20px] font-bold max-[775px]:text-[20px] max-[775px]:mb-[-10px]">
                  THE ULTIMATE
                </h1>
                <h1 className="pb-5 font-sansita font-bold text-white text-9xl max-[775px]:text-5xl">
                  Burger Club{" "}
                </h1>
                <p className="font-lexend font-bold text-[#ADBC9F] max-[775px]:">
                  Savor the Flavor, Join the Club!
                </p>
              </div>
              <div>
                <img className="w-[530px]" src={burger} alt="vurgerimgye" />
              </div>
            </div>
            <div className="flex items-center justify-center max-w-200 gap-4 max-[775px]:pt-10">
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg2} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg3} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg4} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="max-w-[1470px] m-auto pt-2 pb-3 flex flex-col gap-5">
            <div className="w-full flex items-center justify-center max-[775px]:flex-col gap-8">
              <div className="text-center">
                <h1 className="font-lexend text-4xl text-[#ADBC9F] mb-[-20px] font-bold max-[775px]:text-[20px] max-[775px]:mb-[-10px]">
                  THE ULTIMATE
                </h1>
                <h1 className="pb-5 font-sansita font-bold text-white text-9xl max-[775px]:text-5xl">
                  Burger Club{" "}
                </h1>
                <p className="font-lexend font-bold text-[#ADBC9F] max-[775px]:">
                  Savor the Flavor, Join the Club!
                </p>
              </div>
              <div>
                <img className="w-[530px]" src={burger} alt="vurgerimgye" />
              </div>
            </div>
            <div className="flex items-center justify-center max-w-200 gap-4 max-[775px]:pt-10">
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg2} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg3} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg4} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="max-w-[1470px] m-auto pt-2 pb-3 flex flex-col gap-5">
            <div className="w-full flex items-center justify-center max-[775px]:flex-col gap-8">
              <div className="text-center">
                <h1 className="font-lexend text-4xl text-[#ADBC9F] mb-[-20px] font-bold max-[775px]:text-[20px] max-[775px]:mb-[-10px]">
                  THE ULTIMATE
                </h1>
                <h1 className="pb-5 font-sansita font-bold text-white text-9xl max-[775px]:text-5xl">
                  Burger Club{" "}
                </h1>
                <p className="font-lexend font-bold text-[#ADBC9F] max-[775px]:">
                  Savor the Flavor, Join the Club!
                </p>
              </div>
              <div>
                <img className="w-[530px]" src={burger} alt="vurgerimgye" />
              </div>
            </div>
            <div className="flex items-center justify-center max-w-200 gap-4 max-[775px]:pt-10">
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg2} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg3} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg4} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="max-w-[1470px] m-auto pt-2 pb-3 flex flex-col gap-5">
            <div className="w-full flex items-center justify-center max-[775px]:flex-col gap-8">
              <div className="text-center">
                <h1 className="font-lexend text-4xl text-[#ADBC9F] mb-[-20px] font-bold max-[775px]:text-[20px] max-[775px]:mb-[-10px]">
                  THE ULTIMATE
                </h1>
                <h1 className="pb-5 font-sansita font-bold text-white text-9xl max-[775px]:text-5xl">
                  Burger Club{" "}
                </h1>
                <p className="font-lexend font-bold text-[#ADBC9F] max-[775px]:">
                  Savor the Flavor, Join the Club!
                </p>
              </div>
              <div>
                <img className="w-[530px]" src={burger} alt="vurgerimgye" />
              </div>
            </div>
            <div className="flex items-center justify-center max-w-200 gap-4 max-[775px]:pt-10">
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg2} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg3} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg4} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="max-w-[1470px] m-auto pt-2 pb-3 flex flex-col gap-5">
            <div className="w-full flex items-center justify-center max-[775px]:flex-col gap-8">
              <div className="text-center">
                <h1 className="font-lexend text-4xl text-[#ADBC9F] mb-[-20px] font-bold max-[775px]:text-[20px] max-[775px]:mb-[-10px]">
                  THE ULTIMATE
                </h1>
                <h1 className="pb-5 font-sansita font-bold text-white text-9xl max-[775px]:text-5xl">
                  Burger Club{" "}
                </h1>
                <p className="font-lexend font-bold text-[#ADBC9F] max-[775px]:">
                  Savor the Flavor, Join the Club!
                </p>
              </div>
              <div>
                <img className="w-[530px]" src={burger} alt="vurgerimgye" />
              </div>
            </div>
            <div className="flex items-center justify-center max-w-200 gap-4 max-[775px]:pt-10">
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg2} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg3} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg4} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="max-w-[1470px] m-auto pt-2 pb-3 flex flex-col gap-5">
            <div className="w-full flex items-center justify-center max-[775px]:flex-col gap-8">
              <div className="text-center">
                <h1 className="font-lexend text-4xl text-[#ADBC9F] mb-[-20px] font-bold max-[775px]:text-[20px] max-[775px]:mb-[-10px]">
                  THE ULTIMATE
                </h1>
                <h1 className="pb-5 font-sansita font-bold text-white text-9xl max-[775px]:text-5xl">
                  Burger Club{" "}
                </h1>
                <p className="font-lexend font-bold text-[#ADBC9F] max-[775px]:">
                  Savor the Flavor, Join the Club!
                </p>
              </div>
              <div>
                <img className="w-[530px]" src={burger} alt="vurgerimgye" />
              </div>
            </div>
            <div className="flex items-center justify-center max-w-200 gap-4 max-[775px]:pt-10">
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg2} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg3} alt="" />
                </Link>
              </div>
              <div className="hover:scale-105 cursor-pointer transition-all duration-200">
                <Link to={"/shop"}>
                  <img src={cardimg4} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
