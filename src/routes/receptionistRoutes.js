const express = require("express");
const { getAllReceptionController } = require("../controllers/receptionistController");


let router=express.Router();

router.get('/viewreceptionist',getAllReceptionController)
module.exports=router;