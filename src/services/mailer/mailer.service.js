// Initializes the `mailer` service on path `/mailer`
const createService = require('./mailer.class.js');
const hooks = require('./mailer.hooks');

const mailer = require('feathers-mailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = function (app) {

  const paginate = app.get('paginate');
  
  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mailer', mailer(smtpTransport({
    host: 'email-smtp.us-east-1.amazonaws.com',
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })));

  // Get our initialized service so that we can register hooks
  const service = app.service('mailer');

  service.hooks(hooks);
};
