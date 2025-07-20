// src/pages/Contact.jsx
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold text-dark mb-4">
              CONATCT SECTION
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

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              {/* User Name */}
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg border-0 border-bottom rounded-0"
                  name="userName"
                  placeholder="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#dee2e6",
                  }}
                />
              </div>

              {/* User Age */}
              <div className="mb-4">
                <input
                  type="number"
                  className="form-control form-control-lg border-0 border-bottom rounded-0"
                  name="userAge"
                  placeholder="userAge"
                  value={formData.userAge}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#dee2e6",
                  }}
                />
              </div>

              {/* User Email */}
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg border-0 border-bottom rounded-0"
                  name="userEmail"
                  placeholder="userEmail"
                  value={formData.userEmail}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#dee2e6",
                  }}
                />
              </div>

              {/* User Password */}
              <div className="mb-5">
                <input
                  type="password"
                  className="form-control form-control-lg border-0 border-bottom rounded-0"
                  name="userPassword"
                  placeholder="userPassword"
                  value={formData.userPassword}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#dee2e6",
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success btn-lg px-4 py-2"
                  style={{ backgroundColor: "#1abc9c", borderColor: "#1abc9c" }}
                >
                  send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
