const { addNurse, viewNurse, deleteNurse, deleteNurseById, getNurseById, updateNurseById } = require("../models/nurseModel");

exports.getaddNursePage=async(req,res)=>{
    res.render("addnurse.ejs",{msg:""})
}

exports.addNurse=async(req,res)=>{
    const{name,contact,shift}=req.body;
    // console.log(req.body)
    await addNurse(name,contact,shift);
    res.render("addnurse.ejs",{msg:"Nurse added sucessfully"})

}

exports.viewNurse=async(req,res)=>{
    const nurse=await viewNurse(); 
    // res.send(nurse)
    res.render('viewnurse.ejs',{nurses:nurse})
}
exports.deleteNurse=async(req,res)=>{
    const id=req.params.id;
    console.log(req.params);
    
    await deleteNurseById(id)
    res.redirect('/api/receptionist/viewnurse')
}

exports.getNurseUpdatePage=async(req,res)=>{
    let result=await getNurseById(req.params.id);
    res.render("updateNurse.ejs",{nurse:result})
}
exports.updateNurse=async(req,res)=>{
    const{nurseId,name,contact,shift}=req.body;
    await updateNurseById(nurseId,name,contact,shift);
    res.redirect('/api/receptionist/viewnurse')
}
