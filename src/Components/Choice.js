import React, { useState } from 'react';

const Choice = (props) => {
    return (
        <div>
        <button className='choice-btn' onClick={props.click} value={props.value}>{props.value}</button>
        </div>
    )
}

export default Choice;