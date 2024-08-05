import "./Categories.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { categories } from "./../../data";
import Category from "../Category/Category";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";

export default function Categories() {
  const [swiper, setSwiper] = useState(null);

  const slidePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const slideNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <section className="categories">
      <SectionTitle
        title="Explore Top Categories"
        subtitle="Click on the categories and explore all courses"
      />
      <div className="cards">
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
            {categories.map(({ icon, title }, index) => (
              <SwiperSlide key={index}>
                <Category icon={icon} title={title} />
              </SwiperSlide>
            ))}
          </Swiper>
          <MdArrowForwardIos
            fontSize={24}
            className="arrow-right"
            onClick={slideNext}
          />
        </div>
      </div>
    </section>
  );
}
