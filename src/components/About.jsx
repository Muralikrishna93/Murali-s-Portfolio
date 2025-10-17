import React from "react";
import '../index.css';

export default function About() {
    return (
        <section id="about" className="about-section py-5">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold text-light">About Me</h2>

                <div className="row align-items-center justify-content-center">
                    {/* Left Section*/}
                    <div className="col-12 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
                        <img
                            src="/Images/backmk.jpeg"
                            alt="Murali Krishna"
                            className="about-img img-fluid rounded-4 shadow-lg"
                            style={{
                                maxWidth: "100%",
                                border: "2px solid rgba(255,255,255,0.1)",
                            }}
                        />
                    </div>

                    {/* Right Section */}
                    <div className="col-12 col-md-7 text-light">
                        <p className="lead" style={{ textAlign: "justify" }}>
                            I have completed my <b>B.Tech</b> at <b>Vasavi College of Engineering</b> with cpa of <b>8.52</b>.
                            I have keen interest in problem-solving and programming.
                            Technical skills include languages like <b>C++/Java</b>, development
                            languages like <b>JavaScript, Node.js</b>, and <b>Express.js</b>,
                            databases like <b>MongoDB</b> and <b>MySQL</b>, and UI tools like
                            <b> HTML5, CSS</b>, and <b>React.js</b>.
                        </p>

                        <p className="lead" style={{ textAlign: "justify" }}>
                            I’m also familiar with computer science fundamentals such as{" "}
                            <b>OOPs</b>, <b>DBMS</b>, and <b>Operating Systems</b>. I’ve
                            developed several individual and team projects in web development.
                            Outside academics, I enjoy playing cricket and solving puzzles. I
                            love embracing new technologies and taking on challenges to push
                            my skills further.
                        </p>

                        <p className="lead" style={{ textAlign: "justify" }}>
                            I consider myself a hardworking, sportive, and passionate
                            individual. I’m always open to exploring new opportunities and
                            collaborating with like-minded professionals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

