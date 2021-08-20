import React, { useState } from "react";
import Choice from "./Choice";
import HighScoreForm from "./HighScoreForm";

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
                    <Choice value={"See High Scores"} />
                </span>
            </div>
        </>
    )
}

export default GameWon;