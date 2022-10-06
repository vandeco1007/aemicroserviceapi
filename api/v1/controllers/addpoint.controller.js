const authorization = require('../middlewares/authorization.middleware')
const axios = require('axios')

module.exports = {
    addpoint: async(req,res,next)=>{
    let authorize = await authorization()
    let {...body} = req.body
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

