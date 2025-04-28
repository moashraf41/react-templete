import React, { Component } from "react";
import InfoCss from "../InfoSection/info.module.css";

export default class Info extends Component {
  render() {
    const { img, h6, p, btn, imgStart } = this.props;

    return (
      <>
        {img === undefined ? (
          <section className="container mt-5">
            <div className="row text-center justify-content-center">
              <div className="col-12 d-flex flex-column align-items-center gap-3">
                {h6}
                {p}
                <button className="btn appBtn">{btn}</button>
              </div>
            </div>
          </section>
        ) : imgStart === false ? (
          <section className="container mt-5">
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0 ">
                {h6}
                {p}
              </div>
              <div className="col-md-6">
                <img src={img} alt="" className="w-100 h-100 " />
              </div>
            </div>
          </section>
        ) : (
          <section className="container mt-5">
            <div className="row align-items-center">
              <div className="col-md-6 mb-5 mb-md-0">
                <img src={img} alt="" className="w-100 h-100 " />
              </div>
              <div className="col-md-6">
                {h6}
                {p}
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}
