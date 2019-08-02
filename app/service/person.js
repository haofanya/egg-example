'use strict';

const Service = require('egg').Service;
class PersonService extends Service {
  async create(person) {
    // console.log(person);
    const result = await this.app.mysql.insert('person', person);
    return result;
  }
  async deleteById(id) {
    // console.log(id);
    const result = await this.app.mysql.delete('person', id);
    return result;
  }
  async queryById(query) {
    console.log(query);
    const result = await this.app.mysql.get('person', query);
    return result;
  }
  async update(person) {
    // console.log(person);
    const result = await this.app.mysql.update('person', person);
    return result;
  }
}
module.exports = PersonService;
// module.exports = app => {
//   app.mysql.get('person', { id: 1 }).then(r => { console.log(r); });
//   app.mysql.insert('person', {
//       name: 'Jack',
//       age: 18
//     }
//   ).then(r=>{console.log(r);});
//   app.mysql.update('person', {
//       age: 20 //需要修改的数据
//   }, {
//       where: {
//         id: 1
//       } //修改查询条件
//   }).then(r=>{console.log(r);});;
//   app.mysql.delete('person', {
//       name: 'Jack'
//     }).then(r=>{console.log(r);});
//   return class UserService extends app.Service {
//   };
// };

