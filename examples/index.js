'use strict';

var mean = require( 'compute-mean' ),
	variance = require( 'compute-variance' ),
	data = require( './../lib' );

// Calculate the sample mean:
console.log( mean( data ) );

// Calculate the sample variance:
console.log( variance( data ) );
