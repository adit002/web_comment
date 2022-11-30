
const path = require('path');
const express = require('express')
const newsRouter = express.Router()
newsRouter.get('/', (req, res,next)=>{
   res.sendFile(path.join(__dirname,'../views/','index.html'));
});
module.exports = newsRouter 
