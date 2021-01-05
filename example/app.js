//my mpesa app

const Mpesa = require('../src/index');

let mpesa = new Mpesa({
    consumer_key: "",
    consumer_secret: "",
    environment: "development"
});

//store your access token use async await to retrieve your access token

token = async => {
    access_token = mpesa.getToken();

    return access_token;
}

console.log(token);