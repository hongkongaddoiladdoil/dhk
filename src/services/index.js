const signup = require('./signup/signup.service.js');

const login = require('./login/login.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(signup);
  app.configure(login);
};
