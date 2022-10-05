const authorization = require('../middlewares/authorization.middleware')
const axios = require('axios')

module.exports = {
    addpoint: async(req,res,next)=>{
        var data = '{"manualAdjustments":[{"playerid": "ceshi01","adjustamt": "1","turnovervalue": "1","removegwc": false,"servicefee": "1","adminfeeratio": "1","turnovertype": "0","ecremarks": "Tes2","remarks": "Tes1","reasontype": "2","manualtype": "1", "walletid": "MAIN"}],"sendmessage": true,messages": {"msgtype": "2","subject": "Test3","content": "<p>Test4</p>","players": "ceshi01"}}';
        var config = {
        method: 'post',
        url: 'https://boapi.jun88.bet/jun88-ims/api/v1/manualadjusts/batch',
        headers: { 
            'accept': ' */*', 
            'accept-encoding': ' gzip, deflate, br', 
            'accept-language': ' vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5', 
            'authorization': 'eyJhbGciOiJIUzI1NiJ9.ewogICJpYXQiIDogMTY2NDk3MDUzNiwKICAiZXhwIiA6IDE2NjQ5ODEzMzYsCiAgInVzZXJuYW1lIiA6ICJqdW44ODk5NiIsCiAgImVtYWlsIiA6IG51bGwsCiAgInJvbGUiIDogIiIsCiAgImV4dHJhIiA6ICJ7fSIsCiAgImlzb3AiIDogdHJ1ZQp9.PM9cw-2qjsJoQ3n1E77iCwm2TsE_fdSFjcu3LEud2rI', 
            'content-type': ' application/json;charset=UTF-8', 
            'origin': ' https://bo.jun88.bet', 
            'referer': ' https://bo.jun88.bet/'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}

