const express = require("express");
const { getAllReceptionController, deleteReceptionistController } = require("../controllers/receptionistController");


let router=express.Router();

router.get('/viewreceptionist',getAllReceptionController);
router.get('/deletereception/:userId', deleteReceptionistController);
module.exports=router;