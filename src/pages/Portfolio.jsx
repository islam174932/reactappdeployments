// src/pages/Portfolio.jsx
import { useState } from "react";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Portfolio items data with your images
  const portfolioItems = [
    {
      id: 1,
      image: "./src/photos/poert1.png",
      alt: "Portfolio Item 1",
      bgColor: "bg-danger",
    },
    {
      id: 2,
      image: "./src/photos/poert2.png",
      alt: "Portfolio Item 2",
      bgColor: "bg-info",
    },
    {
      id: 3,
      image: "./src/photos/poert3.png",
      alt: "Portfolio Item 3",
      bgColor: "bg-dark",
    },
    {
      id: 4,
      image: "./src/photos/poert1.png",
      alt: "Portfolio Item 4",
      bgColor: "bg-danger",
    },
    {
      id: 5,
      image: "./src/photos/poert2.png",
      alt: "Portfolio Item 5",
      bgColor: "bg-info",
    },
    {
      id: 6,
      image: "./src/photos/poert3.png",
      alt: "Portfolio Item 6",
      bgColor: "bg-dark",
    },
  ];

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(item);
    }
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold text-dark mb-4">
              PORTFOLIO COMPONENT
            </h1>

            {/* Star decoration */}
            <div className="mb-5">
              <div className="d-inline-block">
                <hr
                  className="border-dark"
                  style={{ width: "100px", height: "4px" }}
                />
              </div>
              <span className="mx-3 fs-2 text-dark">★</span>
              <div className="d-inline-block">
                <hr
                  className="border-dark"
                  style={{ width: "100px", height: "4px" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Grid - 2 rows with 3 items each */}
        {/* First row - 3 items */}
        <div className="row g-4 justify-content-center">
          {portfolioItems.slice(0, 3).map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <button
                className={`${item.bgColor} rounded-3 position-relative overflow-hidden border-0 w-100 p-0`}
                style={{ height: "250px", cursor: "pointer" }}
                onClick={() => openModal(item)}
                onKeyDown={(e) => handleKeyDown(e, item)}
                aria-label={`View ${item.alt}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-100 h-100 object-fit-cover"
                />

                {/* Hover overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-success bg-opacity-75 d-flex align-items-center justify-content-center opacity-0 hover-overlay">
                  <span className="text-white fs-1">+</span>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Second row - 3 items */}
        <div className="row g-4 justify-content-center mt-4">
          {portfolioItems.slice(3, 6).map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <button
                className={`${item.bgColor} rounded-3 position-relative overflow-hidden border-0 w-100 p-0`}
                style={{ height: "250px", cursor: "pointer" }}
                onClick={() => openModal(item)}
                onKeyDown={(e) => handleKeyDown(e, item)}
                aria-label={`View ${item.alt}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-100 h-100 object-fit-cover"
                />

                {/* Hover overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-success bg-opacity-75 d-flex align-items-center justify-content-center opacity-0 hover-overlay">
                  <span className="text-white fs-1">+</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Simplified version */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: 1050 }}
        >
          <div className="position-relative">
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="img-fluid rounded-3"
              style={{ maxHeight: "80vh", maxWidth: "80vw" }}
            />
            <button
              type="button"
              className="btn btn-light position-absolute top-0 end-0 m-3"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
