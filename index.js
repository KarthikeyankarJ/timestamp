const express = require("express")
const fs = require("fs")
const path = require("path")
const dirpath = path.join(__dirname, "timestamp");
const app= express()

console.log(dirpath)

app.get("/timestamp",(req, res)=>{
  let date = new Date();
const timeStampData = `Last Updated time: ${date.toUTCString().slice(0, -3)} (Indian Time)`;
fs.writeFileSync(`${dirpath}/current date-time.txt`, timeStampData, (err)=>{
  if(err){
    res.send({message:"error writting time stamp"})
  }
})
  res.sendFile(path.join(dirpath, "current date-time.txt"))
})

//localhost:9000/
app.listen(9000, ()=>console.log(`server started in Localhost:9000 
Open Postman and in GET Request : http://localhost:9000/timestamp  
This will create and display the current time`))