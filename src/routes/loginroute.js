const express=require('express');
const { LoginController } = require('../controllers/homeController');


const router=express.Router();
router.post('/login',LoginController)

module.exports=router;