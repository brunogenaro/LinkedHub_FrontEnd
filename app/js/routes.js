angular.module('LinkedHub').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/homeView.html',
      controller: 'HomeIndexController'
    });
});