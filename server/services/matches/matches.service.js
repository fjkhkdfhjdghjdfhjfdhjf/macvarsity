// Initializes the `matches` service on path `/matches`
const { Matches } = require('./matches.class');
const createModel = require('../../models/matches.model');
const hooks = require('./matches.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$populate']
  };

  // Initialize our service with any options it requires
  app.use('/api/matches', new Matches(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/matches');

  service.hooks(hooks);
};
