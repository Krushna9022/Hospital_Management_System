const getConnection = require("../config/dbconfig");

exports.addNurse=async(name,contact,shift,)=>{
    let connection =await getConnection();
    try{
        connection.query(`insert into nurse (name,contact,shift) values(?,?,?)`,[name,contact,shift]);
    }catch(err)
    {
        throw err;
    }
}

exports.viewNurse=async()=>{
    let connection =await getConnection();
    try{
        const[nurses]= await connection.query("select * from nurse");
        // console.log(nurses)
        return nurses;
    }catch(err)
    {
        throw err;
    }
}

exports.deleteNurseById=async(id)=>{
    // console.log(id);
    let did=parseInt(id)
    let connection=await getConnection();
    try{
        await connection.query('delete from nurse where nurseId=?',[did]);
        await connection.end();

    }catch(err)
    {
        throw err;
    }
}
exports.getNurseById=async(id)=>{
     let did=parseInt(id)
    let connection=await getConnection();
    try{
       const [result]= await connection.query('select * from nurse where nurseId=   ?',[did]);
       return result;
        await connection.end();

    }catch(err)
    {
        throw err;
    }
}

exports.updateNurseById=async(id,name,contact,shift)=>{
     let did=parseInt(id)
    //  console.log(did+" "+typeof(did));
     
    let connection=await getConnection();
    try{
        await connection.query('update nurse set name=?,contact=?,shift=?where nurseId=?',[name,contact,shift,did]);
        await connection.end();

    }catch(err)
    {
        throw err;
    }
}

