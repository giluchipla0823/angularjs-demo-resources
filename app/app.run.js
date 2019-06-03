(function(){
    angular.module('app.run', [])
         .run(function($rootScope, $route, $http) {
            
            // cancel pending http ajax requests before change view
            $rootScope.$on('$routeChangeStart', function(event, next, current) {
            
                // Cuando se trabaja con $q
                $http.pendingRequests.forEach(function(request) {
                    console.log('request change route', request);

                    if (request.canceller) {
                        request.canceller.resolve();
                    }
                });
            });
        })
})();