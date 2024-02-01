import emailtester from "../assets/images/projects/emailtester.png";
import arrow from "../assets/icons/chevron-down.svg";
function SoftwareProjects({ client, project, image, link, type }) {
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
          <img
            width={15}
            src={arrow}
            className="text-white uppercase text-sm"
          ></img>
        </div>
        <div className="collapse-content p-0">
          <img
            src={image}
            className="max-w-xs"
            onClick={() => window.open(link, "_blank")}
          />
        </div>
        <hr className="hover:text-[#6b6b6b] min-w-max hover:cursor-pointer" />
      </div>
    </>
  );
}

export default SoftwareProjects;
