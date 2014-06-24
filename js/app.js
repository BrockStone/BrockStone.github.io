'use strict';

var app angular.module('brock', ['ng-route'])

	.config(function($routeProvider) {

	$routeprovider

		.when('/',{
			templateUrl: 'views/main.html'
			controller:
		})
		.otherwise('/',{
			redirectTo: '/'
		})
	});