import React from "react";
import { Route, Routes } from "react-router-dom";
import Personal from "../pages/personal";
import Photography from "../pages/photography";
import Software from "../pages/software";
import Contact from "../pages/contact";
import Home from "../pages/Home";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/software" element={<Software />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
