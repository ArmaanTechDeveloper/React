import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
const cardImages = [
  { "src": "/img/helmet-1.png" , matched:false},
  { "src": "/img/potion-1.png" , matched:false},
  { "src": "/img/ring-1.png" , matched:false},
  { "src": "/img/scroll-1.png" , matched:false},
  { "src": "/img/shield-1.png" , matched:false},
  { "src": "/img/sword-1.png" , matched:false},
]
function App() {
  // states for the cards and the number of turns taken
  const [cards , setCards] = useState([]);
  const [turns , setTurns] = useState(0);
  const [choiceOne , setChoiceOne] = useState(null);
  const [choiceTwo , setChoiceTwo] = useState(null);
  const [disabled , setDisabled] = useState(false);
  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card):setChoiceOne(card);
  }
  const resetTurn = ()=>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns+1)
    setDisabled(false);
  }

  useEffect(()=>{
    shuffleCards();
  },[])
  

  useEffect(()=>{
    if(choiceTwo){
      setDisabled(true);
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards=>{
          return prevCards.map((card)=>{
            if(card.src === choiceOne.src){
              return {...card , matched: true}
            }
            else{
              return card;
            }
          })
        })
        resetTurn();
      }
      else{
        setTimeout(()=>resetTurn(),1000);
      }
  
    }
  },[choiceOne,choiceTwo])
  console.log(cards);
  // shuffle card 
  const shuffleCards = () => {
    // duplicating each card
    const shuffledCards = [...cardImages , ...cardImages]
      .sort(()=>Math.random()-0.5)
      .map((card)=>({...card, id:Math.random()}));
    //Adding a Random id to every card  
    setChoiceOne(null);
    setChoiceTwo(null);
    //Setting the state of cards to shuffled cards
    setCards(shuffledCards)

    // setting the turns taken to be 0
    setTurns(0);
  }
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {/* displaying each card  */}
        {cards.map((card)=>(
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} 
          flipped={card === choiceOne || card===choiceTwo || card.matched === true}
          disabled={disabled}/>
        ))}
        {/* displaying each card ends here  */}
      </div>
      <p>turns : {turns}</p>
    </div>
  );
}

export default App;
