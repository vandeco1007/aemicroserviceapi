const express = require('express')
const route = express.Router()
const accountrouter = require('./account.router')
const bettinghistory = require('./bettinghistory.router')
const playerReport = require('./playerreport.router')
const manualadjusts = require('./manualadjusts.router')
const addpoint = require('./addpoint.router')
const testrouter = require('./test.router')

module.exports = (app)=>{
    app.use('/login', accountrouter)
    app.use('/test', testrouter)
    app.use('/bettinghistory',bettinghistory)
    app.use('/playerreport',playerReport)
    app.use('/manualadjusts',manualadjusts)
    app.use('/addpoint',addpoint)
}