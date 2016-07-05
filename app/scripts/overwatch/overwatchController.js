angular.module('app').controller('overwatchController', function($scope, $http) {
    $http.get("https://api.myjson.com/bins/22qlv")
        .then(function(response) { $scope.overwatchnews = response.data; });

    $http.get("https://api.myjson.com/bins/30zgx")
        .then(function(response) { $scope.overwatchcompetitions = response.data; });
});
