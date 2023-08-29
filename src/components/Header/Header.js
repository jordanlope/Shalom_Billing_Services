import React from "react";
import logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Shalom Billing Services</h1>
      <p>Your Trusted Medical Billing Partner</p>
    </header>
  );
}
