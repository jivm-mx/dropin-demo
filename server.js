const express = require('express');
const {checkout, Types} = require('./adyenClient.js');
const {v4: uuidv4} = require('uuid');
const { Amount } = require('@adyen/api-library/lib/src/typings/checkout/amount');
const { MerchantAccount } = require('@adyen/api-library/lib/src/typings/terminalManagement/merchantAccount');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/api/sessions', async(req, res)=>{
    /** @type {Types.checkout.CreateCheckoutSessionRequest} */
    const sessionRequest = {
        amount: {
            currency: 'MXN',
            value: 1000

        },
        merchantAccount: process.env.MERCHANT_ACCOUNT,
        reference: uuidv4(),
        returnUrl: `http://localhost:8080/${reference}`
    }



    try{
        const response = await checkout.PaymentsApi.sessions(sessionRequest);
        res.json(response);
    }catch(err){
        console.error(`Something went wrong ${err.message}`);
    }
});

app.listen(8080, ()=> console.log('Server running'));
