import React, { Component, useEffect } from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <div className="absolute bottom-4 left-4  flex-row">
          <h1 className="glass-navbar">© {currentYear}</h1>
        </div>
        <div className="absolute bottom-4 right-4 ">
          <h1 className="glass-navbar">ALL RIGHTS RESERVED</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
