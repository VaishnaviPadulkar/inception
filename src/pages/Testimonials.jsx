import React from "react";
import bg from "../assets/6.png";
// import "./Testimonials.css"; // Make sure to import the CSS file

const Testimonials = () => {
  return (
    <>
      <div id="carouselCaptions" className="carousel slide my-5 pt-5">
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>

        <div className="carousel-inner">
            <span>Our Testimonials</span>
          <div className="carousel-item active">
            <img
              src={bg}
              className="d-block"
              alt="..."
              style={{
                backgroundColor: "black",
                height: "460px",
                width: "100%",
              }}
            />
            <div className="carousel-caption d-none d-md-block custom-caption">
              {/* <h5></h5> */}
              <p>
                "Inception Time turned our advertising campaign into a
                masterpiece. Their team’s creativity and dedication are
                unmatched. The final product was beyond our expectations,
                showcasing their exceptional film production skills. I highly
                recommend Inception Time for any film production or
                advertisement needs."
                <br />
                <br />
                <b>— John Smith, Marketing Director at ABC Corp</b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={bg}
              className="d-block w-100"
              alt="..."
              style={{
                backgroundColor: "black",
                height: "460px",
                width: "100%",
              }}
            />
            <div className="carousel-caption d-none d-md-block custom-caption">
              {/* <h5>Second slide label</h5> */}
              <p>
                "Working with Inception Time was a game-changer for our brand.
                Their innovative approach to film production and advertising
                brought a fresh perspective to our project. The team’s
                professionalism and talent made the entire process seamless.
                Inception Time is truly a leader in the industry."
                <br />
                <br />
                <b>— Emily Johnson, Creative Head at XYZ Ltd</b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={bg}
              className="d-block w-100"
              alt="..."
              style={{
                backgroundColor: "black",
                height: "460px",
                width: "100%",
              }}
            />
            <div className="carousel-caption d-none d-md-block custom-caption">
              {/* <h5>Third slide label</h5> */}
              <p>
                "Inception Time exceeded all our expectations with their
                exceptional film production and advertising services. Their
                attention to detail and commitment to quality were evident from
                start to finish. We couldn’t be happier with the results and
                look forward to future collaborations."
                <br />
                <br />
                <b>— Michael Lee, CEO of Innovate Media</b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={bg}
              className="d-block w-100"
              alt="..."
              style={{
                backgroundColor: "black",
                height: "460px",
                width: "100%",
              }}
            />
            <div className="carousel-caption d-none d-md-block custom-caption">
              {/* <h5>Fourth slide label</h5> */}
              <p>
                "The team at Inception Time is simply outstanding. Their
                expertise in film production and advertising is evident in every
                frame of our campaign. They delivered a final product that was
                both creative and impactful. I highly recommend Inception Time
                for any production needs."
                <br />
                <br />
                <b>— Sarah Davis, Brand Manager at Creative Solutions</b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={bg}
              className="d-block w-100"
              alt="..."
              style={{
                backgroundColor: "black",
                height: "460px",
                width: "100%",
              }}
            />
            <div className="carousel-caption d-none d-md-block custom-caption">
              {/* <h5>fifth slide label</h5> */}
              <p>
                "Inception Time brought our vision to life with their
                exceptional film production and advertising skills. The team was
                professional, creative, and dedicated to delivering the best
                possible outcome. We are thrilled with the results and highly
                recommend their services."
                <br />
                <br />
                <b> — David Brown, Head of Marketing at NextGen Technologies</b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={bg}
              className="d-block w-100"
              alt="..."
              style={{
                backgroundColor: "black",
                height: "460px",
                width: "100%",
              }}
            />
            <div className="carousel-caption d-none d-md-block custom-caption">
              {/* <h5>sixth slide label</h5> */}
              <p>
                "Inception Time’s film production and advertising services are
                second to none. Their innovative approach and attention to
                detail resulted in a stunning final product that exceeded our
                expectations. The team’s professionalism and talent are truly
                commendable."
                <br />
                <br />
                <b>— Jessica Wilson, Marketing Lead at Future Brands</b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={bg}
              className="d-block w-100"
              alt="..."
              style={{
                backgroundColor: "black",
                height: "460px",
                width: "100%",
              }}
            />
            <div className="carousel-caption d-none d-md-block custom-caption">
              {/* <h5>Seventh slide label</h5> */}
              <p>
                "Choosing Inception Time for our film production and advertising
                needs was the best decision we made. Their team’s creativity,
                expertise, and dedication ensured a final product that was
                nothing short of spectacular. We highly recommend Inception Time
                to anyone looking for top-quality production services."
                <br />
                <br />
                <b>
                  — Robert Taylor, Chief Marketing Officer at Prime Ventures
                </b>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Testimonials;
