Iris Setosa Sepal Width
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Edgar Anderson's [data](https://en.wikipedia.org/wiki/Iris_flower_data_set) for *Iris setosa* sepal width.


## Installation

``` bash
$ npm install datasets-iris-setosa-sepal-width
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var data = require( 'datasets-iris-setosa-sepal-width' );
```

#### data

Edgar Anderson's [data](https://en.wikipedia.org/wiki/Iris_flower_data_set) for *Iris setosa* sepal width.

``` javascript
console.log( data );
// returns [ 3.5, 3, 3.2, 3.1, ... ]
```

All values are in `centimeters`.


## Examples

``` javascript
var mean = require( 'compute-mean' ),
	variance = require( 'compute-variance' ),
	data = require( 'datasets-iris-setosa-sepal-width' );

// Calculate the sample mean:
console.log( mean( data ) );

// Calculate the sample variance:
console.log( variance( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## References

*	Anderson, Edgar (1935). "The irises of the Gaspe Peninsula," *Bulletin of the American Iris Society*, __59__, 2–5.
*	Fisher, Ronald A. (1936). "The use of multiple measurements in taxonomic problems." *Annals of Eugenics*, __7__, Part II, 179–188.


## See Also

*	[iris](https://github.com/datasets-io/iris)
*	[iris-setosa](https://github.com/datasets-io/iris-setosa)
*	[iris-setosa-sepal](https://github.com/datasets-io/iris-setosa-sepal)


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-iris-setosa-sepal-width.svg
[npm-url]: https://npmjs.org/package/datasets-iris-setosa-sepal-width

[travis-image]: http://img.shields.io/travis/datasets-io/iris-setosa-sepal-width/master.svg
[travis-url]: https://travis-ci.org/datasets-io/iris-setosa-sepal-width

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/iris-setosa-sepal-width/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/iris-setosa-sepal-width?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/iris-setosa-sepal-width.svg
[dependencies-url]: https://david-dm.org/datasets-io/iris-setosa-sepal-width

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/iris-setosa-sepal-width.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/iris-setosa-sepal-width

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/iris-setosa-sepal-width.svg
[github-issues-url]: https://github.com/datasets-io/iris-setosa-sepal-width/issues
