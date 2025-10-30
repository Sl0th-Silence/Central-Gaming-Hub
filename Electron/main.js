/* USE: "npm run start" TO LAUNCH THE APP ON PC */


const { app, BrowserWindow } = require('electron');

//creates a electron window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800
  })

  win.loadURL("http://localhost:5173/");
}

//renders a window when the program starts
app.whenReady().then(() => {
  createWindow()
})

app.on("window-all-closed", () => {
    app.quit();
})