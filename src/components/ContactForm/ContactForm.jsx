import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext/ThemeProvider";

export default function ContactForm() {
  let { theme } = useContext(ThemeContext);
  let finalColor = theme === "light" ? "text-dark" : "text-light";
  return (
    <section className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h6 className={`fw-bold mb-3 ${finalColor}`}>Contact form</h6>
          <p className="text-muted">
            The following form demonstrates form validation in action. Contact
            form component reduces the amount of time it is being re-rendered by
            the user as it embraces uncontrolled form validation to reduce any
            unnecessary performance penalty.
          </p>
        </div>

        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className={`form-label ${finalColor}`}>Name</label>
              <input
                type="text"
                className="form-control bg-body-tertiary"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label cclassName={`form-label ${finalColor}`}>Email</label>
              <input
                type="email"
                className="form-control bg-body-tertiary"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <label className={`form-label ${finalColor}`}>Message</label>
              <textarea
                className="form-control bg-body-tertiary"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn appBtn mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
