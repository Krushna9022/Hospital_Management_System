const getConnection = require("../config/dbconfig")

exports.getAllBill = async () => {
    const connection = await getConnection();
    try {
        const [billdetail] = await connection.query("select p.* ,b.* from patients p inner join bill b on b.patientId=p.patientId");
        console.log(billdetail);
        // await connection.end();
        // console.log(billdetail)
        return billdetail;
    } catch (err) {
         console.log(err)
        throw err;
       
    }
}

exports.getBillById = async (id) => {
    const connection = await getConnection();
    try {
        console.log("ID"+ id)
        const [billdetail] = await connection.query("select p.* ,b.* from patients p inner join bill b on b.patientId=p.patientId where p.patientId=? and p.status=0",[id]);
        console.log(billdetail);
        await connection.end();
        return billdetail;
    } catch (err) {
        throw err;
    }
}