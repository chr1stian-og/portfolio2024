import React, { Component } from "react";
import GlassProjects from "./GlassProjects";
import emailtester from "../assets/images/projects/emailtester.png";
import xtools from "../assets/images/projects/xtools.png";
import easyorder from "../assets/images/projects/easyorder.png";
import neohacking from "../assets/images/projects/neohacking.png";
import leureblue from "../assets/images/projects/leureblue.png";

function Carousel() {
  return (
    <>
      <div className="max-w-[1095px] h-full carousel carousel-vertical">
        <div className="carousel-item h-full mt-96">
          <div className="flex justify-center items-center z-20">
            <h1 className="text-white text-center glass-main text-xl sm:text-6xl hover:cursor-default transition-all duration-300 ">
              Software Engineer skilled in system development.
            </h1>
          </div>
        </div>

        <div className="carousel-item h-full mt-96">
          <GlassProjects
            title="Email Tester"
            description="Clubnet"
            image={emailtester}
            link="https://email.christianmacarthur.com"
          />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects
            title="Xtools"
            image={xtools}
            description="Clubnet"
            link="https://xtools.christianmacarthur.com"
          />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects
            title="Leureblue"
            image={leureblue}
            description="Leureblue"
            link="https://leureblue.com"
          />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects
            title="EasyOrder"
            image={easyorder}
            description="BetaX Consultants"
            link="https://easyorder.christianmacarthur.com"
          />
        </div>
        <div className="carousel-item h-full">
          <GlassProjects
            title="Neohacking"
            image={neohacking}
            description="Americo JR."
            link="https://americojunior.com"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;
