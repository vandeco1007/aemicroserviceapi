const express = require('express')
const router = express.Router()
const {
    test
} = require('../controllers/test.controller')

router
.route('/')
.get(test)

module.exports = router
