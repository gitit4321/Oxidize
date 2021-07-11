import React, { useState, useEffect } from 'react';
import Choice from './Choice';
import MathGame from './MathGame';
import Scenario1 from './Scenario1';
import Scenario2 from './Scenario2';

const GameDiv = props => {
    const [gameState, setGameState] = useState(9);
<<<<<<< HEAD
    const [scenarios, setScenarios] = useState([<Scenario1 />, <MathGame />]);

    useEffect(gameState => {});

    let handleWrongAnswer = () => {
        setGameState(gameState - 1);
    };
    let scenario = Scenario1;

    let changeScenario = () => {
        setGameState(gameState + 1);
    };
    return (
        <div>
        <p>{props.scenario}</p>
        {scenarios[1]}
        <p>lives = {gameState}</p>
=======
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
>>>>>>> NateScenarios
        </div>
    );
};

export default GameDiv;
