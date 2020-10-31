import React from "react";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import MyInfo from "../MyInfo/MyInfo";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#4E54C8", height: "100vh", width: "100%" }}>
      <Navbar />
      <MyInfo />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
