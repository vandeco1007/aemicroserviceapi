const promotionRule = require('../models/promotionRule.model')


module.exports = {
    postRule: async(req, res, next) =>{
        let {...body} = req.body
        let addRule = await promotionRule.create(body)
        res.json(addRule)
    },
    getRule: async(req, res, next) =>{
        let getRule = await promotionRule.find()
        res.json(getRule[0].functionnal)
    }
}
    