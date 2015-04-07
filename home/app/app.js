/**
 * Created by vladislav on 07.04.2015.
 */
var app = angular.module('arena', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            redirectTo:'/index'
        }).when('/user/:userId', {
            templateUrl:'parts/user.html',
            controller:'UserController',
            name:'auth'
        }).when('/login', {
            templateUrl:'parts/login.html',
            controller:'LoginController',
            name:'notAuth'
        }).otherwise({
            redirectTo: '/index'
        });
});

//app.run(function ($location, $rootScope, $http) {
//    $rootScope.$on("$routeChangeStart", function (event, next, current) {
//
//    })
//});
