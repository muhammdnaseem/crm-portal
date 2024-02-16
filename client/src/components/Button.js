import React from 'react';
import '../assets/css/button.css';

function Button({ icon, title, clickfunction, buttonClass, iconclass, style, buttonColor}) {
  return (
    <React.Fragment>
      <button className={`button ${buttonClass}`} onClick={clickfunction} 
       style={{ ...style, background: buttonColor }}
      >
        <span className={`icon ${iconclass}`}>{icon}</span>
        {title}
      </button>
    </React.Fragment>
  );
}

export default Button;
