// Import the MySQL connection
const getConnection = require("../config/dbconfig");

// Get all doctors with their user info
exports.getAllDoctor = async () => {
    const connection = await getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT d.doctorId, d.name, d.specialization, d.contact, u.email, d.experience ,d.userId
            FROM doctors d 
            JOIN user u ON d.userId = u.userId
        `);
        console.log(rows);
        return rows;
    } catch (err) {
        console.error("Error fetching doctors:", err.stack);
        throw err;
    } finally {
        await connection.end();
    }
};


exports.deleteDoctorById=async(id)=>{
    const connection =await getConnection();
    try{
        await connection.beginTransaction();
        await connection.query("delete from doctors where userId=?",[id])
        await connection.query("delete from user where userId=?",[id]);
        await connection.commit();

    }catch(err){

        await connection.rollback();
        throw err;
    }
    finally{
        await connection.end();
    }
}

exports.getdoctorById=async(id)=>{
  let sid=parseInt(id)
  const connection =await getConnection();
  try{
      const[row]=await connection.query("select d.userId,u.email,u.password,d.name,d.contact,d.experience,d.specialization from user u inner join doctors d on u.userId=d.userId where u.userId=?",[sid]);
      console.log(row); 
      return row;

  }catch(err)
  {
    throw err
  }
}

exports.updateDoctor = async (
  userId,
  name,
  email,
  contact,
  experience,
  specialization
) => {
  const connection = await getConnection();
  try {
    console.log(
      `model :- ${name} ${email} ${contact} ${userId} ${experience} ${specialization}`
    );
    await connection.beginTransaction();

    // ✅ Update only email in user table
    await connection.query(
      `UPDATE user
       SET email = ?
       WHERE userId = ?;`,
      [email, userId]
    );

    // ✅ Update doctor details in doctors table
    await connection.query(
      `UPDATE doctors
       SET name = ?, contact = ?, experience = ?, specialization = ?
       WHERE userId = ?;`,
      [name, contact, experience, specialization, userId]
    );

    await connection.commit();
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    await connection.end();
  }
};
