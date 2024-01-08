import React from "react";
import ReactModal from "react-modal";
import Button from "../ButtonComponent/Button";
import './GameOver.css'

function GameOver({isOpen, resetFunction, score, emojiCount, changeLevel}){
  const style={
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'absolute',
      minWidth: '50vw',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
      borderRadius: '30px',
    }
  }
  return(
    <ReactModal isOpen={isOpen} style={style} ariaHideApp={false} portalClassName="modal">
      {score == emojiCount ? <h4 className="winningText">WOW &#128525;, You won!</h4> : <h4 className="losingText">You Lose &#128517;, Better Luck Next Time!</h4>}
        <div className="functionButtons">
          <Button label="Play Again?" onButtonClick={resetFunction} emoji="&#128018;"/>
          <Button label="Change Level" onButtonClick={changeLevel} emoji="&#9197;"/>
        </div>
    </ReactModal>     
  )
}
  


export default GameOver;