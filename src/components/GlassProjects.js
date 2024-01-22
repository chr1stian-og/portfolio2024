import { useEffect, useState } from "react";
import GlassButton from "./GlassButton";

import previous from "../assets/icons/chevron-left.svg";
import next from "../assets/icons/chevron-right.svg";
import info from "../assets/icons/info.svg";
import github from "../assets/icons/github.svg";
import like from "../assets/icons/heart.svg";
// import project1 from "../assets/landscape/20201227_183239.jpg";
import Carousel from "./Carousel";

const GlassProjects = ({ title, image, onClose, description }) => {
  const [isLiked, setIsLiked] = useState(false);
  const previousButton = () => {
    alert("previous project");
  };
  const nextButton = () => {
    alert("next project");
  };

  return (
    <div className="glass-project max-w-[400px] sm:max-w-[600px]">
      <div className="flex flex-row justify-between  mt-2">
        <span className="glass-text-bold" style={{ pointerEvents: "none" }}>
          {title}
        </span>
        <img
          src={info}
          alt="info"
          className="w-5 h-5 sm:w-6 sm:h-6 mix-blend-overlay hover:cursor-pointer"
        />
      </div>
      <div className="flex mt-2">
        <Carousel />
      </div>
      <div className="flex flex-row w-full mt-4 items-center ">
        <h1 className="flex-1 mix-blend-overlay text-white">
          API to test validate emails before adding to the database
        </h1>
        <div className="flex justify-end gap-3">
          <img
            alt="like"
            src={like}
            className="w-5 h-5 sm:w-6 sm:h-6 hover:cursor-pointer"
          />
          <img
            alt="github"
            src={github}
            className="w-5 h-5 sm:w-6 sm:h-6 hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default GlassProjects;
