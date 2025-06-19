const { getAuthDetail } = require("../models/authModel");
const bcrypt=require('bcryptjs')

exports.HomePage=async(req,res)=>{
    res.render('Home.ejs')
}
exports.LoginController = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        console.log(req.body);

        // Admin login (static check)
        if (username === 'admin' && password === 'admin' && role === 'Admin') {
            req.session.userId='admin';
            req.session.role="admin";
            return res.render('admindashboard.ejs');
        }

        // Fetch user details from database or auth source

        const verify = await getAuthDetail(username);
        console.log(verify);
        
        if (!verify || verify.length === 0) {
            console.log("user not found");
            
            return res.redirect('/login');
        }

        const user = verify[0];
        req.session.userId=user.userId;
            req.session.role=user.role;
        

        // Check password
        // const match = await bcrypt.compareSync(password, user.password);
        // if (!match) {
        //     return res.send('Invalid credentials');
        // }

        // Role-based dashboard rendering
        if (user.role === 'receptionist') {
            console.log('Receptionist login');
            return res.render('receptionistdashboard.ejs');
        } else if (user.role === 'doctor') {
            console.log('Doctor login');
            return res.render('doctordashboard.ejs'); // Assuming a separate dashboard for doctors
        } else {
            return res.send('Unknown role');
        }

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).send('Internal server error');
    }
};




