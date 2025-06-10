const express=require('express')
const app=express();
app.set("view engine","ejs");



app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})
module.exports=app;
