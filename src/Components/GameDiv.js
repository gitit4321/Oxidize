import React, { useState, useEffect } from 'react';
import Choice from './Choice';
import LightGame from './LightGame';
import MathGame from './MathGame';
import Scenario from './Scenario';
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

    let scarr = [<Scenario prompt="Gandalf offers you the One Ring. It is cool to the touch and dark script can be seen around it's edges." 
        choiceAValue="Run Away"
        choiceBValue="Take the Ring"
        handleFailure={handleWrongAnswer} 
        counter={countUp} />,
    <Scenario prompt="A wise decision... but wait! A shadowy figure appears ahead..." 
        choiceAValue="Find somewhere to hide"
        choiceBValue="Draw your sword"
        handleFailure={handleWrongAnswer} 
        counter={countUp} />,
    <LightGame handleFailure={handleWrongAnswer} counter={countUp} />,
    <Scenario prompt="Well fought. There may be more battles ahead, should we turn back now?" 
        choiceAValue="Turn around immediately"
        choiceBValue="Continue onwards"
        handleFailure={handleWrongAnswer} 
        counter={countUp} />,
    <Scenario prompt="A mage appears before you. 'You must play my card game to pass' he says. Shall you play?" 
        choiceAValue="Flee home"
        choiceBValue="Accept his offer"
        handleFailure={handleWrongAnswer} 
        counter={countUp} />,
    <MemoryGame handleFailure={handleWrongAnswer} counter={countUp} />,
    <Scenario prompt="Very clever. Shall you continue your dangerous journey?" 
        choiceAValue="Turn around immediately"
        choiceBValue="Continue onwards"
        handleFailure={handleWrongAnswer} 
        counter={countUp} />,
    <Scenario prompt="You come to a large gate blocking your path with a large puzzle at the handle. Shall you attempt the puzzle?" 
        choiceAValue="No"
        choiceBValue="Yes"
        handleFailure={handleWrongAnswer} 
        counter={countUp} />,
    <MathGame handleFailure={handleWrongAnswer} counter={countUp} />,
    <Scenario prompt="Well done. You've come all the way to Mount Doom. Shall you cast the Ring into the fire?" 
        choiceAValue="Keep the Ring"
        choiceBValue="Cast the Ring into the fire"
        handleFailure={handleWrongAnswer} 
        counter={countUp}/>,
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
            <h4>lives remaining = {lives}</h4>
        </div>
    );
};

export default GameDiv;
