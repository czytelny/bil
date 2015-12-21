angular.module('bil-admin', ['ngMaterial', 'ngRoute']);

angular.module('bil-admin').config(['$mdThemingProvider', function($mdThemingProvider) {
// Extend the red theme with a few different colors
    var neonRedMap = $mdThemingProvider.extendPalette('blue-grey', {
        '500': '2B5263'
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('blue-grey', neonRedMap);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
}]);

angular.module('bil-admin').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/newContent', {
            templateUrl: 'partials/newContent.html',
            controller: 'newContentCtrl as newContentCtrl'
        })
        .when('/listContent', {
            templateUrl: 'partials/listContent.html',
            controller: 'listContentCtrl'
        })
        .otherwise({
            redirectTo: '/newContent'
        });
}]);


angular.module('bil-admin').controller('MainController', ['$mdSidenav', function($mdSidenav) {
    this.toggleSideNav = function(name) {
        $mdSidenav(name).toggle();
    };
}]);
