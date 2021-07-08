/** @format */


//internal dependencise

const {variables} = require('../variables');
const axios = require("axios");

const {fixerApiKey, fixerApiUrl} = variables;

exports.getCurrency = async (fromCurrency, toCurrency, amount) => {

    const { data } = await axios.get(`${fixerApiUrl}?access_key=${fixerApiKey}`) 
    const convertedAmount = amount * data.rates[toCurrency] / data.rates[fromCurrency];

    return convertedAmount;
}

