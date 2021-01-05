# mpesa-wrapper
A daraja mpesa API wrapper under development

## Getting an Access_token
```js

const Mpesa = require('mpesa-wrapper');

let mpesa = new Mpesa({
            consumer_key: "",
            consumer_secret: "",
            environment: "development"
        });
        
access_token = mpesa.getToken();

```

## License
MIT