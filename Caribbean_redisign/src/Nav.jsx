import React, { useState } from "react";
import './NavBar.css';

const Nabvar = () => {

    return (
        <div className="nav-container">
            <ul className="nav-list">
                <li>
                    <a href="/" className="nav-link" id="inicio">
                        Inicio 
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link" id="estrenos">
                        estrenos
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link" id="proximamente">
                        Proximamente
                    </a>
                </li>
                <li>
                    <a href="./" className="nav-link" id="cartelera">
                        Cartelera
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link" id="finearts">
                        FineArts
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link" id="cumpleanos">
                        Cumpleaños
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link" id="salasvip">
                        SalasVIP
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link" id="cinemaevents">
                        Cinema Events
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link" id="formatos">
                        Formatos
                    </a>
                </li>
                {/* Agrega más elementos <li> según tus necesidades */}
            </ul>
        </div>
    );
};

export default Nabvar;

