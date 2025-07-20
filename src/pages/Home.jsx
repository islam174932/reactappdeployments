// src/pages/Home.jsx
import avatarImage from "../photos/avataaars.svg";

function Home() {
  return (
    <div
      className="home-page text-white d-flex align-items-center"
      style={{
        backgroundColor: "#1abc9c",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            {/* Profile Image */}
            <div className="mb-4">
              <img
                src={avatarImage}
                alt="Profile Avatar"
                className="rounded-circle mb-4"
                style={{ width: "250px", height: "250px" }}
              />
            </div>

            {/* Title */}
            <h1 className="display-3 fw-bold mb-4">START FRAMEWORK</h1>

            {/* Star decoration */}
            <div className="mb-4">
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

            {/* Subtitle */}
            <p className="lead mb-0">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
