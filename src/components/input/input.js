import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./input.css";

const Input = () => (
  <div className="input-container">
    <div className="input">
      <h1 style={{ color: "gray" }}>Abonnez-vous à notre newsletter</h1>
      <div className="flex-row">
        <form className="input-form">
          <input
            style={{ borderRadius: "4%" }}
            className="input-name"
            type="text"
            placeholder="Name"
          ></input>
          <input
            style={{ borderRadius: "4%" }}
            className="input-email"
            type="email"
            placeholder="Email"
          ></input>
        </form>
        <button
          style={{
            borderRadius: "4%",
            backgroundColor: "#0544b4",
            fontSize: "20px",
            letterSpacing: "2px",
            color: "white",
            borderStyle: "none",
            padding: "0px 15px"
          }}
        >
          S'Aboner
        </button>
      </div>
    </div>
  </div>
);

export default Input;
