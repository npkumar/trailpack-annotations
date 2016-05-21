'use strict'
const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {
  /**
   * @Route("GET /")
   * @param request
   * @param reply
   */
  helloWorld(request, reply) {
    reply('Hello')
  }

  /**
   * @Route({method: "GET", path: "/validation", config: { validation: {
   * query: { test: Joi.string().required() }
   * }}})
   * @param request
   * @param reply
   */
  validation(request, reply) {
    reply('Hello')
  }
}
