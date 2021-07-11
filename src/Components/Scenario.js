import React, { useState } from 'react';
import Choice from './Choice';
const Scenario = (props) => {

    const [answeredBravely, setAnsweredBravely] = useState(true);

    const handleWrongAnswer = () => {
        props.handleFailure();
        setAnsweredBravely(false);
    }

    const resetQuestion = () => {
        setAnsweredBravely(true);
    }


    if (answeredBravely) {
        return (
            <div>
                <h4>{props.prompt}</h4>
                <div className='choice-container'>
                    <Choice click={handleWrongAnswer} value={props.choiceAValue} />
                    <Choice click={props.counter} value={props.choiceBValue} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h4>Cowardly Hobbit! Try Again!</h4>
                <Choice click={resetQuestion} value="Try Again"/>
            </div>
        )
    }

}

export default Scenario;