const mysql = require('mysql2/promise');
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

const getConnection=async()=>{

  try{
return await mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
  });
}catch(err)
{
  console.log(err);
}
}

// getConnection();

module.exports = getConnection;