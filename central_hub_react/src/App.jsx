import { useState, useEffect } from 'react';
import './App.css';
import Hub from './components/Hub';



function App () {
  //this will get an array passed to it, which then is set in a variable
  function receiveGameData (data) {
    console.log("IN GAME FUNCTION");
    setGameArr(data);
  }

  window.receiveGameData = receiveGameData;

  const [gameArr, setGameArr] = useState([]);
  console.log(gameArr);
  
  return (
    <>
      <Hub games={gameArr}/>
    </>
  )
}

export default App
