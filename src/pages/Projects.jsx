import React from "react";
import img2 from "../assets/5.jpeg";

const Projects = () => {
  return (
    <div className="py-5">
      <div id="projects" className="container-fluid bg-black text-light">
        <div className="container ">
          <div className="row py-5 ">
            <span
              className="inc text-center my-2"
              style={{
                fontSize: "4rem", // Adjust the size as needed
              }}
            >
              Our Servises
            </span>
            <div className="col-sm-8 offset-2 mt-5 d-flex align-items-center">
              <p>
                At Inception Time, we offer a comprehensive range of services
                that span the full spectrum of film production and advertising.
                Our expertise and innovative approach ensure that we deliver
                exceptional results tailored to your unique needs.
              </p>
            </div>
            <div className="col-sm-8 offset-2 my-2">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                {/* accordion 1 */}
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Film Production
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <b>Feature Films:</b> We produce high-quality feature
                      films, bringing compelling stories to the big screen with
                      stunning visuals and engaging narratives.
                      <br />
                      <br />
                      <b>Documentaries:</b> Our team creates insightful
                      documentaries that explore important stories and issues,
                      providing a deep dive into diverse subjects.
                      <br />
                      <br />
                      <b>Short Films:</b> We craft impactful short films that
                      capture the essence of a story in a concise format,
                      leaving a lasting impression on viewers.
                      <br />
                      <br />
                      <b> Animation:</b> From traditional to cutting-edge CGI,
                      we produce captivating animations that enhance
                      storytelling through vibrant visuals.
                    </div>
                  </div>
                </div>
                {/* accordion 2 */}
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Post-Production
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <b>Editing: </b> Our expert editors ensure your project is
                      polished to perfection, maintaining a cohesive narrative
                      and visual style.
                      <br />
                      <br />
                      <b> Visual Effects (VFX):</b> We provide cutting-edge VFX
                      services, enhancing your project with stunning visual
                      elements that bring your vision to life.
                      <br />
                      <br />
                      <b>Sound Design: </b> Our sound design team creates
                      immersive audio experiences, adding depth and dimension to
                      your project.
                      <br />
                      <br />
                      <b> Color Grading:</b> We offer professional color grading
                      services, ensuring your project has a consistent and
                      visually appealing look.
                    </div>
                  </div>
                </div>
                {/* accordion 3 */}
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Virtual Production
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <b>Pre-Visualization: </b> We help filmmakers visualize
                      their projects before production begins, using advanced
                      pre-visualization techniques.
                      <br />
                      <br />
                      <b> Virtual Sets:</b>
                      Our virtual sets provide limitless possibilities for
                      creating immersive environments, enhancing the
                      storytelling process.
                      <br />
                      <br />
                      <b>Motion Capture:</b>
                      We utilize state-of-the-art motion capture technology to
                      bring characters and movements to life with precision and
                      realism.
                    </div>
                  </div>
                </div>
                {/* accordion 4 */}
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Advertising
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <b>Commercials: </b> Our commercials are designed to
                      captivate audiences and effectively communicate your
                      brand's message, driving engagement and action.
                      <br />
                      <br />
                      <b> Branded Content:</b> We create seamless branded
                      content that integrates storytelling with marketing
                      objectives, enhancing brand awareness and loyalty.
                      <br />
                      <br />
                      <b>Social Media Campaigns:</b> We develop targeted social
                      media campaigns that leverage the power of digital
                      platforms to reach and engage your audience.
                      <br />
                      <br />
                      <b> Product Videos:</b> Our product videos highlight the
                      features and benefits of your products, making them
                      appealing and informative for potential customers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
