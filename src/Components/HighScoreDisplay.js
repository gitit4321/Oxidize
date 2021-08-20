import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Choice from './Choice';
const HighScoreDisplay = (props) => {

    return (
        <div>
            <h3>High Score Display</h3>
            <div>
                <Link to="/"><button className='choice-btn' value="highscores">Start over</button></Link>
            </div>
        </div>


    )
};

export default HighScoreDisplay;