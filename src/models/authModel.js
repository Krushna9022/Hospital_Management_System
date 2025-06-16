const getConnection = require("../config/dbconfig")

exports.getAuthDetail=async(username)=>{
    const connection=await getConnection();
    try{
        const[verify]=await connection.query("select * from user where email=?",[username]);
        console.log(verify);
        return verify;
    }catch(err)
    {
        throw err;
    }finally{
        await connection.end();
    }
}