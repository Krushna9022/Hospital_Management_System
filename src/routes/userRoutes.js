const express=require('express');
const { LoginController } = require('../controllers/homeController');
const { registerUserController } = require('../controllers/RegisterController');



const router=express.Router();
router.post('/login',LoginController)
router.post('/registerUser',registerUserController)
module.exports=router;