(function(){
    angular.module('app.routes', ['ngRoute'])
        .config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

            $httpProvider.interceptors.push('myInterceptor');
            $routeProvider
                .when('/', {
                    templateUrl: 'app/templates/home/home.tpl.html',
                    controller: 'HomeController'
                })
                .when('/about', {
                    templateUrl: 'app/templates/about/about.tpl.html',
                    controller: 'AboutController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
})();