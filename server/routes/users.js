var Users = require('../controllers/users');

module.exports = function(app) {
  // login with email
  app.route('/api/users/login').post(Users.login);

  // logout route
  app.route('/api/users/logout').get(Users.authenticate, Users.logout);

  // users routes
  app.route('/api/users')
    .get(Users.all)
    .post(Users.authenticate, Users.signup);

  app.get('/api/users/session', Users.session);

  // user email update route
  app.route('/api/users/:id')
    .get(Users.find)
    .put(Users.authenticate, Users.update)
    .delete(Users.authenticate, Users.delete);
};
