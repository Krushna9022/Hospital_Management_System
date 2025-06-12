let doctormodel=require("../models/doctorModel.js");

exports.Patientform=(req,res)=>{
    
      console.log("Received Body: ", req.body);
    let {name,age,contact,issue,admitted,discharge,room_no,doctorId,gender}=req.body;
    let result=doctormodel.savePatientform(name,age,contact,issue,admitted,discharge,room_no,doctorId,gender);
    console.log(result);
    res.send("data inserted");
    res.end();
}










// exports.Patientform=(req,rs)=>{
//     res.render("patientform.ejs");

// }
