// Initializes the `authmanagement` service on path `/authmanagement`
// const createService = require('./authmanagement.class.js');
const authManagement = require('feathers-authentication-management');
const verifyHooks = require('feathers-authentication-management').hooks;
const hooks = require('./authmanagement.hooks');
const notifier = require('./notifier');

module.exports = function (app) {
  // const paginate = app.get('paginate');
  //
  // const options = {
  //   paginate
  // };

  // Initialize our service with any options it requires
  app.configure(authManagement(notifier(app)));
  // Initialize our service with any options it requires
  // app.use('/authmanagement', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('authManagement');

  service.hooks(hooks);
};
