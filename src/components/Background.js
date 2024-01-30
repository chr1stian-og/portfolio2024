import React, { useEffect, useState } from "react";
import imageSrc from "../assets/images/_DSC4508.jpg";

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <img
        src={imageSrc}
        alt="Description of the image"
        className="w-full h-full object-cover opacity-50"
      />
    </div>
  );
}

export default Background;
