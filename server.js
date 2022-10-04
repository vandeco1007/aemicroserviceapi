const express = require('express')
const app = express()
const Router = require('./api/v1/routers')
const cookieParser = require('cookie-parser')
const connectDB = require('./api/v1/config/database')
const asyncHandler = require('./api/v1/middlewares/asynchandle.middleware')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(cookieParser())

asyncHandler(connectDB())
asyncHandler(Router(app))


app.get('/',(req,res,next)=>{
    res.render('index')
})

app.listen(5000, ()=>{
    console.log("Running at port 5000")
})