/** @format */
// avoid hoisting
'use strict';

// Dependences
require('dotenv').config();

// Dependencies
const Koa = require('koa');
const koaBody = require('koa-body');

// From other file
const { variables } = require('./variables/index');
const router = require('./routes');

// koa object
const app = new Koa();

app.use(koaBody());
app.use(router.routes())
app.use(router.allowedMethods());

// Start server
app.listen(variables.appPort, () => {
  console.log(`API server listening on ${variables.host}:${variables.appPort}`);
});

// Exports app
module.exports = app;
