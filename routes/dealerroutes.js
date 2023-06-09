const express = require('express')
const router = express.Router();
const dealerlogin = require('../controller/dealer');


router.get('/dealer',(req,res)=>{
    res.render('dealer')
})

router.get('/exit',(req,res)=>{
    res.render('login')
})

router.post('/dealerlogin',dealerlogin.dealerlogin)

router.get('/plan',dealerlogin.dealerbus)

router.get('/busdetails',(req,res)=>{
    res.render('dealerHome',{busdetails:true})
})

module.exports =router;
