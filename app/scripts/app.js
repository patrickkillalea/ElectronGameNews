(function() {
    'use strict';

    // var mongoose = require('mongoose');
    // mongoose.connect('mongodb://patrickkillalea:ilwp2000@ds021691.mlab.com:21691/mediumdb');

    var _templateBase = './scripts';

    angular.module('app', [
            'ngRoute',
            'ngMaterial',
            'ngAnimate'
        ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/home/home.html',
                controller: 'homeController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/wow', {
                templateUrl: _templateBase + '/wow/wow.html',
                controller: 'wowController',
                controllerAs: '_ctrl',
                activetab: 'wow'
            });
            $routeProvider.when('/starcraft', {
                templateUrl: _templateBase + '/starcraft/starcraft.html',
                controller: 'starcraftController',
                controllerAs: '_ctrl',
                activetab: 'starcraft'
            });
            $routeProvider.when('/cs', {
                templateUrl: _templateBase + '/cs/cs.html',
                controller: 'csController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/dota', {
                templateUrl: _templateBase + '/dota/dota.html',
                controller: 'dotaController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/article', {
                templateUrl: _templateBase + '/wow/article.html',
                controller: 'dotaController',
                controllerAs: '_ctrl'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }]);

})();
