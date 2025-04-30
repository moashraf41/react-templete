import React, { Component, useContext } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import NavbarCss from "./Navbar.module.css";
import { ThemeContext } from "../../Contexts/ThemeContext/ThemeProvider";

export default function CustomNavbar() {
  let { theme, toglleTheme } = useContext(ThemeContext);
  let finalBg = theme === "light" ? "bg-light" : "bg-dark";
  let finalColor = theme === "light" ? "text-dark" : "text-light";

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow  p-3 ${finalBg}`}
    >
      <div className="container">
        <a
          className={`navbar-brand  ${NavbarCss.navbarbrand} ${finalColor}`}
          href="#"
        >
          Landy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse gap-3" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a
                className={`nav-link ${NavbarCss.Link} ${finalColor}`}
                aria-current="page"
                href="#"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${NavbarCss.Link} ${finalColor}`}
                href="#"
              >
                Mission
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${NavbarCss.Link} ${finalColor}`}
                href="#"
              >
                Product
              </a>
            </li>
            {theme === "light" ? (
              <li className="nav-item" onClick={toglleTheme}>
                <a
                  className={`nav-link ${NavbarCss.Link} ${finalColor}`}
                  onClick={(e) => e.preventDefault()}
                >
                  <BsFillMoonStarsFill />
                </a>
              </li>
            ) : (
              <li className="nav-item" onClick={toglleTheme}>
                <a
                  className={`nav-link ${NavbarCss.Link} ${finalColor}`}
                  onClick={(e) => e.preventDefault()}
                >
                  <BsFillSunFill />
                </a>
              </li>
            )}
          </ul>
          <a className="btn appBtn" href="#">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
