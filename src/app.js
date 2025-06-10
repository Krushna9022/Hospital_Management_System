const express=require('express')
const app=express();
const path=require("path");
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"../public")));


app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})
app.get("/register",(req,res)=>{
    res.render("register.ejs");
})

module.exports=app;
