const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

const createdWindow = () =>{
    win = new BrowserWindow(
        {width:800,height:600, webPreferences: {        
                nodeIntegration: true
              }
        }
    );
   
    
    win.loadFile('index.html')
    win.on('close', ()=>{
        win = null
    })

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