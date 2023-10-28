const express = require("express");
const router = express.Router();
const data= require('../data.js');
const analytic= require('../analytic.js');



router.get("/data",(req,res)=>{
  

   return res.status(200).json({data});
   console.log(data);
});

router.get("/",(req,res)=>{
  

    // console.log(analytic);
   return res.status(200).json({analytic});
});

module.exports = router;