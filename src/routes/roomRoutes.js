const express = require("express");
const { getAddRoomPage, addnewRoomcController, viewRoomContoller } = require("../controllers/roomController");
const { isAuthenticated, authorizeRole } = require("../middlewares/auth");


const router=express.Router();

router.get("/add",isAuthenticated,authorizeRole("receptionist"), getAddRoomPage);
router.post("/add",authorizeRole("receptionist"),addnewRoomcController)
router.get('/viewrooms',authorizeRole("receptionist"),viewRoomContoller);
module.exports=router;
