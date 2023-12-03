import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";
import { useState } from 'react';
import { useEffect } from 'react';
import Hero from '../../db/admin/hero.json'
import axios from '../../utils/axios';

const HeroOne = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      // const res = await axios.get("/db/admin/topBar.json")
      // setData(res.data)
      setData(Hero.data)
    }
    fetchData()
  }, [])
  let publicUrl = process.env.PUBLIC_URL + '/'
  return (
    <>
   <section className="main-slider">
          <Swiper
            loop={true}
            slidesPerView={1}
            effect="fade"
            autoplay={{ delay: 5000 }}
            modules={[EffectFade, Pagination, Navigation]}
            pagination={{
              el: "#main-slider-pagination",
              type: "bullets",
              clickable: true,
            }}
            navigation={{
              nextEl: "#main-slider__swiper-button-next",
              prevEl: "#main-slider__swiper-button-prev",
            }}
            className="swiper-container thm-swiper__slider"
          >
            <div className="swiper-wrapper">

              {
                data.map((item)=>(
                  <SwiperSlide className="swiper-slide">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage:
                      `url(${publicUrl+item.image})`
                    }}
                  ></div>
                  <div className="main-slider-shape-1"></div>
                  <div className="main-slider-shape-2"></div>
                  <div className="main-slider-shape-3 zoominout"></div>
                  <div className="main-slider-shape-4 zoominout-2"></div>
                  <div className="main-slider-shape-5">
                    <img
                      src={
                        publicUrl +
                        "assets/images/shapes/main-slider-shape-5.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="main-slider__content">
            
                          <h2>
                           {item.title}
                          </h2>
                          <p>
                            {item.description}
                          </p>
                          <Link
                            to={process.env.PUBLIC_URL + `/about`}
                            className="thm-btn main-slider__btn"
                          >
                            Contact us
                          </Link>
                          <div className="main-slider-arrow">
                            <img
                              src={
                                publicUrl +
                                "assets/images/shapes/main-slider-shape-1.png"
                              }
                              className="float-bob-x"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                ))
              }
             
             
                  </div>
            <div
              className="swiper-pagination"
              id="main-slider-pagination"
            ></div>
            <div className="main-slider__nav">
              <div
                className="swiper-button-prev"
                id="main-slider__swiper-button-next"
              >
                <i className="fa fa-long-arrow-alt-left"></i>
              </div>
              <div
                className="swiper-button-next"
                id="main-slider__swiper-button-prev"
              >
                <i className="fa fa-long-arrow-alt-right"></i>
              </div>
            </div>
          </Swiper>
        </section>
      
    </>
  );

}

export default HeroOne;