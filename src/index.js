import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


document.addEventListener('keydown', (e) => {
  const keyPressed = e.key.toUpperCase();
  const audio = document.getElementById(keyPressed)
  if(audio){
      audio.currentTime= 0;
      audio.parentElement.classList.add("active");
      audio.play();

  const removeClass = () =>{
    audio.parentElement.classList.remove("active")
  }
  setTimeout(removeClass, 200);
  } 
  
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
