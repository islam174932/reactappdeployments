// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row text-center">
          {/* Location Section */}
          <div className="col-lg-4 mb-4">
            <h4 className="text-uppercase fw-bold mb-3">LOCATION</h4>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p className="mb-0">Clark, MO 65243</p>
          </div>

          {/* Around the Web Section */}
          <div className="col-lg-4 mb-4">
            <h4 className="text-uppercase fw-bold mb-3">AROUND THE WEB</h4>
            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "50px", height: "50px" }}
                aria-label="Facebook"
              >
                <span className="fw-bold">f</span>
              </button>
              <button
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "50px", height: "50px" }}
                aria-label="Twitter"
              >
                <span className="fw-bold">t</span>
              </button>
              <button
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "50px", height: "50px" }}
                aria-label="LinkedIn"
              >
                <span className="fw-bold">in</span>
              </button>
              <button
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "50px", height: "50px" }}
                aria-label="Globe"
              >
                <span className="fw-bold">🌐</span>
              </button>
            </div>
          </div>

          {/* About Freelancer Section */}
          <div className="col-lg-4 mb-4">
            <h4 className="text-uppercase fw-bold mb-3">ABOUT FREELANCER</h4>
            <p className="mb-0">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-3" style={{ backgroundColor: "#2c3e50" }}>
        <div className="container text-center">
          <p className="mb-0 small">Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
