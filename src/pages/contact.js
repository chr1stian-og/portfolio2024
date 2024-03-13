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
import instagram from "../assets/icons/instagram.svg";
import threads from "../assets/icons/threads.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import send from "../assets/icons/send.svg";

function Contact() {
  return (
    <>
      {/* <Cursor isVisible={false} /> */}

      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Background />
        </div>

        <Navbar image={back} type="CONTACT" />

        <main className="flex flex-col items-center  justify-center  h-screen">
          <div className="flex justify-center mb-20">
            <h1 className="font-bold text-white text-xl hover:cursor-default">
              CONTACT{" "}
            </h1>
          </div>
          <div className="flex justify-between sm:flex-row flex-col items-center gap-20 duration-200 transition-all">
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col items-center align-center">
                <h1 className="text-2xl text-[white]">Email</h1>
                <h1 className="text-[#808080]">
                  christianmacarthur17@gmail.com
                </h1>
              </div>
              <div className="flex flex-col items-center align-center">
                <h1 className="text-2xl text-white">Socials</h1>
                <h1 className=" text-[#808080]">chr1stian.og</h1>
                <div className="flex mt-2 flex-row gap-4 items-center justify-center">
                  <span
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/christian-macarthur/",
                        "_blank"
                      )
                    }
                    className="p-2  rounded-badge  bg-black z-50 bg-mix-blend-overlay cursor-pointer"
                  >
                    <img src={linkedin} className="w-5 h-5 " />
                  </span>
                  <span
                    onClick={() =>
                      window.open("https://github.com/chr1stian-og/", "_blank")
                    }
                    className="p-2 rounded-badge  bg-black z-50 bg-mix-blend-overlay cursor-pointer"
                  >
                    <img src={github} className="w-5 h-5 " />
                  </span>
                  <span
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/chr1stian.og/",
                        "_blank"
                      )
                    }
                    className="p-2 rounded-badge  bg-black z-50 bg-mix-blend-overlay cursor-pointer"
                  >
                    <img src={instagram} className="w-5 h-5 " />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[350px] z-50">
              <form
                action="#"
                // onsubmit="sendEmail(); reset(); return false"
              >
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="email"
                      id="email"
                      className="form-control w-full px-4 py-1 bg-[#ffffff00] text-white border-[#808080] border-2 duration-200 transition-all outline-0 "
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="row form-group ">
                  <div className="col-md-12 ">
                    <input
                      type="text"
                      id="message"
                      className="mt-2 h-[100px] text-start flex justify-start align-top form-control w-full px-4 py-1 text-white bg-[#ffffff00] border-[#808080] border-2 duration-200 transition-all outline-0 "
                      placeholder="Message"
                    />
                  </div>
                </div>

                <div className="row form-group flex justify-end align-center items-end">
                  <div className="btn btn-dark btn-md mt-2 min-w-full text-white">
                    <img src={send} type="submit" value="Send" width={20} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

{
  /* <script>
      function sendEmail() {
        Email.send({
          Host: "smtp.elasticemail.com",
          port: 2525,
          Username: "info@leureblue.com",
          Password: "D6233E4BC0FE32AC947F603F7E24486D9FD3",
          To: "leureblue@gmail.com",
          From: "info@leureblue.com",
          Subject:
            document.getElementById("subject").value +
            " - " +
            document.getElementById("fname").value +
            " " +
            document.getElementById("lname").value +
            " - " +
            document.getElementById("email").value,
          Body: document.getElementById("message").value,
        }).then((message) => {
          if (message == "OK") {
            Swal.fire(
              "Email sent Sucessfuly",
              "Expect to hear from us soon",
              "success"
            );
          } else {
            Swal.fire(
              "Error while sending email",
              "Please try again at a later time",
              "error"
            );
          }
          console.log(message);
        });
      }
    </script> */
}

export default Contact;
