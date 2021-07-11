import React, { useState } from 'react';

const Choice = (props) => {
    return (
        <button onClick={props.click} value={props.value}>{props.value}</button>
    )
}

export default Choice;