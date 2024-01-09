import React, {useState, useEffect, useRef} from "react"
import './App.css'
import Card from "./Components/CardComponent/Card"
import Difficulty from "./Components/DifficultyComponent/Difficulty";
import GameOver from "./Components/GameOverComponent/GameOver";

function App() {
    const [isGameOver, setGameOver] = useState(false)
    const [emojis, setEmojis] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [isDifficulty, setIsDifficulty] = useState(false)
    const [emojiNumber, setEmojiNumber] = useState(8)
    const currentScore = useRef()
    currentScore.current = highScore

    useEffect(()=>{
      function fetchData(){
      fetch(`https://api.giphy.com/v2/emoji?api_key=${{ secrets.API_KEY }}&limit=${emojiNumber}&offset=0`)
      .then(response => response.json())
      .then(data => setEmojis(data.data))
      }
      fetchData();
    },[isGameOver, emojiNumber])
    function shuffleEmojis(array){
      let newArray = [...array]
      for(let i = 0; i < newArray.length ; i++){
        let m = Math.floor(Math.random() * (i+1))
        let temp = newArray[m]
        newArray[m] = newArray[i]
        newArray[i] = temp
      }
      setEmojis(newArray)
    } 
    function handleResetCall(){
      setGameOver(false);
      setScore(0)
    }
    function handleCardClick(id){
      const updatedEmojis = (emojis.map(emoji => {
        if(emoji.id === id){
          !emoji.is_clicked ? 
          (setScore(score + 1), score == highScore ? (setHighScore(highScore + 1)) : null, (score == emojiNumber ? setGameOver(true) : null)) : 
          ((setGameOver(true)))
          return{
            ...emoji,
            "is_clicked": 1,
          }
        }
        return emoji;
      }))
      shuffleEmojis(updatedEmojis)
    }
    function setGameDifficulty(difficulty){
      setEmojiNumber(difficulty)
      setIsDifficulty(true)
    }
    function setToLevelSelect(){
      setIsDifficulty(false);
      setGameOver(false)
      setScore(0)
      setHighScore(0)
    }
    if(!isDifficulty){
      return(
      <Difficulty setDifficulty={setGameDifficulty}/>
      )
    } else{
      return(
        <div className="gamecontent">
          <h4 className="scoretext">&#128512; Current score: {score}</h4>
          <h4 className="scoretext">&#128513; High score: {highScore}</h4>
          <div className="memoryplane">
            {emojis.map(emoji => <Card image={emoji.images.fixed_height_small.url} key={emoji.id} id={emoji.id} onCardClick={handleCardClick}/>)}
          </div>
          <GameOver isOpen={isGameOver} resetFunction={handleResetCall} score={score} emojiCount={emojiNumber} changeLevel={setToLevelSelect}/>
        </div>
      )
    }
    

}

export default App;
