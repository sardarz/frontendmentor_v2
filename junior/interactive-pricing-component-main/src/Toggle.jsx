import React from 'react';
import "./Toggle.css"

function Toggle(props) {
  return (
    <div className='toggle-wrapper' onClick={evt => {
      evt.currentTarget.classList.toggle('active')
    }}>
      <div className="toggle"></div>
    </div>
  );
}

export default Toggle;