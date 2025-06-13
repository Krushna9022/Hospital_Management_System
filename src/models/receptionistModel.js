const getConnection = require("../config/dbconfig");


exports.getAllReceptionist = async () => {
  const connection = await getConnection();
  try {
    const [rows] = await connection.query(`
      SELECT r.name, u.email, r.contact 
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



