const express = require('express')
const app = express()
const Router = require('./api/v1/routers')
const cookieParser = require('cookie-parser')
const connectDB = require('./api/v1/config/database')
const asyncHandler = require('./api/v1/middlewares/asynchandle.middleware')
const hostname = "14.225.205.154"
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.set('views', './api/v1/views')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cookieParser())

asyncHandler(connectDB())
asyncHandler(Router(app))


app.get('/',(req,res,next)=>{
    res.render('index')
})

app.listen(port, hostname, ()=>{
    console.log("App's running at port 3000")
})

