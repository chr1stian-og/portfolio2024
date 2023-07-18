import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ type, name, image }) => {
  const randomSuggestion = Math.random() < 0.5 ? "SOFTWARE" : "PHOTOGRAPHY";

  return (
    <div className="flex-col items-end flex sm:flex-row transition-all duration-500 justify-between sm:items-center mx-8 lg:mx-16 mt-4  min-w-fit gap-4">
      <div className="min-w-fit">
        {type !== "home" && (
          <Link to="/">
            <span className="glass-text-bold">{name || ""}</span>
            {image && (
              // <button className="glass-button">
              <img
                src={image}
                className="w-6 h-6 mix-blend-overlay"
                alt="back button"
              />
              // </button>
            )}
          </Link>
        )}
        {type === "home" && (
          <Link to="/personal">
            <span className="glass-text-bold">{name || ""}</span>
            {image && (
              <img
                src={image}
                className="w-7 h-7 mix-blend-overlay"
                alt="back button"
              />
            )}
          </Link>
        )}
      </div>
      {/* <div className="space-x-4 lg:space-x-10 min-w-fit"> */}
      {type === "home" ? (
        <>
          <Link to="/software">
            <span className="glass-text-bold">SOFTWARE</span>
          </Link>
          <Link to="/photography">
            <span className="glass-text-bold">PHOTOGRAPHY</span>
          </Link>
        </>
      ) : (
        <span className="text-xl text-white">{type}</span>
      )}
      {/* </div> */}
      <div className="min-w-fit">
        <Link
          to={`/${
            type !== "CONTACT"
              ? "contact"
              : randomSuggestion.toLocaleLowerCase()
          }`}
        >
          <span className="glass-text-bold">
            {type !== "CONTACT" ? "CONTACT" : randomSuggestion}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
