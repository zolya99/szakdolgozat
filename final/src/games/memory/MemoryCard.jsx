import React, {useState, useEffect} from "react";
import cardImages from "./cards";
import "./MemoryCard.css";
import Card from "./Card";


function MemoryCard(){
    const [card, setCard] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiseOne] = useState(null);
    const [choiceSecond, setChoiseSecond] = useState(null);
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setCard(shuffledCards)
        setTurns(0)
    };

    const handleChoice = (card) => {
        choiceOne ? setChoiseSecond(card) : setChoiseOne(card)
    }

    useEffect(() => {
        if(choiceOne && choiceSecond){
            if(choiceOne.src === choiceSecond.src){
                setCard(prevCards => {
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src){
                            return {...card, matched:true}
                        }
                        else{
                            return card
                        }
                    })
                })
                resetTurn()
            }
            else{
                
                setTimeout(() => resetTurn(), 500);
            }
        }
    }, [choiceOne, choiceSecond])

    console.log(card)

    const resetTurn = () => {
        setChoiseOne(null)
        setChoiseSecond(null)
        setTurns(prevTurns => prevTurns + 1)
    }

    return(
        <div>
            <h1>Memory Card Game</h1>
            <button onClick={shuffleCards}>New Game</button>
    
            <div className="card-grid">
                {card.map(card => (
                    <Card key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceSecond || card.matched}></Card>
                ))}
            </div>
        </div>
            
    );
    
    
}

export default MemoryCard;
