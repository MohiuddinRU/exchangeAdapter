/** @format */


//internal dependencise

const { exchangeInformation } = require('../variables/index');
const axios = require("axios");

const {apiKey, baseUrl} = exchangeInformation; 

exports.getCurrency = async (fromCurrency, toCurrency, amount) => {

    const { data } = await axios.get(`${baseUrl}?access_key=${apiKey}`) 
    const convertedAmount = amount * data.rates[toCurrency] / data.rates[fromCurrency];

    return convertedAmount;
}
