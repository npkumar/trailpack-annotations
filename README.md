# trailpack-annotations
[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

:package: Add Route, Policy and custom annotations support for Tails.js applications

## Intallation
With yo : 

```
npm install -g yo generator-trails
yo trails:trailpack trailpack-annotations
```

With npm (you will have to create config file manually) :
 
`npm install --save trailpack-annotations`

## Configuration
```js
// config/annotations.js
module.exports = {
  policy: true,//enable policy annotations
  route: true,//enable route annotations
  pathToScan: './api/controllers',//or ./api for hmvc
  customAnnotations: null, //Add your custom annotations here, require('./annotations') for example
    
}
```

## Usage

### Route 
A route added with annotation will replace any previous route set under `config/routes.js` (for a same path).
```
module.exports = class DefaultController extends Controller {

  /**
   * Return some info about this application
   * @Route("GET /default/info") or @Route({method: ["GET"], path: "/default/info"}) 
   */
  info (request, reply) {
    reply.json(this.app.services.DefaultService.getApplicationInfo())
  }
}
```

### Policy 
A policy added with annotation will be added to policies set under `config/policies.js`.
```
module.exports = class DefaultController extends Controller {

  /**
   * Return some info about this application
   * @Policy("Default.auth") or @Policy(["Default.auth", "Default.acl"])
   */
  info (request, reply) {
    reply.json(this.app.services.Defaultervice.getApplicationInfo())
  }
}
```

### Custom 
Create your own annotation like this : 

```
'use strict'
const Annotation = require('ecmas-annotations').Annotation

module.exports = class MyCustomAnnotation extends Annotation{

    /**
     * The possible targets
     *
     * (Annotation.CONSTRUCTOR, Annotation.PROPERTY, Annotation.METHOD)
     *
     * @type {Array}
     */
    static get targets() {
      return [Annotation.METHOD]
    }

    /**
     * The function to call when annotations are find
     *
     * @type {Function}
     */
    handler(app, annotation) {
      //Do whatever you want when annotation is found
    }

    /**
     * File path
     *
     * @type {String}
     */
    static get path() {
      return './annotations/MyCustomAnnotation.js'
    }

}

```
Now I can add `@MyCustomAnnotation("It's works")` on methods.

## License
[MIT](https://github.com/jaumard/trailpack-annotations/blob/master/LICENSE)


[npm-image]: https://img.shields.io/npm/v/trailpack-annotations.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-annotations
[ci-image]: https://travis-ci.org/jaumard/trailpack-annotations.svg?branch=master
[ci-url]: https://travis-ci.org/jaumard/trailpack-annotations
[daviddm-image]: http://img.shields.io/david/jaumard/trailpack-annotations.svg?style=flat-square
[daviddm-url]: https://david-dm.org/jaumard/trailpack-annotations
[codeclimate-image]: https://img.shields.io/codeclimate/github/jaumard/trailpack-annotations.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/jaumard/trailpack-annotations
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
