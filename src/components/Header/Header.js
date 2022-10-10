import React from "react";
import Navbar from "./Navbar";
import "./Header.css";
import LOGO from "../../images/logo-2.png";

const Header = ({
  shouldShowForm,
  setShouldShowForm,
  shouldShowChart,
  setShouldShowChart,
  shouldShowTotal,
  setShouldShowTotal,
}) => {
  return (
    <header className="header">
      <div className="container">
        <img className="header__logo" src={LOGO} />
        <h4 className="header__text">Welcome to ActiveLife</h4>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
