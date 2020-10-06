import React from 'react';
import './App.css';
import Box from './components/Box'

const sounds = [
  {
    letter: 'Q',
    id: 'Heater-1',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    letter: 'W',
    id: 'Heater-2',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    letter: 'E',
    id: 'Heater-3',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    letter: 'A',
    id: 'Heater-4',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    letter: 'S',
    id: 'Clap',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    letter: 'D',
    id: 'Open-HH',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    letter: 'Z',
    id: "Kick-n'-Hat",
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    letter: 'X',
    id: 'Kick',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    letter: 'C',
    id: 'Closed-HH',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'

  }

]


const App = () => {
  return (
    <div className="App" id="drum-machine">
       <h1 className="title">The Drum Pad</h1>
      <div id="dispay" className="display">
        <div className="displayer">
            Play a Sound
        </div>
        {sounds.map(function(item, index){
          return (
            <Box key={index} text={item["letter"]} audio={item['sound']} display={item['id']}/>
          )
        })}
      </div>
    </div>
  );
}


export default App;
