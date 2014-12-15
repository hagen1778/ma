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
            {title: 'view all', datagroup: 'all'},
            {title: 'web design', datagroup: 'web'},
            {title: 'graphic design', datagroup: 'graphic'},
            {title: 'illustration', datagroup: 'illustration'}
        ];
        $scope.shuffleFilter = function (datagroup) {
            $scope.activeDatagroup = $scope.activeDatagroup==datagroup ? 'all' : datagroup;
            $scope.grid.shuffle('shuffle', $scope.activeDatagroup);
        }
    });

    app.directive('shuffle', ['$timeout',function (timer) {

        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
//            transclude: true,
            link: function postLink (scope, element, attrs) {
                if($(element).mixItUp('isLoaded')){
                    $(element).mixItUp('destroy')
                }
                $(element).mixItUp({
                    animation: {
                        duration: 400,
                        effects: 'fade translateZ(-360px) stagger(34ms) scale(0.47)',
                        easing: 'ease'
                    }
                })
                   /* if (typeof($('#grid').mixItUp('destroy')) === 'function'){
                        $('#grid').mixItUp('destroy');
                    }*/




            }
        };
    }]);

})();