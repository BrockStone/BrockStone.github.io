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
			// Contact View  
			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: 'contactCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});