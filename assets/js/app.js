(function () {

    var app = angular.module('MA', ['ngRoute', 'angular-inview']);

    // Set global variable Filter for MixItUp
    app.value('filter', 'all');

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/:id', {
                controller: 'PageController',
                templateUrl: function (params) {
                    return 'page/' + params.id + '.html';
                }
            })
            .when('/works/:id', {
                controller: 'WorkController',
                templateUrl: function (params) {
                    return 'page/workview.html';
//                    return 'page/works/' + params.id + '.html';
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

    app.controller('WorkController', function ($http, $scope, $location) {
        $scope.buttons = [
            {title: 'view all', datagroup: 'all'},
            {title: 'web/ui design', datagroup: 'web'},
            {title: 'graphic design', datagroup: 'graphic'},
            {title: 'illustration', datagroup: 'illustration'}
        ];
        $scope.getCategory = function(datagroup){
            var title = '';
            $scope.buttons.forEach(function(entry) {
                if(entry.datagroup == datagroup){
                    title = entry.title;
                    return;
                }
            });
            return title;
        }

        $scope.$on('$routeChangeSuccess', function () {
            var path = $location.url();
            $scope.works.forEach(function(entry) {
                if(entry.href == '#'+path){
                    $scope.curwork = entry;
                    $scope.curwork.template = entry.href.substr(entry.href.lastIndexOf('/') + 1);
                    return;
                }
            })
        });

        $scope.works = [
            {
                title: 'Schoolboy',
                desc: 'Illustjhhohoration',
                category: 'illustration',
                href: '#/works/schoolboy',
                img: '../assets/img/boy_cover.jpg'
            },
			{
                title: 'Scientia Promo',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/scientia_site',
                img: '../assets/img/scientia_site/snta_prw.jpg'
            },
			  {
                title: 'Bright Infographic Tools',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/info',
                img: '../assets/img/inf1_prw.jpg'
            },
            {
                title: 'Supermarket',
                desc: 'Illustration',
                category: 'illustration',
                href: '#/works/supermarket',
                img: '../assets/img/supermarket_prw.jpg'
            },
            {
                title: 'Black Ink Rabbit',
                desc: 'Illustration',
                category: 'illustration',
                href: '#/works/rabbit',
                img: '../assets/img/pen_prw.jpg'
            },
			{
                title: 'Set of Flat',
                desc: 'Illustration',
                category: 'illustration',
                href: '#/works/flat',
                img: '../assets/img/ils_prw.jpg'
            },	
     
			 {
                title: 'Video Drawings',
                desc: 'Illustration',
                category: 'illustration',
                href: '#/works/video',
                img: '../assets/img/inf_prw.jpg'
            },
			{
                title: 'Portal Shevchenka',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/portal',
                img: '../assets/img/portal/tgsh_prw.jpg'
            },
			   {
                title: 'Cartoon Character',
                desc: 'Illustration',
                category: 'illustration',
                href: '#/works/woman',
                img: '../assets/img/wmn_prw.jpg'
            },
			 {
                title: 'Clear Infographic Tools',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/clear',
                img: '../assets/img/inf3_prw.jpg'
            },
			 {
                title: 'Flat Style Timeline',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/timeline',
                img: '../assets/img/tmln_prw.jpg'
            },
            {
                title: 'Ink Drawings',
                desc: 'Illustration',
                category: 'illustration',
                href: '#/works/ink',
                img: '../assets/img/shl_prw.jpg'
            },
            {
                title: 'Dresses Delivery',
                desc: 'Illustration',
                category: 'illustration',
                href: '#/works/dress',
                img: '../assets/img/drs_prw.jpg'
            },
			{
                title: 'Infographic Banner',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/bnr',
                img: '../assets/img/banner/bnr_prw.jpg'
            },
			{
                title: 'Game Items Collections',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/weapons',
                img: '../assets/img/won_prw.jpg'
            },    
			{
                title: 'Call Manager App',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/call',
                img: '../assets/img/call/call_prw.jpg'
            },
            
            {
                title: 'Graphic Girls Caracter',
                desc: 'Illustration',
                category: 'illustration',
                href: '#/works/girls',
                img: '../assets/img/grls_prw.jpg'
            },
            {
                title: 'I\'m Vegetarian',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/vegetarian',
                img: '../assets/img/vgtrn_prw.jpg'
            },
			{
                title: 'Chandelier Assesstments',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/chandellier',
                img: '../assets/img/chandellier/chnd_prw.jpg'
            },           
           
            {
                title: 'Christmas Infographic Tools',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/christmas',
                img: '../assets/img/crs_prw.jpg'
            },
           
            {
                title: 'Gingerbread Man Infographic',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/ginger',
                img: '../assets/img/gbr_prw.jpg'
            },
            {
                title: 'Contrast Infographic Tools',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/contrast',
                img: '../assets/img/inf4_prw.jpg'
            },
            {
                title: 'Scientia Infographic',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/scientia',
                img: '../assets/img/sdo_prw.jpg'
            },           
            
            {
                title: '5 Coming Soon pages',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/comingsoon',
                img: '../assets/img/comingsoon/cs_prw.jpg'
            },

            {
                title: 'Diamant Dent Logo',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/diamant',
                img: '../assets/img/diamant/dd_prw.jpg'
            },
            {
                title: 'Juicy Back',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/juicy',
                img: '../assets/img/juicy/jc_prw.jpg'
            },
            
            {
                title: 'Emap System',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/emap',
                img: '../assets/img/emap/emp_prw.jpg'
            },
            {
                title: 'Ecast System',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/ecast',
                img: '../assets/img/ecast/ecst_prw.jpg'
            },
            {
                title: 'Espiral Tours',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/espiral',
                img: '../assets/img/espiral/esp_prw.jpg'
            },
            {
                title: 'Scientia System',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/sdo',
                img: '../assets/img/sdo/scn_prw.jpg'
            },			
			{
                title: 'In-Art',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/inart',
                img: '../assets/img/antique/ant_prw.jpg'
            },			
			{
                title: 'Montenegro Consulate',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/montenegro',
                img: '../assets/img/montenegro/chrng_prw.jpg'
            },
			{
                title: 'Balcony Garment',
                desc: 'WEB/UI DESIGN',
                category: 'web',
                href: '#/works/balcony',
                img: '../assets/img/balcony/bg_prw.jpg'
            },
			{
                title: 'Magenta Infographic Tools',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/magenta',
                img: '../assets/img/magenta/inf_prw.jpg'
            },
			{
                title: 'Price Tags',
                desc: 'GRAPHIC DESIGN',
                category: 'graphic',
                href: '#/works/price',
                img: '../assets/img/prs_prw.jpg'
            },               
			{
                title: 'Knowledge Museum',
                desc: 'Illustration',
                category: 'illustration',
                href: '#/works/knowledge',
                img: '../assets/img/hlpl_prw.jpg'
            }
        ]
    });

    app.controller('PageController', function ($http, $scope, $location, $timeout) {
        $scope.tabs = [
            {title: 'ma', path: ''},
            {title: 'works', path: 'works'},
            {title: 'cv', path: 'cv'}
//            {title: 'contact', path: 'contact'}
        ];

	$scope.repeatclick = function($event){
			$timeout(function(){
				$('#grid').trigger('click')
			},200)
			$timeout(function(){
				$('#grid').trigger('click')
			},800)	
		}

        $scope.isActive = function (route) {
            return route === $location.path();
        }
    });

    app.directive('shuffle', ['$timeout','filter', function ($timeout, filter) {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
//            transclude: true,
            link: function postLink(scope, element) {
                if ($(element).mixItUp('isLoaded')) {
                    $.MixItUp.prototype._bound = {  // I'M SORRY ABOUT THAT
                        _filter: {},
                        _sort: {}
                    };
                    $(element).mixItUp('destroy');
                }

                $timeout(function () {
                        $(element).mixItUp({
                            load: {
                                filter: filter
                            },
                            animation: {
                                duration: 600,
                                easing: 'ease'
                            },
                            callbacks: {
                                onMixEnd: function(state){
                                    filter = state.activeFilter;
                                }
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
                    'container': $('#container').width()
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
                    adjustment -= 95;
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
})();
