import { useState } from "react";
import "./App.css";

function App() {
  const [showRules, setShowRules] = useState(false);
  return (
    <div>
      <h1>Holad</h1>
      <button onClick={()=>setShowRules(!showRules)}>Mostrar reglas</button>
      <button>New Dice</button>
      {showRules && (
        <div>
          <h3>Reglas</h3>
          <p>reglas reglas</p>
        </div>
      )}
      
    </div>
  );
}

export default App;
