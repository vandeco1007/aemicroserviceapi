const express = require('express')
const route = express.Router()
const accountrouter = require('./account.router')
const bettinghistory = require('./bettinghistory.router')
const testrouter = require('./test.router')

module.exports = (app)=>{
    app.use('/login', accountrouter)
    app.use('/test', testrouter)
    app.use('/bettinghistory',bettinghistory)
}