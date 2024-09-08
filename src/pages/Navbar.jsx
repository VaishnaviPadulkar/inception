import React from "react";
import vid from "../assets/vid.mp4";

const Navbar = () => {
  return (
    <>
      {/* logo */}
      <nav
        class="navbar navbar-expand navbar-dark "
        style={{
          overflow: "hidden",
          height: "460px",
          position: "relative",
        }}
      >
        <video
          src={vid}
          style={{
            width: "100vw",
            objectFit: "fill",
            position: "absolute",
          }}
          controls
          autoPlay
          muted
          loop
        ></video>
      </nav>
    </>
  );
};

export default Navbar;
