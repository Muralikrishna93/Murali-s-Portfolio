import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        
        {/* Left Section */}
        <div className="footer-left mb-2 mb-md-0">
          © 2025 <span className="fw-bold text-danger">Mk</span> | All rights reserved.
        </div>

        {/* Middle Section */}
        <div className="footer-social d-flex gap-3 mb-2 mb-md-0">
          <a href="https://www.instagram.com/murli_818/" target="_blank" rel="noreferrer" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://x.com/home/murali_818/" target="_blank" rel="noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/murali-krishna01/" target="_blank" rel="noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Muralikrishna93" target="_blank" rel="noreferrer" className="social-link">
            <FaGithub />
          </a>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <a href="#" className="footer-link">Privacy</a> | <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
