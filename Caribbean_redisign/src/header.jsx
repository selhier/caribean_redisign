import React from "react";
import './Header.css';
import cblogo from './assets/cblogo.jpg';

const Header = () => {
  const logo = cblogo;
  return (
    <header className="header">
      <div className="banner-container bg-cover bg-center h-64">
        <img className="w-full h-full object-cover" src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;