import React from "react";
// import img from "";
import bg from "../assets/bg.jpeg";

const Careers = () => {
  return (
    <div className="pt-5">
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center text-light mt-5 "
        style={{
          backgroundColor: "black",
          height: "460px",
        }}
      >
        <div className="row">
          <h1
            className="inc"
            style={{
              fontSize: "4rem", // Adjust the size as needed
            }}
          >
            Careers
          </h1>
          <b className="">Join the Inception Time Team</b>
        </div>
        <div className="font col-sm-8">
          <p>
            At Inception Time, brwe’re always on the lookout for talented
            individuals who are passionate about film production, advertising,
            and storytelling. Our dynamic team thrives on creativ ity,
            innovation, and collaboration, and we’re excited to welcome new
            members who share our enthusiasm for bringing compelling ideas to
            life.
          </p>
        </div>
        <div className="mt-5">
          <div className="col-sm-2">
            <a
              type="button"
              className="btn btn-outline-light btn-lg"
              href="mailto: careers@inceptiontime.in"
            >
              Join
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
