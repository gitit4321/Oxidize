import React, {useEffect, useState, useLayoutEffect} from "react";
import Choice from "./Choice";

const MathGame = (props) => {

    const [sequence, setSequence] = useState([]);
    const [sum, setSum] = useState(0)
    const [countdown, setCountdown] = useState(15);
    const [multipleChoice, setMultipleChoice] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);


    useEffect(() => {
        if (countdown > 0) {
            setTimeout(() => setCountdown(countdown - 1), 1000);
        } else {
            setCountdown("You Lose!");
            return
        }
    }, [countdown]);

    useEffect(() => {
        calculateSum();
    }, [sequence]);

    useEffect(() => {
        createRandomAnswers();
    }, [sum]);

    const createRandomAnswers = () => {
        // create set of multiple choice answers (all unique) starting with correct answer
        const multipleChoiceSet = new Set();
        multipleChoiceSet.add(sum);

        // continue looping until we have 3 unique answers, including correct answer
        while (multipleChoiceSet.size < 3) {
            const newRandomNumber = Math.floor(Math.random() * ((sum + 5) - (sum - 5)) + (sum - 5));
            multipleChoiceSet.add(newRandomNumber);
        }

        // convert set to an array and update multiple choice array
        let multipleChoiceArray = [...multipleChoiceSet];
        let randomizedChoices = randomizeArrayOrder(multipleChoiceArray);
        setMultipleChoice(randomizedChoices);
    }

    const randomizeArrayOrder = (arr) => {
        let currentIndex = arr.length, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currentIndex]];
        }

        return arr;
    }


    const calculateSum = () => {
        // calculates sum of current number sequence and updates sum state
        let total = 0;
        for (var i in sequence) {
            total += sequence[i];
        }
        setSum(total);
    }

    const createGame = () => {
        createSequence();        
    }

    const createSequence = () => {
        // creates new sequence of random numbers between 1 and 9 and updates state
        let newSequence = []
        for (let i = 0; i < 6; i++) {
            newSequence.push(Math.floor(Math.random() * 9) + 1);
        }
        setSequence(newSequence);

    }

    const startGame = () => {
        createGame();
        setGameStarted(true);
    }

    if (gameStarted) {
        return (
            <>
                <p>What is the sum of all the numbers?</p>
                <p></p>
                <p>{countdown}</p>
                <h2>{sequence}</h2>
                <Choice value={multipleChoice[0]} />
                <Choice value={multipleChoice[1]} />
                <Choice value={multipleChoice[2]} />
            </>
        );
    } else {
        return (
            <>
                <p>Prepare to add the numbers. You must answer within the alloted time... or else!</p>
                <button onClick={startGame}>Start Game</button>
            </>
        );
    }

}

export default MathGame;