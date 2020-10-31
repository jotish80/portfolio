import React from "react";
import me from "../../images/me.JPG";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const MyInfo = () => {
  return (
    <div style={{ height: "80vh" }} className="container-fluid">
      <div className="mt-5 text-center">
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
        <a className="text-white" href="https://github.com/jotish80">
          <GitHubIcon />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="text-white" href="https://www.linkedin.com/feed/">
          <LinkedInIcon />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="text-white" href="sjotishchandra@gmail.com">
          <MailOutlineIcon />
        </a>
      </div>
    </div>
  );
};

export default MyInfo;
