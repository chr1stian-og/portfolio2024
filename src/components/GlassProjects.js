import { useEffect, useState } from "react";
import GlassButton from "./GlassButton";

import previous from "../assets/icons/chevron-left.svg";
import next from "../assets/icons/chevron-right.svg";
import info from "../assets/icons/info.svg";
import github from "../assets/icons/github.svg";
import like from "../assets/icons/heart.svg";
import project1 from "../assets/landscape/20201227_183239.jpg";

const GlassProjects = ({ title, image, onClose, description }) => {
  const [isLiked, setIsLiked] = useState(false);
  const previousButton = () => {
    alert("previous project");
  };
  const nextButton = () => {
    alert("next project");
  };

  return (
    <div className="glass-project">
      <div className="flex flex-row justify-between mx-4 mt-2">
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
        <img
          alt="project image"
          src={project1}
          className="w-[600px] mix-blend-overlay -z-10 rounded-lg"
        />
      </div>
      <img
        alt="previous project"
        src={previous}
        onClick={previousButton}
        className="absolute top-1/2 left-4  w-8 h-8  hover:cursor-pointer"
      />
      <img
        alt="next project"
        src={next}
        onClick={nextButton}
        className="absolute top-1/2 right-4 w-8 h-8  hover:cursor-pointer"
      />
      <div className="absolute bottom-10 right-10 flex gap-6">
        <img
          alt="like"
          src={like}
          className="w-5 h-5 sm:w-6 sm:h-6  hover:cursor-pointer"
        />
        <img
          alt="github"
          src={github}
          className="w-5 h-5 sm:w-6 sm:h-6  hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default GlassProjects;
