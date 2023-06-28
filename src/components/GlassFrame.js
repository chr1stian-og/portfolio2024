import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import previous from "../assets/icons/chevron-left.svg";
import next from "../assets/icons/chevron-right.svg";
import info from "../assets/icons/info.svg";

const GlassFrame = ({ onClick, title, image, onClose, description }) => {
  return (
    <div onClick={onClick} className="glass-frame">
      <div className="flex flex-row justify-between items-center">
        <img
          src={previous}
          className="w-8 h-8 mix-blend-overlay "
          alt="previous"
        />
        <div>
          <span className="glass-text-button"> {title}</span>
          <span className="glass-text-button"> {description}</span>
        </div>
        <img src={next} className="w-6 h-6 mix-blend-overlay " alt="next" />
      </div>
    </div>
  );
};

export default GlassFrame;
