const mongoose = require('mongoose')
const loginSchema = mongoose.Schema({
    username: String,
    token: String
})

module.exports = mongoose.model("loginInfo", loginSchema)