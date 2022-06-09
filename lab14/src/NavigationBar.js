import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
    const navStyle = {
        color: "#251c1c",
        textDecoration: "none"
    }
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Моя страница №1</li>
        </Link>

        <Link style={navStyle} to="/secondPage">
          <li>Моя страница №2</li>
        </Link>

        <Link style={navStyle} to="/thirdPage">
          <li>Моя страница №3</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavigationBar;
