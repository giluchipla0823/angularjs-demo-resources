(function(){
    angular.module('app.services', [])
        .service('restService', ['$http', '$q', function($http, $q) {
            this.buildRequest = function(method, url, data, extra) {
                var request = {
                    method: method,
                    url: url,
                    data: data,
                };

                var promise = $http(request);

                return promise;
            };
        }]);
})();