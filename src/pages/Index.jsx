import React, { useState } from "react";
// import img1 from "../assets/port.jpeg";
// import bg from "../assets/bg1.jpeg";

import Navbar from "./Navbar";
import ResumeDetails from "./ResumeDetails";
import Projects from "./Projects";
import Contact from "./Contact";
import Careers from "./Careers";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Port = () => {
  return (
    <>
      <Navbar />

      <div className="container d-flex align-items-center mt-1">
        {/* <div className="container"> */}
        <div className="row align-items-center pt-5">
          <div
            className="font col-sm-6 fs-5 "
            style={{
              // fontFamily: "gotham",
              animation: "myAnimi 1s ease 0s 1 normal forwards ",
            }}
          >
            <p>
              Inception Time is a trailblazing film production and advertising
              company, renowned for its creativity, innovation, and
              technological expertise. We specialize in producing captivating
              films and impactful advertisements that leave a lasting
              impression. Since our inception in 2019, we have partnered with
              top-tier filmmakers and brands to deliver outstanding visual
              storytelling and strategic marketing solutions.
              <br />
              we partner with filmmakers and brands from initial brainstorming
              to the finished product. Our commitment to artistic excellence and
              technological advancement guarantees that each project is crafted
              with meticulous attention to detail and creativity. Leveraging
              state-of-the-art technology and our own unique tools, we transform
              concepts into reality, engaging our clients deeply in the creative
              journey at every step of the production process.
              <br />
              We are passionate about our craft and celebrate the creative
              journeys we embark on with our clients.we believe in the power of
              collaboration and innovation to create extraordinary content that
              inspires, entertains, and drives results. Join us as we continue
              to push the boundaries of storytelling and advertising.
            </p>
          </div>
          <div className="inc col-sm-6 text-center">
            {/* animation: myAnim 1s ease 0s 1 normal forwards */}

            <p
              className="fw-bold"
              style={{
                fontSize: "2.5rem",
                animation: "myAnim 1s ease 0s 1 normal forwards ",
              }}
            >
              Discover the world of
              <br />
              Inception Time
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>

      <ResumeDetails />
      <Projects />
      <Testimonials />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
};

export default Port;
