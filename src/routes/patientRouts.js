const express=require("express");
const { addpatients, addPatientController, viewAllPatients } = require("../controllers/patientController");
const { isAuthenticated, authorizeRole } = require("../middlewares/auth");
const router=express.Router();



router.get('/add',isAuthenticated,authorizeRole("receptionist"), addpatients)
router.post('/add',isAuthenticated,authorizeRole("receptionist"),addPatientController);
router.get('/viewpatients',isAuthenticated,authorizeRole("receptionist"),viewAllPatients);
module.exports=router;