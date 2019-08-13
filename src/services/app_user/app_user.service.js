// Initializes the `app_user` service on path `/app-user`
const createService = require('feathers-sequelize');
const createModel = require('../../models/app_user.model');
const hooks = require('./app_user.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/app-user', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('app-user');

  service.hooks(hooks);
};
