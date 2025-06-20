const getConnection = require("../config/dbconfig");

exports.addMedicine = async(patientId, medicineName, medicinePrice ) => {
  const connection=await getConnection();
  try{
      const sql = 'INSERT INTO medical (patientId, medicineName , medicine_price) VALUES (?, ?, ?)';
        await connection.query(sql,[patientId,medicineName,medicinePrice]);
        
  }catch(err){
    throw err;
  } 
};

exports.getMedicineList =async(pid) => {
   const connection=await getConnection();
   try{
      const [medicines]=await connection.query("select * from medical where patientId=?",[pid])
      return medicines;
   }catch(err){
    throw err;
   }
};