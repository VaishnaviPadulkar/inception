import React from "react";

export default function Contact() {
  return (
    <div className=" text-light d-flex flex-column justify-content-center align-items-center mt-5 pt-5 py-5">
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center text-light mt-5"
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
            Contact Us
          </h1>
          {/* <b className="">Join the Inception Time Team</b> */}
        </div>
        <div className="font col-sm-8">
          <p>
            We’d love to hear from you! Whether you have a project in mind, need
            more information about our services, or want to discuss potential
            collaborations, feel free to reach out to us. Our team is here to
            assist you and provide the information you need.
          </p>
        </div>
        <div className="mt-5">
          <div className="col-sm-2">
            <a
              type="button"
              className="btn btn-outline-light btn-lg"
              href="mailto: careers@inceptiontime.in"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
