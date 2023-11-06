import React from "react";
import './Header1.css';

function Header1() {
  return (
    <div className="container">
      {/* First Div Section */}
      <div className="nav-section">
        <a href="#">Account</a>
        <a href="#">Track Order</a>
        <a href="#">Support</a>
      </div>

      {/* Second Div Section */}
      <div className="country-language-section">
        <div className="country-selection">
          <select>
            <option value="usa">USA</option>
            <option value="japan">Japan</option>
            <option value="india">India</option>
            {/* Add more countries here */}
          </select>
        </div>

        <div className="language-selection">
          <select>
            <option value="english">English</option>
            <option value="nihongo">Nihongo</option>
            <option value="hindi">Hindi</option>
            {/* Add more languages here */}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header1;
