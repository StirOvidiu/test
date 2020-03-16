import React from "react";
import "./body.css";

class Body extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="project-container">
          <div className="first-project">
            <h1>
              <strong>Lorem Ipsum Lorem</strong>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button>LOREM IPSUM</button>
          </div>
          <div className="first-project">
            <h1>
              <strong>Lorem Ipsum Lorem</strong>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <button>LOREM IPSUM</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
