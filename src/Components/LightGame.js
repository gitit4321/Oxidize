
import React, { useState } from 'react';

const Node = (props) => {
    return (
        <button className="node" onClick={props.click}>
            {props.value}
            {props.fail}
        </button>
    )
}

const Board = (props) => {

    const [nodeValue, setValue] = useState(Array(10).fill('X'));

    const lightChanger = () => {
        let interarr = [230, 240, 210, 230, 220, 210, 236, 268, 200, 230];
        let i = 0;
        let changeState = () => {
            let newState = nodeValue.slice();
            newState[i] = 'O'
            setValue(newState)
        }
        setInterval(() => {
            changeState();
            i++
            if (i > interarr.length) { i = 0 }
        }, interarr[i]);
    }

    const handleClick = (i) => {
        const newState = nodeValue.slice();
        if (newState[i] === 'O') {
            alert('Nice One!')
        }
        else { props.handleFailure() }
    }

    const renderNode = (i) => {
        return <Node value={nodeValue[i]} click={() => handleClick(i)} />
    };

    const message = 'Kill the Troll by clicking the ring!';
    return (
        <div>
            {message}
            <div>
                <button className="start" onClick={lightChanger}>Start</button>
            </div>
            <div className="lightbar">

                {renderNode(0)}
                {renderNode(1)}
                {renderNode(2)}
                {renderNode(3)}
                {renderNode(4)}
                {renderNode(5)}
                {renderNode(6)}
                {renderNode(7)}
                {renderNode(8)}
                {renderNode(9)}

            </div>
        </div>
    )
}

const LightGame = (props) => {
    return (
        <div className="game">
            <div className="game-board">
                <Board handleFailure={props.handleFailure} />
            </div>
            <div className="game-info">
                <div>{/*status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}
export default LightGame;