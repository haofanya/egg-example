'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/addPerson', controller.person.create);
  router.post('/api/queryPerson', controller.person.query);
  router.post('/api/deletePerson', controller.person.delete);
  router.post('/api/updatePerson', controller.person.update);
  // router.post('/api/task', controller.task.create);
  // router.put('/api/task/:id', controller.task.update);
  // router.delete('/api/task/:id', controller.task.destroy);
};
// module.exports = app => {
//   app.router.resources('topics', '/api/v2/topics', app.controller.topics);
// };
