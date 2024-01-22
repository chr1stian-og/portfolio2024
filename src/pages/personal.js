import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Background from "../components/Background.js";
import GlassButton from "../components/GlassButton.js";
import Cursor from "../components/Cursor.js";
import { Link } from "react-router-dom";

import back from "../assets/icons/back.svg";
import pauseIcon from "../assets/icons/pause-circle.svg";
import playIcon from "../assets/icons/play.svg";
import downloadIcon from "../assets/icons/download.svg";

import previous from "../assets/icons/chevron-left.svg";
import next from "../assets/icons/chevron-right.svg";
import info from "../assets/icons/info.svg";

const Personal = () => {
  // const [slideShowStatus, setSlideShowStatus] = useState(true);

  return (
    <>
      {/* <Cursor isVisible={false} /> */}

      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* <Background /> */}
        </div>

        <Navbar type="PERSONAL" image={back} />
        <main className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="flex flex-row align-center items-center justify-center gap-8">
            <Link
              target="_blank"
              to="https://github.com/chr1stian-og/Certificates"
            >
              <h1 className="glass-text-bold">View Certificates</h1>
            </Link>
            <GlassButton text="Download CV" type="textButton" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Personal;
