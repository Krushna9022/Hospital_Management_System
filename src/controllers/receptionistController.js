const receptionmodel = require("../models/receptionistModel");

exports.getAllReceptionController=async(req,res)=>{
    const result= await receptionmodel.getAllReceptionist();

    res.render("viewReceptions.ejs",{r:result});
}


exports.deleteReceptionistController = async (req, res) => {
  const userId = parseInt(req.params.userId);
  await receptionmodel.deleteReceptionById(userId)
  res.redirect('/api/admin/viewreceptionist')
}