const express = require('express')
const router = express.Router()
const {
    manualadjusts
} = require('../controllers/manualadjusts.controller')

router
.route('/')
.get(manualadjusts)

module.exports = router
