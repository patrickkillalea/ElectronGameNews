
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
                templateUrl: _templateBase + '/home/home.html' ,
                controller: 'homeController',
                controllerAs: '_ctrl'
            });
            $routeProvider.when('/wow', {
                templateUrl: _templateBase + '/wow/wow.html' ,
                controller: 'wowController',
                controllerAs: '_ctrl',
                activetab: 'wow'
            });
            $routeProvider.when('/starcraft', {
                templateUrl: _templateBase + '/starcraft/starcraft.html' ,
                controller: 'starcraftController',
                controllerAs: '_ctrl',
                activetab: 'starcraft'
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


var self = this;
// number of drops created.
var nbDrop = 158;
// function to generate a random number range.
function randRange( minNum, maxNum) {
return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}
// function to generate drops
function createRain() {
for( var i=1;i<nbDrop;i++) {
var dropLeft = randRange(0,1600);
var dropTop = randRange(-1000,1400);
$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
$('#drop'+i).css('left',dropLeft);
$('#drop'+i).css('top',dropTop);
}
}




})();
