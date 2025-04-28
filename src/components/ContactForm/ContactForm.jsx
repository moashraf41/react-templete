import React, { Component } from "react";

export default class ContactForm extends Component {
  render() {
    return (
      <section className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Contact form</h6>
            <p className="text-muted">
              The following form demonstrates form validation in action. Contact
              form component reduces the amount of time it is being re-rendered
              by the user as it embraces uncontrolled form validation to reduce
              any unnecessary performance penalty.
            </p>
          </div>

          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control bg-body-tertiary"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control bg-body-tertiary"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
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
}
