/** @format */


//internal dependencise

const { exchangeInformation } = require('../variables/index');
const axios = require("axios");

const {apiKey, baseUrl} = exchangeInformation; 

exports.getCurrency = async (fromCurrency, toCurrency, amount) => {
    try{
        const { data } = await axios.get(`${baseUrl}?access_key=${apiKey}`) 
        console.log(data);
        return data;
    }
    catch(err){
        console.log(err);
    }
}
