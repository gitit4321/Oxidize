import React, { useState } from 'react';

const Choice = (props) => {
    return (
        <button onClick={props.click}>{props.value}</button>
    )
}

export default Choice;