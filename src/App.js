import React from "react";
import "./styles.css";
import logo from "../public/images/ile01.png";

export default function App() {
  return (
    <div className="App">
      <h1>Start MagicaVoxel!</h1>
      <h2>Start MagicaVoxel to see some magic happen!</h2>
      <img src={logo} alt="logo lr" />
    </div>
  );
}
