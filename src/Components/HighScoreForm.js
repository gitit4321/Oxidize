import React, { useState, useRef } from 'react';

const HighScoreForm = (props) => {

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
