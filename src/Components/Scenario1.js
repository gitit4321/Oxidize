import React, { useState } from 'react';
import Choice from './Choice';
const Scenario1 = (props) => {
    return (
        <div>
            <p>Gandalf offers you the One Ring. It is cool to the touch and dark script can be seen around it's edges.</p>
            <div className='opening-choice-container'>
                <Choice click={props.handleFailure} value="Run Away" />
                <Choice click={props.counter} value="Take the ring" />
            </div>
        </div>
    )
}

export default Scenario1;