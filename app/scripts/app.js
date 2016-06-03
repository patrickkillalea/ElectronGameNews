
(function () {
    'use strict';
    
    var _templateBase = './scripts';
    
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/wow/wow.html' ,
                controller: 'wowController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/starcraft', {
                templateUrl: _templateBase + '/starcraft/starcraft.html' ,
                controller: 'starcraftController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/cs', {
                templateUrl: _templateBase + '/cs/cs.html' ,
                controller: 'csController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/dota', {
                templateUrl: _templateBase + '/dota/dota.html' ,
                controller: 'dotaController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/article', {
                templateUrl: _templateBase + '/wow/article.html' ,
                controller: 'dotaController',
                controllerAs: '_ctrl'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]);

})();
