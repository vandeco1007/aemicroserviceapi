const loginInfo = require('../models/login.model')
const axios = require('axios')


module.exports = {
    test: async(req, res, next) =>{
        res.json({
            message:"This is new upto now"
        })
    }
}
