angular.module('LinkedHub').controller('HomeIndexController', function(Request, $scope) {
    $scope.getResults = function(data) {
        // Send informaation to the API
        Request.save(data, function(response){
            console.log(response);
        });
    }
});