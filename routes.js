/** @format */

const Router = require('koa-router');

const { convertCurrency } = require('./controllers/currency');
const routers = new Router();

routers.get("/convert/:fromCurrency/:toCurrency/:amount", convertCurrency);

module.exports = routers;
