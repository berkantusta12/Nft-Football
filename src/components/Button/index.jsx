import React from 'react';
import './index.css';
import ExitSVG from '../../config/icon/Vector.svg';



const Button = (props) => {

    const { buttonType, buttonName, onClickFunc } = props;

  return (
    <button
    onClick={onClickFunc}
    className={buttonType}>
     {
     buttonType === "exit-btn" ? <img src={ExitSVG} alt="" /> : buttonName
     }
    </button>
  )
}

export {Button}; 
