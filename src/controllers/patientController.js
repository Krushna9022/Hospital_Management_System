// doctorController.js
const doctorModels = require("../models/doctorModels");
let patientModel=require("../models/patientModels.js");

exports.Patientform=(req,res)=>{
    
      console.log("Received Body: ", req.body);
    let {name,age,contact,issue,admitted,discharge,room_no,doctorId,gender}=req.body;
    let result=patientModel.savePatientform(name,age,contact,issue,admitted,discharge,room_no,doctorId,gender);
    console.log(result);
    res.send("data inserted");
    res.end();
}







