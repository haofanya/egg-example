// // module.exports = app => {
// //     app.beforeStart(async () => {
// //       // 从配置中心获取 MySQL 的配置
// //       // { host: 'mysql.com', port: '3306', user: 'test_user', password: 'test_password', database: 'test' }
// //       const mysqlConfig = await app.configCenter.fetch('mysql');
// //       app.database = app.mysql.createInstance(mysqlConfig);
// //     });
// //   };
// module.exports = app => {
//   app.once('server', server => {
//     // websocket
//   });
//   app.on('error', (err, ctx) => {
//     // report error
//   });
//   app.on('request', ctx => {
//     // log receive request
//   });
//   app.on('response', ctx => {
//     // ctx.starttime is set by framework
//     const used = Date.now() - ctx.starttime;
//     // log total cost
//   });
// };
