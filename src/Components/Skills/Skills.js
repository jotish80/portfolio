import { Avatar } from "@material-ui/core";
import React from "react";
import me from "../../images/me.JPG";

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
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Router</li>
            <li>ES6</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div style={{ paddingRight: "100px" }} className="">
          <button
            class="btn btn-dark"
            style={{ width: "134px", height: "45px" }}
          >
            FAMILIAR
          </button>
          <ul>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>JQuery</li>
            <li>Material-UI</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div style={{ paddingRight: "100px" }} className="">
          <button
            class="btn btn-dark"
            style={{ width: "134px", height: "45px" }}
          >
            TOOLS
          </button>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>NPM</li>
            <li>chrome</li>
            <li>Dev Tools</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
