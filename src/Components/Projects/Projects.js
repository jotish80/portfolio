import React from "react";
import creative from "../../images/creative-agency.PNG";
import travel from "../../images/travel.PNG";
import volunteer from "../../images/volunteer.PNG";

const Projects = () => {
  return (
    <div style={{ height: "60vh" }} className="container mt-5 mb-5">
      <h2 className="text-center   pt-5 mb-5">PROJECTS</h2>
      <div className="row">
        <div className="col-md-4">
          <div
            class="card"
            style={{ width: "350px", height: "300px", borderRadius: "20px" }}
          >
            <img src={creative} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <b>Technologies</b>: HTML5, CSS3, Bootstrap, JavaScript, ES6,
                ReactJS, React Router, Node.js, MongoDB, Netlify Heroku.
              </p>
              <a href="https://github.com/jotish80/creative-agency-client">
                <button
                  class="btn btn-dark"
                  style={{ width: "134px", height: "45px" }}
                >
                  GitHub
                </button>
              </a>
              <a href="https://flamboyant-chandrasekhar-fe1bc1.netlify.app/">
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
        <div className="col-md-4">
          <div
            class="card"
            style={{ width: "350px", height: "300px", borderRadius: "20px" }}
          >
            <img src={volunteer} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <b>Technologies</b>: HTML5, CSS3, Bootstrap, JavaScript, ES6,
                ReactJS, React Router, Node.js, MongoDB, Netlify, Heroku.
              </p>
              <a href="https://github.com/jotish80/volunteer-network-client">
                <button
                  class="btn btn-dark"
                  style={{ width: "134px", height: "45px" }}
                >
                  GitHub
                </button>
              </a>
              <a href="https://zealous-banach-d8b024.netlify.app/">
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
        <div className="col-md-4">
          <div
            class="card"
            style={{ width: "350px", height: "300px", borderRadius: "20px" }}
          >
            <img src={travel} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <b>Technologies</b>: HTML5, CSS3, Material UI, JavaScript, ES6,
                ReactJS, React Router, Firebase.
              </p>
              <a href="https://github.com/jotish80/travel-guru">
                <button
                  class="btn btn-dark"
                  style={{ width: "134px", height: "45px" }}
                >
                  GitHub
                </button>
              </a>
              <a href="https://travel-guru-b8851.firebaseapp.com/">
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