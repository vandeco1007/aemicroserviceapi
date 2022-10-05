const authorization = require('../middlewares/authorization.middleware')
const axios = require('axios')

module.exports = {
    bettinghistory: async (req,res,next)=>{
        let authorize = await authorization()
        let{...paragam} = req.query
        let paragamValue = paragamItems(paragam)
        let baseurl = ['https://boapi.jun88.bet/jun88-ims/api/v1/reports/betting?']
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
                'origin': ' https://bo.moto88.org', 
                'referer': ' https://bo.moto88.org/', 
                'sec-ch-ua': ' "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"', 
                'sec-ch-ua-mobile': ' ?0', 
                'sec-ch-ua-platform': ' "Windows"', 
                'sec-fetch-dest': ' empty', 
                'sec-fetch-mode': ' cors', 
                'sec-fetch-site': ' same-site', 
                'user-agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36', 
                'Cookie': '__cf_bm=f9yaD39TR2tCjit6.9TNNGJKuhjXVZdJPu0c25aLv80-1664774049-0-AUGVy7MCWSkwDmAFax/3MhCEjwHqF9+NRr9+CH2vDzv8VFQA+5bP3dqbVTaisc078qK8/vRVU2CwhZbaT+LqPl8='
            }
        };
        console.log(config.url)

        axios(config)
        .then(function (response) {
            res.json(response.data)
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

