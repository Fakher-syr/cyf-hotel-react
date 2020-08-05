import React from "react";
import "./Heading.css";

const Heading = () => (
  <header className="app-header">
    <img
      className="app-logo"
      src="https://image.flaticon.com/icons/svg/139/139899.svg"
      alt="Hotel logo"
    />
    <span className="app-title">CYF Hotel</span>
  </header>
);

export default Heading;
