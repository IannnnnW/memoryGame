import React from "react";
import Button from "../ButtonComponent/Button";
import './Difficulty.css'
import logo from '../../assets/brain.png'

function Difficulty({setDifficulty}){
    return(
        <div className="difficultyplane">
            <img className="logo" src={logo}/>
            <h4>Select difficulty &#128170;</h4>
            <div className="difficultybtns">
                <Button label="Easy" onButtonClick={()=>{setDifficulty(8)}} emoji="&#129336;"/>
                <Button label="Medium" onButtonClick={()=>{setDifficulty(12)}} emoji="&#127940;"/>
                <Button label="Hard" onButtonClick={()=>{setDifficulty(16)}} emoji="&#127947;"/>
            </div>
        </div>
    )
}

export default Difficulty;