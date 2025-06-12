const express=require("express");
const router=express.Router();

const doctorCotroller=require("../controllers/doctorController");

router.get("/",doctorCotroller.Patientform)

module.exports=router;




