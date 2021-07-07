/** @format */


//internal dependencise
const { currencyInformation } = require('../variables/index');
const axios = require("axios");

const apiKey = currencyInformation.apiKey;

exports.getCurrency = (fromCurrency, toCurrency, amount) => {
    const { data } = axios.get(`${baseUrl}?access_key=${apiKey}`) 
    console.log(data);
} 
