const receptionmodel = require("../models/receptionistModel");
exports.getAllReceptionController=async(req,res)=>{
    const result= await receptionmodel.getAllReceptionist();

    res.render("viewReceptions.ejs",{r:result});
}
exports.getUpdateReceptionpage=async(req,res)=>{
     const { userId } =req.params;
     let receptionist=await receptionmodel.getreceptionistById(userId)
        if(!receptionist){ return res.status(404).send("Receptionist not found");}
          res.render("updateReceptionist.ejs",{rec:receptionist})
        // res.send(receptionist)
}


exports.deleteReceptionistController = async (req, res) => {
  const userId = parseInt(req.params.userId);
  await receptionmodel.deleteReceptionById(userId)
  res.redirect('/api/admin/viewreceptionist')
}

exports.updateReceptionist=async(req,res)=>{
  const{userId,name,email,contact}=req.body;
  console.log(req.body);
  
  await receptionmodel.updateReceptionist(userId,name,email,contact);
  
  res.redirect('/api/admin/viewreceptionist')
}