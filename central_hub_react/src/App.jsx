import { useState, useEffect } from 'react';
import './App.css';
import Hub from './components/Hub';



function App () {
  /*
    this will get an array passed to it, which then is set in a variable

    said array is the list of all games found on the respective directory,
    which is then turned into a JSON output and sent here
  */
  function receiveGameData (data) {
    //console.log("IN GAME FUNCTION");
    setGameArr(data);
  }

  /*
    if this isn't here, the window Electron makes cannot see this function
    and it will say the function does not exist when attempting to use it
    inside of the main.js file (what lets electron render react files)
  */
  window.receiveGameData = receiveGameData;

  /*
    it's set as a use state so the window doesn't refresh when adding data.

    if it does refresh, it also re-does the JS file and will just loop
    repeatedly until you close it as it re-scans the file system.

      *mostly because the react side of it runs regardless of Electrons
      status, resulting in react showing up before electron scans the files
      meaning the website end exists beforehand so the variable is already set
      up before it gets there. Meaning I cannot set the inital state of it
      to equal the passed array, and it has to be done at runtime, hence the
      function & useState portion.*
  */
  const [gameArr, setGameArr] = useState([]);
  console.log(gameArr);
  
  return <>
    {/* 
      appRoot is there because styling stuff, yes I know there is something
      already made that will change this, but I forgot it exists so I'm just
      leaving it this way, since it works without issues 
    */}
      <div className='appRoot'>
        <Hub games={gameArr}/>
      </div>
  </>
}

export default App
