import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = () => {

    const [toggle, setToggle] = useState("false");

    const toggleClass = () => {
        setToggle(!toggle);
    }

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="usdao" />
          </Link>
        </div>

        <div
          onClick={toggleClass}
          class={toggle ? "button_container" : "button_container active"}
          id="toggle"
        >
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </div>

        <div className={toggle ? "navlinks" : "navlinks open"}>
          <Link to="/ecosystem" className="nav_link">
            Ecosystem
          </Link>
          <Link to="/community" className="nav_link">
            Community
          </Link>
          <Link to="/stacking" className="nav_link">
            Stacking
          </Link>
          <Link to="/tokens" className="nav_link">
            Tokens
          </Link>

          <button className="btn btn-border-gradient text-uppercase">
            Launch App
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
