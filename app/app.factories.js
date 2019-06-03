(function() {
    angular.module('app.factories', ['ngResource'])
        .factory('myInterceptor', [
            '$rootScope', '$injector', '$q',
            function($rootScope, $injector, $q) {

                return {
                    'request': function(config) {
                        if(config.isXhr){
                            var canceller = $q.defer();

                            config.timeout = canceller.promise;
                            config.canceller = canceller;
                        }
                        
                        return config;
                    }
                };
            }
        ])
        .factory("EmployeeFactory", ['restService', function(restService) {
            function all() {
                return restService.buildRequest(
                    'GET',
                    "http://localhost/angularjs_examples/php/db_employees.php?action=select"
                );
            };

            return {
                all: all
            };
        }])
        .factory("EmployeeResource", ['$resource', '$q', function($resource, $q) {
            var resource = $resource(
                "http://localhost/angularjs_examples/php/db_employees.php", {
                    action: "@action"
                }, {
                    "query": {
                        method: 'GET',
                        isArray: false,
                        isXhr: true
                    }
                }
            );

            return resource;
        }]);
})();