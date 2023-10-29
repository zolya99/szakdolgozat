import React, {useState} from "react";
import cardImages from "./cards";

function MemoryCard(){
    const [card, setCard] = useState([]);
    const [turns, setTurns] = useState(0);
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setCard(shuffledCards)
        setTurns(0)
    };

    return(
        <div>
            <h1>Memory Card Game</h1>
            <button onClick={shuffleCards}>New Game</button>
    
            <div className="card-grid">
                {card.map(card => (
                    <div className = "card" key={card.id}>
                        <div>
                            <img className="front" src={card.src} alt='card front'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            
    );
    
    
}

export default MemoryCard;
