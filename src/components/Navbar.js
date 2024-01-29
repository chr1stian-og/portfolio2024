import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ type, name, image }) => {
  const randomSuggestion = Math.random() < 0.5 ? "SOFTWARE" : "PHOTOGRAPHY";

  return (
    <div className="flex-col items-end flex sm:flex-row transition-all duration-500 justify-between sm:items-center mx-8 lg:mx-16 mt-4  min-w-fit gap-4">
      <div className="min-w-fit">
        <Link to="/personal">
          <span className="glass-text-bold">WORK</span>
          {image && (
            <img
              src={image}
              className="w-7 h-7 mix-blend-overlay"
              alt="back button"
            />
          )}
        </Link>
      </div>
      <Link to="/personal">
        <span className="glass-text-bold">CHRISTIAN MACARTHUR</span>
      </Link>
      <Link to="/personal">
        <span className="glass-text-bold">CONTACT</span>
      </Link>
    </div>
  );
};

export default Navbar;
