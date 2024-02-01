import SoftwareProjects from "../components/SoftwareProjects";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Background from "../components/Background.js";
import back from "../assets/icons/back.svg";

import emailtester from "../assets/images/projects/emailtester.png";
import xtools from "../assets/images/projects/xtools.png";
import easyorder from "../assets/images/projects/easyorder.png";
import neohacking from "../assets/images/projects/neohacking.png";
import portfolio from "../assets/images/projects/portfolio.png";
import myclubnet from "../assets/images/projects/myclubnet.png";

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
          <Background opacity="10" />
        </div>
        <Navbar type="software" image={back} />

        <main className="relative h-full flex flex-col justify-center z-50 mx-4 lg:mx-12 sm:mx-6 duration-300 transition-all">
          <div className="flex justify-center mb-20">
            <h1 className="text-white text-xl">SOFTWARE PROJECTS</h1>
          </div>
          <div className="flex flex-row justify-between mb-4 text-left text-white">
            <div className="w-[450px] sm:w-[350px] lg:w-[400px] duration-300 transition-all">
              <h1 className="text-[#6b6b6b] text-sm uppercase">Project</h1>
            </div>
            <div className="w-[450px] sm:w-[350px] lg:w-[400px] duration-300 transition-all">
              <h1 className="text-[#6b6b6b] text-sm uppercase">Client</h1>
            </div>
            <div className="w-[200px] sm:w-[200px] lg:w-[200px] duration-300 transition-all">
              <h1 className="text-[#6b6b6b] text-sm uppercase">Type</h1>
            </div>
            <div className="w-[200px] sm:w-[200px] lg:w-[200px] duration-300 transition-all">
              <h1 className="text-[#6b6b6b] text-sm uppercase"></h1>
            </div>
          </div>
          <hr />
          <SoftwareProjects
            project="Email Tester"
            client="clubnet"
            image={emailtester}
            type="website"
            link="https://email.christianmacarthur.com"
          />
          <SoftwareProjects
            project="Xtools"
            client="clubnet"
            image={xtools}
            type="website"
            link="https://xtools.christianmacarthur.com"
          />
          <SoftwareProjects
            project="EasyOrder"
            client="BetaX Consultants"
            image={easyorder}
            type="website"
            link="https://easyorder.christianmacarthur.com"
          />
          <SoftwareProjects
            project="Neohacking"
            client="Americo JR."
            image={neohacking}
            type="website"
            link="https://americojunior.com"
          />
          <SoftwareProjects
            project="Portfolio"
            client="Personal"
            image={portfolio}
            type="website"
            link="https://christianmacarthur.com"
          />
          <SoftwareProjects
            project="MyClubnet"
            client="Clubnet"
            image={myclubnet}
            type="web Dashboard"
            link="https://my.clubnet.mz"
          />
        </main>
      </div>
    </>
  );
};

export default Software;
