const express = require('express')
const router = express.Router();


router.get('/home',(req,res)=>{
    res.render('home')
})

router.get('/exit',(req,res)=>{
    res.render('login')
})

module.exports =router;