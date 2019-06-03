(function() {
    angular.module('app', [
            'ngAnimate',
            'app.routes',
            'app.run',
            'app.directives',
            'app.services',
            'app.factories'
        ])
        .controller('AboutController', ['$scope', 'EmployeeResource', function($scope, EmployeeResource) {
            console.log('load about controller');

            $scope.title = 'About page';

            $scope.employees = {
                data: []
            };

            $scope.getEmployees = function(){
                EmployeeResource.query({ action: 'select'}, function(response){
                    console.log('employees from about', response);

                    $scope.employees.data = response.a_employees;
                });
            };

            $scope.getEmployees();
        }])
        .controller('HomeController', ['$scope', 'EmployeeResource' , function($scope, EmployeeResource) {
            $scope.requests = [];

            $scope.getEmployees = function(){
                EmployeeResource.query({ action: 'select'}, function(response){
                    console.log('employees from home', response);
                });
            };

            $scope.addRequests = function() {
                for (var i = 0, l = 10; i < l; i++) {
                    $scope.getEmployees();
                }
            };

            $scope.addRequests();

            $scope.cancelAll = function() {
                console.log('cancel pending requests');
            };
        }]);
})();