const { getBillById, getAllBill } = require("../models/billModel")

exports.getAllBill=async(req,res)=>{
    try{
        let data=await getAllBill();
        // console.log(data)
        res.render("viewAllbill.ejs",{patients:data})
    }catch(err)
    {
        console.log(err.message);
        
        res.render("error")
    }
}

exports.getBillById=async(req,res)=>{
    try{
        let id=parseInt(req.params.id);
        console.log(id);
        
        let data=await getBillById(id)
        res.render("generateBill.ejs",{patient:data[0]});

    }catch(err)
    {
        res.render("error")
    }
}