import React, { useState, useEffect } from 'react';
import Choice from './Choice'
import MathGame from './MathGame';
import Scenario1 from './Scenario1';
import Scenario2 from './Scenario2';

const GameDiv = (props) => {

    const [gameState, setGameState] = useState(9);
    const [scenarios, setScenarios] = useState([<Scenario1/>, <MathGame/>])

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
            {scenarios[1]}
            <p>lives = {gameState}</p>
        </div>

    )
}

export default GameDiv;