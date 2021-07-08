/** @format */

const Router = require('koa-router');

const currency  = require('./controllers/currency');

const routers = new Router();

routers.get("/convert", currency.convertCurrency);

module.exports = routers;
