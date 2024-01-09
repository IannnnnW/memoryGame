import React from "react";
import ReactModal from "react-modal";
import Button from "../ButtonComponent/Button";
import './GameOver.css'

function GameOver({isOpen, resetFunction, score, emojiCount, changeLevel}){

  return(
    <ReactModal isOpen={isOpen} className="modal" ariaHideApp={false} portalClassName="modal">
      {score == emojiCount ? <p className="winningText">WOW &#128525;, You won!</p> : <p className="losingText">You Lose &#128517;, Better Luck Next Time!</p>}
        <div className="functionButtons">
          <Button label="Play Again?" onButtonClick={resetFunction} emoji="&#128018;"/>
          <Button label="Change Level" onButtonClick={changeLevel} emoji="&#9197;"/>
        </div>
    </ReactModal>     
  )
}
  


export default GameOver;