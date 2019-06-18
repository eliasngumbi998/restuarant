var app = angular.module('app', ['restaurant.router']);
 
app.config(function($stateProvider, $urlRouterProvider) {
 
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'menu/home.html',
            controller: 'homeCtrl'
        })
        .state('salad', {
            url: '/expand',
            templateUrl: 'choices/checkin.html',
            controller: 'checkouCtrl'
        })
        .state('empree', {
            url: '/box/{empree:json}',
            templateUrl: 'choices/checkin.html',
            controller: 'checkoutCtrl'
        })
        .state('soup', {
            url: '/box/{choices:json}',
            templateUrl: 'choices/checkin.html',
            controller: 'checkoutCtrl'
        })
 
});
