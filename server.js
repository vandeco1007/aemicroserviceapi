const express = require('express')
const app = express()
const Router = require('./api/v1/routers')
const cookieParser = require('cookie-parser')
const connectDB = require('./api/v1/config/database')
const asyncHandler = require('./api/v1/middlewares/asynchandle.middleware')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.set('views', './api/v1/views')
app.use(cookieParser())

asyncHandler(connectDB())
asyncHandler(Router(app))


app.get('/',(req,res,next)=>{
    res.render('index')
})

app.listen(3000, ()=>{
    console.log("App's running at port 3000")
})

// 10.19.0~dfsg-3ubuntu1