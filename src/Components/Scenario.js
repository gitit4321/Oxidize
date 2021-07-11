import React, { useState } from 'react';
import Choice from './Choice';
const Scenario1 = (props) => {
    return (
        <div>
            <p>{props.prompt}</p>
            <div className='opening-choice-container'>
                <Choice click={props.handleFailure} value={props.choiceAValue} />
                <Choice click={props.counter} value={props.choiceBValue} />
            </div>
        </div>
    )
}

export default Scenario1;