const request = require('request')
const news = (callback) => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-13&sortBy=publishedAt&apiKey=b9c30c84049b484d87cc641ce7c652dd'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect news service!', undefined)
        }
        else if(response.code=="apiKeyInvalid"){
            callback( response.body.message,undefined)
        }
        else{
            callback(undefined,
                response.body.articles    )
        }
    }) 
    }
    
module.exports=news
