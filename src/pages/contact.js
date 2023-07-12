import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import Background from "../components/Background.js";
import GlassButton from "../components/GlassButton.js";
import { Link } from "react-router-dom";
import GlassFrame from "../components/GlassFrame";
import Cursor from "../components/Cursor.js";

import back from "../assets/icons/back.svg";
import pauseIcon from "../assets/icons/pause-circle.svg";
import playIcon from "../assets/icons/play.svg";
import downloadIcon from "../assets/icons/download.svg";

import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import threads from "../assets/icons/threads.png";

function Contact() {
  const handleClick = () => {
    alert("Clicked");
  };

  function contactForm(e) {
    alert("Email sent");
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_uaxwktv",
    //     "template_zhmszrn",
    //     e.target,
    //     "QXKIOsJR522n30JF-"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("Code: ", result, "Email Sent");
    //     },
    //     (error) => {
    //       console.log("Error while Sending email", error.text);
    //     }
    //   );
  }

  return (
    <>
      <Cursor />

      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background />
        </div>

        <Navbar image={back} type="CONTACT" />
        <main className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center align-center">
              <h1 className="text-2xl font-bold text-[white]">Direct</h1>
              <h1 className="mix-blend-overlay text-white">
                christianmacarthur17@gmail.com
              </h1>
            </div>
            <div className="flex flex-col items-center align-center">
              <h1 className="text-2xl font-bold text-white">Photo</h1>
              <h1 className="mix-blend-overlay text-white">cdk@gmail.com</h1>
            </div>
            <div className="flex flex-col items-center align-center">
              <h1 className="text-2xl font-bold text-white">Social</h1>
              <h1 className="mix-blend-overlay text-white">chr1stian.og</h1>
              <div className="flex mt-4 flex-row gap-4 items-center justify-center">
                <span onClick={()=> window.open("https://twitter.com/chr1stian_og/", "_blank")} className="p-2  rounded-badge bg-gray-400 z-50 bg-mix-blend-overlay cursor-pointer">
                  <img src={twitter} className="w-5 h-5 " />
                </span>
                <span onClick={()=> window.open("https://www.instagram.com/chr1stian.og/", "_blank")} className="p-2 rounded-badge bg-gray-400 z-50 bg-mix-blend-overlay cursor-pointer">
                  <img src={instagram} className="w-5 h-5 " />
                </span>
                <span onClick={()=> window.open("https://www.instagram.com/chr1stian.og/", "_blank")} className="p-2 rounded-badge bg-gray-400 z-50 bg-mix-blend-overlay cursor-pointer">
                  <img src={threads} className="w-5 h-5 " />
                </span>
              </div>
            </div>
          </div>

          {/* <form>
            <div className="glass-frame flex flex-col items-center gap-10 sm:gap-10">
              <div className="flex flex-col gap-1 sm:gap-4 rounded-xl px-4 py-2 min-w-full  sm:min-w-[500px]">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    className="glass-text-bold sm:glass-text"
                    style={{ textTransform: "uppercase" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="glass-input"
                    // placeholder="Type your name"
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    className="glass-text-bold sm:glass-text"
                    style={{ textTransform: "uppercase" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="glass-input"
                    // placeholder="Type your email"
                  />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    className="glass-text-bold sm:glass-text"
                    style={{ textTransform: "uppercase" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="glass-input"
                    // placeholder="Type a nice text..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end align-right items-center gap-4">
                <Link href="/">
                  <button className="rounded-md text-[#a4a4a4] border-[#a4a4a4] border-2 text-xl px-4 py-1">
                    Home
                  </button>
                </Link>
                <button className="bg-[#a4a4a4] border-[#a4a4a4] border-2 rounded-md text-[#4d4d4d73] text-xl px-4 py-1">
                  Send
                </button>
              </div>
            </div>
          </form> */}
        </main>
      </div>
    </>
  );
}

export default Contact;
