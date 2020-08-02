const fs = require('fs')
const path =  require('path')
btnCreate = document.getElementById('btnCreate')
btnRead = document.getElementById('btnRead')
bntDelete = document.getElementById('btnDelete')
fileName = document.getElementById('fileName')
fileContents = document.getElementById('fileContents')


let pathName = path.join(__dirname,'Files')
btnCreate.addEventListener('click',()=>{
    let file = path.join(pathName,fileName.value)
    let contents = fileContents.value
    fs.writeFile(file,contents,(err)=>{
        if(err){
            return console.log(err);
        }
        console.log("The file has saved...");

    })
})

btnRead.addEventListener('click',()=>{
    let file = path.join(pathName,fileName.value)
    fs.readFile(file,(err,data)=>{
        if(err){
            console.log(err);
        }
        fileContents.value = data
        console.log('The file was read..');
    })
})
bntDelete.addEventListener('click',()=>{
    let file = path.join(pathName,fileName.value)
    fs.unlink(file,(err)=>{
        if(err){
            console.log(err);
        }
        fileName.value = '';
        fileContents.value = '';
        console.log('the file was deleted');
    })
})