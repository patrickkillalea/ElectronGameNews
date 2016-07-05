angular.module('app').controller('dotaController', function($scope, $http) {

    $http.get("https://api.myjson.com/bins/1ptxt")
        .then(function(response) { $scope.dotanews = response.data; });

    $http.get("https://api.myjson.com/bins/30zgx")
        .then(function(response) { $scope.dotacompetitions = response.data; });

    $http.get("https://api.myjson.com/bins/54hzv")
        .then(function(response) { $scope.dotaresources = response.data; });        

    var navMenu = ["news", "fixtures", "competitions", "resources"];

});
