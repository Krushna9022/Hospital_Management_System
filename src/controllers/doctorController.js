// doctorController.js
const doctorModels = require("../models/doctorModels");

exports.viewDoctor = async (req, res) => {
    try {
        let result = await doctorModels.getAllDoctor();
        // res.send(result)
       res.render("viewdoctor", { doctors: result });  
    //  use: res.json(result); 
    } catch (err) {
        res.status(500).send("Error fetching doctor data.");
    }
};
