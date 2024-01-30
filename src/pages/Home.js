import Background from "../components/Background.js";
import Navbar from "../components/Navbar.js";
import GlassProjects from "../components/GlassProjects.js";
const Home = () => {
  return (
    <>
      <div className="relative h-screen overflow-y-auto overflow-x-hidden z-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background />
        </div>
        <Navbar type="home" />
        <main className="relative z-10 flex flex-col items-center justify-center h-3/4 sm:h-full z-30">
          <center>
            <h1 className="text-white text-xl sm:text-5xl w-96 sm:w-[1000px] main-text transition-all duration-300">
              Software Engineer Skilled in Applying Expertise in the Development
              of Systems
            </h1>
          </center>
        </main>
        <div className="flex flex-col justify-center">
          <GlassProjects />
          <GlassProjects />
          <GlassProjects />
        </div>
      </div>
    </>
  );
};

export default Home;
