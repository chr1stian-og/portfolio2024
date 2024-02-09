import emailtester from "../assets/images/projects/emailtester.png";
import arrow from "../assets/icons/chevron-down.svg";
import github from "../assets/icons/github.svg";
import globe from "../assets/icons/globe.svg";

function SoftwareProjects({
  client,
  project,
  image,
  link,
  type,
  year,
  description,
  github_link,
}) {
  return (
    <>
      <div
        tabIndex={0}
        className="collapse my-2 hover:cursor-pointer collapse-arrow text-white hover:text-[#6b6b6b]"
      >
        <div className="flex flex-row items-start justify-between my-2 text-xl font-medium text-white">
          <div className="w-[100px] sm:w-[250px] lg:w-[200px] duration-300 transition-all">
            <h1 className="text-white uppercase text-sm">{project}</h1>
          </div>
          <div className="w-[100px] sm:w-[250px] lg:w-[200px] duration-300 transition-all">
            <h2 className="text-white uppercase text-sm">{client}</h2>
          </div>
          <div className="w-[100px] sm:w-[250px] lg:w-[200px] duration-300 transition-all">
            <h2 className="text-white uppercase text-sm">{type}</h2>
          </div>
          <div className="flex flex-col">
            <img
              width={15}
              src={arrow}
              className="text-white uppercase text-sm"
            ></img>
          </div>
        </div>
        <div className="collapse flex flex-row items-start justify-between my-2 text-xl font-medium text-white">
          <div className="flex flex-col">
            <img
              src={image}
              className="max-w-xs"
              onClick={() => window.open(link, "_blank")}
            />
            <h1 className="text-[#6b6b6b] text-xs mt-1 underline">{year}</h1>
          </div>
          <div className="w-[100px] sm:w-[250px] lg:w-[320px] duration-300 transition-all">
            <h2 className="text-[#6b6b6b] uppercase text-xs">{description} </h2>
          </div>
          <div className="w-[100px] sm:w-[250px] lg:w-[478px] flex-row gap-4 flex duration-300 transition-all">
            {!github_link ? (
              ""
            ) : (
              <img
                src={github}
                onClick={() => window.open(github_link, "_blank")}
                width={18}
              />
            )}
            <img
              src={globe}
              onClick={() => window.open(link, "_blank")}
              width={18}
            />
          </div>
        </div>
        <hr className="hover:text-[#6b6b6b] min-w-max hover:cursor-pointer" />
      </div>
    </>
  );
}

export default SoftwareProjects;
