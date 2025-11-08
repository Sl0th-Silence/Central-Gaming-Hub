/* USE: "npm run start" TO LAUNCH THE APP ON PC */

//electron importing
const { app, BrowserWindow } = require('electron');
//built-in file reading stuff with NodeJS
const fileReader = require("fs");
const path = require("path");

//the default steam directory, this will be changable at a later point (probably)
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
    allImages.push(image);
  }
  
});



//puling all the game data
const manifestDIR = path.join(steamDIR, "../");
const gameManifestArr = fileReader.readdirSync(manifestDIR);

let manifests = [];
gameManifestArr.map((file) => {
  if(file.includes("appmanifest_")){
    manifests.push(file);
  }
});

//console.log(manifests);

let manifestResult = manifests.map((manifest) => {
  return fileReader.readFileSync(manifestDIR + manifest, "utf-8");
});

//console.log(manifestResult);

//console.log(allImages);

//bascially the manifest stuff comes back as a big string, which I cannot use
//so now I get to deconstruct it into usable bits
const gameSplit = manifestResult.toString().split("\"");

//console.log(gameSplit);

//data used during the gameArr craetion
let idVal = 0;
let foundId = false;
let leftCol = "";
let prevInLeft = false;
let gameArrOut = [];
let gameArrFull = [];

//for loop because I am getting every other thing
for(let x = 0; x < gameSplit.length; x ++){
    //AppState is always at the top of the manifests, which means its a new game
    if(gameSplit[x] == "AppState"){
        //if its on AppState, and there is data already in the adding array...
        if(foundId){
            //add it to th efull array
            gameArrFull.push(gameArrOut);
            //clear it
            gameArrOut = [];
            //say that nothing has been found (this sets the appId up again)
            foundId = false;
        }
    }
    //if the spot currently selected is the appId...
    else if(gameSplit[x] == "appid"){
        //specifiy where it was found in the array
        idVal = x;
        //say that I found it now (this advances the search)
        foundId = true;

        /*
            this has to do with properties and values...

            so basically the data that is in the manifests are not orginized in a normal way,
            so I have to pull the properties and values out differently and set it up the 
            way that I want it later.

            in the case of appId, the property and values that it holds are sperated by 2
            spaces in the gamesplit list, hence the modulus below this point.
            If I do not specify that the 1st of the 2 values I want is a property definition, 
            it would be hard to figure out what is what, and there would be the potential for
            miss-alignment in the data.

            using the "prevInLeft" variable, I can specify what is the property and what is the
            value when I add them to the temporary output array, which *hopefully* removes the
            potential for data missalignment
        */
        prevInLeft = true;
        //this is used to go up in 2 later on 
        idVal = x;

        //as appId won't run the code below immediately (I want it that way), I am setting the
        //property up here instead
        leftCol = gameSplit[x];
    }
    //from the appId onwards it goes up in 2
    else if(foundId && x % 2 == 1 && x != 0){
        //if it was in the left already, so it has the property...
        if(prevInLeft){
            //it means we must be over the value instead, so add it to the output array as such
            gameArrOut.push({prop: leftCol, val: gameSplit[x]});

            //then specify the next value is a property
            prevInLeft = false;
            //and clear said property (not needed really)
            leftCol = "";
        }
        //otherwise, it must be on the property
        else{
            //so specify the next one to be a value
            prevInLeft = true;
            //and set up the property to be used later
            leftCol = gameSplit[x];
        }
    }
}
//there is excess not added due to loop limitations, which is added now:

//check the first spot of the array...
if(gameArrOut[0] != ""){
    //something is there, which means there is excess
    gameArrFull.push(gameArrOut);
}

//console.log(allImages);


const gameArr = gameArrFull.map((game) => {
    //making data
    let appId = game.find(prop => prop.prop === "appid").val
    return {
        id: appId,
        fileName: game.find(prop => prop.prop === "installdir").val,
        title: game.find(prop => prop.prop === "name").val,
        releaseDate: "TBD",
        developers: [
            "TBD",
            "TBD"
        ],
        //will need to filtered because it doesn't work for some reason that I can't figure out
        imgURL: allImages.map((image) => {
          if(image.toString().includes(`/${appId}/`)){
            //console.log(image)
            return image;
          }
        }).filter((img) => img != undefined)[0], 
        achievementCount: "TBD"
    }  
    
})

console.log(gameArr);



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
    //console.log(manifestResult[0]);
    win.webContents.executeJavaScript(`receieveGameData(${JSON.stringify(gameArr)})`);
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
