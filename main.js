const {app, BrowserWindow} = require('electron')

function createWindow () {
  // Create the browser window.
const win = new BrowserWindow({
    width: 292,
    height: 430,
    resizable: false,
    maximizable: false,
    frame: false, //removes default os window framing i.e close button, minimize button
    transparent: false,
    webPreferences:{
        contextIsolation: true // for security reasons, isolates frontend code from Electron internal APIs and local file system. 
    }
});

    win.loadFile("index.html")
}

app.whenReady().then(createWindow);


/*
    It's saying if the OS is not MacOS, actually close it when the user closes it, don't run in the bgrnd like Mac apps do
*/
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
})
