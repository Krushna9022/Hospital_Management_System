let conn=require("../config/dbconfig.js");

exports.savePatientform=(...patientdata)=>{

    conn.query("insert into patients values('0',?,?,?,?,?,?,?,?,?)",
        [...patientdata] ,
        (err,result)=>{
            if(err){
                console.log("sql insert error", err.sqlMessage)
            }
            else{
                console.log("data inserted ", result);
            }
        }
    );
        return true;
}
