import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ type, name, image }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex-col items-end flex sm:flex-row transition-all duration-500 justify-between sm:items-center mx-8 lg:mx-8 mt-4 min-w-fit gap-2 sm:gap-4 ">
        <div className="min-w-fit">
          {type !== "home" && (
            <>
              {image && (
                <img
                  src={image}
                  className="w-5 h-5 mix-blend-overlay hover:cursor-pointer"
                  alt="back button"
                  onClick={() => window.history.back()}
                />
              )}
            </>
          )}
          {type === "home" && (
            <Link to="/software">
              <span className="glass-navbar">WORK</span>
            </Link>
          )}
        </div>
        <Link
          to="/home"
          onClick={() => window.location.reload()}
          className="hover:cursor-pointer"
        >
          <span className="glass-navbar cursor-pointer">
            CHRISTIAN MACARTHUR
          </span>
        </Link>
        <Link to="/contact">
          <span className="glass-navbar">INFO</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
