'use strict';

angular.module('myApp.search', ['ngRoute', 'angularUtils.directives.dirPagination'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$http', '$location', 'NgTableParams', function($scope, $http, $location, NgTableParams) {

  $scope.results = '';

  $scope.searchForItem = function() {

    $http({
      method: 'GET',
      url: 'http://api.vip.supplyhub.com:19000/products' + '?search=' + $scope.searchInput
    }).then(function (response) {
      $scope.results = response.data;
    }, function (response) {
      console.log('Error: ' + response);
    });
  
  };

}]);