'use strict';

var bsd = angular.module('brock', [
	'ngRoute'
])
	.config(function($routeProvider) {
		$routeProvider
			//Main View 
			.when('/', {
				templateUrl: 'views/contstruction.html',
				controller: 'galCtrl'
			})
			// Contact View  
			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: 'contactCtrl'
			})

			.when('/gallery', {
				templateUrl: 'views/gallery.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	});