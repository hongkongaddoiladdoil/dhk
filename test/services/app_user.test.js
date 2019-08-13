const assert = require('assert');
const app = require('../../src/app');

describe('\'app_user\' service', () => {
  it('registered the service', () => {
    const service = app.service('app-user');

    assert.ok(service, 'Registered the service');
  });
});


