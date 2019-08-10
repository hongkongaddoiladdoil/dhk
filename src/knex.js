require('dotenv').config();
const knex = require('knex');
const environment = process.env.ENVIRONMENT || 'development';
const config = require('../knexfile.js')[environment];

module.exports = function () {
  const app = this;
  const db = knex(config);
  app.set('knexClient', db);
};
