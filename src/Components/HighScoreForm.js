import React, { useState, useEffect } from 'react';

const HighScoreForm = (props) => {


    return (
        <div className="formDiv">
            <form className="form">
                <div className="control">
                    <label htmlFor="initials">Enter your initials</label>
                    <input type="text" required id="initials"></input>
                </div>
                <div className="control">
                    <label htmlFor="lives">{props.lives}</label>
                    <input type="hidden" required id="lives"></input>
                </div>

            </form>
        </div>
    )


};


export default HighScoreForm;
