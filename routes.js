/** @format */

const Router = require('koa-router');

const { convertCurrency } = require('./controllers/currency');
const routers = new Router();

routers.get("/convert", convertCurrency);

module.exports = routers;
