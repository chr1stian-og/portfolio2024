import React, { useState, useEffect } from "react";
import Background from "../components/Background.js";
import GlassButton from "../components/GlassButton.js";
import Cursor from "../components/Cursor.js";
import Navbar from "../components/Navbar.js";
import Carousel from "../components/Carousel.js";

import back from "../assets/icons/back.svg";
import pauseIcon from "../assets/icons/pause-circle.svg";
import playIcon from "../assets/icons/play.svg";
import downloadIcon from "../assets/icons/download.svg";

import previous from "../assets/icons/chevron-left.svg";
import next from "../assets/icons/chevron-right.svg";
import info from "../assets/icons/info.svg";

const Photography = () => {
  const [playing, setPlaying] = useState(true);
  const handleValueChange = (playing) => {
    setPlaying(playing);
  };

  function handleKeyDown(event) {
    if (event.keyCode === 37) {
      alert("Previous image");
    }
    if (event.keyCode === 39) {
      alert("Next image");
    }
    if (event.keyCode === 32) {
      alert("Paused");
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Cursor isVisible={false} />

      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background status={playing} timer={400} />
          {/* <Carousel /> */}
        </div>
        <Navbar type="PHOTOGRAPHY" image={back} />
        <main className=" z-10 flex flex-col justify-center align-center items-center">
          <div className="glass-player absolute bottom-6 items-center">
            {!playing && (
              <img
                src={previous}
                onClick={() => alert("previous")}
                onKeyDown={handleKeyDown}
                className="w-8 h-8 mix-blend-overlay hover:cursor-pointer "
                alt="previous"
              />
            )}
            <GlassButton
              playing={playing}
              border={false}
              displayImageButton="true"
              isPlaying={handleValueChange}
              onKeyDown={handleKeyDown}
            />
            {!playing && (
              <img
                src={next}
                onClick={() => alert("next")}
                onKeyDown={handleKeyDown}
                className="w-8 h-8 mix-blend-overlay hover:cursor-pointer"
                alt="next"
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Photography;
