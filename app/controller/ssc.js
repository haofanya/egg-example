'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async findPersonInfoPage() {
    const { ctx } = this;
    ctx.body = 'hi, eggjs! ';
  }
}

module.exports = HomeController;
