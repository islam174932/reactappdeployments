// src/pages/About.jsx
function About() {
  return (
    <div className="bg-success text-white min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold mb-4">ABOUT COMPONENT</h1>

            {/* Star decoration */}
            <div className="mb-5">
              <div className="d-inline-block">
                <hr
                  className="border-white"
                  style={{ width: "100px", height: "4px" }}
                />
              </div>
              <span className="mx-3 fs-2">★</span>
              <div className="d-inline-block">
                <hr
                  className="border-white"
                  style={{ width: "100px", height: "4px" }}
                />
              </div>
            </div>

            {/* Two column text */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <p className="lead">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <p className="lead">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
