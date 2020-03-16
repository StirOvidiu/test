import React from "react";
import "./image-component.css";
import black from "./black.jpg";

class Image extends React.Component {
  render() {
    return (
      <div className="image-component">
        <div className="container-custom">
          <div className="first-child">
            <div className="first-child-container">
              <h1 style={{ fontSize: "20px" }}>Lore Ipsum</h1>
              <h1 style={{ fontSize: "20px", fontWeight: "lighter" }}>
                Example Text
              </h1>
              <div className="image">
                <img src={black} alt="black" />
              </div>
              <button>
                Lorem Ipsum
                <i class="arrow left"></i>
              </button>
            </div>
          </div>
          <div className="first-child">
            <div className="first-child-container">
              <h1 style={{ fontSize: "20px" }}>Lore Ipsum</h1>
              <h1 style={{ fontSize: "20px", fontWeight: "lighter" }}>
                Example Text
              </h1>
              <div className="image">
                <img src={black} alt="black" />
              </div>
              <button>
                Lorem Ipsum
                <i class="arrow left"></i>
              </button>
            </div>
          </div>
          <div className="first-child">
            <div className="first-child-container">
              <h1 style={{ fontSize: "20px" }}>Lore Ipsum</h1>
              <h1 style={{ fontSize: "20px", fontWeight: "lighter" }}>
                Example Text
              </h1>
              <div className="image">
                <img src={black} alt="black" />
              </div>
              <button>
                Lorem Ipsum
                <i class="arrow left"></i>
              </button>
            </div>
          </div>
          <div className="first-child">
            <div className="first-child-container">
              <h1 style={{ fontSize: "20px" }}>Lore Ipsum</h1>
              <h1 style={{ fontSize: "20px", fontWeight: "lighter" }}>
                Example Text
              </h1>
              <div className="image">
                <img src={black} alt="black" />
              </div>
              <button>
                Lorem Ipsum
                <i class="arrow left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
