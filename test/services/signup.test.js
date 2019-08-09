const assert = require('assert');
const app = require('../../src/app');

describe('\'signup\' service', () => {
  it('registered the service', () => {
    const service = app.service('signup');

    assert.ok(service, 'Registered the service');
  });
});
