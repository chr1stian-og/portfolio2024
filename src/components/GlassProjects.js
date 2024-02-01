function GlassProjects({ title, description, image, link }) {
  return (
    <div className="flex justify-center items-center">
      <div className="card mx-12 w-full ">
        <img
          className="bg-glow"
          src={
            image
              ? image
              : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
        />
        <h2
          className="card-title glass-title hover:underline hover:cursor-pointer"
          onClick={() => window.open(link)}
        >
          {title}
        </h2>
        <p className="glass-description">{description} </p>
      </div>
    </div>
  );
}

export default GlassProjects;
