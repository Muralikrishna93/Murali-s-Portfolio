import React from "react";
import "../index.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-light">Get in Touch</h2>
        <div className="row align-items-center justify-content-center">
          
          {/* Left Section*/}
          <div className="col-12 col-md-5 mb-4 mb-md-0 text-light">
            <h3 className="fw-bold mb-3">Let's Talk</h3>
            <p className="mb-4">
              I'm open to discussing web development projects or partnership opportunities.
            </p>
            
            <div className="contact-info">
              <p><FaEnvelope className="me-2 text-danger" /> murali2004ch@gmail.com</p>
              <p><FaPhoneAlt className="me-2 text-danger" /> +91-8074563694</p>
              <p><FaMapMarkerAlt className="me-2 text-danger" /> Suryapet, Telangana</p>
            </div>
          </div>

          {/* Right section */}
          <div className="col-12 col-md-6">
            <form className="contact-form p-4 rounded-4 shadow-lg">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

