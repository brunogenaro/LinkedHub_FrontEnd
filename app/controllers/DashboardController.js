angular.module('LinkedHub').controller('DashboardController', function(Result, $scope) {
    var linkedinObj  = Result.getResult().linkedin;
    var githubObj  = Result.getResult().github;

    $scope.name = linkedinObj.name;

    console.log('linkedinObj', JSON.stringify(linkedinObj));
    console.log('githubObj', JSON.stringify(githubObj));
});