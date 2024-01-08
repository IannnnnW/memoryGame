import React from "react";
import './Button.css'

function Button({label, onButtonClick, emoji}){
    return(
        <button className="button" onClick={onButtonClick}>{label} {emoji}</button>
    )
}

export default Button;