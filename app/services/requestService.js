angular.module('LinkedHub').factory('Request', function($resource) {
    return $resource('http://192.168.1.112:1337/parse');
});