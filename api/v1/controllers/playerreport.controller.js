const authorization = require('../middlewares/authorization.middleware')
const axios = require('axios')

module.exports = {
    playerReport: async (req,res,next)=>{
        let authorize = await authorization()
        let{...paragam} = req.query
        let paragamValue = paragamItems(paragam)
        let baseurl = ['https://boapi.jun88.bet/jun88-ims/api/v1/reports/player/playerid?']
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
                'authorization': ' eyJhbGciOiJIUzI1NiJ9.ewogICJpYXQiIDogMTY2NTEwOTUwNywKICAiZXhwIiA6IDE2NjUxMjAzMDcsCiAgInVzZXJuYW1lIiA6ICJqdW44ODk5NiIsCiAgImVtYWlsIiA6IG51bGwsCiAgInJvbGUiIDogIiIsCiAgImV4dHJhIiA6ICJ7fSIsCiAgImlzb3AiIDogdHJ1ZQp9.1lyO9Wn5--9SubpoLNIywdeOyQRHr_BYjdAxD7Qjbf4', 
                'origin': ' https://bo.jun88.bet', 
                'referer': ' https://bo.jun88.bet', 
                'Cookie': '__cf_bm=razJAC8vofh2Z0UcwMdBGBZuGhPSR3x_hPYJangwSLg-1665125160-0-AU2nfDSt5MSPUQXPrSc/1txezGnk+8XnSRwHomV7fjBTD/vtv57IZhOELtjuo25PqyB1aefOONPGg9avQDUY7fo='
              }
        };

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

