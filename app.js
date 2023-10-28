const express = require('express');
const app=express();
const router= require("./routes/user-route");
const cors = require("cors");


app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
  res.json("hello world")
})

const PORT=8000;

app.listen(PORT,()=>{
  console.log("Server is running on",PORT)
})

app.use("/api",router);