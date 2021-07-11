import React, { useState, useEffect } from 'react';
import Choice from './Choice';
import LightGame from './LightGame';
import MathGame from './MathGame';
import Scenario1 from './Scenario1';
import MemoryGame from './MemoryGame';
import GameOver from './GameOver';
import GameWon from './GameWon';

const GameDiv = props => {
    const [lives, setLives] = useState(9);
    // const [scenarios, setScenarios] = useState([<Scenario1 />, <Scenario2 />])
    const [counter, setCount] = useState(0);
    

    let handleWrongAnswer = () => {
        if(lives == 1) {
            setLives(lives - 1);
            setCount(scarr.length - 1);
        } else{
            setLives(lives - 1);
        }
    }

    const countUp = () => {
        setCount(counter + 1)
    }

    const restartGame = () => {
        setLives(9);
        setCount(0);
    }

    let scarr = [<Scenario1 handleFailure={handleWrongAnswer} counter={countUp} />,
    <LightGame handleFailure={handleWrongAnswer} counter={countUp} />,
    <MemoryGame handleFailure={handleWrongAnswer} counter={countUp} />,
    <MathGame handleFailure={handleWrongAnswer} counter={countUp} />,
    <GameWon restart={restartGame}/>,
    <GameOver restart={restartGame}/>
    ]
    
    const scenarioChanger = (index, arr) => {
        return arr[index]
    }

    return (
        <div>
            <div className="scenarios">
                {scenarioChanger(counter, scarr)}
            </div>
            <p>lives = {lives}</p>
        </div>
    );
};

export default GameDiv;
