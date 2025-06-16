const express = require("express");
const { getAddRoomPage, addnewRoomcController, viewRoomContoller } = require("../controllers/roomController");


const router=express.Router();

router.get("/add",getAddRoomPage);
router.post("/add",addnewRoomcController)
router.get('/viewrooms',viewRoomContoller);
module.exports=router;
