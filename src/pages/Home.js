import Background from "../components/Background.js";
import Navbar from "../components/Navbar.js";
import GlassProjects from "../components/GlassProjects.js";
import Carousel from "../components/Carousel.js";
import arrowDown from "../assets/icons/chevrons-down.svg";

const Home = () => {
  return (
    <>
      <div className="relative h-screen overflow-y-auto overflow-x-hidden z-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background />
        </div>
        <Navbar type="home" />
        <main className="relative flex flex-col items-center justify-center h-3/4 sm:h-full z-30">
            <img src={arrowDown} className="text-white text-3xl w-10"/>
          <center>
            <div className="mt-80">

            <Carousel />
            </div>
            {/* <h1 className="text-white text-xl sm:text-5xl w-96 sm:w-[1000px] main-text transition-all duration-300">
              Software Engineer Skilled in Applying Expertise in the Development
              of Systems
            </h1> */}
          </center>
        </main>
        {/* <center>
          <div className="flex flex-col justify-center">
            <GlassProjects />
            <GlassProjects />
            <GlassProjects />
          </div>
        </center> */}
      </div>
    </>
  );
};

export default Home;
