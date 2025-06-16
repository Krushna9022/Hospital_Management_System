const express=require("express");
const router=express.Router();
const doctorController=require("../controllers/DoctorController");

router.get("/viewDoctor",doctorController.viewDoctor);
router.get("/deleteDoctor/:userId",doctorController.deleteDoctorController);

router.get('/updatedoctor/:userId',doctorController.getUpdatedoctorpage);
router.post('/updatedoctors',doctorController.updateDoctor)
module.exports=router;