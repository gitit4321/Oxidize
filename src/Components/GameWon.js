import React, {useState} from "react";
import Choice from "./Choice";

const GameWon = (props) => {


    return (
        <>
            <div>
            <p>Congratulations, you've won the game!</p>
            <span><p>Would you like to try again? </p><Choice value={"Play Again"} click={props.restart} /></span>
            </div>
        </>
    )
}

export default GameWon;