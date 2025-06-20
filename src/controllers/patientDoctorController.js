const { getAllPateintsOfDoctor, dischargePatientById } = require("../models/patientDoctorModel");

exports.getAllPatientsOfDoctor = async (req, res) => {
    const userId = req.session.userId;
    let patients = await getAllPateintsOfDoctor(userId);
    res.render("patientOfDoctor.ejs", { patients});
};

exports.getAllAdmmittedpatients=async(req,res)=>{
     const userId = req.session.userId;
    let patients = await getAllPateintsOfDoctor(userId);
    patients=patients.filter(patient=>patient.status==1);
    res.render("patientOfDoctor.ejs", { patients});
}

exports.getAllDischargepatients=async(req,res)=>{
     const userId = req.session.userId;
    let patients = await getAllPateintsOfDoctor(userId);
    patients=patients.filter(patient=>patient.status==0);
    res.render("patientOfDoctor.ejs", { patients});
}

exports.dischargePatient = async (req, res) => {
  try {
    const patientId = req.params.patientId;
    await dischargePatientById(patientId); // You’ll write this DB function
    res.redirect("/api/doctor/patients"); // Redirect back to the previous page
  } catch (error) {
    console.error('Error discharging patient:', error);
    res.status(500).send('Server Error');
  }
};