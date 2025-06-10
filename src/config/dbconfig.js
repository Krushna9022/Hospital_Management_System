const mysql=require('mysql2')
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });


console.log(process.env.DB_HOST);

const conn=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

conn.connect((err)=>{
    if(err)
    {
        console.log("not  connected "+err);
        
    }else{
        console.log('connected.....')
    }
})

module.exports=conn;