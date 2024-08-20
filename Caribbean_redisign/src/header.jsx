import React from "react";
import './Header.css';
import cblogo from './assets/cblogo.jpg';

const Header = () => {
    const logo = cblogo;
    return (
        
            <header className="header">
                <div className="logo-cotainer">
                    <img src={logo} alt="Logo" />
                </div>
                
      
        </header>
        
    )
};
export default Header;