import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Courses.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Courses = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStrt">
          <span className="orangeText">
            Best Choices<br></br>
          </span>
          <span className="primaryText">Popular Courses</span>
        </div>

        <Swiper {...sliderSettings}>
            <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>Rs </span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;

const SliderButtons = ()=> {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
};
