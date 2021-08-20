import './App.css';
import React from 'react'
import Choice from './Components/Choice'
import GameDiv from './Components/GameDiv'
import Instructions from './Components/Instructions'
import LightGame from './Components/LightGame'
import Title from './Components/Title'
import { Route, Switch } from 'react-router-dom'
import HighScoreDisplay from './Components/HighScoreDisplay';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true}>
          <Title />
          <Instructions />
          <GameDiv />
        </Route>
        <Route path='/highscores'>
          <HighScoreDisplay></HighScoreDisplay>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
