const express=require("express");
const router=express.Router();
const doctorController=require("../controllers/DoctorController");
const { isAuthenticated, authorizeRole } = require("../middlewares/auth");

router.get("/viewDoctors",isAuthenticated,authorizeRole("admin"), doctorController.viewDoctor);
router.get("/deleteDoctor/:userId",isAuthenticated,authorizeRole("admin"),doctorController.deleteDoctorController);
router.get('/updatedoctor/:userId',isAuthenticated,authorizeRole("admin"),doctorController.getUpdatedoctorpage);
router.post('/updatedoctors',isAuthenticated,authorizeRole("admin"),doctorController.updateDoctor)
module.exports=router;