/** @format */

'use strict';

const Currency = require("../models/Currency");

exports.convertCurrency = async (ctx) => {
    try {
        const { fromCurrency, toCurrency, amount } = ctx.params;
        const convertedAmount = await Currency.getCurrency(
            fromCurrency.toUpperCase(), 
            toCurrency.toUpperCase(),
            amount);
        
        if(!convertedAmount){
            throw{
                status: 500,
                message: "Error occured in exchange adapter."
            }
        }
        ctx.response.body = {
            data: {
                requestedCurrency: fromCurrency,
                convertedCurrency: toCurrency,
                requestedAmount: amount,
                convertedAmount
            },
            status: 200,
            message: "converted" 
        }
    } catch (err) {
        ctx.status = err.status || 500
        ctx.body = { message: err.message }
    }
};
