import React, {useState, useEffect} from "react";

const Countdown = (props) => {

    const [timeRemaining, setTimeRemaining] = useState(15);

    useEffect(() => {
        if (timeRemaining > 0) {
            const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setTimeRemaining("You Lose!");
            return
        }
    }, [timeRemaining]);

    if (timeRemaining == 0) {
        props.handleFailure();
        props.lostGame(true);
    }

    return (
        <p>Time Remaining: {timeRemaining}</p>
    );

}

export default Countdown;