import React from "react";
import './NavBar.css';

const Nabvar = () => {
    return (
        
            <header className="header">
                <div className="logo-cotainer">
                    <img src={logo} alt="Logo" />
                </div>
                {/* links de navegación */}
      <nav>
      <ul className="nav-container">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Productos</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contacto</a>
        </li>
      </ul>
    </nav>
        </header>
        
    )
};
export default Nabvar;