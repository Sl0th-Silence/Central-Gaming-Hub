/* USE: "npm run start" TO LAUNCH THE APP ON PC */

const { app, BrowserWindow, ipcMain } = require('electron');
const fileReader = require("fs");

const steamDIR = "C:/Program Files (x86)/Steam/steamapps/common";


//Checking for logos -Jay
const steamImageDIR = "C:/Program Files (x86)/Steam/appcache/librarycache/"
const steamImageArr = fileReader.readdirSync(steamImageDIR);
allImages = []

//For each folder, add the name at the end of the url
steamImageArr.forEach(item => {
    image = (steamImageDIR + item + "/header");
    if(image)
    {
      //Add to array
      allImages.push(image);
    }
});

const gameArr = fileReader.readdirSync(steamDIR);

//creates a electron window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    contextIsolation: false,
    nodeIntegration: false
  })

  win.loadURL("http://localhost:5173/");

  win.webContents.on("dom-ready", () => {
    console.log(gameArr);
    // /${JSON.stringify(gameArr)}
    win.webContents.executeJavaScript(`receiveGameData(${JSON.stringify(gameArr)})`);
    console.log("PAST JS EXECUTE");
  })
}

//renders a window when the program starts
app.whenReady().then(() => {
  createWindow()
})

app.on("window-all-closed", () => {
    app.quit();
})
