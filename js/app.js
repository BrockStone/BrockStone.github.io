var bsdApp = angular.module('bsdApp', ['ui.router']);

// configure our routes
bsdApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
            
        // Welcome !
        .state('home', {
            url: '/',
            templateUrl : 'views/welcome.html',
            controller  : 'mainCtrl'
        })

        // About
        .state('about', {
            url: '/about',
            templateUrl : 'views/about.html',
            controller  : 'mainCtrl'
        })

        // works
        .state('works', {
            url: '/works',
            templateUrl : 'views/works.html',
            controller  : 'mainCtrl'
        })

        // drop
        .state('drop', {
            url: '/drop',
            templateUrl : 'views/drop.html',
            controller  : 'mainCtrl'
        })

        // dream
        .state('dream', {
            url: '/dream',
            templateUrl : 'views/dream.html',
            controller  : 'mainCtrl'
        })

});

// Factory to Dynamically set the page title
bsdApp.factory('Page', function(){
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
    };
}); 

// create the controller and inject Angular's $scope
bsdApp.controller('mainCtrl', function($scope, Page) {
   
    // Set title to:    
    Page.setTitle('BSD | Home');
});

bsdApp.controller('dreamCtrl', function($scope, Page) {
    
    // Set title to:    
    Page.setTitle('Dream-Collective');
});
