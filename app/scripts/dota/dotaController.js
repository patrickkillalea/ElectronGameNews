// (function() {
//     'use strict';
//     angular.module('app')
//         .controller('MainCtrl', [
//             '$scope', 'posts',
//             function($scope, posts) {

//                 $scope.posts = posts.posts;
//                 $scope.addPost = function() {
//                     if (!$scope.title || $scope.title === '') {
//                         return;
//                     }
//                     posts.create({
//                         title: $scope.title,
//                         date: $scope.date,
//                         image: $scope.image,
//                         content: $scope.content
//                     });
//                     $scope.title = '';
//                     $scope.date = '';
//                     $scope.image = '';
//                     $scope.content = '';
//                 };

//                 $scope.deletePost = function(post) {
//                     posts.delete(post);
//                 };
//             }
//         ]);

// })();


// // Post controller
// app.controller('PostsCtrl', [
//     '$scope',
//     // '$stateParams',
//     'posts',
//     'post',
//     function($scope, posts, post) {
//         // $scope.post = posts.posts[$stateParams.id];
//         $scope.post = post;
//     }
// ]);

// app.factory('posts', ['$http', function($http) {
//     var o = {
//         posts: []
//     };

//     // get all posts
//     o.getAll = function() {
//         return $http.get('/posts').success(function(data) {
//             angular.copy(data, o.posts);
//         });
//     };
//     // create new posts
//     o.create = function(post) {
//         return $http.post('/posts', post).success(function(data) {
//             o.posts.push(data);
//         });
//     };
//     // get single post
//     o.get = function(id) {
//         return $http.get('/posts/' + id).then(function(res) {
//             return res.data;
//         });
//     };
//     // delete single post
//     o.delete = function(post) {
//         return $http.delete('/posts/' + post._id).success(function(data) {
//             angular.copy(data, o.posts);
//         });
//     };

//     return o;
// }]);
