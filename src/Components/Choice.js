import React, { useState } from 'react';

const Choice = (props) => {
    return (
        <button className='choice-btn' onClick={props.click} value={props.value}>{props.value}</button>
    )
}

export default Choice;