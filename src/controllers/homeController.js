
exports.HomePage=(req,res)=>{
    res.render('Home.ejs')
}
exports.LoginController=async(req,res)=>{
    let {username,password,role}=req.body;
    console.log(req.body)
    if(username==='admin' && password==="admin" && role==="Admin")
    {
        res.render('admindashboard.ejs');
    }
}
