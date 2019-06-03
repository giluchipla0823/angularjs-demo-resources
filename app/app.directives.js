(function(){
    angular.module('app.directives', [])
        .directive('appNavbar', [function() {
            return {
                restrict: 'E',
                templateUrl: 'app/templates/shared/navbar.tpl.html'
            };
        }])
        .directive('appFooter', [function() {
            return {
                restrict: 'E',
                templateUrl: 'app/templates/shared/footer.tpl.html'
            };
        }]);
})();