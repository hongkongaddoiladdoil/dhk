const users = require('./users/users.service.js');
const appUser = require('./app_user/app_user.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(appUser);
};
