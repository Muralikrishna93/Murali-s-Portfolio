import React from 'react';
import profile from '/Images/finalmk.png';
import '../index.css';

export default function Hero() {

  return (
    <section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-dark text-light"
      style={{ paddingTop: '4.5rem' }}
    >
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <img
              src={profile}
              alt="MK - Profile"
              className="rounded-circle img-fluid shadow-lg moving-image"
              style={{ width: 270, height: 270, objectFit: 'cover', border: '4px solid rgba(119, 21, 21, 0.97)'}}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="col-12 col-md-7 text-md-start">
            <h1 className="display-5 fw-bold">Hi, I'm <span className="text-gradient">Murali Krishna</span></h1>
            <p className="lead mb-3">
              • Web Application Dev  • React Developer  • Data Analyst.<br/>
              I build scalable web apps and engaging user experiences.
            </p>


            <div className="d-flex gap-2 flex-wrap">
              <a href="#projects" className="btn btn-outline-light btn-lg rounded-pill">View Projects</a>
              <a href="https://drive.google.com/file/d/1GKgfrkAP8fSZuzGZYRYcfCFIJGI1O5Ft/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-primary btn-lg rounded-pill">Resume</a>
            </div>

            <p className="mt-3 small"> Suryapet, Telangana • Open to opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
