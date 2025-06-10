const express=require('express')
const app=express();
const homerouter=require('./routes/homeRoutes')
app.set('view engine','ejs')
app.use('/',homerouter)



module.exports=app;
