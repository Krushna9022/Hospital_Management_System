const { connect } = require('../app');
const getConnection=require('../config/dbconfig')
exports.getAllPateintsOfDoctor=async(id)=>{
    const connection =await getConnection();

    try{
        const [patients]=await connection.query("select p.*,   n.name AS nurseName from doctors d inner join patients p on p.doctorId=d.doctorId inner join nurse n on n.nurseId=p.nurseId where d.userId=?",[id])
        await connection.end();
        // console.log(patients)
        return patients;

    }catch(err){
        throw err;
    }
}

exports.dischargePatientById = async (patientId) => {
    const connection=await getConnection();
    try{
         const query = 'UPDATE patients SET status = 0 WHERE patientId = ?';
        await connection.query(query,[patientId])
         await connection.end();
    }catch(err)
    {
        throw err;
    }
 
  
}