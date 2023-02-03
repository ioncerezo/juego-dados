import '../stylesheet/Dices.css'

function Dices({array}) {

    return (
        <div className='dice-container'>
    
        {array.map((e) => <span className={`dice dice-${e}`}></span>)}
        </div>
    )
}


export default Dices