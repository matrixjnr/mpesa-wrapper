const {describe} = require('mocha');
const {expect} = require('chai');

const Mpesa = require('../src/index');

describe('Mpesa Class', () => {
    it("Get an access token", async () => {
        let mpesa = new Mpesa({
            consumer_key: "",
            consumer_secret: "",
            environment: "development"
        });
        
        access_token = await mpesa.getToken();
        let tkn = access_token;
        expect(tkn).to.be.a('string');
    });
});