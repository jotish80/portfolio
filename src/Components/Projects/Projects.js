import React from "react";
import creative from "../../images/creative-agency.PNG";
import fruits from "../../images/fruits.PNG";
import tools from "../../images/tools.PNG";

const Projects = () => {
  return (
    <div id="projects" className="container mt-5 mb-5">
      <h2 className="text-center pt-5 mb-5">PROJECTS</h2>
      <hr className="about-header" />
      <div className="row mt-5 g-5 d-flex justify-content-around align-items-center">
        <div style={{
            border: "1px solid",
            padding: "10px",
            boxShadow: "5px 5px #888888",
            borderRadius: "20px",
          }}
          className="col-md-4 col-sm-1 style"
        >
          <div class="card"
            style={{ width: "350px", height: "350px", borderRadius: "20px" }}
          >
            <img src={creative} class="card-img-top" alt="..."  />
            <div class="card-body">
              <p class="card-text">
                <b>Creative Agency</b> <br />
                <b>Technologies</b>: HTML5, CSS3, Bootstrap, JavaScript, ES6,
                ReactJS, React Router, Node.js, MongoDB, Netlify Heroku.
              </p>
              <a
                href="https://github.com/jotish80/creative-agency-client"
                target="_blank"
              >
                <button
                  class="btn btn-dark"
                  style={{ width: "134px", height: "45px" }}
                >
                  GitHub
                </button>
              </a>
              <a
                href="https://flamboyant-chandrasekhar-fe1bc1.netlify.app/"
                target="_blank"
              >
                <button
                  class="btn btn-dark ml-3"
                  style={{ width: "134px", height: "45px" }}
                >
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-1 style">
          <div
            class="card"
            style={{ width: "350px", height: "350px", borderRadius: "20px" }}
          >
            <img src={fruits} class="card-img-top" alt="..." style={{ width:'340px'}}/>
            <div class="card-body">
              <p class="card-text">
                <b>Organic Fruits Warehouse</b> <br />
                <b>Technologies</b>: HTML5, CSS3, Bootstrap, JavaScript, ES6,
                ReactJS, React Router, Node.js, MongoDB, Firebase, Heroku.
              </p>
              <a
                href="https://github.com/jotish80/organic-fruits-warehouse-client"
                target="_blank"
              >
                <button
                  class="btn btn-dark"
                  style={{ width: "134px", height: "45px" }}
                >
                  GitHub
                </button>
              </a>
              <a
                href="https://organic-fruits-warehouse.web.app/"
                target="_blank"
              >
                <button
                  class="btn btn-dark ml-3"
                  style={{ width: "134px", height: "45px" }}
                >
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid",
            padding: "10px",
            boxShadow: "5px 5px #888888",
            borderRadius: "20px",
          }}
          className="col-md-4 col-sm-1 style"
        >
          <div
            class="card"
            style={{ width: "350px", height: "350px", borderRadius: "20px" }}
          >
            <img src={tools} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <b>Quality Parts</b> <br />
                <b>Technologies</b>: HTML5, CSS3, DaisyUI, JavaScript, ES6,
                ReactJS, React Router, Firebase, Heroku, MongoDB, Mongoose.
              </p>
              <a href="https://github.com/jotish80/car-parts-manufacturer" target="_blank">
                <button
                  class="btn btn-dark"
                  style={{ width: "134px", height: "45px" }}
                >
                  GitHub
                </button>
              </a>
              <a href="https://car-parts-manufacture-12ec1.firebaseapp.com/" target="_blank">
                <button
                  class="btn btn-dark ml-3"
                  style={{ width: "134px", height: "45px" }}
                >
                  Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
