// Import the MySQL connection
const getConnection = require("../config/dbconfig");

// Get all doctors with their user info
exports.getAllDoctor = async () => {
    const connection = await getConnection();
    try {
        const [rows] = await connection.query(`
            SELECT d.doctorId, d.name, d.specialization, d.contact, u.email, d.experience 
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
