/** @format */

'use strict';

const Currency = require("../models/Currency");

exports.convertCurrency = async (ctx) => {
    console.log(ctx.request.body);

    try {
        const { fromCurrency, toCurrency, amount } = ctx.request.body;
        console.log(fromCurrency, toCurrency, amount);

        const convertedAmount = await Currency.getCurrency(fromCurrency.toUpperCase(), toCurrency.toUpperCase(), amount);
        
        if(!convertedAmount){
            throw{
                status: 500,
                message: "Not converted"
            }
        }
        ctx.response.body = {
            data: convertedAmount,
            status: 200,
            message: "converted" 
        }
    } catch (err) {
        ctx.body = { message: err.message }
        ctx.status = err.status || 500
    }
};
