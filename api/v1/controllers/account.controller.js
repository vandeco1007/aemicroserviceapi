const loginInfo = require('../models/login.model')
const axios = require('axios')


module.exports = {
    APIlogin: async(req, res, next) =>{
        let {...body} = req.body
        let data = body

        var config = {
            method: 'post',
            url: 'https://boapi.jun88.bet/jun88-ims/api/v1/login',
            headers: { 
            'Authorization': ' undefined', 
            'Content-Type': ' application/json;charset=UTF-8', 
            'Referer': ' https://bo.jun88.bet/', 
            'sec-ch-ua': ' "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"', 
            'sec-ch-ua-mobile': ' ?0', 
            'sec-ch-ua-platform': ' "Windows"', 
            'User-Agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
            },
            data : data
        };
        console.log(req.body)

        axios(config)
        .then(async (response)=> {
            // var createIndex = await loginInfo.create({username:body.userId},{token:result.data.token})
            var updateLogin = await loginInfo.findOneAndUpdate({username:body.userid},{token:response.data.token},{new:true})
            if(updateLogin==null){
                let createLogin = await loginInfo.create({username:body.userid,token:response.data.token})
                res.json(createLogin)
            }else{
                res.json(updateLogin)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    getAccount: async(req,res,next)=>{
        let account = await loginInfo.findOne().exec()
        res.json(account)
    }
}
