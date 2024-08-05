import "./Logos.css";
import { logos } from "./../../data";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
export default function Logos() {
  const [swiper, setSwiper] = useState(null);

  const slidePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const slideNext = () => {
    if (swiper) swiper.slideNext();
  };
  return (
    <section className="logos section-mt">
      <div className="container">
        <MdArrowBackIosNew
          fontSize={24}
          className="arrow-left"
          onClick={slidePrev}
        />
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          navigation={{
            prevEl: ".arrow-left",
            nextEl: ".arrow-right",
          }}
          modules={[Navigation]}
          onSwiper={setSwiper}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {logos.map((el, index) => {
            return (
              <SwiperSlide key={index}>
             
                  <img key={index} src={el} alt="logo" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <MdArrowForwardIos
          fontSize={24}
          className="arrow-right"
          onClick={slideNext}
        />
      </div>
    </section>
  );
}
