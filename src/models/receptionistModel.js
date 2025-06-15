const getConnection = require("../config/dbconfig");


exports.getAllReceptionist = async () => {
  const connection = await getConnection();
  try {
    const [rows] = await connection.query(`
      SELECT r.userId,r.name, u.email, r.contact 
      FROM user u 
      INNER JOIN receptionist r ON u.userId = r.userId
    `);
    return rows;
  } catch (err) {
    console.error("Error fetching receptionists:", err);
    throw err;
  } finally {
    await connection.end(); // Close the connection
  }
};

exports.deleteReceptionById=async(id)=>{
  const connection=await getConnection();
  try{
    await connection.beginTransaction();
    await connection.query("delete from receptionist where userId=?",[id])
    await connection.query("delete from user where userId=?",[id])
    await connection.commit();
  }catch(err)
  {
    await connection.rollback();
    throw err;
  }
  finally{
    await connection.end();
  }
}
 
exports.getreceptionistById=async(id)=>{
  let sid=parseInt(id)
  const connection =await getConnection();
  try{
      const[row]=await connection.query("select r.userId,u.email,u.password,r.name,r.contact from user u inner join receptionist r on u.userId=r.userId where u.userId=?",[sid]);
      console.log(row); 
      return row;

  }catch(err)
  {
    throw err
  }
}

exports.updateReceptionist=async(userId,name,email,contact)=>{
  const connection=await getConnection();
  try{
    console.log(` model :- ${name} ${email} ${contact} ${userId}`)
    await connection.beginTransaction();
    await connection.query("update user set email=? where userId=?",[email,userId]);
    await connection.query("update receptionist set name=?,contact=? where userId=?",[name,contact,userId])
    await connection.commit();
  }catch(err)
  {
    await connection.rollback();
    throw err;
  }finally{
    await connection.end();
  }
}