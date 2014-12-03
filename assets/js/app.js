(function () {

    var app = angular.module('MA', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/:id', {
                controller: 'PageController',
                templateUrl: function (params) {
                    return 'page/' + params.id + '.html';
                }
            })
            .otherwise({redirectTo: '/'});
    });

    app.controller('PageController', function ($scope, $location) {
  /*      $scope.tabs = [
         {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/works.html'},
         {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/cv.html'},
         {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/contact.html'}
         ];*/

         $scope.isActive = function (route) {
         return route === $location.path();
         }
    });

})();