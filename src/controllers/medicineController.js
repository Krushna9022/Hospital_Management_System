const { addMedicine, getMedicineList } = require("../models/medicineModel");

exports.medicinepage=async(req,res)=>{
let  patientId=req.params.id;
patientId=parseInt(patientId)
console.log(patientId);

    const medicines=await getMedicineList(patientId);
    console.log(medicines);
    
    res.render("addmedicinepage.ejs",{medicines,patientId})
}


exports.addMedicne = async(req, res) => {
  const { patientId, medicineName, medicinePrice } = req.body;
 await addMedicine(patientId,medicineName,medicinePrice);
 
  res.redirect(`/api/doctor/medicines/${patientId}`);
};



