const authorization = require('../middlewares/authorization.middleware')
const axios = require('axios')

module.exports = {
    rebate: async (req,res,next)=>{
        let authorize = await authorization()
        let{...paragam} = req.query
        let paragamValue = paragamItems(paragam)
        let baseurl = ['https://boapi.jun88.bet/jun88-ims/api/v1/newGameRebates/history?']
        for (const val of Object.values(paragamValue)) {
            baseurl[0]+=val
        }
        baseurl[0]+='&zoneType=ASIA_SHANGHAI'
        console.log(authorize)
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
                'Cookie': '__cf_bm=CMUAD5IWvsKadYtq0q4.b5Q_4KWehL7tm82l2DHJ67w-1665150796-0-AQREhV4wCZYDT/V1PB/2x/5ulvQW7Mlg8YZlX/Wpn2Oeu3B0XftOQkxMAENNv4028sctuE7KHnuI4QUCU/sjMMg='
              }
        };

        axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            res.json(error);
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

