const express = require('express')
const router = express.Router()
const {
    bettinghistory
} = require('../controllers/bettinghistories.controller')

router
.route('/')
.get(bettinghistory)

module.exports = router
