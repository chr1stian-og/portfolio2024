import React, { useEffect, useState } from "react";
import imageSrc1 from "../assets/images/_DSC4508.jpg";
import imageSrc2 from "../assets/images/IMG_4301.jpg";

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <img
        src={imageSrc2}
        alt="Description of the image"
        className={`w-full h-full object-cover opacity-40`}
      />
    </div>
  );
}

export default Background;
