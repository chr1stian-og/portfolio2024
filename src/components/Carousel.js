import React, { Component } from "react";
import GlassProjects from "./GlassProjects";

function Carousel() {
  return (
    <>
      <div className="w-[600px] sm:w-[1000px] h-full carousel carousel-vertical">
        <div className="carousel-item h-full mt-96">
          <div className="flex justify-center items-center z-50">
            <h1 className=" text-white glass-main text-xl hover:cursor-default sm:text-6xl transition-all duration-300">
              Software Engineer Skilled in Applying Expertise in the Development
              of Systems
            </h1>
          </div>
        </div>
        <div className="carousel-item h-full mt-96">
          <GlassProjects
            title="Email Tester"
            description="Want to check if an email is valid or not?"
            image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            link="https://email.christianmacarthur.com"
          />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects
            title="Xtools"
            description="Simple tool for troubleshooting mikrotik devices"
            link="https://xtools.christianmacarthur.com"
          />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects
            title="Xtools"
            description="Simple tool for troubleshooting mikrotik devices"
            link="https://xtools.christianmacarthur.com"
          />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects
            title="Xtools"
            description="Simple tool for troubleshooting mikrotik devices"
            link="https://xtools.christianmacarthur.com"
          />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects
            title="Xtools"
            description="Simple tool for troubleshooting mikrotik devices"
            link="https://xtools.christianmacarthur.com"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;
