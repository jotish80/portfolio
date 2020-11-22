import React from "react";
import me from "../../images/me.JPG";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./MyInfo.css";

const MyInfo = () => {
  return (
    <div class="context-style">
      <div class="context">
        <img
          className="ml-5  text-center"
          style={{ width: "20%", borderRadius: "20px " }}
          src={me}
          alt=""
        />
        <br />
        <h3 class="pt-3 ml-5 text-white text-center">JOTISH CHANDRA SARKER</h3>
        <h5 class="ml-5 text-white text-center">Front-End Web Developer</h5>
        <p class="text-center text-white">
          I count myself as a hardworking person. To pursue a challenging career
          in a <br /> competitive world where enthusiasm, honesty, hard work and
          passion will support me to
          <br /> grow myself as well as utilize my knowledge and expertise for{" "}
          <br />
          professional development in the relevant field.
        </p>
        <p class="text-white text-center">Email: sjotishchandra@gmail.com</p>
        <a class="text-white" href="https://github.com/jotish80">
          <GitHubIcon />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a class="text-white" href="https://www.linkedin.com/feed/">
          <LinkedInIcon />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a class="text-white" href="https://www.facebook.com/">
          <FacebookIcon />
        </a>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default MyInfo;
