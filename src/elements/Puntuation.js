import "../stylesheet/Puntuation.css";
function score(dice) {
  const diceArray = [...dice]
  const diceNumbers = dice.join("");
  let points = 0;
  let restNumbers = diceNumbers;
  //search for 3 dices
  for (let i = 1; i < 7; i++) {
    const regex = new RegExp(i, "g");
    if (regex.test(diceNumbers)) {
      if(diceNumbers.match(regex).length > 2){
        if (i === 1) points = 1000;
        else points = i*100
        for (let count = 0; count < 3; count++){
          diceArray[diceArray.indexOf(i)] = 'x'
        }
        restNumbers = diceArray.filter((el)=> el !== 'x').join('')
      }
    }
  }
  //search for the rest single dices
  for (let i = 0; i<restNumbers.length; i++){
      if(restNumbers[i] === '1') points += 100
      if(restNumbers[i] === '5') points += 50
  }
  
  return points
}
function Puntuation({ array }) {
  return (
    < >
      <p className="puntuation">{score(array)}</p>
    </>
  );
}

export default Puntuation;
