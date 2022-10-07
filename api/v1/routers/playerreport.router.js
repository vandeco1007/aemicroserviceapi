const express = require('express')
const router = express.Router()
const {
    playerReport
} = require('../controllers/playerreport.controller')

router
.route('/')
.get(playerReport)

module.exports = router
