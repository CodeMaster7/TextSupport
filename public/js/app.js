var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'js/views.html',
        controller: 'mainCtrl'
        })
});