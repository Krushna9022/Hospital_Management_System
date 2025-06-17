const { saveUser } = require("../models/registerModel");
const bcrypt =require('bcryptjs');
exports.registerUserController = async (req, res) => {
    let  {name, email, password, contact, role, specialization, experience } = req.body;
    let hashpassword=await bcrypt.hashSync(password,10);
    console.log(role);
    
    console.log(req.body);
    if (role !== 'doctor') {
        specialization = '';
        experience = 0; // Or null if your DB allows
    } else {
        experience = parseInt(experience);
    }
    
    try {
        const result = await saveUser(name,email,hashpassword, contact, role, specialization, experience);
        res.render('admindashboard.ejs')
    } catch (err) {
        console.error(err);
        res.send(err)
        
    }
};
