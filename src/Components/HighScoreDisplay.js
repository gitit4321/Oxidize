import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Choice from './Choice';
const HighScoreDisplay = (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [highScores, setHighScores] = useState([])

    useEffect(() => {
        // fetch data from firebase. Use effect hook to only load once
        setIsLoading(true)
        fetch('https://frodos-lives-default-rtdb.firebaseio.com/scores.json').then(response => {
            return response.json();
        }).then(data => {

            const players = []

            for (const key in data) {
                const player = {
                    id: key,
                    ...data[key]
                }

                players.push(player)
            }

            setIsLoading(false);
            setHighScores(players);

        })
    }, []);

    if (isLoading) {
        return <div>
            <p>Loading...</p>
        </div>
    }


    return (
        <div>
            <h3>High Scores</h3>
            <div>
                <ul className='scorelist'>
                    {highScores.map((players) => (
                        <li key={players.name}><p>Name: {players.name} --- {players.score}</p></li>

                    ))}

                </ul>
            </div>
            <div>
                <Link to="/"><button className='choice-btn' value="highscores">Start over</button></Link>
            </div>
        </div>

    )
};

export default HighScoreDisplay;