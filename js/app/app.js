(function () {
    var app = angular.module('applicationHost', ['ngRoute']); //-- the array is a list of dependendencies required by this application
    app.config(function ($routeProvider, $locationProvider) {
       // $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                template: '<main></main>'
            })
            .when('/repos/:login', {
                template : '<repos></repos>'
            })
            .otherwise({redirectTo:'/'});
    });

    angular.element(document).ready(function(){
        angular.bootstrap(document.body, ['applicationHost']);
    });
    
})();