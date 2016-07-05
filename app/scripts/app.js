(function() {
    'use strict';

    var _templateBase = './scripts';

    angular.module('app', [
            'ngRoute',
            'ngMaterial',
            'ngAnimate'
        ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/home/home.html',
                controller: 'homeController'
            });
            $routeProvider.when('/overwatchnews', {
                templateUrl: _templateBase + '/overwatch/news.html',
                controller: 'overwatchController'
            });
            $routeProvider.when('/overwatchfixtures', {
                templateUrl: _templateBase + '/overwatch/fixtures.html',
                controller: 'overwatchController'
            });
            $routeProvider.when('/overwatchcompetitions', {
                templateUrl: _templateBase + '/overwatch/competitions.html',
                controller: 'overwatchController'
            });
            $routeProvider.when('/overwatchresources', {
                templateUrl: _templateBase + '/overwatch/resources.html',
                controller: 'overwatchController'
            });
            $routeProvider.when('/starcraftnews', {
                templateUrl: _templateBase + '/starcraft/news.html',
                controller: 'starcraftController',
                controllerAs: '_ctrl',
                activetab: 'starcraft'
            });
            $routeProvider.when('/starcraftfixtures', {
                templateUrl: _templateBase + '/starcraft/fixtures.html',
                controller: 'starcraftController',
                controllerAs: '_ctrl',
                activetab: 'starcraft'
            });
            $routeProvider.when('/starcraftcompetitions', {
                templateUrl: _templateBase + '/starcraft/competitions.html',
                controller: 'starcraftController',
                controllerAs: '_ctrl',
                activetab: 'starcraft'
            });
            $routeProvider.when('/starcraftresources', {
                templateUrl: _templateBase + '/starcraft/resources.html',
                controller: 'starcraftController',
                controllerAs: '_ctrl',
                activetab: 'starcraft'
            });
            $routeProvider.when('/csnews', {
                templateUrl: _templateBase + '/cs/news.html',
                controller: 'csController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/csfixtures', {
                templateUrl: _templateBase + '/cs/fixtures.html',
                controller: 'csController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/cscompetitions', {
                templateUrl: _templateBase + '/cs/competitions.html',
                controller: 'csController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/csresources', {
                templateUrl: _templateBase + '/cs/resources.html',
                controller: 'csController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/dotanews', {
                templateUrl: _templateBase + '/dota/news.html',
                controller: 'dotaController'
            });
            $routeProvider.when('/dotafixtures', {
                templateUrl: _templateBase + '/dota/fixtures.html',
                controller: 'dotaController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/dotacompetitions', {
                templateUrl: _templateBase + '/dota/competitions.html',
                controller: 'dotaController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/dotaresources', {
                templateUrl: _templateBase + '/dota/resources.html',
                controller: 'dotaController',
                controllerAs: '_ctrl'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);
})();
