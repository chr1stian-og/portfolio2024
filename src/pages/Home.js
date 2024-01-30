import Background from "../components/Background.js";
import Navbar from "../components/Navbar.js";
import GlassButton from "../components/GlassButton.js";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import GlassFrame from "../components/GlassFrame.js";
import { motion } from "framer-motion";
import Cursor from "../components/Cursor.js";

import pauseIcon from "../assets/icons/pause-circle.svg";
import playIcon from "../assets/icons/play-circle.svg";
import downArrow from "../assets/icons/chevron-down.svg";
import Footer from "../components/Footer.js";

const Home = () => {
  return (
    <>
      <div className="relative h-screen overflow-y-auto overflow-x-hidden ">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background />
        </div>
        <Navbar type="home" />
        <main className="relative z-10 flex flex-col items-center justify-center h-3/4 sm:h-full">
          {/* <div className="flex flex-row align-center items-center justify-center gap-8 h-1/2"> */}
          <center>
            <h1 className="text-white text-5xl w-[1000px]">
              Software Engineer Skilled in Applying Expertise in the Development
              of Systems
            </h1>
          </center>
          {/* </div> */}
        </main>
      </div>
    </>
  );
};

export default Home;
