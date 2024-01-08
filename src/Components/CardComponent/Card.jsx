import React from "react";
import './Card.css'

function Card({image, id, onCardClick}){
    return (
        <div className="memorycard" onClick={()=>onCardClick(id)}>
            <img src={image}/>
        </div>
    )
}

export default Card;