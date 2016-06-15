angular.module('app').controller('dotaController', function($scope, $http) {

    $http.get("https://restcountries.eu/rest/v1/currency/eur")
        .then(function(response) { $scope.countries = response.data; });

    $http.get("https://api.myjson.com/bins/2joow")
        .then(function(response) { $scope.dotadata = response.data; });

    var navMenu = ["news", "fixtures", "competitions", "resources"];

});
