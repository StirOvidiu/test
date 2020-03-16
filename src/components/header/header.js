import React from "react";
import ImageSlider from "../image-slider/image-slider";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container-custom">
          <ImageSlider />
          <div className="text-container">
            <div className="first-text">
              <h1
                style={{
                  width: "100%",
                  paddingTop: "15px"
                }}
              >
                <strong>Lorem Ipsum Lorem</strong>
              </h1>
              <p style={{ width: "100%" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
            <div className="second-text">
              <h1 style={{ width: "100%", paddingTop: "15px" }}>
                <strong>Lorem Ipsum Lorem</strong>
              </h1>
              <p style={{ width: "100%" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
