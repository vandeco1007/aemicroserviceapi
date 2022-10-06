const authorization = require('../middlewares/authorization.middleware')
const axios = require('axios');
const e = require('express');

module.exports = {
    manualadjusts: async (req,res,next)=>{
        let authorize = await authorization()
        let{...paragam} = req.query
        let paragamValue = paragamItems(paragam)
        let baseurl = ['https://boapi.jun88.bet/jun88-ims/api/v1/manualadjusts?']
        for (const val of Object.values(paragamValue)) {
            baseurl[0]+=val
        }
        baseurl[0]+='&zoneType=ASIA_SHANGHAI'
        console.log(authorize)
        console.log(baseurl[0])
        var config = {
          method: 'get',
          url: baseurl[0],
          headers: { 
            'accept': ' */*', 
            'accept-encoding': ' gzip, deflate, br', 
            'accept-language': ' vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5', 
            'authorization': authorize, 
            'origin': ' https://bo.jun88.bet', 
            'referer': ' https://bo.jun88.bet/', 
            'sec-ch-ua': ' "Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"', 
            'sec-ch-ua-mobile': ' ?0', 
            'sec-ch-ua-platform': ' "Windows"', 
            'sec-fetch-dest': ' empty', 
            'sec-fetch-mode': ' cors', 
            'sec-fetch-site': ' same-site', 
            'user-agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36', 
            'Cookie': '__cf_bm=rCsKFQzjIii.fVPrEWYQlcEYnNrVVOgpLNmJoYBkXEE-1665034969-0-AQ3gMUv6yIG3Gr32dym0G1eFrE/PgUD0aZ270DmdIBSL9cREYn/DXqXY+hoKhRk9pvyXdMmjvd3a+y4kLoqbXXc='
          }
        };
        
        axios(config)
        .then(function (response) {
            res.json(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }
}

function paragamItems(paragam){
    let object = {}
    Object.keys(paragam).forEach((elm)=>{
      object[elm] = ('&'+elm+"="+paragam[elm])
    })
    return object
}



