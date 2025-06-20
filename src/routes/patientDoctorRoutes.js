const e = require("express");
const { getAllPatientsOfDoctor, dischargePatient, getAllAdmmittedpatients, getAllDischargepatients } = require("../controllers/patientDoctorController");
const { isAuthenticated, authorizeRole } = require("../middlewares/auth");
const router=e.Router();

router.get('/patients',isAuthenticated,authorizeRole("doctor"),getAllPatientsOfDoctor);
router.post("/patient/discharge/:patientId",isAuthenticated,authorizeRole("doctor"), dischargePatient);
router.get("/patient/admitted",isAuthenticated,authorizeRole("doctor"),getAllAdmmittedpatients);
router.get("/patient/discharge",isAuthenticated,authorizeRole("doctor"),getAllDischargepatients);



module.exports=router;
