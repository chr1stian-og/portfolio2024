import React, { Component } from "react";
import GlassProjects from "./GlassProjects";

function Carousel() {
  return (
    <>
      <div className="h-[600px] carousel carousel-vertical rounded-box gap-y-96">
        <div className="carousel-item h-full justify-center">
          <h1 className="text-white text-xl sm:text-5xl w-96 sm:w-[1000px] main-text transition-all duration-300">
            Software Engineer Skilled in Applying Expertise in the Development
            of Systems
          </h1>
        </div>
        <div className="carousel-item h-full">
          <GlassProjects />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects />
        </div>
      </div>
    </>
  );
}

export default Carousel;
