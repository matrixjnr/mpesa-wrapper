const fetch = require('isomorphic-unfetch');


class Mpesa{
    constructor(config){
        this.consumer_key = config.consumer_key;
        this.consumer_secret = config.consumer_secret;
        if(this.environment == 'production'){
            this.base_url = "https://production.safaricom.co.ke";
        } else {
            this.base_url = "https://sandbox.safaricom.co.ke";
        }
    }


    getToken(){
        let auth = "Basic " + new Buffer.from(this.consumer_key + ":" + this.consumer_secret).toString("base64");
        let url = this.base_url + "/oauth/v1/generate?grant_type=client_credentials";


        return fetch(url, {
                headers:  {
                    Authorization: auth
                }
            }).then(
                r => {
                    return r.json().then(data => {
                        return data.access_token;
                    });
                }).catch(e => {
                    return e;
                });
    }
}

module.exports = Mpesa;