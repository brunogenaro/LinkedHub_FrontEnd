angular.module('LinkedHub').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/homeView.html',
      controller: 'HomeController'
    })
    .when('/dashboard', {
      templateUrl: './views/dashboardView.html',
      controller: 'DashboardController'
    });
});