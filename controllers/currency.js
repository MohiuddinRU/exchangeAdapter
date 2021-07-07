/** @format */

'use strict';

const Currency = require("./models/Currency");

exports.convertCurrency = async (ctx) => {

    const { fromCurrency, toCurrency, amount } = ctx.request.body;
    const convertedAmount = Currency.getCurrency(fromCurrency.toUpperCase(), toCurrency.toUpperCase(), amount);
    
    ctx.response.body = {
        data: convertedAmount,
        status: 200,
        message: "converted" 
    }
};
