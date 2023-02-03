import { useState } from "react";
import "./App.css";
import Dices from "./elements/Dices";

function App() {
  const [showRules, setShowRules] = useState(false);
  const dicesnum = [1, 2, 3, 4, 5]
  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={()=>setShowRules(!showRules)}>Mostrar reglas</button>
      <button>New Dice</button>
      {showRules && (
        <div>
          <h3>Reglas</h3>
          <p>reglas reglas</p>
        </div>
      )}
      <Dices array={dicesnum} />
    </div>
  );
}

export default App;
