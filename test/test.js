/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	data = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-iris-setosa-sepal-width', function tests() {

	it( 'should export an array', function test() {
		expect( data ).to.be.an( 'array' );
		assert.strictEqual( data.length, 50 );
	});

	it( 'should be a numeric array', function test() {
		for ( var i = 0; i < data.length; i++ ) {
			assert.isNumber( data[ i ] );
		}
	});

});
