import React from "react";
import "./phone-nav.css";

class PhoneNav extends React.Component {
  render() {
    return (
      <div className="phone-nav">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="#">
                <li>Link 1</li>
              </a>
              <a href="#">
                <li>Link 2</li>
              </a>
              <a href="#">
                <li>Link 3</li>
              </a>
            </ul>
          </div>
        </nav>
        <div className="h1-nav">
          <h1>Menu</h1>
        </div>
        <div className="logo-nav">
          <h1>Your Logo</h1>
        </div>
      </div>
    );
  }
}

export default PhoneNav;
