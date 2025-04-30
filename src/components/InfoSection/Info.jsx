import React, { Component, useContext } from "react";
import InfoCss from "../InfoSection/info.module.css";
import { ThemeContext } from "../../Contexts/ThemeContext/ThemeProvider";
import { cloneElement } from "react";

export default function Info({ img, h6, p, btn, imgStart }) {
  let { theme } = useContext(ThemeContext);
  let finalColor = theme === "light" ? "text-dark" : "text-light";
  if (img === undefined) {
    return (
      <section className="container mt-5">
        <div className="row text-center justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center gap-3">
            {h6 &&
              cloneElement(h6, {
                className: `mb-3 ${finalColor} ${h6.props.className || ""}`,
              })}{" "}
            {p &&
              cloneElement(p, {
                className: `mb-3 ${finalColor} ${p.props.className || ""}`,
              })}{" "}
            <button className="btn appBtn">{btn}</button>
          </div>
        </div>
      </section>
    );
  }

  if (imgStart === false) {
    return (
      <div>
        {" "}
        <section className="container mt-5">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              {h6 &&
                cloneElement(h6, {
                  className: `mb-3 ${finalColor} ${h6.props.className || ""}`,
                })}{" "}
              {p &&
                cloneElement(p, {
                  className: `mb-3 ${finalColor} ${p.props.className || ""}`,
                })}{" "}
            </div>
            <div className="col-md-6">
              <img
                src={img}
                alt=""
                className="w-100 h-100 bg-light rounded-4"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {" "}
      <section className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <img src={img} alt="" className="w-100 h-100 bg-light rounded-4" />
          </div>
          <div className="col-md-6">
            {h6 &&
              cloneElement(h6, {
                className: `mb-3 ${finalColor} ${h6.props.className || ""}`,
              })}{" "}
            {p &&
              cloneElement(p, {
                className: `mb-3 ${finalColor} ${p.props.className || ""}`,
              })}{" "}
          </div>
        </div>
      </section>
    </div>
  );
}
