const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;
let winChild;
const createdWindow = () =>{
    win = new BrowserWindow(
        {
            webPreferences: {        
                nodeIntegration: true
              }
        }
    );
    winChild= new BrowserWindow()
    winChild.loadURL('https://www.youtube.com')
    
    win.loadFile('index.html')
    win.on('close', ()=>{
        win = null
    })
// win.loadURL('https://www.youtube.com/')
}

app.on('ready',createdWindow)
app.on('will-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate',() =>{
    if(win === null){
        createWindow()
    }
})