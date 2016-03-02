angular.module('LinkedHub').controller('HomeController', function(Request, Result, $scope, $location) {
    // Just for test purpose
    $scope.linkedin = 'https://www.linkedin.com/in/iankoleite';
    $scope.github = 'ianko';

    $scope.submitingForm = true;

    $scope.getResults = function(data) {
        var payload = {
            linkedin: data.linkedin,
            github: data.github
        };

        console.log('payload', payload);

        //Send information to the API
        Request.save(payload, function(response){
            Result.addResult(response);
            // redirect to the dashboard view
            $location.path("/dashboard");
        });

    }
});