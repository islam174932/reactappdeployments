// src/components/Navigation.jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          START FRAMEWORK
        </Link>
        <div className="navbar-nav ms-auto">
          <Link
            className="nav-link text-uppercase fw-semibold mx-2"
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className="nav-link text-uppercase fw-semibold mx-2"
            to="/portfolio"
          >
            PORTFOLIO
          </Link>
          <Link
            className="nav-link text-uppercase fw-semibold mx-2"
            to="/contact"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
