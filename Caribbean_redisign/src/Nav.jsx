import React, { useState } from "react";
import './NavBar.css';

const Nabvar = () => {
  const [hoverStates, setHoverStates] = useState(
    [
      { id: 'inicio', isHovering: false },
      { id: 'estrenos', isHovering: false },
      { id: 'proximamente', isHovering: false },
      { id: 'cartelera', isHovering: false },
      { id: 'fineArts', isHovering: false },
      { id: 'cumpleaños', isHovering: false },
      { id: 'salasVIP', isHovering: false },
      { id: 'cinemaEvents', isHovering: false },
      { id: 'formatos', isHovering: false },
    ]
  );
  const handleMouseEnter = (id) => {
    setHoverStates(prevStates =>
      prevStates.map(state =>
        state.id === id ? { ...state, isHovering: true } : state
      )
    );
  };

  const handleMouseLeave = (id) => {
    setHoverStates(prevStates =>
      prevStates.map(state =>
        state.id === id ? { ...state, isHovering: false } : state
      )
    );
  };
    return (
        <div className="nav-container">
      <ul className="nav-list">
          {hoverStates.map(state => (
            <li key={state.id}>
              <a href="/"
                 onMouseEnter={() => handleMouseEnter(state.id)}
                 onMouseLeave={() => handleMouseLeave(state.id)}
                 className={state.isHovering ? 'nav-link active' : 'nav-link'}>
                {state.id}
              </a>
            </li>
          ))}
        </ul>
    </div>
    )
};

export default Nabvar;

