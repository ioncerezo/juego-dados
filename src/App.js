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
    <div>
      <h1>DICE GAME</h1>
      
      <button onClick={()=>setShowRules(!showRules)}>Mostrar reglas</button>
      <button disabled={dicesFinished} onClick={()=>{
        let diceArray = [...dices]
        diceArray.push(Math.floor(Math.random() * 6)+1)
        setDices(diceArray)
      }}>New Dice</button>
      {showRules && (
        <div>
          <h3>Reglas</h3>
          <p>reglas reglas</p>
        </div>
      )}
      <Dices array={dices} />
      <Puntuation array={dices} />
    </div>
  );
}

export default App;
