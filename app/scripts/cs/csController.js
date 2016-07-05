angular.module('app').controller('csController', function($scope, $http) {

    $http.get("https://api.myjson.com/bins/2iu2z")
        .then(function(response) { $scope.csnews = response.data; });

    $http.get("https://api.myjson.com/bins/4ff7v")
        .then(function(response) { $scope.cscompetitions = response.data; });

    $http.get("https://api.myjson.com/bins/4q50r")
        .then(function(response) { $scope.csresources = response.data; });
});
