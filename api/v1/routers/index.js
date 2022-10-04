const express = require('express')
const route = express.Router()
const accountrouter = require('./account.router')
const bettinghistory = require('./bettinghistory.router')

module.exports = (app)=>{
    app.use('/login', accountrouter)
    app.use('/bettinghistory',bettinghistory)
}