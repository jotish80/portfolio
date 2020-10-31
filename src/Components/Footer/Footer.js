import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#127C6E" }} className=" footer-dgn mt-5">
      <div className="text-center">
        <h3 className="text-center text-white pt-3 pb-3">CONTACT ME</h3>
        <form
          style={{ width: "400px", alignItems: "center", marginLeft: "600px" }}
        >
          <div class="form-group">
            <input type="name" class="form-control" placeholder="Your Name" />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Email Address"
            />
          </div>

          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            class="btn btn-dark"
            style={{ width: "134px", height: "45px" }}
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="copyRight text-center mt-5 text-white">
        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
