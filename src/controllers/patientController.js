// patients .js

const { getAllDoctor } = require("../models/doctorModels");
const { viewNurse } = require("../models/nurseModel");
const { viewAllRoom } = require("../models/roomModel");
const { addPatient, getAllPatients } = require("../models/patientModels");


exports.addpatients=async(req,res)=>{
    const nurses=await viewNurse();
    const doctors=await getAllDoctor();
    const rooms=await viewAllRoom();
    console.log(rooms)
    res.render('patientform.ejs',{ doctors,
      nurses,
      rooms})
}

exports.addPatientController = async (req, res) => {
    try {
        const {
            name, age, contact, issue,
            admitted, discharge, gender,
            room_no, doctorId, nurseId
        } = req.body;
        console.log(req.body)

        await addPatient({
            name,
            age: parseInt(age),
            contact,
            issue,
            admitted,
            gender,
            room_no: parseInt(room_no),
            doctorId: parseInt(doctorId),
            nurseId: parseInt(nurseId)
        });

        res.redirect("/api/receptionist/patient/viewpatients");
    } catch (err) {
        console.error("Error adding patient:", err);
        res.status(500).send("Internal Server Error");
    }
};




exports.viewAllPatients = async (req, res) => {
  try {
    const patients = await getAllPatients();
    res.render('viewAllPatients.ejs', { patients:patients });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to load patients");
  }
};








