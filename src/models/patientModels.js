const getConnection = require("../config/dbconfig");

exports.addPatient = async (patientData) => {
    const connection = await getConnection();

    const {
        name, age, contact, issue, admitted, gender, room_no, doctorId, nurseId
    } = patientData;

    try {
        const sql = `INSERT INTO patients  (name, age, contact, issue, admitted, gender, room_no, doctorId, nurseId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) `;

        await connection.query(sql, [
            name, age, contact, issue, admitted, gender, room_no, doctorId, nurseId
        ]);

        await connection.end();
    } catch (err) {
        await connection.end();
        throw err;
    }
};


exports.getAllPatients = async () => {
  const connection = await getConnection();
  try {
    const [rows] = await connection.query(`
      SELECT 
        p.*, 
        d.name AS doctorName, 
        n.name AS nurseName
      FROM 
        patients p
      LEFT JOIN doctors d ON p.doctorId = d.doctorId
      LEFT JOIN nurse n ON p.nurseId = n.nurseId
    `);
    await connection.end();
    //  console.log( rows)
    return rows;
  } catch (err) {
    await connection.end();
    throw err;
  }
};

