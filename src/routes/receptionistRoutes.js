const express = require("express");
const { getAllReceptionController, deleteReceptionistController, getUpdateReceptionpage, updateReceptionist } = require("../controllers/receptionistController");
const { isAuthenticated, authorizeRole } = require("../middlewares/auth");


let router=express.Router();

router.get('/viewreceptionist',isAuthenticated,authorizeRole("admin"), getAllReceptionController);
router.get('/deletereception/:userId',isAuthenticated,authorizeRole("admin"), deleteReceptionistController);
router.get('/updatereception/:userId', isAuthenticated,authorizeRole("admin"),getUpdateReceptionpage);
router.post('/updatereceptionist',isAuthenticated,authorizeRole("admin"), updateReceptionist)
module.exports=router;