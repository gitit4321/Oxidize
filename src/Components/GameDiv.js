import React, { useState, useEffect } from 'react';
import Choice from './Choice'
import Scenario1 from './Scenario1';
import Scenario2 from './Scenario2';

const GameDiv = (props) => {

    const [gameState, setGameState] = useState(9);

    useEffect((gameState) => {

    });

    let handleWrongAnswer = () => {
        setGameState(gameState - 1)
    }
    let scenario = Scenario1

    let changeScenario = () => {
        setGameState(gameState + 1)
    }
    return (
        <div>
            <p>{props.scenario}</p>
            <Choice click={handleWrongAnswer} value="Run Away" />
            <Choice click={changeScenario} value="Take the ring" />
            <p>lives = {gameState}</p>
        </div>

    )
}

export default GameDiv;