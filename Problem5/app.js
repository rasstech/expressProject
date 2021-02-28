const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;

   fs.readFile('result.json','utf-8',(err,data)=>
   {
   const objData=JSON.parse(data)
   console.log(data)
   // console.log(objData)
   app.get("/student/studentsList",(req,res)=>{
      res.send(data);
   })
   })

app.listen(PORT,()=>{
   console.log("server running");
})

