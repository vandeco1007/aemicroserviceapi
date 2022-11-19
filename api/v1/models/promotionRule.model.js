const mongoose = require('mongoose')
const ruleSchema = mongoose.Schema({
    url: String,
    functionnal: String
})

module.exports = mongoose.model('promotionRule',ruleSchema)