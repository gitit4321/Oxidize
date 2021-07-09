//import './App.css';
import React from 'react'
import Choice from './Components/Choice'
import GameDiv from './Components/GameDiv'
import Instructions from './Components/Instructions'
import Title from './Components/Title'


function App() {
  return (
    <div className="App">
      <Title/>
      <Instructions/>
      <GameDiv/>
    </div>
  );
}

export default App;
