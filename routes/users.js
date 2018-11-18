const controller = require('../controllers/users');

module.exports = (router) => {
  router.route('/users')
    .post(controller.add)
    .get(controller.getAll); // This route will be protected shortly

    router.route('/login')
    .post(controller.login)
};