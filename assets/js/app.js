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
            .when('/works/:id', {
                controller: 'PageController',
                templateUrl: function (params) {
                    return 'page/works/' + params.id + '.html';
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

    });

    app.directive('shuffle', ['$timeout',function (timer) {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
//            transclude: true,
            link: function postLink (scope, element) {

                if($(element).mixItUp('isLoaded')){
                    $.MixItUp.prototype._bound = {  // IM SORRY ABOUT THAT
                        _filter: {},
                        _sort: {}
                    };
                    $(element).mixItUp('destroy');
                }

                $(element).mixItUp({
                    animation: {
                        duration: 400,
                        effects: 'fade translateZ(-360px) stagger(34ms) scale(0.47)',
                        easing: 'ease'
                    }
                });
            }
        };
    }]);

    app.directive("scroll", function ($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 100) {
                    scope.boolChangeClass = true;
                } else {
                    scope.boolChangeClass = false;
                }
                scope.$apply();
            });

            scope.getWindowDimensions = function () {
                return {
                    'w': $('body').width(),
                    'container': $('#container').width()
                };
            };

            scope.$watch(scope.getWindowDimensions, function (newValue) {
                scope.windowWidth = newValue.w;
                scope.containerWidth = newValue.container;

                scope.style = function () {
                    return {
                        'width': ((scope.windowWidth - scope.containerWidth))/2 + 'px'
                    };
                };

            }, true);
            angular.element($window).bind('resize', function () {
                scope.$apply();
            });
        };
    });

    app.directive('scrolltop', function() {
        return {
            restrict: 'A',
            link: function scrollTop (scope, $elm) {
                $elm.on('click', function() {
                    $("body").animate({scrollTop:0}, "slow");
                });
            }
        }
    });

})();