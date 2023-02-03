import { useState } from "react";
import "./App.css";
import Dices from "./elements/Dices";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [dices, setDices] = useState([])
  
  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={()=>setShowRules(!showRules)}>Mostrar reglas</button>
      <button onClick={()=>{
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
      {dices}
    </div>
  );
}

export default App;
