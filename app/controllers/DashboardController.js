angular.module('LinkedHub').controller('DashboardController', function(Result, $scope) {
    var linkedinObj  = Result.getResult().linkedin;
    var githubObj  = Result.getResult().github;

    console.log('linkedinObj', linkedinObj);
    console.log('githubObj', githubObj);
});