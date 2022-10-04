const loginInfo = require('../models/login.model')
module.exports = async function(){
    let token = await loginInfo.findOne().exec()
    return token.token
}