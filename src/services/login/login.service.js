// Initializes the `login` service on path `/login`
const createService = require('feathers-knex');
const createModel = require('../../models/login.model');
const hooks = require('./login.hooks');
const filters = require('./login.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'login',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/login', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('login');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
