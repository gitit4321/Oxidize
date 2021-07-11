import React, {useState} from "react";
import Choice from "./Choice";

const GameOver = (props) => {


    return (
        <>
            <p>Sorry, you've lost!</p>
            <span><p>Would you like to try again? </p><Choice value={"Play Again"} click={props.restart} /></span>
        </>
    )
}

export default GameOver;