/** @format */

const env = process.env.ENV || 'local';
const appPort = process.env.PORT;
const host = process.env.HOST;

const apiKey = process.env.API_KEY;
const baseUrl = process.env.URL;

// Scafolding
const allvariable = {};

allvariable.variables = {
  appPort,
  env,
  host,
};

allvariable.exchangeInformation = {
  apiKey,
  baseUrl
};

module.exports = allvariable;
