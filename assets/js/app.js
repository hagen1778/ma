(function () {

    var app = angular.module('MA', ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
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
            .otherwise({redirectTo: ''});

        //$locationProvider.html5Mode(true);
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

    app.controller('ShuffleController', function ($scope) {
        $scope.buttons = [
            {title: 'Wallpapers', datagroup: 'wallpaper'},
            {title: 'Graphic Design', datagroup: 'graphics'},
            {title: 'Photos', datagroup: 'photography'},
            {title: '3D Renders', datagroup: '3d'},
        ];
        $scope.shuffleFilter = function (datagroup) {
            $scope.activeDatagroup = $scope.activeDatagroup==datagroup ? 'all' : datagroup;
            $scope.grid.shuffle('shuffle', $scope.activeDatagroup);
        }
    });

    app.directive('shuffle', function () {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function (scope, element, attrs) {
                scope.grid = $(element),
                    $sizer = scope.grid.find('.shuffle__sizer');

                scope.grid.shuffle({
                    itemSelector: '.picture-item',
                  //  sizer: $sizer,
                    columnWidth: 111
                });
            }
        };
    });

})();