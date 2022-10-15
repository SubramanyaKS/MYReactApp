import React from "react";
import Background from "./Background";
const Education = () => {
  return (
    <div>
      <section className="education py-5" id="education">
        <div className="container-fluid">
          <div className="row">
            <h1 className="mb-5" style={{ color: "#00ddff" }}>
              {" "}
              &nbsp; &lt; Education Details. /&gt;
            </h1>
            <div className="col">
              <div className="d-flex box flex-column flex-md-row justify-content-between mb-5">
                <div className="shadow-lg  flex-grow-1">
                  <h3 className="mb-0">
                    &nbsp;J N N College of Engineering, Shivamogga
                  </h3>
                  <h6 className="mb-0">
                    &nbsp; Affiliated to Vishvesvaraya Technological
                    University,Belgavi
                  </h6>
                  <br />
                  <p className="mb-0" style={{ fontSize: "1.25rem" }}>
                    {" "}
                    &nbsp; Bachelor of Engineering
                  </p>
                  <p style={{ fontSize: "1.0rem" }}>
                    &nbsp; Information Science and Engineering
                  </p>
                </div>
              </div>
              <div className="d-flex box flex-column flex-md-row justify-content-between mb-5">
                <div className="shadow-lg flex-grow-1">
                  <h3 className="mb-0">&nbsp;Vikasa P U College, Shivamogga</h3>
                  <p className="mb-0" style={{ fontSize: "1.25rem" }}>
                    {" "}
                    <br />
                    &nbsp; PUC /12th
                  </p>
                  <p style={{ fontSize: "1.0rem" }}>
                    &nbsp; Physics,Chemistry,Mathematics,Biology
                  </p>
                </div>
              </div>
              <div className="d-flex box flex-column flex-md-row justify-content-between mb-5">
                <div className="shadow-lg flex-grow-1">
                  <h3 className="mb-0">
                    &nbsp;Sri Ramakrishna Vidyanikethana, Shivamogga
                  </h3>
                  <p className="mb-0" style={{ fontSize: "1.25rem" }}>
                    {" "}
                    <br />
                    &nbsp; SSLC/10th
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Background id="tsparticles" />
      </section>
    </div>
  );
};
export default Education;
