const { saveUser } = require("../models/registerModel");

exports.registerUserController = async (req, res) => {
    let  {name, email, password, contact, role, specialization, experience } = req.body;
    console.log(role);
    
    console.log(req.body);
    if (role !== 'doctor') {
        specialization = '';
        experience = 0; // Or null if your DB allows
    } else {
        experience = parseInt(experience);
    }
    
    try {
        const result = await saveUser(name,email, password, contact, role, specialization, experience);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.render('admindashboard.ejs');
    }
};
