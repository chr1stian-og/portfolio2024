import React, { Component } from "react";
import GlassProjects from "./GlassProjects";

function Carousel() {
  return (
    <>
      <div className="max-w-[1095px] h-full carousel carousel-vertical">
        <div className="carousel-item h-full mt-96">
          <div className="flex justify-center items-center z-50">
            <h1 className="text-white text-center glass-main text-xl sm:text-6xl hover:cursor-default transition-all duration-300 ">
              Software Engineer Skilled in Applying Expertise in the Development
              of Systems
            </h1>
          </div>
        </div>

        <div className="carousel-item h-full mt-96">
          <GlassProjects
            title="Email Tester"
            description="Clubnet"
            image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            link="https://email.christianmacarthur.com"
          />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects
            title="Xtools"
            description="Clubnet"
            link="https://xtools.christianmacarthur.com"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;
