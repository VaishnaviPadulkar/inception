import React from "react";

const Footer = () => {
  return (
    <div className="pt-5">
      {/* footer */}
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center text-light mt-5 "
        style={{
          backgroundColor: "black",
          height: "250px",
        }}
      >
        <div className="row">
          <p className="inc">Inception Times 2024.</p>
          <h1
            className="my-3"
            style={{
              fontSize: "1rem",
            }}
          >
            Follow us
          </h1>
        </div>
        <div className=" ">
          <a href="">
            <i class="bi bi-linkedin text-light fs-4 me-3"></i>
          </a>
          <a href="">
            <i class="bi bi-instagram text-light fs-4 me-3"></i>
          </a>
          <a href="">
            <i class="bi bi-twitter text-light fs-4 me-3"></i>
          </a>
          {/* <a href="">
            <i class="bi bi-youtube text-light fs-4"></i>
          </a> */}
        </div>
        <div className="font col-sm-8 mt-2">
          <p>@ Inception Times 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
