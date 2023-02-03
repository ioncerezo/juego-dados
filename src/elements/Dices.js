import '../stylesheet/Dices.css'

function Dices({array}) {

    return (
        <div className='dice-container'>
        
        {array.map((e) => <div className='dice'>{e}</div>)
        }
        </div>
    )
}


export default Dices