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
import leureblue from "../assets/images/projects/leureblue.png";

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

        <main className="relative h-full flex flex-col justify-center z-30 mx-4 lg:mx-12 sm:mx-6 duration-300 transition-all">
          <div className="flex justify-center mb-20">
            <h1 className="text-white font-bold text-xl hover:cursor-default">
              SOFTWARE PROJECTS
            </h1>
          </div>
          <div className="flex flex-row justify-between hover:cursor-default mb-4 text-left text-white">
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
            description="Learn more"
            year={2023}
            client="clubnet"
            github_link="https://github.com/chr1stian-og/email-tester"
            image={emailtester}
            type="website"
            link="https://email.christianmacarthur.com"
          />
          <SoftwareProjects
            project="Xtools"
            description="Learn more"
            year={2023}
            client="clubnet"
            github_link="https://github.com/chr1stian-og/xtools"
            image={xtools}
            type="website"
            link="https://xtools.christianmacarthur.com"
          />
          <SoftwareProjects
            project="Leureblue"
            description="Learn more"
            year={2023}
            client="Leureblue"
            image={leureblue}
            type="website"
            link="https://leureblue.com"
          />
          <SoftwareProjects
            project="EasyOrder"
            description="Learn more"
            year={2022}
            client="BetaX Consultants"
            github_link="https://github.com/chr1stian-og/EasyOrder"
            image={easyorder}
            type="website"
            link="https://easyorder.christianmacarthur.com"
          />
          <SoftwareProjects
            project="Neohacking"
            description="Learn more"
            year={2022}
            client="Americo JR."
            github_link="https://github.com/chr1stian-og/neo-hacking"
            image={neohacking}
            type="website"
            link="https://americojunior.com"
          />
          <SoftwareProjects
            project="Portfolio"
            description="Learn more"
            year={2024}
            client="Personal"
            github_link="https://github.com/chr1stian-og/portfolio2024"
            image={portfolio}
            type="website"
            link="https://christianmacarthur.com"
          />
          <SoftwareProjects
            project="MyClubnet"
            description="Learn more"
            year={2023}
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
