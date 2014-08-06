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
<<<<<<< HEAD
			.when('/gallery', {
				templateUrl: 'views/gallery.html'
			})
=======
>>>>>>> d367ebf4a9787e15949f66cb38622ebe6ac1422c
			.otherwise({
				redirectTo: '/'
			});
	});