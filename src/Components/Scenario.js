import React, { useState } from 'react';
import Choice from './Choice';
const Scenario = (props) => {
    return (
        <div>
            <h4>{props.prompt}</h4>
            <div className='choice-container'>
                <Choice click={props.handleFailure} value={props.choiceAValue} />
                <Choice click={props.counter} value={props.choiceBValue} />
            </div>
        </div>
    )
}

export default Scenario;