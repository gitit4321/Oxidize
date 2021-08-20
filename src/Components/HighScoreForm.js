import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
const HighScoreForm = (props) => {

    const history = useHistory();


    const nameRef = useRef();
    const scoreRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredScore = scoreRef.current.value;

        const player = {
            name: enteredName,
            score: enteredScore
        }
        fetch('https://frodos-lives-default-rtdb.firebaseio.com/scores.json', {
            method: 'POST',
            body: JSON.stringify(player),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            history.replace('/highscores')
        })
        console.log(player)

    }

    return (
        <div className="formDiv">
            <form className="form" onSubmit={submitHandler}>
                <div className="control">
                    <p><label htmlFor="name">Enter your name </label>
                        <input type="text" required id="name" ref={nameRef}></input></p>
                </div>
                <div className="control">
                    <p>
                        <label htmlFor="lives">Your Score was {props.lives} lives</label>
                    </p>
                    <input type="hidden" required id="lives" ref={scoreRef} value={props.lives}></input>
                </div>
                <button className='choice-btn' value="highscores">Submit</button>

            </form>
        </div>
    )


};


export default HighScoreForm;
