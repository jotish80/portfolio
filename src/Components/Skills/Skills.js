import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container text-center mt-5">
      <h3 className="text-center mb-4 pt-5">SKILLS</h3>
      <br />

      <hr className="about-header" />
      <div className="d-flex p-5">
        <div style={{ paddingRight: "100px" }} className=" ">
          <ul className="list-unstyled ">
            <li>
              {" "}
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "#00A1A7",
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  HTML
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span style={{ fontSize: "20px" }}>85%</span>
                  </div>
                </div>
              </div>
            </li>
            <br />
            <li>
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "#00A1A7",
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  CSS
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {" "}
                    <span style={{ fontSize: "20px" }}>70%</span>
                  </div>
                </div>
              </div>{" "}
            </li>
            <br />
            <li>
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "#00A1A7",
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  JavaScript
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {" "}
                    <span style={{ fontSize: "20px" }}>60%</span>
                  </div>
                </div>
              </div>{" "}
            </li>
            <br />
            <li>
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "#00A1A7",
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  React
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {" "}
                    <span style={{ fontSize: "20px" }}>70%</span>
                  </div>
                </div>
              </div>{" "}
            </li>
            <br />
            <li>
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "#00A1A7",
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  Node.js
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {" "}
                    <span style={{ fontSize: "20px" }}>55%</span>
                  </div>
                </div>
              </div>
            </li>
            <br />
            <li>
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "#00A1A7",
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  Bootstrap
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {" "}
                    <span style={{ fontSize: "20px" }}>80%</span>
                  </div>
                </div>
              </div>{" "}
            </li>
            <br />
            <li>
              {" "}
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "#00A1A7",
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  UI Design
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {" "}
                    <span style={{ fontSize: "20px" }}>60%</span>
                  </div>
                </div>
              </div>
            </li>
            <br />
            <li>
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "#00A1A7",
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  MongoDB
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "45%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {" "}
                    <span style={{ fontSize: "20px" }}>45%</span>
                  </div>
                </div>
              </div>{" "}
            </li>
            <br />
            <li>
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "#00A1A7",
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  Express.js
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {" "}
                    <span style={{ fontSize: "20px" }}>40%</span>
                  </div>
                </div>
              </div>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
