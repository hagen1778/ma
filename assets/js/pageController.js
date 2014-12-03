(function () {

    var app = angular.module(['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/:id', {
                controller: 'PageController',
                templateUrl: function (params) {
                    return 'page/' + params.id + '.htm';
                }
            })
            .otherwise({redirectTo: '/'});
    });

    app.controller('PageController', function ($scope, $location) {
    /*    $scope.tabs = [
            {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.htm'},
            {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.htm'},
            {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.htm'}
        ];

        $scope.isActive = function (route) {
            return route === $location.path();
        }*/
    });

});