const express = require('express')
const router = express.Router()
const {
    postRule,
    getRule
} = require('../controllers/promotionRule.controller')

router
.route('/')
.get(getRule)
.post(postRule)

module.exports = router
