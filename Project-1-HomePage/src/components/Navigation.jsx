import React from "react";

function NavigationBar() {
  return (
    <nav className="container">
      <div className="nav_logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
}

export default NavigationBar;
