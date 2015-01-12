(function () {

    var app = angular.module('MA', ['ngRoute', 'angular-inview']);

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
//            {title: 'contact', path: 'contact'}
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

        $scope.works = [
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/imac.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/master-chief.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/es-blue.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/es-blue.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/es-blue.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/imac.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/es-blue.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/imac.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/es-blue.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/es-blue.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/es-blue.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/imac.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/imac.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/imac.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'graphic',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'illustration',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/tennis-ball.png'
            },
            {
                title: 'Illustration Name',
                desc: 'Illustration',
                category: 'web',
                href: '',
                img: 'http://vestride.github.io/Shuffle/img/pumpkin.png'
            }
        ]

    });

    app.directive('shuffle', ['$timeout', function ($timeout) {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
//            transclude: true,
            link: function postLink(scope, element) {

                if ($(element).mixItUp('isLoaded')) {
                    $.MixItUp.prototype._bound = {  // IM SORRY ABOUT THAT
                        _filter: {},
                        _sort: {}
                    };
                    $(element).mixItUp('destroy');
                }

                $timeout(function () {
                        $(element).mixItUp({
                            animation: {
//                            perspectiveDistance: '1000px',
                                duration: 600,
                                 //effects: 'fade translateZ(-360px) stagger(34ms) scale(0.47)',
                                easing: 'ease'
                            }
                        });
                    }, 10);

                scope.loadImg = function ($event) {
                    var $el = $($event.inViewTarget),
                        $img = $el.find('img.lazyload'),
                        src = $img.attr('datasrc');
                    if (!$el.hasClass('loaded')) {
                        $img
                            .on('load', function () {
                                $img.parent().addClass('loaded').css({marginTop: '20px'}).animate({marginTop: '0'}, 300);
                            })
                            .attr('src', src);
                    }
                }
            }
        };
    }]);

    app.directive("scroll", function ($window) {
        return function (scope, element, attrs) {
            angular.element($window).bind("scroll", function () {
                if (this.pageYOffset >= 100 || scope.scrollPosition) {
                    scope.boolChangeClass = true;

                } else {
                    scope.boolChangeClass = false;
                }

                scope.$apply();
            });

            scope.getWindowDimensions = function () {
                return {
                    'w': $('body').width(),
                    'container': $('#container').width(),
                };
            };

            scope.$watch(scope.getWindowDimensions, function (newValue) {
                scope.windowWidth = newValue.w;
                scope.containerWidth = newValue.container;

                scope.getScrollTopWidth = function () {
                    return {
                        'width': ((scope.windowWidth - scope.containerWidth)) / 2 + 'px'
                    };
                };
                scope.getMenuPosition = function () {
                    var adjustment = $(document).height() > $(window).height() ? 9 : 0;
                    return {
                        'left': ((scope.windowWidth)) / 2 + adjustment + 'px'
                    };
                };

            }, true);

            angular.element($window).bind('resize', function () {
                scope.$apply();
            });
        };
    });

    app.directive('scrolltop', function ($timeout) {
        return {
            restrict: 'A',
            link: function scrollTop(scope, $elm) {
                scope.scrollPosition = 0;
                $elm.on('click', function () {

                    $elm.toggleClass('rotate');
                    if (document.body.scrollTop > 0) {
                        scope.scrollPosition = 0;

                    }
                    $("body").animate({scrollTop: scope.scrollPosition}, {
                        duration: 150
                    });
                    scope.scrollPosition = document.body.scrollTop;


                });
            }
        }
    });

    app.directive('starfall', function () {
        return {
            restrict: 'A',
            link: function (scope, $elm) {
                var shootingStarObj = new ShootingStar( "body" );
                shootingStarObj.launch();
            }
        }
    });

})();