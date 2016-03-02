angular.module('LinkedHub').controller('HomeController', function(Request, Result, $scope, $location) {
    $scope.getResults = function(data) {
        console.log('data', data);
        // Send information to the API
        Request.save(data, function(response){
            Result.addResult(response);
            // redirect to the dashboard view
            $location.path("/dashboard");
        });
    }
});