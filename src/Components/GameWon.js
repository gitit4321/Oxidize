import React, { useState } from "react";
import Choice from "./Choice";
import HighScoreForm from "./HighScoreForm";
import { Link } from 'react-router-dom';

const GameWon = (props) => {



    return (
        <>
            <div>
                <p>Congratulations, you've won the game!</p>
                <div className="HighScoreDiv">
                    <HighScoreForm lives={props.lives} />
                </div>
                <span><p>Would you like to try again? </p>
                    <Choice value={"Play Again"} click={props.restart} />
                    <div>
                        <Link to="/highscores"><button className='choice-btn' value="highscores">See High Scores</button></Link>
                    </div>
                </span>
            </div>
        </>
    )
}

export default GameWon;