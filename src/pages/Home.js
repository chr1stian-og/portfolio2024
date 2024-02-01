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
        {/* <h1 className="mb-96 absolute text-white text-xl sm:text-5xl w-96 sm:w-[850px] main-text transition-all duration-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Software Engineer Skilled in Applying Expertise in the Development of
          Systems
        </h1> */}
        <main className="flex flex-col items-center h-full w-full z-30">
          <Carousel />
        </main>
      </div>
    </>
  );
};

export default Home;
