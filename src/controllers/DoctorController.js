const doctorModels = require("../models/doctorModels");

exports.viewDoctor = async (req, res) => {
    try {
        let result = await doctorModels.getAllDoctor();
        // res.send(result)
        console.log(result);
        console.log("All doctors ");
        
       res.render("viewDoctor", { doctors: result });  
    //  use: res.json(result); 
    } catch (err) {
        res.status(500).send("Error fetching doctor data.");
    }
};



exports.deleteDoctorController=async (req,res)=>{

    const userId=parseInt(req.params.userId);
    await doctorModels.deleteDoctorById(userId)
    res.redirect("/api/admin/viewDoctor");
}

exports.getUpdatedoctorpage=async(req,res)=>{
     const { userId } =req.params;
     let doctor=await doctorModels.getdoctorById(userId)
        if(!doctor){ return res.status(404).send("doctor not found");}
          res.render("updateDoctor.ejs",{rec:doctor})
        // res.send(receptionist)
};

exports.updateDoctor=async(req,res)=>{
  const{userId,name,email,contact,experience,specialization}=req.body;
  console.log(req.body);
  
  await doctorModels.updateDoctor(userId,name,email,contact,experience,specialization);
  res.redirect('/api/admin/viewDoctor');
}