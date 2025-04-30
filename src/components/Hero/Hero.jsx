import React, { Component, useContext } from "react";
import img from "../../assets/developer.svg";
import HeroCss from "./Hero.module.css";
import { ThemeContext } from "../../Contexts/ThemeContext/ThemeProvider";

export default function Hero() {
  let { theme } = useContext(ThemeContext);
  let finalColor = theme === "light" ? "text-dark" : "text-light";
  return (
    <section className="container d-flex align-items-center mt-5 mt-md-0">
      <div className="row">
        <div className="col-md-6">
          <h6 className={`mb-3 ${finalColor}`}>
            Landing page template for developers & startups
          </h6>
          <p className={`mb-3 ${finalColor}`}>
            Beautifully designed templates using React.js, ant design and
            styled-components! Save weeks of time and build your landing page in
            minutes.
          </p>
          <div className="btns d-flex gap-3">
            <button className="btn appBtn">Explore</button>
            <button className={`btn appBtn ${HeroCss.learn}`}>
              Learn More
            </button>
          </div>
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
          <div className="w-100 h-100">
            <img src={img} alt="" className="w-100 h-100 bg-light rounded-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
