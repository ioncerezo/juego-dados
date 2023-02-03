function score(dice) {
  const diceArray = [...dice]
  const diceNumbers = dice.join("");
  let points = 0;
  let text = ''
  let restNumbers = diceNumbers;
  //search for 3 dices
  for (let i = 1; i < 7; i++) {
    const regex = new RegExp(i, "g");
    if (regex.test(diceNumbers)) {
      if(diceNumbers.match(regex).length > 2){
        if (i === 1) points = 1000;
        else points = i*100
        text = `Tres ${i}'s`
        for (let count = 0; count < 3; count++){
          diceArray[diceArray.indexOf(i)] = 'x'
        }
        restNumbers = diceArray.filter((el)=> el !== 'x').join('')
      }
    }
  }
  //search for the rest single dices
  for (let i = 0; i<restNumbers.length; i++){
      if(restNumbers[i] === '1') {
        points += 100
        if (text.length > 0) {
          text = text + ' + 1'
        } else text = '1'
        
      }
      if(restNumbers[i] === '5') {
        points += 50
        if (text.length > 0) {
          text = text + ' + 5'
        } else text = '5'
      }
  }
  
  return {points:points,text:text}
}
function Puntuation({ array }) {
  return (
    < >
      <p>{score(array).points}</p>
      <p>{score(array).text}</p>
    </>
  );
}

export default Puntuation;
