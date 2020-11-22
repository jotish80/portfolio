import React from "react";
import interview from "../../images/Interview-questions.png";
import ecma from "../../images/EcmaScriptPNG.PNG";
import react from "../../images/React-fundamental.png";

const Blog = () => {
  return (
    <div
      id="projects"
      style={{ height: "60vh" }}
      className="container mt-5 mb-5"
    >
      <h2 className="text-center   pt-5 mb-5">BLOGS</h2>

      <hr className="about-header" />
      <div className="row mt-5">
        <div className="col-md-4">
          <div
            class="card"
            style={{ width: "350px", height: "350px", borderRadius: "20px" }}
          >
            <img src={react} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <h4>React Fundamental</h4>
              </p>
              <a
                href="https://sjotishchandra.medium.com/react-fundamental-3db351112f96"
                target="_blank"
              >
                <button
                  class="btn btn-dark"
                  style={{ width: "300px", height: "45px" }}
                >
                  READ
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            class="card"
            style={{ width: "350px", height: "350px", borderRadius: "20px" }}
          >
            <img src={ecma} class="card-img-top" alt="..." />
            <div class="card-body">
              <p>
                <h4>Features Of EcmaScript</h4>
              </p>

              <a
                href="https://sjotishchandra.medium.com/es6-ecma-script-545fa3c35448"
                target="_blank"
              >
                <button
                  class="btn btn-dark"
                  style={{ width: "300px", height: "45px" }}
                >
                  READ
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            class="card"
            style={{ width: "350px", height: "350px", borderRadius: "20px" }}
          >
            <img src={interview} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <h4>Interview questions & Answers</h4>
              </p>

              <a
                href="https://sjotishchandra.medium.com/interview-questions-and-answers-eaf56fa8de75"
                target="_blank"
              >
                <button
                  class="btn btn-dark"
                  style={{ width: "300px", height: "45px" }}
                >
                  READ
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
