'use strict';

var bsd = angular.module('brock', [
	'ngRoute'
])
	.config(function($routeProvider) {
		$routeProvider
			//Main View 
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'galCtrl'
			})
			// Gallery View 
			.when('/gallery', {
				templateUrl: 'views/gallery.html'
				// controller: 'CtrlUser'
			})
			.otherwise({
				redirectTo: '/'
			});
	});