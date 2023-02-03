import { useState , useEffect } from "react";
import "./App.css";
import Dices from "./elements/Dices";
import Puntuation from "./elements/Puntuation";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [dices, setDices] = useState([])
  const [dicesFinished, setDicesFinished] = useState(false)
  useEffect(()=> {
    if (dices.length > 4) setDicesFinished(true)
  }, [dices.length])
  return (
    <div className="board">
      <h1>DICE GAME</h1>
      <div className="buttons">
      <button onClick={()=>setShowRules(!showRules)}>Mostrar reglas</button>
      <button disabled={dicesFinished} onClick={()=>{
        let diceArray = [...dices]
        diceArray.push(Math.floor(Math.random() * 6)+1)
        setDices(diceArray)
      }}>Tirar dado</button>
      {dicesFinished && <button onClick={() => {setDices([]); setDicesFinished(false)}}>Nueva partida</button>}
      </div>
      
      
      {showRules && (
        <div>
          <h3>Reglas</h3>
          <p>reglas reglas</p>
        </div>
      )}
      <Dices array={dices} />
      <div className="puntuation">
      <h2>{dicesFinished ? 'Puntuación final' : 'Puntuación'}:</h2>
      <Puntuation array={dices} />
      </div>
    </div>
  );
}

export default App;
