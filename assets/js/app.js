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
            .when('/', {
                controller: 'PageController',
                templateUrl: 'page/home.html'
            }
            )
            .otherwise({redirectTo: '/'});
    });

    app.controller('PageController', function ($scope, $location) {
        $scope.tabs = [
            {title: 'ma', path: ''},
            {title: 'works', path: 'works'},
            {title: 'cv', path: 'cv'},
            {title: 'contact', path: 'contact'}
        ];

        $scope.isActive = function (route) {
            return route === $location.path();
        }
    });

})();