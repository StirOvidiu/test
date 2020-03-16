import React from "react";
import "./nav.css";

const Nav = () => (
  <div className="nav1">
    <nav className="first-nav">
      <div className="nav-button">
        <h1 style={{ fontSize: "15px", color: "grey" }} className="margin">
          Lorem Impsum
        </h1>
        <button
          style={{
            borderStyle: "none",
            backgroundColor: "#0544b4",
            borderRadius: "4%",
            width: "150px",
            height: "30px",
            fontSize: "15px",
            color: "white"
          }}
          className="margin"
        >
          Lorem Ipsum
        </button>
        <button
          style={{
            borderStyle: "none",
            backgroundColor: "#0544b4",
            width: "150px",
            borderRadius: "4%",
            height: "30px",
            fontSize: "15px",
            color: "white"
          }}
          className="margin"
        >
          Lorem Ipsum
        </button>
      </div>
    </nav>
  </div>
);

export default Nav;
