import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]
function App() {
  // states for the cards and the number of turns taken
  const [cards , setCards] = useState([]);
  const [turns , setTurns] = useState(0);
  // shuffle card 
  const shuffleCards = () => {
    // duplicating each card
    const shuffledCards = [...cardImages , ...cardImages]
      .sort(()=>Math.random()-0.5)
      .map((card)=>({...card, id:Math.random()}));
    //Adding a Random id to every card  

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
          <SingleCard key={card.id} card={card}/>
        ))}
        {/* displaying each card ends here  */}
      </div>
      
    </div>
  );
}

export default App;
