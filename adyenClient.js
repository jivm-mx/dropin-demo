const {Client, CheckoutAPI, Types} = require ('@adyen/api-library');
require('dotenv').config();

const client = new Client({
    apiKey: process.env.API_KEY,
    environment: process.env.ENVIRONMENT || 'TEST',
});

const checkout = new CheckoutAPI(client);

module.exports = {checkout, Types};


