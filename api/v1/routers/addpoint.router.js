const express = require('express')
const router = express.Router()
const {
    addpoint
} = require('../controllers/addpoint.controller')

router
.route('/')
.post(addpoint)

module.exports = router
