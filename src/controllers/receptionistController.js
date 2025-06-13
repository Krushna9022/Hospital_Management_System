const receptionmodel = require("../models/receptionistModel");

exports.getAllReceptionController=async(req,res)=>{
    const result= await receptionmodel.getAllReceptionist();

    res.render("viewReceptions.ejs",{r:result});
}