import React, { useState, useEffect } from 'react';

const HighScoreForm = (props) => {


    return (
        <div className="formDiv">
            <form className="form">
                <div className="control">
                    <p><label htmlFor="initials">Enter your initials</label>
                        <input type="text" required id="initials"></input></p>
                </div>
                <div className="control">
                    <p>
                        <label htmlFor="lives">Your Score was {props.lives} lives</label>
                    </p>
                    <input type="hidden" required id="lives"></input>
                </div>

            </form>
        </div>
    )


};


export default HighScoreForm;
