const authorization = require('../middlewares/authorization.middleware')
const axios = require('axios')

module.exports = {
    addpoint: async(req,res,next)=>{
    let authorize = await authorization()
    let {...body} = req.body
    // var data = '{\r\n  "manualAdjustments": [\r\n    {\r\n      "playerid": "ceshi01",\r\n      "adjustamt": "1",\r\n      "turnovervalue": "1",\r\n      "removegwc": false,\r\n      "servicefee": "1",\r\n      "adminfeeratio": "1",\r\n      "turnovertype": "0",\r\n      "ecremarks": "Tes2",\r\n      "remarks": "Tes1",\r\n      "reasontype": "2",\r\n      "manualtype": "1",\r\n      "walletid": "MAIN"\r\n    }\r\n  ],\r\n  "sendmessage": true,\r\n  "messages": {\r\n    "msgtype": "2",\r\n    "subject": "Test3",\r\n    "content": "<p>Test4</p>",\r\n    "players": "ceshi01"\r\n  }\r\n}';
    
    var config = {
      method: 'post',
      url: 'https://boapi.jun88.bet/jun88-ims/api/v1/manualadjusts/batch',
      headers: { 
        'accept': ' */*', 
        'accept-encoding': ' gzip, deflate, br', 
        'accept-language': ' vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5', 
        'authorization': authorize, 
        'content-type': ' application/json;charset=UTF-8', 
        'origin': ' https://bo.jun88.bet', 
        'referer': ' https://bo.jun88.bet/'
      },
      data : body
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

