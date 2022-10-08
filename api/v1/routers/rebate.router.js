const express = require('express')
const router = express.Router()
const {
    rebate
} = require('../controllers/rebate.controller')

router
.route('/')
.get(rebate)

module.exports = router
