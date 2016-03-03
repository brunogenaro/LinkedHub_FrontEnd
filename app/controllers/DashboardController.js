angular.module('LinkedHub').controller('DashboardController', function(Result, $scope) {

    // Delay to create the animation
    setTimeout(function() {
        document.getElementsByClassName('main-holder').className = 'active';
    }, 250);

    var linkedinObj  = Result.getResult().linkedin;
    var githubObj  = Result.getResult().github;
    var counts  = Result.getResult().counts;

    $scope.name = linkedinObj.name;
    $scope.headline = linkedinObj.headline;

    $scope.avatar = githubObj.avatar_url;

    $scope.languages = counts.languages;

    $scope.followers = githubObj.followers;
    $scope.following = githubObj.following;
    $scope.repo = githubObj.public_repos;
    $scope.gist = githubObj.public_gists;

    console.log('linkedinObj', linkedinObj);
    console.log('githubObj', githubObj);
    console.log('counts', counts);
});

angular.module('LinkedHub').filter('isBiggerThanZero', function() {
    return function(p) {
        return p > 0;
    }
});
