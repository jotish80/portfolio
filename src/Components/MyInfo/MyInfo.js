import React from "react";
import me from "../../images/me.JPG";

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
      </div>
    </div>
  );
};

export default MyInfo;
