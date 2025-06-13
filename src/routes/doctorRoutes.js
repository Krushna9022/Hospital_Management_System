const express=require("express");

const router=express.Router();
const doctorController=require("../controllers/doctorController");

router.get("/viewDoctor",doctorController.viewDoctor);

module.exports=router;