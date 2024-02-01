import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Background from "../components/Background.js";
import GlassButton from "../components/GlassButton.js";
import GlassProjects from "../components/GlassProjects";
import Cursor from "../components/Cursor.js";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import back from "../assets/icons/back.svg";
import pauseIcon from "../assets/icons/pause-circle.svg";
import playIcon from "../assets/icons/play.svg";
import downloadIcon from "../assets/icons/download.svg";
import github from "../assets/icons/github.svg";

const Software = () => {
  const handleClick = () => {
    alert("Clicked");
  };
  // const [slideShowStatus, setSlideShowStatus] = useState(true);

  return (
    <>
      {/* <Cursor isVisible={false} /> */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background />
        </div>
        <Navbar type="software" image={back} />
        <main className="relative z-10 flex flex-col items-center justify-center h-full">
          <GlassProjects
            title="Email-tester"
            description="Tool for testing emails"
          />
        </main>
      </div>
    </>
  );
};

export default Software;
