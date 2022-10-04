const express = require('express')
const router = express.Router()
const {
    APIlogin,
    getAccount
} = require('../controllers/account.controller')

router
.route('/')
.post(APIlogin)
.get(getAccount)

module.exports = router
