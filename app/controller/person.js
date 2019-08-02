'use strict';
const Controller = require('egg').Controller;

class PersonController extends Controller {
  async create() {
    const { ctx, service } = this;
    const person = ctx.request.query;
    const result = await service.person.create(person);
    console.log(result);
    this.ctx.body = result;
    if (result.affectedRows === 1) {
      this.ctx.body = {
        code: 0,
        data: result.insertId,
      };
    } else {
      this.ctx.body = {
        code: 1,
        data: '用户添加失败',
      };
    }
  }
  async delete() {
    const { ctx, service } = this;
    const id = ctx.request.body;
    console.log(ctx.request);
    const result = await service.person.deleteById(id);
    this.ctx.body = {
      code: 0,
      data: result,
    };
  }
  async query() {
    const { ctx, service } = this;
    const person = ctx.request.body;
    console.log(ctx.request);
    const result = await service.person.queryById(person);
    console.log(result);
    this.ctx.body = {
      code: 0,
      data: result,
    };
  }
  async update() {
    const { ctx, service } = this;
    const person = ctx.request.body;
    console.log(ctx.request);
    const result = await service.person.update(person);
    this.ctx.body = {
      code: 0,
      data: result,
    };
  }
}

module.exports = PersonController;
