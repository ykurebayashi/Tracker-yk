import React, { useContext } from "react";
import DisplayContext from "../../DisplayContext";
import "./Navbar.css";

const Navbar = () => {
  const { addDisplayChart, addDisplayForm, addDisplayTotal } =
    useContext(DisplayContext);

  return (
    <nav className="navbar">
      <ul className="container">
        <li className="icon icon__chart" onClick={addDisplayChart}>
          <ion-icon name="stats-chart"></ion-icon>
        </li>
        <li className="icon icon__add" onClick={addDisplayForm}>
          <ion-icon name="add"></ion-icon>
        </li>
        <li className="icon icon__goal" onClick={addDisplayTotal}>
          <ion-icon name="ribbon-outline"></ion-icon>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
