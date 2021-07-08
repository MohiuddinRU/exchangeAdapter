/** @format */

const env = process.env.ENV || 'local';
const appPort = process.env.PORT;
const host = process.env.HOST;

const fixerApiKey = process.env.API_KEY;
const fixerApiUrl = process.env.URL;

// Scafolding
const allvariable = {};

allvariable.variables = {
  appPort,
  env,
  host,
  fixerApiKey,
  fixerApiUrl
};

module.exports = allvariable;
