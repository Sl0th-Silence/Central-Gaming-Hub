/* USE: "npm run start" TO LAUNCH THE APP ON PC */

//electron importing
const { app, BrowserWindow } = require('electron');
//built-in file reading stuff with NodeJS
const fileReader = require("fs");

//the default steam directory, this will be changable at a later point (probably)
const steamDIR = "C:/Program Files (x86)/Steam/steamapps/common";

//this pulls each of the respective folder names out of the specified directory
const gameArr = fileReader.readdirSync(steamDIR);

//creates a electron window
const createWindow = () => {
  //browser window makes a desktop application with the chromium backend
  const win = new BrowserWindow({
    //default bounds of the window, this can be changed by the use after it opens
    width: 1500,
    height: 1100,
    //this needs to be tunred off to send stuff between this JS file and react
    contextIsolation: false,
    nodeIntegration: false
  })

  /* 
    loadURL renders a web address into the element window, which was made above

    **LOCALHOST IS THE DEFAULT STUFF REACT USES, WILL BE CHANGED TO A SERVER ADDRESS LATER**
  */
  win.loadURL("http://localhost:5173/");

  /*
    this awaits the webcontent to be fully rendered into the window before doing anything...

    dom-ready is responsible for that, it returns true when the webpage has everything loaded,
    this then runs the callback function that...
      executes the JS function created in App.jsx that updates the gameArr with the data given

      the data that is passed into said JS function is the list of game folders found inside of
      the directory specified above, however the function cannot take raw JSON stuff because some
      limitations that I am not 100% familiar with, so the JSON.stringify is used to make it into
      a string that I can actually pass between the 2 files using this function
  */
  win.webContents.on("dom-ready", () => {
    //console.log(gameArr);
    // /${JSON.stringify(gameArr)}
    win.webContents.executeJavaScript(`receiveGameData(${JSON.stringify(gameArr)})`);
    //console.log("PAST JS EXECUTE");
  })
}

//renders a window when the program starts
app.whenReady().then(() => {
  createWindow()
})

//when you close the window (hit the x to close) it also stops the electron script
app.on("window-all-closed", () => {
    app.quit();
})
