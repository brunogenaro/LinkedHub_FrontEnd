angular.module('LinkedHub').directive('lhForm', function() {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: './app/templates/lhForm.html'
    }
});