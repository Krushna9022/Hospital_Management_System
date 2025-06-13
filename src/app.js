const express=require('express')
const app=express();
const path=require("path");
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use(express.static(path.join(__dirname,"../public")));
const userRoutes=require('./routes/userRoutes')

const homerouter=require('./routes/homeRoutes')
const patientRoutes=require('./routes/patientRouts');
const receptionRoutes=require('./routes/receptionistRoutes')


const doctorRoutes=require("./routes/doctorRoutes");

app.set('view engine','ejs')

app.use('/',homerouter)
app.use('/',userRoutes)
app.use("/",patientRoutes)
app.use('/api/admin/',receptionRoutes)
app.use("/",doctorRoutes)


app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.get("/register",(req,res)=>{
    res.render("register.ejs");
})

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})
app.get("/register",(req,res)=>{
    res.render("register.ejs");
})

module.exports=app;
