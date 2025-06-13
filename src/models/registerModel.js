const getConnection = require("../config/dbconfig");

exports.saveUser = async (name,email, password, contact, role, specialization, experience) => {
    const connection = await getConnection();
    try {
        await connection.beginTransaction();
        console.log(role)
        // Step 1: Insert into user table
        const insertUserQuery = "INSERT INTO user (email, password, role) VALUES (?, ?, ?)";
       const [ result1]=await connection.query(insertUserQuery, [email, password, role])
       // console.log(result1)
        const userId=result1.insertId;
        // Step 2: Insert into role-specific table
        if (role === 'doctor') {
            const insertDoctorQuery = "INSERT INTO doctors (name,specialization, experience,userId) VALUES (?, ?,?,?)";
            await connection.query(insertDoctorQuery, [name,specialization, experience,userId]);
        } else if (role==='receptionist') {
            const insertReceptionistQuery = "INSERT INTO receptionist ( name,contact,userId) VALUES (?,?,?)";
            await connection.query(insertReceptionistQuery, [ name,contact,userId]);
        }
        //nurse need login in future
        // else if(role=='nurse'){
        //     const insertReceptionistQuery = "INSERT INTO nurse ( name,contact,userId) VALUES (?,?,?)";
        //     await connection.query(insertReceptionistQuery, [ name,contact,userId]);
        // }

        await connection.commit();
        return { success: true, message: `${role} registered successfully.` };
    } catch (err) {
        await connection.rollback();
        throw err;
    } finally {
        await connection.end();
    }
};
