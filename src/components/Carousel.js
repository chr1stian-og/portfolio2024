import React, { Component } from "react";

import image1 from "../assets/images/landscape/IMG_4605.jpg";
import image2 from "../assets/images/landscape/IMG_6328.jpg";
import image3 from "../assets/images/landscape/IMG_6324.jpg";
import image4 from "../assets/images/landscape/IMG_4605.jpg";

function Carousel() {
  return (
    <>
      <div className="carousel rounded-md max-w-fit">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="text-2xl text-[#cacaca79]">
              ❮
            </a>
            <a href="#slide2" className="text-2xl text-[#cacaca79]">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={image2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-2xl text-[#cacaca79]">
              ❮
            </a>
            <a href="#slide3" className="text-2xl text-[#cacaca79]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-2xl text-[#cacaca79]">
              ❮
            </a>
            <a href="#slide4" className="text-2xl text-[#cacaca79]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-2xl text-[#cacaca79]">
              ❮
            </a>
            <a href="#slide1" className="text-2xl text-[#cacaca79]">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
