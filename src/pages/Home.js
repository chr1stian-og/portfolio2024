// import Background from "../components/Background.js";
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
  const [playing, setPlaying] = useState(false);

  const handleValueChange = (playing) => {
    setPlaying(playing);
  };
  // const router = useRouter();

  return (
    <>
      {/* <Cursor isVisible={false} /> */}

      <div className="relative h-screen overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* <Background status={playing} timer={2500} /> */}
        </div>

        {/* <Navbar type="home" name="CHRISTIAN" router={router} /> */}
        <Navbar type="home" name="CHRISTIAN" />
        <main className="relative z-10 flex flex-col items-center justify-center h-3/4 sm:h-full">
          <div className="flex flex-row align-center items-center justify-center gap-8 h-1/2">
            <div className="glass-frame">
              <h1
                // onMouseEnter={textEnter}
                // onMouseLeave={textLeave}
                className="glass-text-main duration-500 transition-all"
              >
                Christian MacArthur
              </h1>
              <center>
                <Typewriter
                  options={{ skipAddStyles: true, loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .changeDeleteSpeed(5000)
                      .typeString("SOFTWARE ENGINEER")
                      .pauseFor(1500)
                      .deleteAll()
                      .pauseFor(1500)
                      .typeString("UX/UI Designer")
                      .pauseFor(1500)
                      .deleteAll()
                      .pauseFor(1500)
                      .typeString("NETWORK ENGINEER")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("")
                      .start();
                  }}
                />
              </center>
            </div>
          </div>
        </main>

        <div className="absolute bottom-2 w-full z-10">
          <center>
            <GlassButton
              playing={playing}
              displayImageButton="true"
              isPlaying={handleValueChange}
              border={false}
            />
          </center>
        </div>
      </div>
    </>
  );
};

export default Home;
