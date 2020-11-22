import React from "react";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import MyInfo from "../MyInfo/MyInfo";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MyInfo />
      <Skills />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
