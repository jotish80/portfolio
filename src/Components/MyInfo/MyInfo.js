import React from "react";
import me from "../../images/me.JPG";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./MyInfo.css";

const MyInfo = () => {
  return (
    <div
      style={{ backgroundColor: "#4E54C8", height: "75vh" }}
      className="container-fluid"
    >
      <div className=" text-center">
        <img
          className="ml-5"
          style={{ width: "20%", borderRadius: "20px " }}
          src={me}
          alt=""
        />
        <br />
        <h3 className="pt-3 ml-5" style={{ color: "white" }}>
          JOTISH CHANDRA SARKER
        </h3>
        <h5 className="ml-5" style={{ color: "white" }}>
          Front-End Web Developer
        </h5>
        <p className="text-center text-white">
          I count myself as a hardworking person. To pursue a challenging career
          in a <br /> competitive world where enthusiasm, honesty, hard work and
          passion will support me to
          <br /> grow myself as well as utilize my knowledge and expertise for{" "}
          <br />
          professional development in the relevant field.
        </p>
        <p className="text-white">Email: sjotishchandra@gmail.com</p>
        <a
          className="text-white"
          href="https://github.com/jotish80"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          className="text-white"
          href="https://www.linkedin.com/feed/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          className="text-white"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
};

export default MyInfo;
