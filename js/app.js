 var bsdApp = angular.module('bsdApp', ['ngRoute']);

    // configure our routes
    bsdApp.config(function($routeProvider) {
        $routeProvider

            // Home-page Route
            .when('/', {
                templateUrl : 'views/construction.html',
                controller  : 'mainController'
            })

            // Dream-Collective Route
            .when('/dream-collective', {
                templateUrl : 'views/dream-collective.html',
                controller  : 'dreamController'
            })
    });

    // create the controller and inject Angular's $scope
    bsdApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    bsdApp.controller('dreamController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });
