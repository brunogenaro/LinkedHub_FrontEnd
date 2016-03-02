angular.module('LinkedHub').controller('HomeController', function(Request, Result, $scope, $location) {
    // Just for test purpose
    $scope.linkedin = 'https://www.linkedin.com/in/brunogenaro';
    $scope.github = 'brunogenaro';

    $scope.getResults = function(data) {
        var payload = {
            linkedin: data.linkedin,
            github: data.github
        };

        //Send information to the API
        Request.save(payload, function(response){
            Result.addResult(response);
            // redirect to the dashboard view
            $location.path("/dashboard");
        });

    }
});