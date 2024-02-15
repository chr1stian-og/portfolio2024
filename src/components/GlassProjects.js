import github from "../assets/icons/github.svg";

function GlassProjects({ title, description, image, link, github_link }) {
  return (
    <div className="flex justify-center items-center">
      <div className="card mx-12 min-w-fit">
        <img className="bg-glow" src={image ? image : ""} />
        <div className="gap-1 flex flex-row justify-between ">
          <div>
            <h2
              className={`card-title glass-title  ${
                link ? "hover:underline" : ""
              } hover:cursor-pointer`}
              Click={() => {
                if (link) {
                  window.open(link, "_blank");
                }
              }}
            >
              {title}
            </h2>
            <p className="glass-description mt-[-3px]">{description} </p>
          </div>
          {!github_link ? (
            ""
          ) : (
            <img
              src={github}
              onClick={() => window.open(github_link, "_blank")}
              width={18}
              className="hover:cursor-pointer"
            />
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default GlassProjects;
