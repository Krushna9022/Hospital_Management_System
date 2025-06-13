const express=require("express");
const router=express.Router();


const doctorController=require("../controllers/patientController");


router.post("/patientData",doctorController.Patientform);


module.exports=router;




