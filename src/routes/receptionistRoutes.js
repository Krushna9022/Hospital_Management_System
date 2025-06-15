const express = require("express");
const { getAllReceptionController, deleteReceptionistController, getUpdateReceptionpage, updateReceptionist } = require("../controllers/receptionistController");


let router=express.Router();

router.get('/viewreceptionist',getAllReceptionController);
router.get('/deletereception/:userId', deleteReceptionistController);
router.get('/updatereception/:userId',getUpdateReceptionpage);
router.post('/updatereceptionist',updateReceptionist)
module.exports=router;