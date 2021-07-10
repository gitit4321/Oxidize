import React, { useState, useEffect } from 'react';
import Choice from './Choice'
import Scenario1 from './Scenario1';
import Scenario2 from './Scenario2';

const GameDiv = (props) => {

    const [gameState, setGameState] = useState(9);
    // const [scenarios, setScenarios] = useState([<Scenario1 />, <Scenario2 />])
    const [counter, setCount] = useState(0);

    let handleWrongAnswer = () => {
        setGameState(gameState - 1)
    }

    let scarr = [<Scenario1 />, <Scenario2 />]
    const scenarioChanger = (index, arr) => {
        return arr[index]
    }
    const countUp = () => {
        setCount(counter + 1)
    }

    return (
        <div>
            <div className="scenarios">
                {scenarioChanger(counter, scarr)}
            </div>

            <Choice click={handleWrongAnswer} value="Run Away" />
            <Choice click={countUp} value="Take the ring" />
            <p>lives = {gameState}</p>
        </div>

    )
}

export default GameDiv;