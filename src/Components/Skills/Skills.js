import React from "react";
import "./Skills.css";
import {
  SiMaterialUi,
  SiRedux,
  SiMongodb,
  SiJquery,
  SiHeroku,
  SiNetlify,
  SiFirebase,
  SiGooglechrome,
} from "react-icons/si";

import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitSquare,
  FaGithub,
  FaNpm,
  FaFigma,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="container text-center mt-5">
      <h4 className="text-center mb-3 pt-5">SKILLS</h4>
      <div className="d-flex p-5">
        <div style={{ paddingRight: "100px" }} className=" ">
          <button
            class="btn btn-dark"
            style={{ width: "134px", height: "45px" }}
          >
            COMFORTABLE
          </button>
          <ul className="list-unstyled ">
            <li>
              <div class="d-flex">
                <span
                  style={{
                    backgroundColor: "tomato",
                    color: "white",
                    fontSize: "25px",
                    paddingLeft: "10",
                  }}
                >
                  React
                </span>
                <div class="progress">
                  <div
                    class="progress-bar "
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </li>{" "}
            <br />
            <li>
              {" "}
              <FaJs size="2em" style={{ color: "purple" }} />
            </li>
            <br />
            <li>
              <SiMaterialUi size="2em" style={{ color: "purple" }} />
            </li>
            <br />
            <li>
              <FaBootstrap size="2em" style={{ color: "purple" }} />
            </li>
            <br />
            <li>
              <FaHtml5 size="2em" style={{ color: "purple" }} />
            </li>
            <br />
            <li>
              <FaCss3 size="2em" style={{ color: "purple" }} />
            </li>
          </ul>
        </div>
        <div style={{ paddingRight: "100px" }} className="">
          <button
            class="btn btn-dark"
            style={{ width: "134px", height: "45px" }}
          >
            FAMILIAR
          </button>
          <ul className="list-unstyled">
            <li>
              {" "}
              <SiRedux size="2em" style={{ color: "purple" }} />
            </li>
            <li>
              <FaNodeJs size="2em" style={{ color: "purple" }} />
            </li>
            <li>Express.js</li>
            <li>
              <SiMongodb size="2em" style={{ color: "purple" }} />
            </li>
            <li>
              <SiJquery size="2em" style={{ color: "purple" }} />
            </li>

            <li>
              <SiHeroku size="2em" style={{ color: "purple" }} />
            </li>
            <li>
              <SiNetlify size="2em" style={{ color: "purple" }} />
            </li>
            <li>
              <SiFirebase size="2em" style={{ color: "purple" }} />
            </li>
          </ul>
        </div>
        <div style={{ paddingRight: "100px" }} className="">
          <button
            class="btn btn-dark"
            style={{ width: "134px", height: "45px" }}
          >
            TOOLS
          </button>
          <ul className="list-unstyled">
            <li>
              <FaGitSquare size="2em" style={{ color: "purple" }} />
            </li>
            <li>
              <FaGithub size="2em" style={{ color: "purple" }} />
            </li>

            <li>Visual Studio Code</li>
            <FaNpm size="2em" style={{ color: "purple" }} />
            <li>
              <SiGooglechrome size="2em" style={{ color: "purple" }} />
            </li>
            <li>Dev Tools</li>
            <li>
              <FaFigma size="2em" style={{ color: "purple" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
