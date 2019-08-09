// Initializes the `signup` service on path `/signup`
const createService = require('feathers-knex');
const createModel = require('../../models/signup.model');
const hooks = require('./signup.hooks');
const filters = require('./signup.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'signup',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/signup', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('signup');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
