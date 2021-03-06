const _ = require('lodash')
const smokesignals = require('smokesignals')

const App = {
  pkg: {
    name: 'annotations-trailpack-test',
    version: '1.0.0'
  },
  api: require('./api'),
  config: {
    annotations: {
      policy: true,
      route: true,
      pathToScan: './test/api/controllers',
      customAnnotations: require('./annotations')
    },
    routes: [],
    main: {
      packs: [
        require('trailpack-router'),
        require('../') // trailpack-annotations
      ]
    }
  }
}

_.defaultsDeep(App, smokesignals.FailsafeConfig)
module.exports = App
