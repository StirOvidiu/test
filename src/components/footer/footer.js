import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="footer">
    <div className="basement">
      <div className="footer-container">
        <h1 style={{ fontSize: "16px" }}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </h1>
      </div>
    </div>
    <div className="turqoise"></div>
    <div className="footer-content">
      <ul className="footer-nav">
        <li className="list list-1">Link 1</li>
        <li className="list list-2">Link 2</li>
        <li className="list list-3">Link 3</li>
        <li className="list list-4">Link 4</li>
        <li className="list list-5">Link 5</li>
        <li className="list list-6">Link 6</li>
      </ul>
      <div className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  </div>
);

export default Footer;
