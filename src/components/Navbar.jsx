import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">MK</a>
        <div className="d-flex gap-4">
          <a className="nav-link text-light" href="#about">About</a>
          <a className="nav-link text-light" href="#skills">Skills</a>
          <a className="nav-link text-light" href="#projects">Projects</a>
          <a className="nav-link text-light" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
