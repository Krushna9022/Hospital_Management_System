const getConnection = require("../config/dbconfig")

exports.addnewRoon=async(roomno,type,charges,status)=>{
    const connection=await getConnection();
    try{
        await connection.query("insert into room values(?,?,?,?)",[roomno,type,charges,status]);
        return "added sucessfully";

    }catch(err)
    {
        throw err;
    }finally{
        await connection.end();
    }

}

exports.viewAllRoom=async(req,res)=>{
    const connection=await getConnection();
    try{
        const [rooms]=await connection.query("select * from room");
        return rooms;

    }catch(err)
    {
        throw err;
    }finally{
        await connection.end();
    }

}