import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/rohanpuri81">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/rohan-puri-72a358b9/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/rohan.puri.r/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Rohan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😯",
                    1700,
                    "Front End Devloper 💻",
                    1700,
                    "Tech Minded 😎",
                    1700,
                    "Cross Platform Dev 🌐",
                    1700,
                    "React/React Native Dev 📱",
                    1700,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building apllications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="resume.pdf" download="rohanPuri resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
