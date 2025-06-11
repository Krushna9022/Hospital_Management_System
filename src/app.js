const express=require('express')
const app=express();
const path=require("path");
app.set("view engine","ejs");


app.use(express.static(path.join(__dirname,"../public")));

const homerouter=require('./routes/homeRoutes')
app.set('view engine','ejs')
app.use('/',homerouter)

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
app.get("/patientform",(req,res)=>{
    res.render("patientform.ejs");
})
app.get("/admindashboard",(req,res)=>{
    res.render("admindashboard.ejs");
})
module.exports=app;
