import React, { useState, useEffect } from 'react';
import Choice from './Choice'

const GameDiv = () => {

    const [gameState, setGameState] = useState(0);

    useEffect((gameState) => {

    });

    let handleWrongAnswer = () => {
       
    }

    return (
        <div>
            <Choice onClick={() =>  setGameState(gameState + 1)} value="Button A"/>
            <Choice value="Button B"/>
            <p>lives = {gameState}</p>
        </div>

    )
}

export default GameDiv;