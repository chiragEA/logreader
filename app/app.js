(function() {
    
    var app = angular.module('customersApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/logs/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/logs.html'
            })
            .when('/logs', {
                controller: 'AllOrdersController',
                templateUrl: 'app/views/alllogs.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());