import React, { useEffect, useState } from "react";

const landscapeImages = [
  "../assets/landscape/IMG_6328.jpg",
  "../assets/landscape/IMG_6323.jpg",
  "../assets/landscape/IMG_0234.jpg",
  "../assets/landscape/IMG_6324.jpg",
  "../assets/landscape/IMG_4605.jpg",
];
const portraitImages = [
  "../assets/portrait/IMG_0236.jpg",
  "../assets/portrait/IMG_0237.jpg",
  "../assets/portrait/IMG_0597.jpg",
  "../assets/portrait/IMG_7036.jpg",
  "../assets/portrait/IMG_2052.jpg",
];

const BackgroundImage = ({ status, timer }) => {
  const [currentImageFile, setCurrentImageFile] = useState(landscapeImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (status) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % currentImageFile.length
        );
      }, timer);

      return () => {
        clearInterval(interval);
      };
    }
  }, [status, timer, currentImageFile.length]);

  useEffect(() => {
    if (currentImageFile && currentImageFile.length > 0) {
      setCurrentImageFile(currentImageFile);
    }
  }, [currentImageIndex, currentImageFile]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (window.innerWidth >= 768) {
          setCurrentImageFile(landscapeImages);
        } else {
          setCurrentImageFile(portraitImages);
        }
      } catch (e) {
        setCurrentImageFile(landscapeImages);
      }
    }
  }, []);

  const image = currentImageFile[currentImageIndex];

  return (
    <div className="top-0 left-0 w-screen h-screen overflow-hidden">
      <div className="w-full h-full absolute inset-0 z-[-1]">
        <img src={image} alt="Background Image" layout="fill" />
      </div>
    </div>
  );
};

export default BackgroundImage;
