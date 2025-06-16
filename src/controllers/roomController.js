const { addnewRoon, viewAllRoom } = require("../models/roomModel");

exports.getAddRoomPage=async(req,res)=>{
    res.render('addnewRoom.ejs',{msg:""});
}
exports.addnewRoomcController=async(req,res)=>{
    const{roomno,type,charges,status}=req.body;
    let result=await addnewRoon(roomno,type,charges,status); 
    res.render("addnewRoom.ejs",{msg:result})
}
exports.viewRoomContoller=async(req,res)=>{
    let result= await viewAllRoom();
    console.log(result)
    res.render("viewRoom.ejs",{room:result})
}

exports.updateRoomStatus=async()=>{
    const {status}=req.body;
    await changeRoomStatus();
    
}